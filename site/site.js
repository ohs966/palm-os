/* Palm Trade website. Reads the public catalogue from the Palm OS Supabase project (read only) and files quotation requests as leads. */
window.PALM = {
  supabaseUrl: "https://gsgniarlokepcsagvvmq.supabase.co",
  supabaseAnonKey: "sb_publishable_bI8glK6s6T_UX5IWrvhJHQ_ThWSOp1j",
  osUrl: "https://ohs966.github.io/palm-os/",
  phone: "+20 100 000 0000",
  email: "sales@palmtrade.eg",
  /* Clients and partners shown in the scrolling strip. Replace with real names (or logo <img> tags) when available. */
  partners: ["img/partners/1.png", "img/partners/2.png", "img/partners/3.png"],
};

/* The nine industries. `sector` is the Palm OS sector code whose products are listed under the industry. */
const INDUSTRIES = [
  { code: "uniforms", sector: ["uniforms"], tint: "t1", color: "#2f5bd6", img: "img/uniforms.jpg?v=9", en: ["Uniforms", "& Workwear", "Hotel, medical, school, industrial and security uniforms, branded to your specification."], ar: ["اليونيفورم", "وملابس العمل", "يونيفورم فنادق وطبي ومدارس وصناعي وأمن، بعلامتك ومواصفاتك."] },
  { code: "hospitality", sector: ["hospitality"], tint: "t8", color: "#c9a24a", img: "img/hotel.jpg?v=9", en: ["Hospitality", "& Hotel Supplies", "In-room amenities, bathrobes, slippers, linen and front-of-house products for hotels and resorts."], ar: ["الضيافة", "ومستلزمات الفنادق", "مستلزمات الغرف والأرواب والشباشب والبياضات ومنتجات الاستقبال للفنادق والمنتجعات."] },
  { code: "housekeeping", sector: ["housekeeping_buffet", "cleaning"], tint: "t2", color: "#19a6c9", img: "img/cleaning.jpg?v=9", en: ["Housekeeping", "& Cleaning Supplies", "Chemicals, tools, microfibre, trolleys, dispensers and consumables for facilities of any size."], ar: ["الهاوس كيبينج", "ومستلزمات النظافة", "منظفات وأدوات ومايكروفايبر وعربات وموزعات ومستهلكات لأي منشأة."] },
  { code: "kitchen", sector: ["kitchen_equipment"], tint: "t5", color: "#e06a1f", img: "img/kitchen.jpg?v=9", en: ["Kitchen", "& Buffet Equipment", "Commercial ranges, refrigeration, prep tables, chafing dishes and buffet service ware."], ar: ["المطابخ", "ومعدات البوفيه", "أفران ومعدات تبريد وطاولات تحضير وأواني تقديم وأدوات بوفيه."] },
  { code: "meals", sector: ["fnb_meals"], tint: "t7", color: "#3aa655", img: "img/meals.jpg?v=9", en: ["Ready Meals", "& Catering", "Prepared meals for staff canteens, schools, hospitals and events, delivered daily."], ar: ["الوجبات الجاهزة", "والتموين", "وجبات جاهزة لكافتيريات الموظفين والمدارس والمستشفيات والفعاليات، تُسلَّم يومياً."] },
  { code: "security", sector: ["security"], tint: "t6", color: "#8e9aa8", img: "img/security.jpg?v=9", en: ["Security", "Equipment", "Guard uniforms, radios, access control accessories and site safety gear for security firms."], ar: ["معدات", "الأمن", "يونيفورم حراسة، أجهزة لاسلكي، تحكم في الدخول ومعدات سلامة لشركات الأمن."] },
  { code: "construction", sector: ["construction"], tint: "t4", color: "#f2b21b", img: "img/construction.jpg?v=9", en: ["Construction", "& Site Equipment", "PPE, tools, site consumables and safety signage for contractors and industrial sites."], ar: ["الإنشاءات", "ومعدات المواقع", "معدات وقاية وعدد ومستهلكات مواقع ولافتات سلامة للمقاولين والمنشآت الصناعية."] },
  { code: "textiles", sector: ["fashion_textiles"], tint: "t3", color: "#d2487e", img: "img/textiles.jpg?v=9", en: ["Textiles", "& Fabrics", "Fabrics, trims and finished garments for brands, retailers and workshops."], ar: ["المنسوجات", "والأقمشة", "أقمشة وإكسسوارات وملابس جاهزة للعلامات التجارية والمتاجر والورش."] },
];
window.INDUSTRIES = INDUSTRIES;

const DICT = {
  en: {
    nav_home: "Home", nav_supply: "We Supply", nav_contact: "Contact", nav_quote: "Request Quotation", nav_quote_short: "Quote", lang: "AR",
    hero_tag: "General Supplies | Procurement | Import & Export", hero_call: "Call us", hero_places: "Cairo\nAlexandria\nGiza\nPort Said\nSuez\nIsmailia\nMansoura\nTanta\nZagazig\nAsyut\nLuxor\nAswan\nHurghada\nSharm El Sheikh\nAll of Egypt", hero_p: "Supplying the uniforms, equipment, meals and consumables that hotels, hospitals, schools, factories and security firms run on. One quotation, one contract, delivered on time.",
    hero_cta: "Request a quotation", hero_cta2: "What we supply",
    w_title: "What we supply", w_p: "Eight industries, one supplier. Slide through the cards and open any industry to see its products.",
    see: "See Products", wa: "WhatsApp Us", card_tag: "Industry",
    pt_label: "Clients and Partners", pt_p: "Sectors and partners we work with",
    b_title: "Why businesses buy through Palm",
    b1t: "One contract", b1p: "Any mix of categories under a single quotation, contract and invoice.",
    b2t: "48-hour quotation", b2p: "Every variant priced and lead times confirmed within two working days.",
    b3t: "Quality checked", b3p: "Each order is inspected before it leaves the supplier, then tracked to your door.",
    b4t: "Branded to spec", b4p: "Embroidery, printing and labels configured per item and included in the price.",
    f_nav: "Pages", f_contact: "Contact", f_more: "More", f_signin: "Team sign in", f_rights: "General Supplies | Procurement | Import & Export",
    s_title: "We Supply", s_p: "Pick an industry to see the products we supply for it, then request a quotation.",
    s_all: "All industries", s_products: "products", s_none: "Request a quotation and tell us what you need.", s_back: "All industries",
    q_title: "Request Quotation", q_p: "Tell us what you need and we come back with a full quotation within 48 hours.",
    fm_company: "Company", fm_name: "Your name", fm_phone: "Phone or WhatsApp", fm_email: "Email", fm_industry: "Industry", fm_need: "What do you need?", fm_qty: "Approximate quantity", fm_send: "Send request", fm_pick: "Choose...",
    fm_ok: "Thank you. Your request is in our system; we will come back to you within 48 hours.", fm_bad: "Could not send the request. Please call or WhatsApp us instead.",
    c_call: "Call", c_wa: "WhatsApp", c_mail: "Email", loading: "Loading...", unit: "Unit",
  },
  ar: {
    nav_home: "الرئيسية", nav_supply: "ماذا نورّد", nav_contact: "اتصل بنا", nav_quote: "اطلب عرض سعر", nav_quote_short: "عرض سعر", lang: "EN",
    hero_tag: "توريدات عامة | مشتريات | استيراد وتصدير", hero_call: "اتصل بنا", hero_places: "القاهرة\nالإسكندرية\nالجيزة\nبورسعيد\nالسويس\nالإسماعيلية\nالمنصورة\nطنطا\nالزقازيق\nأسيوط\nالأقصر\nأسوان\nالغردقة\nشرم الشيخ\nكل مصر", hero_p: "نورّد اليونيفورم والمعدات والوجبات والمستهلكات التي تعمل بها الفنادق والمستشفيات والمدارس والمصانع وشركات الأمن. عرض سعر واحد، عقد واحد، تسليم في الموعد.",
    hero_cta: "اطلب عرض سعر", hero_cta2: "ماذا نورّد",
    w_title: "ماذا نورّد", w_p: "ثمانية قطاعات، مورّد واحد. مرّر البطاقات وافتح أي قطاع لترى منتجاته.",
    see: "عرض المنتجات", wa: "راسلنا واتساب", card_tag: "قطاع",
    pt_label: "عملاء وشركاء", pt_p: "قطاعات وشركاء نعمل معهم",
    b_title: "لماذا تشتري الشركات عبر بالم",
    b1t: "عقد واحد", b1p: "أي مزيج من الفئات تحت عرض سعر وعقد وفاتورة واحدة.",
    b2t: "عرض سعر خلال 48 ساعة", b2p: "كل خيار مسعّر ومدد التوريد مؤكدة خلال يومي عمل.",
    b3t: "فحص جودة", b3p: "كل طلب يُفحص قبل مغادرة المورد ثم يُتابع حتى بابك.",
    b4t: "بعلامتك التجارية", b4p: "التطريز والطباعة والليبل تُحدد لكل صنف وتُضمَّن في السعر.",
    f_nav: "الصفحات", f_contact: "اتصل بنا", f_more: "المزيد", f_signin: "دخول الفريق", f_rights: "شركة توريدات عامة، مصر",
    s_title: "ماذا نورّد", s_p: "اختر قطاعاً لترى المنتجات التي نورّدها له ثم اطلب عرض سعر.",
    s_all: "كل القطاعات", s_products: "منتج", s_none: "اطلب عرض سعر وأخبرنا بما تحتاجه.", s_back: "كل القطاعات",
    q_title: "اطلب عرض سعر", q_p: "أخبرنا بما تحتاجه ونعود إليك بعرض سعر كامل خلال 48 ساعة.",
    fm_company: "الشركة", fm_name: "اسمك", fm_phone: "الهاتف أو واتساب", fm_email: "البريد الإلكتروني", fm_industry: "القطاع", fm_need: "ماذا تحتاج؟", fm_qty: "الكمية التقريبية", fm_send: "إرسال الطلب", fm_pick: "اختر...",
    fm_ok: "شكراً. طلبك في نظامنا وسنعود إليك خلال 48 ساعة.", fm_bad: "تعذر إرسال الطلب. اتصل بنا أو راسلنا على واتساب.",
    c_call: "اتصال", c_wa: "واتساب", c_mail: "بريد", loading: "جارٍ التحميل...", unit: "الوحدة",
  },
};

const ARROW = '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg>';

const Site = {
  lang: (function () { try { return localStorage.getItem("pt_lang") || "en"; } catch (e) { return "en"; } })(),
  t(k) { return (DICT[this.lang] || DICT.en)[k] ?? DICT.en[k] ?? k; },
  i(ind, n) { return (ind[this.lang] || ind.en)[n]; },
  pick(row, base) { return (this.lang === "ar" ? row[base + "_ar"] : row[base + "_en"]) || row[base + "_en"] || row[base + "_ar"] || ""; },
  esc(s) { return String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); },
  setLang(l) { this.lang = l; try { localStorage.setItem("pt_lang", l); } catch (e) {} this.apply(); document.dispatchEvent(new CustomEvent("langchange")); },
  apply() {
    document.documentElement.lang = this.lang; document.documentElement.dir = this.lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-t]").forEach((el) => { el.textContent = this.t(el.dataset.t); });
    document.querySelectorAll("[data-t-ph]").forEach((el) => { el.placeholder = this.t(el.dataset.tPh); });
  },
  page() { return location.pathname.split("/").pop() || "index.html"; },
  header() {
    const on = (f) => (this.page() === f ? "on" : "");
    return `<div class="header" id="hdr"><nav class="navpill">
      <a href="index.html" class="brand"><img src="img/emblem.png" alt="Palm" /></a>
      <a href="index.html" class="${on("index.html")}" data-t="nav_home"></a>
      <a href="supply.html" class="${on("supply.html")}" data-t="nav_supply"></a>
      <a href="quote.html" class="${on("quote.html")}"><span class="long" data-t="nav_quote"></span><span class="short" data-t="nav_quote_short"></span></a>
      <span class="sep"></span>
      <button class="lang" data-lang-toggle data-t="lang"></button></nav></div>`;
  },
  footer() {
    const wa = PALM.phone.replace(/[^\d]/g, "");
    return `<footer>
      <div class="word fbrand"><img src="img/emblem.png" alt="Palm" /><span>PALM GENERAL SUPPLY</span></div>
      <div class="cols">
        <div><span class="mono" data-t="f_nav"></span><a href="index.html" data-t="nav_home"></a><a href="supply.html" data-t="nav_supply"></a><a href="quote.html#contact" data-t="nav_contact"></a><a href="quote.html" data-t="nav_quote"></a></div>
        <div><span class="mono" data-t="f_contact"></span><a href="tel:${PALM.phone.replace(/\s/g, "")}" dir="ltr">${PALM.phone}</a><a href="https://wa.me/${wa}">WhatsApp</a><a href="mailto:${PALM.email}">${PALM.email}</a></div>
        <div><span class="mono" data-t="f_more"></span><a href="#">LinkedIn</a><a href="#">Instagram</a></div>
      </div>
      <div class="base"><span>&copy; ${new Date().getFullYear()} Palm General Supply</span><span data-t="f_rights"></span></div></footer>`;
  },
  marquee(items, cls) { const s = items.map((x) => /\.(png|jpg|svg|webp)$/i.test(x) ? `<span class="logo"><img src="${this.esc(x)}" alt="" ></span>` : `<span>${this.esc(x)}</span>`).join(""); const rep = items.length < 6 ? Math.ceil(12 / items.length) : 2; return `<div class="marquee ${cls || ""}"><div class="track">${s.repeat(rep)}</div></div>`; },
  async rest(path, opts) {
    const r = await fetch(`${PALM.supabaseUrl}/rest/v1/${path}`, { ...(opts || {}), headers: { apikey: PALM.supabaseAnonKey, Authorization: `Bearer ${PALM.supabaseAnonKey}`, "Content-Type": "application/json", Prefer: "return=minimal" } });
    if (!r.ok) throw new Error(`${r.status} ${await r.text()}`);
    const txt = await r.text(); return txt ? JSON.parse(txt) : null;
  },
  catalogue() { return this.rest("public_catalogue?select=*&order=sector_sort,category_sort,name_en"); },
  sectors() { return this.rest("sectors?select=id,code,name_ar,name_en&order=sort_order"); },
  /** Files a quotation request as a draft party + contact + lead, the same records the Palm OS intake form creates. */
  async submitLead(f) {
    const pid = crypto.randomUUID();
    const ind = INDUSTRIES.find((x) => x.code === f.industry); const sectors = await this.sectors().catch(() => []);
    const sec = ind ? sectors.find((s) => s.code === ind.sector[0]) : null;
    await this.rest("parties", { method: "POST", body: JSON.stringify({ id: pid, name_ar: f.company, name_en: f.company, status: "draft", sector: sec ? [sec.code] : [], preferred_language: this.lang, notes: `${ind ? this.i(ind, 0) + " " + this.i(ind, 1) + "\n" : ""}${f.need}\n${f.qty || ""}` }) });
    await this.rest("party_roles", { method: "POST", body: JSON.stringify({ party_id: pid, role: "client" }) });
    await this.rest("contacts", { method: "POST", body: JSON.stringify({ party_id: pid, name: f.name, phone: f.phone, whatsapp: f.phone, email: f.email || null, language: this.lang, is_primary: true }) });
    await this.rest("leads", { method: "POST", body: JSON.stringify({ party_id: pid, contact_name: f.name, company_name: f.company, phone: f.phone, email: f.email || null, sector_id: sec ? sec.id : null, source: "website", stage: "new", need_description: (ind ? this.i(ind, 0) + ": " : "") + f.need, estimated_qty: f.qty || null }) });
  },
  form(el, preset) {
    const render = () => {
      el.innerHTML = `<form class="form" id="leadform">
        <label><span data-t="fm_company"></span><input name="company" required></label>
        <div class="g2"><label><span data-t="fm_name"></span><input name="name" required></label><label><span data-t="fm_phone"></span><input name="phone" required dir="ltr"></label></div>
        <div class="g2"><label><span data-t="fm_email"></span><input name="email" type="email" dir="ltr"></label>
        <label><span data-t="fm_industry"></span><select name="industry"><option value="">${this.t("fm_pick")}</option>${INDUSTRIES.map((x) => `<option value="${x.code}" ${preset && preset.industry === x.code ? "selected" : ""}>${this.esc(this.i(x, 0) + " " + this.i(x, 1))}</option>`).join("")}</select></label></div>
        <label><span data-t="fm_need"></span><textarea name="need" required>${this.esc((preset && preset.need) || "")}</textarea></label>
        <label><span data-t="fm_qty"></span><input name="qty"></label>
        <button class="pill clay" type="submit"><span data-t="fm_send"></span>${ARROW}</button>
        <div id="formmsg" class="msg" style="display:none"></div></form>`;
      this.apply();
      el.querySelector("#leadform").addEventListener("submit", async (e) => {
        e.preventDefault(); const fd = Object.fromEntries(new FormData(e.target).entries()); const msg = el.querySelector("#formmsg"); const btn = e.target.querySelector("button"); btn.disabled = true;
        try { await this.submitLead(fd); msg.className = "msg ok"; msg.textContent = this.t("fm_ok"); msg.style.display = "block"; e.target.reset(); }
        catch (err) { msg.className = "msg bad"; msg.textContent = this.t("fm_bad") + " (" + err.message.slice(0, 60) + ")"; msg.style.display = "block"; }
        btn.disabled = false;
      });
    };
    render(); document.addEventListener("langchange", render);
  },
};
window.Site = Site;

document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", Site.header());
  document.body.insertAdjacentHTML("beforeend", Site.footer());
  Site.apply();
  document.querySelectorAll("[data-lang-toggle]").forEach((b) => b.addEventListener("click", () => Site.setLang(Site.lang === "ar" ? "en" : "ar")));
  const hdr = document.getElementById("hdr"); const onScroll = () => hdr.classList.toggle("scrolled", window.scrollY > 40); onScroll(); addEventListener("scroll", onScroll, { passive: true });
  if (window.PAGE) window.PAGE();
});
