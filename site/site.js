/* Palm Trade public website. Reads the public catalogue from the Palm OS Supabase project (read only, publishable key). */
window.PALM = {
  supabaseUrl: "https://gsgniarlokepcsagvvmq.supabase.co",
  supabaseAnonKey: "sb_publishable_bI8glK6s6T_UX5IWrvhJHQ_ThWSOp1j",
  osUrl: "https://ohs966.github.io/palm-os/",
  intakeUrl: "https://ohs966.github.io/palm-os/#/intake",
  phone: "+20 100 000 0000",
  email: "sales@palmtrade.eg",
};

const DICT = {
  en: {
    nav_home: "Home", nav_collections: "Collections", nav_about: "About", nav_contact: "Contact",
    search: "Search products", lang: "العربية",
    eyebrow: "General supply, Egypt",
    lead: "One partner for uniforms, housekeeping, hospitality, F&B and equipment, delivered on contract and on time.",
    cta: "Request a quotation", cta2: "See collections",
    h1a: "Supply ", h1b: "(everything)", h1c: " your business runs on.",
    para: "Palm Trade sources, customises and delivers the products hotels, hospitals, schools, factories and restaurants use every day. One quotation, one contract, one point of contact.",
    th1: "Uniforms", th2: "Hospitality & F&B",
    c1: "Uniforms", c2: "Housekeeping & buffet", c3: "Kitchen equipment", c4: "Security & site equipment",
    band: "Serving sectors across Egypt:",
    s_hotels: "Hotels", s_hospitals: "Hospitals", s_schools: "Schools", s_factories: "Factories", s_restaurants: "Restaurants", s_security: "Security firms", s_construction: "Contractors",
    how_t: "How it works", how_s: "From request to delivery, every step is tracked in our operating system so you always know where your order is.",
    how1t: "Tell us what you need", how1: "Send a request from this site or through our team. Quantities, sizes, branding, deadlines.",
    how2t: "Get one clear quotation", how2: "We price every variant, confirm lead times and send a single quotation covering everything.",
    how3t: "Sign, deposit, deliver", how3: "A digital contract, a deposit, then production, quality checks and delivery to your site.",
    cat_t: "What we supply", cat_s: "Six categories, hundreds of products, all customisable with your branding.",
    k1t: "Uniforms", k1: "Hotel, medical, school, industrial and security uniforms, embroidered or printed with your logo.",
    k2t: "Housekeeping & buffet", k2: "Linen, towels, amenities, cleaning supplies, chafing dishes and buffet service ware.",
    k3t: "Hospitality", k3: "Front of house and room supplies for hotels, resorts and serviced apartments.",
    k4t: "F&B meals & kitchen equipment", k4: "Prepared meals for staff and events plus commercial kitchen equipment and smallwares.",
    k5t: "Security equipment", k5: "Uniforms, radios, access control accessories and site safety gear for security firms.",
    k6t: "Construction equipment", k6: "PPE, tools and site consumables for contractors and industrial facilities.",
    about_t: "About Palm Trade", about: "Palm Trade is an Egyptian general supply company. We work with a vetted network of manufacturers and route every order to the best supplier for price, quality and lead time, while staying your single point of responsibility.",
    contact_t: "Contact", footer: "Palm Trade. General supply company, Egypt.",
    col_t: "Collections", col_s: "Products are grouped by sector and category. Open any product to see its details and request a quotation.",
    col_empty: "The catalogue is being filled. Request a quotation and tell us what you need.",
    products: "products", product_cta: "Request a quotation for this product", back: "Back to collections", unit: "Unit",
    loading: "Loading...", error: "Could not load the catalogue right now.",
  },
  ar: {
    nav_home: "الرئيسية", nav_collections: "المجموعات", nav_about: "من نحن", nav_contact: "اتصل بنا",
    search: "ابحث عن منتج", lang: "English",
    eyebrow: "توريدات عامة، مصر",
    lead: "شريك واحد لليونيفورم، الهاوس كيبينج، الضيافة، الأغذية والمعدات، بعقد واضح وفي الموعد.",
    cta: "اطلب عرض سعر", cta2: "تصفح المجموعات",
    h1a: "نورّد ", h1b: "(كل شيء)", h1c: " يحتاجه عملك.",
    para: "بالم تريد تختار وتخصص وتوصّل المنتجات التي تستخدمها الفنادق والمستشفيات والمدارس والمصانع والمطاعم يومياً. عرض سعر واحد، عقد واحد، جهة اتصال واحدة.",
    th1: "يونيفورم", th2: "ضيافة وأغذية",
    c1: "يونيفورم", c2: "هاوس كيبينج وبوفيه", c3: "معدات مطابخ", c4: "معدات أمن ومواقع",
    band: "نخدم قطاعات في كل مصر:",
    s_hotels: "فنادق", s_hospitals: "مستشفيات", s_schools: "مدارس", s_factories: "مصانع", s_restaurants: "مطاعم", s_security: "شركات أمن", s_construction: "مقاولون",
    how_t: "كيف نعمل", how_s: "من الطلب إلى التسليم، كل خطوة مسجلة في نظامنا التشغيلي لتعرف دائماً أين طلبك.",
    how1t: "أخبرنا بما تحتاجه", how1: "أرسل طلبك من الموقع أو عبر فريقنا: الكميات، المقاسات، العلامة التجارية، المواعيد.",
    how2t: "عرض سعر واحد واضح", how2: "نسعّر كل خيار، نؤكد مدد التوريد ونرسل عرض سعر واحداً يغطي كل شيء.",
    how3t: "توقيع، عربون، تسليم", how3: "عقد رقمي، عربون، ثم الإنتاج وفحص الجودة والتسليم إلى موقعك.",
    cat_t: "ماذا نورّد", cat_s: "ست فئات، مئات المنتجات، كلها قابلة للتخصيص بعلامتك التجارية.",
    k1t: "يونيفورم", k1: "يونيفورم فنادق وطبي ومدارس وصناعي وأمن، بتطريز أو طباعة شعارك.",
    k2t: "هاوس كيبينج وبوفيه", k2: "بياضات، فوط، مستلزمات الغرف، منظفات، أواني التقديم والبوفيه.",
    k3t: "ضيافة", k3: "مستلزمات الاستقبال والغرف للفنادق والمنتجعات والشقق الفندقية.",
    k4t: "وجبات ومعدات مطابخ", k4: "وجبات جاهزة للموظفين والفعاليات ومعدات المطابخ التجارية وأدواتها.",
    k5t: "معدات أمن", k5: "يونيفورم، أجهزة لاسلكي، ملحقات التحكم في الدخول ومعدات سلامة المواقع.",
    k6t: "معدات إنشاءات", k6: "معدات الوقاية الشخصية والعدد ومستهلكات المواقع للمقاولين والمنشآت الصناعية.",
    about_t: "عن بالم تريد", about: "بالم تريد شركة توريدات عامة مصرية. نعمل مع شبكة موردين معتمدين ونوجّه كل طلب إلى أفضل مورد من حيث السعر والجودة ومدة التوريد، ونبقى نحن جهة المسؤولية الوحيدة أمامك.",
    contact_t: "اتصل بنا", footer: "بالم تريد. شركة توريدات عامة، مصر.",
    col_t: "المجموعات", col_s: "المنتجات مجمّعة حسب القطاع والفئة. افتح أي منتج لترى تفاصيله وتطلب عرض سعر.",
    col_empty: "جارٍ تعبئة الكتالوج. اطلب عرض سعر وأخبرنا بما تحتاجه.",
    products: "منتج", product_cta: "اطلب عرض سعر لهذا المنتج", back: "العودة إلى المجموعات", unit: "الوحدة",
    loading: "جارٍ التحميل...", error: "تعذر تحميل الكتالوج الآن.",
  },
};

const Site = {
  lang: (function () { try { return localStorage.getItem("pt_lang") || "en"; } catch (e) { return "en"; } })(),
  t(k) { return (DICT[this.lang] || DICT.en)[k] ?? DICT.en[k] ?? k; },
  pick(row, base) { return (this.lang === "ar" ? row[base + "_ar"] : row[base + "_en"]) || row[base + "_en"] || row[base + "_ar"] || ""; },
  setLang(l) { this.lang = l; try { localStorage.setItem("pt_lang", l); } catch (e) {} this.apply(); document.dispatchEvent(new CustomEvent("langchange")); },
  apply() {
    document.documentElement.lang = this.lang; document.documentElement.dir = this.lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-t]").forEach((el) => { el.textContent = this.t(el.dataset.t); });
    document.querySelectorAll("[data-t-ph]").forEach((el) => { el.placeholder = this.t(el.dataset.tPh); });
  },
  async rest(path) {
    const r = await fetch(`${PALM.supabaseUrl}/rest/v1/${path}`, { headers: { apikey: PALM.supabaseAnonKey, Authorization: `Bearer ${PALM.supabaseAnonKey}` } });
    if (!r.ok) throw new Error(`${r.status} ${await r.text()}`);
    return r.json();
  },
  catalogue() { return this.rest("public_catalogue?select=*&order=sector_sort,category_sort,name_en"); },
  product(id) { return this.rest(`public_catalogue?select=*&id=eq.${encodeURIComponent(id)}`).then((rows) => rows[0]); },
  productImage(p) { return p.images && p.images.length ? p.images[0] : ""; },
  quoteLink(p) { return PALM.intakeUrl + (p ? `?product=${encodeURIComponent(p.name_en)}` : ""); },
};
window.Site = Site;
document.addEventListener("DOMContentLoaded", () => {
  Site.apply();
  document.querySelectorAll("[data-lang-toggle]").forEach((b) => b.addEventListener("click", () => Site.setLang(Site.lang === "ar" ? "en" : "ar")));
  const s = document.querySelector("[data-search]");
  if (s) s.addEventListener("keydown", (e) => { if (e.key === "Enter" && s.value.trim()) location.href = `collections.html?q=${encodeURIComponent(s.value.trim())}`; });
});
