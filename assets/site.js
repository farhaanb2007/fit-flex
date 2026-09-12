/* Fit & Flex site script: catalog, search, cart, motion, forms. Prices match fitandflex.in (Sep 2026). */
const FF = (() => {
  const IMG = id => `assets/img/${id}`;
  const PRODUCTS = [
    { id:"mango", cat:"granola", name:"Mango Coconut Crunchy Granola", sub:"Oat-rich, prebiotic fibre", price:{"275g":299,"450g":449}, sizes:["275g","450g"], tint:"var(--mango)", tag:"Bestseller", tagClass:"o",
      images:["mango.png","mango_2.jpg","mango_3.jpg"], blurb:"Alphonso-sweet mango, toasted coconut and 32% rolled oats, slow-baked into clusters that stay crunchy in milk.",
      claims:["Under a teaspoon of added sugar per serve","No palm oil, no trans fat","Added prebiotic fibre","Real freeze-dried mango"], ingredients:"Rolled oats, wheat flakes, rice crisps, honey, oligofructose (prebiotic fibre), freeze-dried mango, coconut chips, pumpkin seeds, sunflower oil, natural mango flavour. Contains gluten. May contain traces of nuts." },
    { id:"berries", cat:"granola", name:"Happy Berries Crunchy Granola", sub:"Strawberry, blueberry, cranberry", price:{"275g":299,"450g":449}, sizes:["275g","450g"], tint:"var(--berry)",
      images:["berries.png","berries_2.jpg","berries_3.jpg"], blurb:"Freeze-dried strawberries, blueberries and cranberries folded into oat clusters after the bake, so the fruit stays bright and tart.",
      claims:["Under a teaspoon of added sugar per serve","No palm oil, no trans fat","Added prebiotic fibre","Three real berries"], ingredients:"Rolled oats, wheat flakes, rice crisps, honey, oligofructose (prebiotic fibre), freeze-dried strawberry, blueberry and cranberry, pumpkin seeds, sunflower oil. Contains gluten. May contain traces of nuts." },
    { id:"choco", cat:"granola", name:"Choco Almond & Cookie Granola", sub:"Real cocoa, roasted almonds", price:{"275g":299,"450g":449}, sizes:["275g","450g"], tint:"var(--choco)",
      images:["choco.png","choco_2.jpg","choco_3.jpg"], blurb:"Cocoa-dusted oat clusters with roasted almond slivers and cookie crumb. The one people eat straight from the pouch.",
      claims:["Real cocoa, not chocolate flavour","No palm oil, no trans fat","Added prebiotic fibre","Roasted almonds"], ingredients:"Rolled oats, wheat flakes, rice crisps, honey, cocoa powder, almonds, cookie crumb (wheat flour, sugar, butter), oligofructose, sunflower oil. Contains gluten, nuts and milk." },
    { id:"mixed", cat:"granola", name:"Mixed Fruit Crunchy Granola", sub:"Apple, pineapple, papaya", price:{"275g":299,"450g":449}, sizes:["275g","450g"], tint:"var(--mixed)",
      images:["mixed.png","mixed_2.jpg","mixed_3.jpg"], blurb:"The original Fit & Flex recipe from 2019: oat clusters with freeze-dried apple, pineapple and papaya.",
      claims:["Under a teaspoon of added sugar per serve","No palm oil, no trans fat","Added prebiotic fibre","Fibre of two apples per serve"], ingredients:"Rolled oats, wheat flakes, rice crisps, honey, oligofructose, freeze-dried apple, pineapple and papaya, pumpkin seeds, sunflower oil. Contains gluten. May contain traces of nuts." },
    { id:"oats_pbc", cat:"oats", name:"Power Oats, Peanut Butter Chocolate", sub:"Ready to eat, 18 g protein", price:{"400g":299,"1 kg":649}, sizes:["400g","1 kg"], tint:"var(--lilac)", tag:"High protein",
      images:["oats_pbc.png","oats_pbc_2.jpg","oats_pbc_3.jpg"], blurb:"Baked oats coated in natural peanut butter and real cocoa. Pour milk, no cooking. 18 g protein per 100 g.",
      claims:["No cooking required","18 g protein per 100 g","No refined sugar","100% Australian oats"], ingredients:"Rolled oats, peanut butter, whey protein, cocoa, jaggery, almonds, freeze-dried strawberry, sunflower oil. Contains gluten, peanuts, nuts and milk." },
    { id:"oats_honey", cat:"oats", name:"Power Oats, Honey", sub:"Ready to eat, zero added sugar", price:{"400g":299}, sizes:["400g"], tint:"var(--honey)",
      images:["oats_honey.png","oats_honey_2.jpg","oats_honey_3.jpg"], blurb:"Honey-baked oats with almonds and seeds. The cleanest label in the range, sweetened only with honey.",
      claims:["No cooking required","High protein","Zero added sugar","100% Australian oats"], ingredients:"Rolled oats, honey, whey protein, almonds, pumpkin seeds, sunflower seeds, sunflower oil. Contains gluten, nuts and milk." },
    { id:"oats_both", cat:"oats", name:"Power Oats Combo, Both Flavours", sub:"Peanut Butter Chocolate + Honey", price:{"2 x 400g":598}, sizes:["2 x 400g"], tint:"var(--honey)", tag:"Combo",
      images:["oats_both.png"], blurb:"Both Power Oats flavours in one order. One for weekdays, one for weekends.",
      claims:["No cooking required","Two 400 g pouches","Zero added sugar option","18 g protein per 100 g"], ingredients:"See individual products." },
    { id:"muesli_hp", cat:"muesli", name:"22G High Protein Muesli", sub:"Choco almond and cranberry", price:{"450g":449}, sizes:["450g"], tint:"var(--sky)", tag:"New",
      images:["muesli_hp.png","muesli_hp_2.jpg"], blurb:"22 g protein per 100 g from whey and almonds, 83% whole grains, and zero artificial ingredients.",
      claims:["22 g protein per 100 g","83% whole grains","Baked and crunchy","Zero artificial ingredients"], ingredients:"Rolled oats, wheat flakes, whey protein, almonds, cocoa, dried cranberry, pumpkin seeds, jaggery, sunflower oil. Contains gluten, nuts and milk." },
    { id:"muesli_zs", cat:"muesli", name:"Zero Added Sugar Muesli", sub:"Fruits, nuts and seeds", price:{"450g":449}, sizes:["450g"], tint:"var(--mint)",
      images:["muesli_zs.png","muesli_zs_2.jpg"], blurb:"Sweetened only by the fruit in it. 19 g protein, 83% whole grains, and the muesli dieticians reach for first.",
      claims:["Zero added sugar","19 g protein per 100 g","83% whole grains","Source of fibre"], ingredients:"Rolled oats, wheat flakes, almonds, raisins, dried papaya, pumpkin seeds, sunflower seeds, flax seeds. Contains gluten and nuts." },
    { id:"muesli_nuts", cat:"muesli", name:"Nuts About Nuts High Fibre Muesli", sub:"Almond, cashew, pistachio", price:{"450g":349}, sizes:["450g"], tint:"var(--nutty)",
      images:["muesli_nuts.png","muesli_nuts_2.jpg"], blurb:"Three nuts, whole grain flakes and seeds. High fibre and the best value pouch in the range.",
      claims:["High fibre","Three real nuts","Baked and crunchy","No palm oil"], ingredients:"Rolled oats, wheat flakes, almonds, cashews, pistachios, raisins, honey, pumpkin seeds, sunflower oil. Contains gluten and nuts." },
    { id:"puffs", cat:"puffs", name:"Protein Puffs, Masala", sub:"Jowar and ragi, 12 g protein", price:{"6 x 55g":300}, sizes:["6 x 55g"], tint:"var(--puff)", cover:true,
      images:["puffs.jpg","puffs_2.jpg"], blurb:"Roasted millet puffs with a proper masala hit. 65% less fat than fried chips, gluten free, no palm oil.",
      claims:["12 g protein per pack","Roasted, not fried","Gluten free","No palm oil"], ingredients:"Jowar, ragi, pea protein, rice, sunflower oil, masala seasoning (spices, salt, onion, garlic, tomato powder). May contain traces of milk." },
    { id:"puffs_cheese", cat:"puffs", name:"Protein Puffs, Cheese & Herbs", sub:"Jowar and ragi, 12 g protein", price:{"6 x 55g":300}, sizes:["6 x 55g"], tint:"var(--honey)", cover:true,
      images:["puffs_cheese.jpg"], blurb:"Cheddar and herb seasoning on roasted millet puffs.", claims:["12 g protein per pack","Roasted, not fried","Gluten free","No palm oil"], ingredients:"Jowar, ragi, pea protein, rice, sunflower oil, cheese and herb seasoning. Contains milk." },
    { id:"puffs_mint", cat:"puffs", name:"Protein Puffs, Lemon & Mint", sub:"Jowar and ragi, 12 g protein", price:{"6 x 55g":300}, sizes:["6 x 55g"], tint:"var(--lime)", cover:true,
      images:["puffs_mint.jpg"], blurb:"Sharp lemon and cool mint on roasted millet puffs.", claims:["12 g protein per pack","Roasted, not fried","Gluten free","No palm oil"], ingredients:"Jowar, ragi, pea protein, rice, sunflower oil, lemon and mint seasoning." },
    { id:"puffs_onion", cat:"puffs", name:"Protein Puffs, Cream & Onion", sub:"Jowar and ragi, 12 g protein", price:{"6 x 55g":300}, sizes:["6 x 55g"], tint:"var(--aqua)", cover:true,
      images:["puffs_onion.jpg"], blurb:"The classic cream and onion, on roasted millet puffs.", claims:["12 g protein per pack","Roasted, not fried","Gluten free","No palm oil"], ingredients:"Jowar, ragi, pea protein, rice, sunflower oil, cream and onion seasoning. Contains milk." },
    { id:"puffs_combo", cat:"puffs", name:"Protein Puffs Variety Pack", sub:"Five flavours, 55 g each", price:{"5 x 55g":250}, sizes:["5 x 55g"], tint:"var(--puff)", tag:"Combo", cover:true,
      images:["puffs_combo.jpg","puffs_combo_2.jpg","puffs_combo_3.jpg"], blurb:"One of each flavour. The cheapest way to find your favourite.", claims:["12 g protein per pack","Roasted, not fried","Gluten free","Five flavours"], ingredients:"See individual flavours." }
  ];
  const CATS = { granola:"Granola", muesli:"Muesli", oats:"Power Oats", puffs:"Protein Puffs" };
  const CFG = window.FF_CONFIG || {};
  const FREE_SHIP = CFG.FREE_SHIP || 499, SHIPPING = CFG.SHIPPING || 49;
  const fmt = n => "₹" + n.toLocaleString("en-IN");
  const byId = id => PRODUCTS.find(p => p.id === id);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = id => document.getElementById(id);

  /* ---------- product cards ---------- */
  function cardHTML(p, i){
    const hover = p.images[1] ? `<img class="alt" src="${IMG(p.images[1])}" alt="" loading="lazy" width="300" height="300">` : "";
    return `<article class="card reveal tilt" data-id="${p.id}" style="--i:${i}">
      <a class="ph" href="product.html?id=${p.id}" style="--tint:${p.tint}">${p.tag ? `<span class="tag ${p.tagClass||""}">${p.tag}</span>` : ""}<img class="${p.cover?"cover":""}" src="${IMG(p.images[0])}" alt="${p.name}" loading="lazy" width="300" height="300">${hover}</a>
      <div class="body">
        <div><h3><a href="product.html?id=${p.id}">${p.name}</a></h3><p class="sub">${p.sub}</p></div>
        <div class="sizes" role="group" aria-label="Pack size">${p.sizes.map((s,i)=>`<button type="button" data-size="${s}" aria-pressed="${i===0}">${s}</button>`).join("")}</div>
        <div class="buy"><span class="price" data-price>${fmt(p.price[p.sizes[0]])}</span><button class="add" data-add="${p.id}" data-size="${p.sizes[0]}"><svg class="ico" viewBox="0 0 24 24" style="width:16px;height:16px"><path d="M12 5v14M5 12h14"/></svg><span>Add</span></button></div>
      </div></article>`;
  }
  function renderGrid(el, list){
    el.innerHTML = list.map(cardHTML).join("");
    el.querySelectorAll(".reveal").forEach(observe);
    el.querySelectorAll(".tilt").forEach(tilt);
  }
  document.addEventListener("click", e => {
    const b = e.target.closest(".card .sizes button"); if (!b) return;
    const card = b.closest(".card"); const p = byId(card.dataset.id);
    card.querySelectorAll(".sizes button").forEach(x => x.setAttribute("aria-pressed", x === b));
    card.querySelector("[data-price]").textContent = fmt(p.price[b.dataset.size]);
    card.querySelector(".add").dataset.size = b.dataset.size;
  });

  /* ---------- search ---------- */
  function search(q){
    q = q.trim().toLowerCase(); if (!q) return [];
    const terms = q.split(/\s+/);
    return PRODUCTS.map(p => {
      const hay = `${p.name} ${p.sub} ${CATS[p.cat]} ${p.claims.join(" ")}`.toLowerCase();
      let score = 0; terms.forEach(t => { if (p.name.toLowerCase().includes(t)) score += 3; else if (hay.includes(t)) score += 1; });
      return { p, score };
    }).filter(x => x.score > 0).sort((a, b) => b.score - a.score).map(x => x.p);
  }
  function initSearch(){
    const panel = $("searchPanel"), input = $("searchInput"), results = $("searchResults"), btn = $("searchBtn");
    if (!panel) return;
    const open = () => { panel.classList.add("open"); panel.setAttribute("aria-hidden","false"); document.body.style.overflow = "hidden"; setTimeout(() => input.focus(), 50); draw(input.value); };
    const close = () => { panel.classList.remove("open"); panel.setAttribute("aria-hidden","true"); document.body.style.overflow = ""; };
    const draw = q => {
      const list = q.trim() ? search(q) : PRODUCTS.filter(p => p.tag).slice(0, 6);
      results.innerHTML = `<p class="sr-label">${q.trim() ? (list.length ? `${list.length} result${list.length===1?"":"s"} for "${q.trim()}"` : `Nothing matches "${q.trim()}". Try granola, oats, muesli or puffs.`) : "Popular right now"}</p>` +
        list.map(p => `<a class="sr" href="product.html?id=${p.id}"><span class="sr-img" style="--tint:${p.tint}"><img class="${p.cover?"cover":""}" src="${IMG(p.images[0])}" alt=""></span><span><b>${p.name}</b><small>${CATS[p.cat]} · ${p.sizes[0]}</small></span><span class="price">${fmt(p.price[p.sizes[0]])}</span></a>`).join("");
    };
    btn.onclick = open; $("searchClose").onclick = close; panel.querySelector(".search-scrim").onclick = close;
    input.addEventListener("input", () => draw(input.value));
    $("searchForm").addEventListener("submit", e => { e.preventDefault(); if (input.value.trim()) location.href = `shop.html?q=${encodeURIComponent(input.value.trim())}`; });
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); if (e.key === "/" && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); open(); } });
  }

  /* ---------- cart ---------- */
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem("ff-cart") || "[]"); } catch (e) { cart = []; }
  const save = () => { try { localStorage.setItem("ff-cart", JSON.stringify(cart)); } catch (e) {} };
  const openCart = () => { $("drawer").classList.add("open"); $("scrim").classList.add("open"); $("drawer").setAttribute("aria-hidden","false"); };
  const closeCart = () => { $("drawer").classList.remove("open"); $("scrim").classList.remove("open"); $("drawer").setAttribute("aria-hidden","true"); };
  function toast(msg){ const t = $("toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2200); }
  function bump(){ const b = $("cartBtn"); b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump"); }
  function add(id, size, qty){
    const p = byId(id); qty = qty || 1;
    const line = cart.find(l => l.id === id && l.size === size);
    if (line) line.qty += qty; else cart.push({ id, size, qty });
    save(); render(); bump(); toast(`${p.name} (${size}) added to bag`);
  }
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-add]"); if (!b) return;
    const qty = b.dataset.qty ? +document.querySelector(b.dataset.qty).textContent : 1;
    add(b.dataset.add, b.dataset.size, qty);
    if (b.classList.contains("add")) { b.classList.add("done"); const s = b.querySelector("span"); const o = s ? s.textContent : ""; if (s) s.textContent = "Added"; setTimeout(() => { b.classList.remove("done"); if (s) s.textContent = o; }, 1200); }
  });
  function render(){
    const items = $("items"); if (!items) return;
    const count = cart.reduce((a, l) => a + l.qty, 0);
    const cc = $("cartCount"); cc.textContent = count; cc.hidden = count === 0; document.querySelectorAll(".mcount").forEach(m => { m.textContent = count; m.hidden = count === 0; });
    let sub = 0;
    if (!cart.length) {
      items.innerHTML = `<div class="empty"><svg class="ico" viewBox="0 0 24 24" style="width:40px;height:40px"><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.5L21 8H7"/><circle cx="10" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/></svg><p>Your bag is empty.</p><a class="btn btn-navy" href="shop.html">Browse the shop</a></div>`;
    } else {
      items.innerHTML = cart.map((l, i) => { const p = byId(l.id); const lt = p.price[l.size] * l.qty; sub += lt; return `
        <div class="item"><img src="${IMG(p.images[0])}" alt=""><div><b>${p.name}</b><small>${l.size}</small><div class="qty"><button data-q="${i}" data-d="-1" aria-label="Decrease">−</button><span>${l.qty}</span><button data-q="${i}" data-d="1" aria-label="Increase">+</button></div></div><div style="text-align:right"><b>${fmt(lt)}</b><button class="rm" data-rm="${i}">Remove</button></div></div>`; }).join("");
    }
    $("subtotal").textContent = fmt(sub);
    const left = Math.max(0, FREE_SHIP - sub);
    $("shipMsg").textContent = left ? `Add ${fmt(left)} more for free delivery` : "You have unlocked free delivery";
    $("shipFill").style.width = Math.min(100, sub / FREE_SHIP * 100) + "%";
  }


  /* ---------- auth + orders (Supabase) ---------- */
  const sb = (CFG.SUPABASE_URL && CFG.SUPABASE_ANON_KEY && window.supabase) ? window.supabase.createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY) : null;
  let user = null;
  const openAcc = () => { const acc = $("accountPanel"); paintAuth(); acc.classList.add("open"); acc.setAttribute("aria-hidden","false"); if (!user) setTimeout(() => $("accEmail").focus(), 50); };
  const closeAcc = () => { const acc = $("accountPanel"); acc.classList.remove("open"); acc.setAttribute("aria-hidden","true"); };
  function paintAuth(){
    const out = $("accSignedOut"), inn = $("accSignedIn"); if (!out) return;
    out.hidden = !!user; inn.hidden = !user;
    if (!user) { let demo = []; try { demo = JSON.parse(localStorage.getItem("ff-orders") || "[]"); } catch (e) {} if (demo.length) { inn.hidden = false; inn.querySelector(".acc-user").hidden = true; loadOrders(); } else inn.querySelector(".acc-user").hidden = false; }
    else inn.querySelector(".acc-user").hidden = false;
    $("accTitle").textContent = user ? "Your account" : "Sign in to Fit & Flex";
    if (user) {
      const m = user.user_metadata || {};
      $("accName").textContent = m.full_name || m.name || user.email; $("accEmailOut").textContent = user.email;
      const av = $("accAvatar"); if (m.avatar_url) { av.src = m.avatar_url; av.hidden = false; } else av.hidden = true;
      loadOrders();
    }
    const btn = $("accountBtn"); if (btn) btn.classList.toggle("signed", !!user);
  }
  async function loadOrders(){
    const box = $("accOrders"); if (!box) return;
    if (!sb || !user) { let demo = []; try { demo = JSON.parse(localStorage.getItem("ff-orders") || "[]"); } catch (e) {} box.innerHTML = demo.length ? demo.slice().reverse().map(o => `<div class="acc-order"><div><b>Order #${o.order_no}</b><small>${new Date(o.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })} · demo, saved in this browser</small><small>${o.items.map(i => `${i.qty} × ${i.name} (${i.size})`).join(", ")}</small></div><div class="acc-right"><b>${fmt(o.total)}</b><span class="status s-placed">placed</span></div></div>`).join("") : `<p class="acc-note">No orders yet. Your first one will show up here.</p>`; return; }
    const { data, error } = await sb.from("orders").select("order_no, created_at, status, total, item_count, items").order("created_at", { ascending: false }).limit(20);
    if (error) { box.innerHTML = `<p class="acc-note">Could not load orders: ${error.message}</p>`; return; }
    if (!data.length) { box.innerHTML = `<p class="acc-note">No orders yet. Your first one will show up here.</p>`; return; }
    box.innerHTML = data.map(o => `<div class="acc-order"><div><b>Order #${o.order_no}</b><small>${new Date(o.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })} · ${o.item_count} item${o.item_count === 1 ? "" : "s"}</small><small>${o.items.map(i => `${i.qty} × ${i.name} (${i.size})`).join(", ")}</small></div><div class="acc-right"><b>${fmt(o.total)}</b><span class="status s-${o.status}">${o.status}</span></div></div>`).join("");
  }
  const authListeners = [];
  function onAuth(fn){ authListeners.push(fn); fn(user); }
  function notifyAuth(){ authListeners.forEach(fn => { try { fn(user); } catch (e) {} }); }
  async function signInGoogle(page){
    if (!sb) { toast("Google sign-in switches on once Supabase is configured"); return; }
    const { error } = await sb.auth.signInWithOAuth({ provider: "google", options: { redirectTo: location.origin + location.pathname.replace(/[^/]*$/, "") + (page || "") } });
    if (error) toast(error.message);
  }
  // Places an order. With Supabase configured and a signed-in user it writes to public.orders;
  // otherwise it records a demo order in this browser so the flow can be walked through.
  async function placeOrder(o){
    if (!o.items.length) return { ok: false, error: "Your bag is empty." };
    let note = "";
    if (sb && user) {
      const { data, error } = await sb.from("orders").insert({ user_id: user.id, items: o.items, item_count: o.items.reduce((a, i) => a + i.qty, 0), subtotal: o.subtotal, shipping: o.shipping, total: o.total, payment_method: o.payment_method, shipping_address: o.shipping_address, note: o.discount ? `discount ${o.discount}` : null }).select("order_no").single();
      if (!error) { cart = []; save(); render(); return { ok: true, order_no: data.order_no }; }
      note = "Saved in this browser only: the store database returned \"" + error.message + "\".";
    } else if (sb) {
      note = "Saved in this browser only. Sign in with Google to keep orders on your account.";
    } else {
      note = "Demo order recorded in this browser. Connect Supabase to save real orders.";
    }
    let demo = []; try { demo = JSON.parse(localStorage.getItem("ff-orders") || "[]"); } catch (e) {}
    const order_no = 1000 + demo.length + 1;
    demo.push({ order_no, created_at: new Date().toISOString(), status: "placed", ...o }); try { localStorage.setItem("ff-orders", JSON.stringify(demo)); } catch (e) {}
    cart = []; save(); render(); return { ok: true, order_no, demo: true, note };
  }
  function initAuth(){
    const acc = $("accountPanel"); if (!acc) return;
    $("accountBtn").onclick = openAcc; $("accountClose").onclick = closeAcc; acc.querySelector(".search-scrim").onclick = closeAcc;
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeAcc(); });
    if (!sb) {
      paintAuth();
      $("accNote").textContent = "Sign-in is not connected yet. Add the Supabase URL and key to assets/config.js (see SUPABASE-SETUP.md).";
      $("googleBtn").onclick = () => $("accMsg").textContent = "Google sign-in switches on once Supabase is configured.";
      $("accountForm").addEventListener("submit", e => { e.preventDefault(); $("accMsg").textContent = "Email sign-in switches on once Supabase is configured."; });
      return;
    }
    const redirectTo = location.origin + location.pathname;
    $("googleBtn").onclick = () => signInGoogle(location.pathname.split("/").pop());
    $("accountForm").addEventListener("submit", async e => {
      e.preventDefault(); const em = $("accEmail"), m = $("accMsg");
      if (!em.validity.valid) { m.textContent = "Enter a valid email to get a sign-in link."; em.focus(); return; }
      const { error } = await sb.auth.signInWithOtp({ email: em.value, options: { emailRedirectTo: redirectTo } });
      m.textContent = error ? error.message : `Sign-in link sent to ${em.value}. Check your inbox.`;
    });
    $("signOutBtn").onclick = async () => { await sb.auth.signOut(); user = null; paintAuth(); toast("Signed out"); };
    sb.auth.getSession().then(({ data }) => { user = data.session ? data.session.user : null; paintAuth(); notifyAuth(); });
    sb.auth.onAuthStateChange((_e, session) => { user = session ? session.user : null; paintAuth(); notifyAuth(); if (user && location.hash.includes("access_token")) history.replaceState(null, "", location.pathname + location.search); });
  }

  /* ---------- motion ---------- */
  const rio = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); rio.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" });
  const observe = el => rio.observe(el);

  // Count-up numbers when the stats strip enters view.
  function countUp(el){
    const raw = el.dataset.count, end = parseFloat(raw.replace(/[^0-9.]/g, "")), prefix = raw.match(/^[^0-9]*/)[0], suffix = raw.match(/[^0-9.]*$/)[0];
    if (reduce) { el.textContent = raw; return; }
    const t0 = performance.now(), dur = 1400, dec = (raw.split(".")[1] || "").replace(/[^0-9]/g, "").length;
    const step = t => { const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3); const v = end * e; el.textContent = prefix + (dec ? v.toFixed(dec) : Math.round(v).toLocaleString("en-IN")) + suffix; if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }
  const cio = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { countUp(en.target); cio.unobserve(en.target); } }), { threshold: .25 });

  // Pointer tilt on cards. Transform only, no layout work.
  function tilt(el){
    if (reduce || !matchMedia("(hover:hover)").matches) return;
    let raf = 0;
    el.addEventListener("pointermove", e => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { const r = el.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; el.style.transform = `translateY(-4px) rotateX(${(-y*6).toFixed(2)}deg) rotateY(${(x*6).toFixed(2)}deg)`; });
    });
    el.addEventListener("pointerleave", () => { cancelAnimationFrame(raf); el.style.transform = ""; });
  }

  // Magnetic primary buttons.
  function magnet(el){
    if (reduce || !matchMedia("(hover:hover)").matches) return;
    el.addEventListener("pointermove", e => { const r = el.getBoundingClientRect(); const x = e.clientX - r.left - r.width/2, y = e.clientY - r.top - r.height/2; el.style.transform = `translate(${x*.18}px,${y*.22}px)`; });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  }

  // Scroll-linked effects, batched in one rAF: progress bar, hero parallax, [data-parallax] layers, marquee speed.
  function scrollFX(){
    const bar = $("progress"), hero = document.querySelector(".vhero"), heroCopy = hero && hero.querySelector(".wrap"), heroMedia = hero && hero.querySelector("video, .poster");
    const layers = [...document.querySelectorAll("[data-parallax]")];
    const marq = document.querySelector(".marq-track");
    let last = scrollY, ticking = false, vel = 0;
    const run = () => {
      ticking = false;
      const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
      if (bar) bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
      if (!reduce) {
        if (hero && y < innerHeight) { if (heroCopy) heroCopy.style.transform = `translateY(${y * .28}px)`; if (heroMedia) heroMedia.style.transform = `translateY(${y * .12}px)`; hero.style.setProperty("--fade", Math.max(0, 1 - y / (innerHeight * .8))); }
        layers.forEach(el => { const r = el.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return; const p = (r.top + r.height/2 - innerHeight/2) / innerHeight; el.style.transform = `translateY(${(p * -parseFloat(el.dataset.parallax || 40)).toFixed(1)}px)`; });
        if (marq) { vel = vel * .9 + Math.min(40, Math.abs(y - last)) * .1; marq.style.animationDuration = `${Math.max(10, 38 - vel * 1.2)}s`; }
      }
      last = y;
    };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(run); } }, { passive: true });
    run();
  }

  // Drag-to-scroll for horizontal rails (reviews), plus a slow auto-drift that loops seamlessly.
  // Drift pauses on hover, drag, keyboard focus, and when the tab is hidden. Off under reduced motion.
  function dragScroll(el){
    let down = false, sx = 0, sl = 0, moved = false, paused = false;
    el.addEventListener("pointerdown", e => { down = true; moved = false; sx = e.clientX; sl = el.scrollLeft; el.classList.add("dragging"); });
    el.addEventListener("pointermove", e => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 4) moved = true; el.scrollLeft = sl - dx; });
    const up = () => { down = false; el.classList.remove("dragging"); };
    el.addEventListener("pointerup", up); el.addEventListener("pointerleave", up);
    el.addEventListener("click", e => { if (moved) e.preventDefault(); }, true);
    if (reduce || el.dataset.auto === "off") return;
    const cards = [...el.children]; if (cards.length < 2) return;
    cards.forEach(c => { const k = c.cloneNode(true); k.setAttribute("aria-hidden", "true"); el.appendChild(k); }); // second copy for the loop
    el.classList.add("auto");
    el.addEventListener("pointerenter", () => paused = true); el.addEventListener("pointerleave", () => paused = false);
    el.addEventListener("focusin", () => paused = true); el.addEventListener("focusout", () => paused = false);
    el.addEventListener("touchstart", () => paused = true, { passive: true }); el.addEventListener("touchend", () => { setTimeout(() => paused = false, 2500); }, { passive: true });
    const speed = 28; let last = performance.now();
    const tick = t => {
      const dt = Math.min(64, t - last); last = t;
      if (!paused && !down && !document.hidden) {
        el.scrollLeft += speed * dt / 1000;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  // Page transition: fade out before following internal links.
  function transitions(){
    if (reduce) return;
    document.documentElement.classList.add("pt-ready");
    document.addEventListener("click", e => {
      const a = e.target.closest("a[href]"); if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto") || a.target || e.metaKey || e.ctrlKey) return;
      const to = new URL(href, location.href);
      if (to.pathname === location.pathname && to.search === location.search) return; // same page, just a hash: let the browser jump
      e.preventDefault(); document.documentElement.classList.add("pt-out"); setTimeout(() => location.href = href, 220);
      setTimeout(() => document.documentElement.classList.remove("pt-out"), 1500); // safety: never leave the page invisible
    });
    addEventListener("pageshow", () => document.documentElement.classList.remove("pt-out"));
    addEventListener("hashchange", () => document.documentElement.classList.remove("pt-out"));
  }

  function init(){
    document.querySelectorAll(".reveal").forEach(observe);
    document.querySelectorAll("[data-count]").forEach(el => cio.observe(el));
    document.querySelectorAll(".tilt").forEach(tilt);
    document.querySelectorAll(".btn-primary").forEach(magnet);
    document.querySelectorAll(".reviews").forEach(dragScroll);
    initSearch(); scrollFX(); transitions();
    initAuth();
    $("cartBtn").onclick = openCart; document.querySelectorAll("[data-open=cart]").forEach(b => b.onclick = openCart); document.querySelectorAll("[data-open=search]").forEach(b => b.onclick = () => $("searchBtn").click()); $("closeCart").onclick = closeCart; $("continueBtn").onclick = closeCart; $("scrim").onclick = closeCart;
    $("drawer").querySelector("#checkout").onclick = () => { if (!cart.length) { toast("Your bag is empty"); return; } location.href = "checkout.html"; };
    $("items").addEventListener("click", e => {
      const q = e.target.closest("[data-q]"); const r = e.target.closest("[data-rm]");
      if (q) { const l = cart[+q.dataset.q]; l.qty += +q.dataset.d; if (l.qty <= 0) cart.splice(+q.dataset.q, 1); }
      if (r) cart.splice(+r.dataset.rm, 1);
      if (q || r) { save(); render(); }
    });
    const mm = $("mobileMenu");
    const closeMenu = () => { mm.classList.remove("open"); mm.setAttribute("aria-hidden","true"); };
    $("burger").onclick = () => { mm.classList.add("open"); mm.setAttribute("aria-hidden","false"); };
    $("closeMenu").onclick = closeMenu;
    document.addEventListener("keydown", e => { if (e.key === "Escape") { closeCart(); closeMenu(); } });
    const page = document.body.dataset.page;
    document.querySelectorAll(".menu a, .mobile-menu a, .mnav a").forEach(a => a.classList.toggle("on", a.dataset.page === page));
    const nf = $("newsForm");
    if (nf) nf.addEventListener("submit", e => {
      e.preventDefault(); const inp = $("email"), msg = $("formMsg");
      if (!inp.validity.valid) { msg.textContent = "Enter a valid email address to get your code."; inp.focus(); return; }
      msg.textContent = "Welcome to the club. Your 10% code is on its way."; inp.value = "";
    });
    render();
  }
  document.addEventListener("DOMContentLoaded", init);
  function setQty(id, size, d){ const i = cart.findIndex(l => l.id === id && l.size === size); if (i < 0) return; cart[i].qty += d; if (cart[i].qty <= 0) cart.splice(i, 1); save(); render(); }
  return { PRODUCTS, CATS, IMG, fmt, byId, renderGrid, search, add, toast, observe, tilt, reduce, cart: () => cart.map(l => ({ ...l })), setQty, placeOrder, onAuth, signInGoogle, openAccount: () => openAcc(), user: () => user };
})();
