# Supabase: users, orders and Google sign-in

Everything on the site side is already wired. These are the steps that need your accounts. About 15 minutes.

## 1. Create the project

Dashboard route: https://supabase.com/dashboard > New project > name `fit-flex`, region Mumbai (ap-south-1), pick a database password and keep it somewhere safe.

CLI route (the CLI is installed on this Mac):

```bash
supabase login
supabase projects create fit-flex --org-id <your-org-id> --region ap-south-1 --db-password '<strong password>'
```

## 2. Create the two tables

Dashboard: SQL Editor > New query > paste the contents of `supabase/migrations/0001_users_and_orders.sql` > Run.

CLI:

```bash
supabase link --project-ref <project-ref>
supabase db push
```

This creates:

- `profiles` – one row per user, filled automatically the moment someone signs in (name, email, Google avatar).
- `orders` – one row per checkout with the items, count, subtotal, shipping, total and status.
- `orders_with_customer` – a view that joins the two, handy for the back office.

Row-level security is on: a customer can only read their own profile and orders. The dashboard sees everything, so **Table Editor > profiles** lists every user and **Table Editor > orders** lists every order.

## 3. Turn on Google sign-in

1. Google Cloud console: https://console.cloud.google.com/apis/credentials > Create credentials > OAuth client ID > Web application.
   - Authorised JavaScript origins: `https://fit-flex-jet.vercel.app` and `http://localhost:8765`
   - Authorised redirect URI: `https://<project-ref>.supabase.co/auth/v1/callback`
   - Copy the Client ID and Client secret.
2. Supabase dashboard: Authentication > Providers > Google > enable, paste the Client ID and secret, save.
3. Supabase dashboard: Authentication > URL Configuration:
   - Site URL: `https://fit-flex-jet.vercel.app`
   - Redirect URLs: `https://fit-flex-jet.vercel.app/**` and `http://localhost:8765/**`

## 4. Connect the site

Supabase dashboard: Project Settings > API. Copy the Project URL and the `anon public` key into `assets/config.js`:

```js
window.FF_CONFIG = {
  SUPABASE_URL: "https://<project-ref>.supabase.co",
  SUPABASE_ANON_KEY: "<anon key>",
  ...
};
```

Commit and push. Vercel redeploys. The anon key is meant to be public; the policies in the migration are what protect the data.

## 5. Test

1. Open the site, click the account icon (or Bag > Checkout while signed out) and choose **Continue with Google**.
2. After the redirect you are signed in: the account panel shows your name and avatar, and a row appears in `profiles`.
3. Add products, open the bag, click **Checkout**. A row appears in `orders` with the items, and it shows under **My orders** in the account panel.

## What the site does until step 4 is done

The account panel explains that sign-in is not connected yet, and Checkout shows a message instead of writing an order. Nothing breaks.
