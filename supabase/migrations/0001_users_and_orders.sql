-- Fit & Flex: users and orders
-- Run once against a fresh Supabase project (SQL editor, or `supabase db push`).

-- ---------- 1. profiles: one row per signed-in user, mirrored from auth.users ----------
create table if not exists public.profiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  email       text,
  full_name   text,
  avatar_url  text,
  provider    text,
  created_at  timestamptz not null default now(),
  last_seen   timestamptz not null default now()
);

comment on table public.profiles is 'Public profile for every user who signs in (Google or email).';

-- Copy the Google name, email and avatar into profiles the moment a user first signs in.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url, provider)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
    new.raw_user_meta_data ->> 'avatar_url',
    coalesce(new.raw_app_meta_data ->> 'provider', 'email')
  )
  on conflict (id) do update
    set email = excluded.email,
        full_name = coalesce(excluded.full_name, public.profiles.full_name),
        avatar_url = coalesce(excluded.avatar_url, public.profiles.avatar_url),
        last_seen = now();
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- 2. orders: one row per checkout ----------
create table if not exists public.orders (
  id          uuid primary key default gen_random_uuid(),
  order_no    bigint generated always as identity,
  user_id     uuid not null references public.profiles (id) on delete cascade,
  items       jsonb not null,                 -- [{id, name, size, qty, unit_price}]
  item_count  integer not null check (item_count > 0),
  subtotal    integer not null check (subtotal >= 0),   -- rupees
  shipping    integer not null default 0,
  total       integer not null,
  currency    text not null default 'INR',
  status      text not null default 'placed'
              check (status in ('placed','paid','packed','shipped','delivered','cancelled')),
  payment_method   text,                   -- upi, upi:<id>, card:<brand>, netbanking:<bank>, cod
  shipping_address jsonb,                  -- {first,last,phone,address,city,pin,state,country}
  note        text,
  created_at  timestamptz not null default now()
);

comment on table public.orders is 'Orders placed from the website bag. Payment status is updated by the store back office.';
create index if not exists orders_user_id_idx on public.orders (user_id, created_at desc);

-- ---------- 3. row-level security: people see and write only their own rows ----------
alter table public.profiles enable row level security;
alter table public.orders   enable row level security;

drop policy if exists "profiles: read own"   on public.profiles;
drop policy if exists "profiles: update own" on public.profiles;
create policy "profiles: read own"   on public.profiles for select using (auth.uid() = id);
create policy "profiles: update own" on public.profiles for update using (auth.uid() = id);

drop policy if exists "orders: read own"   on public.orders;
drop policy if exists "orders: insert own" on public.orders;
create policy "orders: read own"   on public.orders for select using (auth.uid() = user_id);
create policy "orders: insert own" on public.orders for insert with check (auth.uid() = user_id);

-- The dashboard (service role) bypasses RLS, so every user and every order is visible
-- in Table Editor > profiles and Table Editor > orders.

-- ---------- 4. handy admin view: orders with the buyer's name and email ----------
create or replace view public.orders_with_customer as
  select o.order_no, o.created_at, o.status, o.total, o.item_count, o.items,
         p.full_name, p.email, o.user_id, o.id
  from public.orders o
  join public.profiles p on p.id = o.user_id
  order by o.created_at desc;
