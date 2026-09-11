/* Supabase connection for sign-in and orders.
   Fill both values from the Supabase dashboard: Project Settings > API.
   The anon key is safe to publish; row-level security protects the data. */
window.FF_CONFIG = {
  SUPABASE_URL: "",       // e.g. "https://abcdefghijklmnop.supabase.co"
  SUPABASE_ANON_KEY: "",  // the long "anon public" key
  FREE_SHIP: 499,
  SHIPPING: 49
};
