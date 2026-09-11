# Fit & Flex website (multi-page concept)

Open `index.html` in a browser, or serve the folder:

    cd site && python3 -m http.server 8765
    # then http://localhost:8765/

Pages: index.html (home, video hero), shop.html (filters, sort, search results), product.html?id=<id> (gallery, sizes, bag), story.html, process.html, contact.html.

Source lives in ../site-src (partials/header.html, partials/footer.html, pages/*.html). Rebuild with:

    python3 ../site-src/build.py

Assets: assets/hero.mp4 and assets/oven.mp4 were generated with Higgsfield (Seedance 2.5) from the real Mango Coconut pack; assets/img/runner.jpg, oven.jpg and flatlay.jpg were generated with Higgsfield (GPT Image 2). All other product images are the brand's own from fitandflex.in.

Before launch: replace the sample reviews on index.html, confirm the free-delivery threshold and welcome offer, and wire checkout to Shopify.

## Placeholders to replace before showing the owner
- Founder card on story.html: college name (not found in any public source). Photo is the Hello Fitness Magazine portrait upscaled 4x with Higgsfield; swap for the original file if the owner has it.
- Google rating (4.6) and review bars on index.html: pull live numbers from the Google Business Profile.
- Reliance Fresh and Lulu logos are text placeholders in assets/logos; Amazon, Flipkart, BigBasket, SPAR, noon and Google are official marks from Wikimedia Commons and Simple Icons.
- Sample reviews, job openings, delivery threshold and welcome offer.
