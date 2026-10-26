/* Palm Trade website. Reads the public catalogue from the Palm OS Supabase project (read only) and files quotation requests as leads. */
window.PALM = {
  supabaseUrl: "https://gsgniarlokepcsagvvmq.supabase.co",
  supabaseAnonKey: "sb_publishable_bI8glK6s6T_UX5IWrvhJHQ_ThWSOp1j",
  osUrl: "https://ohs966.github.io/palm-os/",
  phone: "+20 100 000 0000",
  email: "sales@palmtrade.eg",
  /* Clients and partners shown in the scrolling strip. Replace with real names (or logo <img> tags) when available. */
  partners: ["Hotels", "Hospitals", "Schools", "Factories", "Restaurants", "Security firms", "Contractors", "Corporate offices"],
};

/* The nine industries. `sector` is the Palm OS sector code whose products are listed under the industry. */
const INDUSTRIES = [
  { code: "security", sector: "security", tint: "t6", img: "img/security.jpg", en: ["Security Equipment", "Supplies", "Uniforms, radios, access control and site safety gear for security firms."], ar: ["معدات الأمن", "توريدات", "يونيفورم، أجهزة لاسلكي، تحكم في الدخول ومعدات سلامة لشركات الأمن."] },
  { code: "uniforms", sector: "uniforms", tint: "t1", img: "img/uniforms.jpg", en: ["Uniforms", "Supplies", "Hotel, medical, school, industrial and security uniforms, branded to your specification."], ar: ["اليونيفورم", "توريدات", "يونيفورم فنادق وطبي ومدارس وصناعي وأمن، بعلامتك ومواصفاتك."] },
  { code: "cleaning", sector: "cleaning", tint: "t2", img: "img/cleaning.jpg", en: ["Cleaning", "Supplies", "Chemicals, tools, microfibre, dispensers and consumables for facilities of any size."], ar: ["مستلزمات النظافة", "توريدات", "منظفات وأدوات ومايكروفايبر وموزعات ومستهلكات لأي منشأة."] },
  { code: "textiles", sector: "fashion_textiles", tint: "t3", img: "img/textiles.jpg", en: ["Fashion Textiles", "Supplies", "Fabrics, trims and finished garments for brands, retailers and workshops."], ar: ["أقمشة ومنسوجات", "توريدات", "أقمشة وإكسسوارات وملابس جاهزة للعلامات التجارية والمتاجر والورش."] },
  { code: "construction", sector: "construction", tint: "t4", img: "img/construction.jpg", en: ["Construction Equipment", "Supplies", "PPE, tools, site consumables and safety signage for contractors and industrial sites."], ar: ["معدات الإنشاءات", "توريدات", "معدات وقاية وعدد ومستهلكات مواقع ولافتات سلامة للمقاولين والمنشآت الصناعية."] },
  { code: "kitchen", sector: "kitchen_equipment", tint: "t5", img: "img/kitchen.jpg", en: ["Kitchen Equipment", "Supplies", "Commercial ranges, refrigeration, prep tables and smallwares for restaurants and hotels."], ar: ["معدات المطابخ", "توريدات", "أفران ومعدات تبريد وطاولات تحضير وأدوات للمطاعم والفنادق."] },
  { code: "meals", sector: "fnb_meals", tint: "t7", img: "img/meals.jpg", en: ["F&B Wholesale", "Ready Meals", "Prepared meals for staff canteens, schools, hospitals and events, delivered daily."], ar: ["وجبات جاهزة", "بالجملة", "وجبات جاهزة لكافتيريات الموظفين والمدارس والمستشفيات والفعاليات، تُسلَّم يومياً."] },
  { code: "hotel", sector: "hospitality", tint: "t8", img: "img/hotel.jpg", en: ["Hotel", "Supplies", "In-room amenities, bathrobes, slippers, front-of-house and guest products."], ar: ["مستلزمات الفنادق", "توريدات", "مستلزمات الغرف والأرواب والشباشب ومنتجات الاستقبال والضيوف."] },
  { code: "housekeeping", sector: "housekeeping_buffet", tint: "t9", img: "img/housekeeping.jpg", en: ["Housekeeping & Buffet", "Supplies", "Linen, towels, trolleys, chafing dishes and buffet service ware."], ar: ["هاوس كيبينج وبوفيه", "توريدات", "بياضات وفوط وعربات وأواني تقديم وأدوات بوفيه."] },
];
window.INDUSTRIES = INDUSTRIES;

const DICT = {
  en: {
    nav_home: "Home", nav_supply: "We supply", nav_quote: "Request quotation", lang: "AR",
    hero_tag: "General supply company", hero_places: "Cairo\nAlexandria\nAll of Egypt", hero_p: "Supplying the uniforms, equipment, meals and consumables that hotels, hospitals, schools, factories and security firms run on. One quotation, one contract, delivered on time.",
    hero_cta: "Request a quotation", hero_cta2: "What we supply",
    w_title: "What we supply", w_p: "Nine industries, one supplier. Slide through the cards and open any industry to see its products.",
    see: "See products", card_tag: "Industry",
    pt_label: "Clients and partners", pt_p: "Sectors and partners we work with",
    b_title: "Why businesses buy through Palm Trade",
    b1t: "One contract", b1p: "Any mix of categories under a single quotation, contract and invoice.",
    b2t: "48-hour quotation", b2p: "Every variant priced and lead times confirmed within two working days.",
    b3t: "Quality checked", b3p: "Each order is inspected before it leaves the supplier, then tracked to your door.",
    b4t: "Branded to spec", b4p: "Embroidery, printing and labels configured per item and included in the price.",
    f_nav: "Pages", f_contact: "Contact", f_more: "More", f_signin: "Team sign in", f_rights: "General supply company, Egypt",
    s_title: "We supply", s_p: "Pick an industry to see the products we supply for it, then request a quotation.",
    s_all: "All industries", s_products: "products", s_none: "Products for this industry are being added. Request a quotation and tell us what you need.", s_back: "All industries",
    q_title: "Request a quotation", q_p: "Tell us what you need and we come back with a full quotation within 48 hours.",
    fm_company: "Company", fm_name: "Your name", fm_phone: "Phone or WhatsApp", fm_email: "Email", fm_industry: "Industry", fm_need: "What do you need?", fm_qty: "Approximate quantity", fm_send: "Send request", fm_pick: "Choose...",
    fm_ok: "Thank you. Your request is in our system; we will come back to you within 48 hours.", fm_bad: "Could not send the request. Please call or WhatsApp us instead.",
    c_call: "Call", c_wa: "WhatsApp", c_mail: "Email", loading: "Loading...", unit: "Unit",
  },
  ar: {
    nav_home: "الرئيسية", nav_supply: "ماذا نورّد", nav_quote: "اطلب عرض سعر", lang: "EN",
    hero_tag: "شركة توريدات عامة", hero_places: "القاهرة\nالإسكندرية\nكل مصر", hero_p: "نورّد اليونيفورم والمعدات والوجبات والمستهلكات التي تعمل بها الفنادق والمستشفيات والمدارس والمصانع وشركات الأمن. عرض سعر واحد، عقد واحد، تسليم في الموعد.",
    hero_cta: "اطلب عرض سعر", hero_cta2: "ماذا نورّد",
    w_title: "ماذا نورّد", w_p: "تسعة قطاعات، مورّد واحد. مرّر البطاقات وافتح أي قطاع لترى منتجاته.",
    see: "عرض المنتجات", card_tag: "قطاع",
    pt_label: "عملاء وشركاء", pt_p: "قطاعات وشركاء نعمل معهم",
    b_title: "لماذا تشتري الشركات عبر بالم تريد",
    b1t: "عقد واحد", b1p: "أي مزيج من الفئات تحت عرض سعر وعقد وفاتورة واحدة.",
    b2t: "عرض سعر خلال 48 ساعة", b2p: "كل خيار مسعّر ومدد التوريد مؤكدة خلال يومي عمل.",
    b3t: "فحص جودة", b3p: "كل طلب يُفحص قبل مغادرة المورد ثم يُتابع حتى بابك.",
    b4t: "بعلامتك التجارية", b4p: "التطريز والطباعة والليبل تُحدد لكل صنف وتُضمَّن في السعر.",
    f_nav: "الصفحات", f_contact: "اتصل بنا", f_more: "المزيد", f_signin: "دخول الفريق", f_rights: "شركة توريدات عامة، مصر",
    s_title: "ماذا نورّد", s_p: "اختر قطاعاً لترى المنتجات التي نورّدها له ثم اطلب عرض سعر.",
    s_all: "كل القطاعات", s_products: "منتج", s_none: "جارٍ إضافة منتجات هذا القطاع. اطلب عرض سعر وأخبرنا بما تحتاجه.", s_back: "كل القطاعات",
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
      <a href="index.html" class="${on("index.html")}" data-t="nav_home"></a>
      <a href="supply.html" class="${on("supply.html")}" data-t="nav_supply"></a>
      <a href="quote.html" class="cta ${on("quote.html")}" data-t="nav_quote"></a>
      <button class="lang" data-lang-toggle data-t="lang"></button></nav></div>`;
  },
  footer() {
    const wa = PALM.phone.replace(/[^\d]/g, "");
    return `<footer>
      <div class="word">PALM<br>TRADE</div>
      <div class="cols">
        <div><span class="mono" data-t="f_nav"></span><a href="index.html" data-t="nav_home"></a><a href="supply.html" data-t="nav_supply"></a><a href="quote.html" data-t="nav_quote"></a></div>
        <div><span class="mono" data-t="f_contact"></span><a href="tel:${PALM.phone.replace(/\s/g, "")}" dir="ltr">${PALM.phone}</a><a href="https://wa.me/${wa}">WhatsApp</a><a href="mailto:${PALM.email}">${PALM.email}</a></div>
        <div><span class="mono" data-t="f_more"></span><a href="#">LinkedIn</a><a href="#">Instagram</a><a href="${PALM.osUrl}" data-t="f_signin"></a></div>
      </div>
      <div class="base"><span>&copy; ${new Date().getFullYear()} Palm Trade</span><span data-t="f_rights"></span></div></footer>`;
  },
  marquee(items, cls) { const s = items.map((x) => `<span>${this.esc(x)}</span>`).join(""); return `<div class="marquee ${cls || ""}"><div class="track">${s}${s}</div></div>`; },
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
    const sec = ind ? sectors.find((s) => s.code === ind.sector) : null;
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
