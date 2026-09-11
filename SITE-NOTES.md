# Fit & Flex website (multi-page concept)

Open `index.html` in a browser, or serve the folder:

    python3 -m http.server 8765
    # then http://localhost:8765/

Pages: index.html (home, video hero), shop.html (filters, sort, search results), product.html?id=<id> (gallery, sizes, bag), story.html, process.html, contact.html.

Source lives in site-src (partials/header.html, partials/footer.html, pages/*.html). Rebuild with:

    python3 site-src/build.py

Assets: assets/hero.mp4 and assets/oven.mp4 were generated with Higgsfield (Seedance 2.5) from the real Mango Coconut pack; assets/img/runner.jpg, oven.jpg and flatlay.jpg were generated with Higgsfield (GPT Image 2). All other product images are the brand's own from fitandflex.in.

Before launch: replace the sample reviews on index.html, confirm the free-delivery threshold and welcome offer, and wire checkout to Shopify.

## Placeholders to replace before showing the owner
- Founder card on story.html: college name (not found in any public source). Photo is the Hello Fitness Magazine portrait upscaled 4x with Higgsfield; swap for the original file if the owner has it.
- Google rating (4.6) and review bars on index.html: pull live numbers from the Google Business Profile.
- Reliance Fresh and Lulu logos are text placeholders in assets/logos; Amazon, Flipkart, BigBasket, SPAR, noon and Google are official marks from Wikimedia Commons and Simple Icons.
- Sample reviews, job openings, delivery threshold and welcome offer.

## Accounts, orders and checkout
- `checkout.html` is the checkout: contact, delivery, payment (UPI, card, net banking, cash on delivery), order summary with promo codes `WELCOME10` and `FLEX15` (samples).
- Sign in with Google and the orders database run on Supabase. Follow `SUPABASE-SETUP.md` to create the project, run `supabase/migrations/0001_users_and_orders.sql`, enable Google, and paste the URL and anon key into `assets/config.js`.
- Until that is done, sign-in shows a notice and checkout records demo orders in the browser only. The card form is a design preview and never sends card data anywhere; a real launch would hand payment to Razorpay or a similar gateway.
