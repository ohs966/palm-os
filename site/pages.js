/* Palm General Supply: content pages (services, industries, guides, import/export, about, contact, help, legal). Original copy. */
const L = (en, ar) => ({ en, ar });
const PAGES = {
  services: {
    title: L("Services & Solutions", "الخدمات والحلول"),
    lead: L("More than a catalogue. We take the buying, stocking and chasing of supplies off your team so your people can focus on running the business.", "أكثر من كتالوج. نتولى شراء وتخزين ومتابعة التوريدات بدلا من فريقك ليتفرغ لإدارة العمل."),
    sections: [
      { id: "service-model", icon: "service", h: L("Dedicated account service", "خدمة حساب مخصصة"), p: L("One account manager who knows your sites, your approved brands and your budget codes. Send a list by WhatsApp, email or the website and get one itemised quotation back, usually within 24 hours.", "مسؤول حساب واحد يعرف مواقعك والماركات المعتمدة لديك وبنود الميزانية. أرسل القائمة بالواتساب أو البريد أو الموقع واستلم عرض سعر واحد مفصل خلال 24 ساعة غالبا."),
        b: [L("Single point of contact for every department", "نقطة تواصل واحدة لكل الأقسام"), L("Consolidated monthly invoicing with VAT", "فاتورة شهرية مجمعة بضريبة القيمة المضافة"), L("Price lists agreed in advance for repeat items", "قوائم أسعار متفق عليها مسبقا للأصناف المتكررة")] },
      { id: "inventory", icon: "shelf", h: L("Inventory management", "إدارة المخزون"), p: L("We agree minimum and maximum levels for the items you use every week, check your stock on a set day and refill before you run out. No more emergency purchases at retail prices.", "نتفق على حد أدنى وأقصى للأصناف التي تستهلكها أسبوعيا، ونراجع مخزونك في يوم محدد ونعيد التعبئة قبل النفاد. لا مزيد من الشراء الطارئ بأسعار التجزئة."),
        b: [L("Bin stocking at your store or site", "تخزين بالصناديق في مخزنك أو موقعك"), L("Scheduled replenishment visits", "زيارات تعبئة دورية"), L("Usage reports by department and cost centre", "تقارير استهلاك حسب القسم ومركز التكلفة")] },
      { id: "digital", icon: "chat", h: L("Digital ordering", "الطلب الرقمي"), p: L("Build a quote list on this website, save your usual items and reorder in a few clicks. Every request lands directly in our system so nothing gets lost in a phone call.", "اصنع قائمة طلب على هذا الموقع واحفظ أصنافك المعتادة وأعد الطلب بضغطات قليلة. كل طلب يصل مباشرة إلى نظامنا فلا يضيع شيء في مكالمة."),
        b: [L("Quote list with sizes, options and quantities", "قائمة طلب بالمقاسات والخيارات والكميات"), L("WhatsApp ordering for the field", "طلب بالواتساب لفرق المواقع")] },
      { id: "contracts", icon: "book", h: L("Corporate contracts", "التعاقدات المؤسسية"), p: L("Annual or project framework agreements with fixed or indexed prices, agreed delivery times and named contacts. Suited to companies, hotels, hospitals and government bodies.", "اتفاقيات إطارية سنوية أو للمشروعات بأسعار ثابتة أو مرتبطة بمؤشر، ومواعيد توريد محددة ومسؤولين معروفين. مناسبة للشركات والفنادق والمستشفيات والجهات الحكومية."),
        b: [L("Tender and RFQ responses", "الرد على المناقصات وطلبات الأسعار"), L("Supplier registration documents on request", "مستندات تسجيل المورد عند الطلب")] },
      { id: "lean", icon: "box", h: L("Kitting and workplace organisation", "التجهيز المسبق وتنظيم مكان العمل"), p: L("We pack items into ready kits for a job, a new hire or a maintenance task, and supply labels, shadow boards and storage to keep work areas tidy.", "نجهز الأصناف في أطقم جاهزة لمهمة أو موظف جديد أو عملية صيانة، ونورد الملصقات ولوحات العدد ووسائل التخزين للحفاظ على تنظيم مكان العمل."),
        b: [L("New-starter PPE kits", "أطقم مهمات وقاية للموظفين الجدد"), L("Maintenance and shutdown kits", "أطقم الصيانة والعمرات"), L("Floor marking and 5S supplies", "علامات الأرضيات ومستلزمات 5S")] },
      { id: "safety", icon: "helmet", h: L("Safety programme support", "دعم برامج السلامة"), p: L("Tell us the hazards on your site and we propose the right PPE, signage, fire and first aid supplies, then keep them topped up and in date.", "أخبرنا بمخاطر موقعك ونقترح مهمات الوقاية واللافتات ومستلزمات الحريق والإسعافات المناسبة، ثم نحافظ على توفرها وصلاحيتها."),
        b: [L("PPE matrix by job role", "مصفوفة مهمات وقاية حسب الوظيفة"), L("Extinguisher and first aid kit refill schedule", "جدول إعادة تعبئة الطفايات وشنط الإسعافات"), L("Fitting and sizing visits for footwear and uniforms", "زيارات قياس للأحذية والزي")] },
      { id: "manufacturing", icon: "factory", h: L("Custom manufacturing", "التصنيع حسب الطلب"), p: L("Uniforms, branded items, metal and plastic parts, signage and packaging made to your drawing or sample through our network of Egyptian workshops and factories.", "زي موحد ومنتجات بشعارك وقطع معدنية وبلاستيكية ولافتات وتغليف حسب رسمك أو عينتك من خلال شبكتنا من الورش والمصانع المصرية."),
        b: [L("Uniforms with embroidery or print", "زي موحد بالتطريز أو الطباعة"), L("Cut, bent and welded steel parts", "قطع حديد مقصوصة ومثنية وملحومة"), L("Printed cartons and labels", "كراتين وملصقات مطبوعة")] },
      { id: "sourcing", icon: "globe", h: L("Technical sourcing", "التوريد الفني"), p: L("Need a spare part, an exact brand or something we do not list? Send a photo, a part number or the old item and we find it locally or import it.", "تحتاج قطعة غيار أو ماركة بعينها أو شيئا غير موجود؟ أرسل صورة أو رقم القطعة أو القطعة القديمة ونوفرها محليا أو نستوردها."),
        b: [L("Cross-referencing by part number", "المطابقة برقم القطعة"), L("Equivalent brands when the original is unavailable", "ماركات بديلة مكافئة عند عدم توفر الأصلي")] },
      { id: "logistics", icon: "truck", h: L("Delivery across Egypt", "التوصيل في جميع أنحاء مصر"), p: L("Delivered to your store, site or hotel in Greater Cairo, Alexandria, the Canal cities, the Red Sea and Upper Egypt. Large orders are scheduled to suit your receiving hours.", "توصيل إلى مخزنك أو موقعك أو فندقك في القاهرة الكبرى والإسكندرية ومدن القناة والبحر الأحمر والصعيد. الطلبات الكبيرة تجدول حسب مواعيد الاستلام لديك.") },
    ],
    cta: L("Talk to us about your supply needs", "تحدث معنا عن احتياجاتك"),
  },
  industries: {
    title: L("Industries we supply", "القطاعات التي نوردها"),
    lead: L("Every sector buys differently. These are the ones we know best and the departments they use most.", "كل قطاع يشتري بطريقة مختلفة. هذه القطاعات التي نعرفها جيدا والأقسام الأكثر طلبا لديها."),
    industries: [
      { id: "manufacturing", icon: "factory", h: L("Manufacturing", "المصانع"), p: L("Maintenance spares, cutting tools, lubricants, PPE and packaging to keep lines running.", "قطع صيانة وعدد قطع وزيوت ومهمات وقاية وتغليف لاستمرار خطوط الإنتاج."), d: ["fasteners", "power_transmission", "lubricants", "safety", "packaging"] },
      { id: "construction", icon: "brick", h: L("Construction & real estate", "المقاولات والتطوير العقاري"), p: L("Site tools, fixings, PPE, electrical and plumbing materials, delivered to site.", "عدد مواقع ومثبتات ومهمات وقاية ومواد كهرباء وسباكة، توصيل للموقع."), d: ["construction", "hardware", "electrical", "plumbing", "safety"] },
      { id: "hospitality", icon: "amenity", h: L("Hotels & hospitality", "الفنادق والضيافة"), p: L("Linen, amenities, cleaning, kitchen equipment, uniforms and engineering spares for resorts and city hotels.", "مفروشات ومستلزمات ضيوف ونظافة ومعدات مطابخ وزي وقطع غيار هندسية للمنتجعات وفنادق المدن."), d: ["hospitality", "cleaning", "kitchen_equipment", "uniforms", "hvac"] },
      { id: "oil-gas", icon: "oil", h: L("Oil, gas & energy", "البترول والغاز والطاقة"), p: L("Flame-resistant PPE, gas detection, gaskets, valves, hydraulics and lifting gear.", "مهمات وقاية مقاومة للهب وكشف غازات وجوانات وبلوف وهيدروليك ومعدات رفع."), d: ["safety", "sealing", "plumbing", "hydraulics", "material_handling"] },
      { id: "power", icon: "generator", h: L("Power & utilities", "الكهرباء والمرافق"), p: L("Cable, switchgear, test equipment, generators and pumps.", "كابلات ومفاتيح وأجهزة قياس ومولدات وطلمبات."), d: ["electrical", "test_measurement", "machinery", "pumps", "motors"] },
      { id: "food", icon: "pot", h: L("Food & beverage", "الأغذية والمشروبات"), p: L("Food-safe cleaning, colour-coded tools, hygiene PPE, data loggers and stainless supplies.", "منظفات آمنة للأغذية وعدد ملونة ومهمات وقاية صحية وأجهزة تسجيل حرارة ومستلزمات ستانلس."), d: ["cleaning", "kitchen_equipment", "safety", "test_measurement", "raw_materials"] },
      { id: "healthcare", icon: "extinguisher", h: L("Healthcare & pharma", "الرعاية الصحية والأدوية"), p: L("Gloves, scrubs, disinfectants, storage and temperature monitoring.", "قفازات وزي طبي ومطهرات ووسائل تخزين ومراقبة الحرارة."), d: ["safety", "uniforms", "cleaning", "test_measurement", "office"] },
      { id: "government", icon: "badge", h: L("Government & public sector", "الجهات الحكومية والقطاع العام"), p: L("Office supplies, furniture, cleaning, uniforms and maintenance materials against tenders and framework orders.", "أدوات مكتبية ونظافة وزي ومواد صيانة بالمناقصات وأوامر التوريد الإطارية."), d: ["office", "cleaning", "uniforms", "hardware", "electrical"] },
      { id: "data-centres", icon: "breaker", h: L("Data centres & telecom", "مراكز البيانات والاتصالات"), p: L("Cable management, UPS batteries, cooling spares, ESD-safe tools and test meters.", "تنظيم كابلات وبطاريات UPS وقطع تبريد وعدد وأجهزة قياس."), d: ["electrical", "electronics", "hvac", "test_measurement", "tools"] },
      { id: "logistics", icon: "truck", h: L("Logistics & warehousing", "اللوجستيات والمخازن"), p: L("Racking, pallet trucks, stretch film, labels, hi-vis and fleet consumables.", "أرفف وعربات بالتات وستريتش ولاصقات وسترات عاكسة ومستلزمات أساطيل."), d: ["material_handling", "packaging", "automotive", "safety", "lighting"] },
      { id: "education", icon: "paper", h: L("Education & offices", "التعليم والمكاتب"), p: L("Stationery, breakroom, cleaning, lighting and facility repairs for schools, universities and corporate offices.", "أدوات مكتبية ومستلزمات استراحة ونظافة وإضاءة وصيانة مباني للمدارس والجامعات والمكاتب."), d: ["office", "cleaning", "lighting", "paint", "hardware"] },
      { id: "facilities", icon: "leaf", h: L("Facility management & compounds", "إدارة المنشآت والكمبوندات"), p: L("Landscaping, pumps, paint, lighting, security and cleaning for compounds and malls.", "حدائق وطلمبات ودهانات وإضاءة وأمن ونظافة للكمبوندات والمولات."), d: ["outdoor", "pumps", "paint", "security", "cleaning"] },
    ],
    cta: L("Get a supply plan for your sector", "احصل على خطة توريد لقطاعك"),
  },
  guides: {
    title: L("Buying guides", "أدلة الشراء"),
    lead: L("Short, practical guides to help your team order the right item the first time.", "أدلة قصيرة وعملية لمساعدة فريقك على طلب الصنف الصحيح من أول مرة."),
    sections: [
      { id: "bolt-grades", icon: "bolt", h: L("Bolt grades and finishes explained", "شرح درجات وتشطيبات المسامير"), p: L("The number on a metric bolt head is its property class. In 8.8, the first 8 means a tensile strength of about 800 MPa and the second 8 means it yields at 80% of that. Grade 4.6 suits light fixing, 8.8 is the general structural choice and 10.9 is for high-load joints. Zinc plating is fine indoors, hot-dip galvanised for outdoor steelwork, and stainless A2 or A4 for food plants and coastal sites.", "الرقم على رأس المسمار المتري هو درجة المتانة. في 8.8 الرقم الأول يعني مقاومة شد حوالي 800 ميجا باسكال والثاني أن الخضوع عند 80% منها. درجة 4.6 للتثبيت الخفيف، و8.8 الاختيار الإنشائي العام، و10.9 للوصلات عالية الحمل. التجلفن الكهربائي مناسب للداخل، والغمس الساخن للحديد الخارجي، والستانلس A2 أو A4 لمصانع الأغذية والمواقع الساحلية.") },
      { id: "glove-levels", icon: "glove", h: L("Choosing cut-resistant gloves", "اختيار قفازات مقاومة القطع"), p: L("EN 388 gloves show four or five ratings. The letter at the end (A to F) is the cut level from the TDM test. Level A or B suits general handling, C for sheet metal and glass, and D to F for sharp blades and metal stamping. Pick a coating for the task: PU for dry precision work, nitrile for oily parts, latex for grip in wet conditions.", "قفازات EN 388 تحمل أربعة أو خمسة تقييمات. الحرف في النهاية (من A إلى F) هو مستوى مقاومة القطع. المستوى A أو B للمناولة العامة، وC للصاج والزجاج، ومن D إلى F للشفرات الحادة وكبس المعادن. اختر الطلاء حسب العمل: PU للأعمال الدقيقة الجافة، والنيتريل للقطع المزيتة، واللاتكس للإمساك في الأجواء المبتلة.") },
      { id: "extinguishers", icon: "extinguisher", h: L("Which fire extinguisher where", "أي طفاية في أي مكان"), p: L("Dry powder (ABC) covers solids, liquids and gases, so it is the default for warehouses, vehicles and general areas. CO2 is for electrical panels and server rooms because it leaves no residue. Use wet chemical (class F) near deep fryers. Place units near exits, mount them so the handle is about 1 m high, and have them inspected every year.", "البودرة الجافة (ABC) تغطي المواد الصلبة والسوائل والغازات، فهي الاختيار الأساسي للمخازن والسيارات والمناطق العامة. ثاني أكسيد الكربون للوحات الكهرباء وغرف السيرفرات لأنه لا يترك أثرا. استخدم الكيماويات المبتلة (فئة F) بجوار القلايات. ضع الطفايات قرب المخارج وثبتها بحيث يكون المقبض على ارتفاع حوالي متر، وافحصها سنويا.") },
      { id: "cable-sizing", icon: "cable", h: L("Picking the right cable size", "اختيار مقاس الكابل المناسب"), p: L("As a rough guide for copper building wire in conduit at 220 V: 1.5 mm2 for lighting circuits, 2.5 mm2 for socket circuits, 4 mm2 for water heaters and 6 mm2 or more for AC units and sub-panels. Long runs and hot ceilings need a bigger size. Always confirm with your electrical engineer and the breaker rating.", "كدليل تقريبي لأسلاك النحاس داخل المواسير على 220 فولت: 1.5 مم2 لدوائر الإنارة، و2.5 مم2 لدوائر البرايز، و4 مم2 للسخانات، و6 مم2 أو أكثر للتكييفات واللوحات الفرعية. المسافات الطويلة والأسقف الساخنة تحتاج مقاسا أكبر. تأكد دائما مع مهندس الكهرباء ومع قيمة القاطع.") },
      { id: "respirators", icon: "mask", h: L("Dust masks and respirators", "الكمامات وأجهزة التنفس"), p: L("FFP1 is for nuisance dust, FFP2 for cement, wood and most construction dust, and FFP3 for fine hazardous dust such as silica and some powders. For paint, solvents or chemicals you need a half mask with the right gas filter, not a dust mask. A tight fit matters more than the rating, so beards and wrong sizes reduce protection.", "FFP1 للأتربة الخفيفة، وFFP2 للأسمنت والخشب ومعظم أتربة البناء، وFFP3 للأتربة الدقيقة الخطرة مثل السيليكا وبعض البودرات. للدهانات والمذيبات والكيماويات تحتاج نصف قناع بفلتر الغاز المناسب وليس كمامة أتربة. إحكام الكمامة أهم من درجتها، فاللحية والمقاس الخطأ يقللان الحماية.") },
      { id: "led-retrofit", icon: "bulb", h: L("Switching to LED", "التحويل إلى LED"), p: L("Replace 36 W fluorescent tubes with 18 W LED T8 tubes, 400 W metal halide high bays with 150 W LED, and 50 W halogen spots with 5 to 7 W GU10. Choose 4000 K for offices and warehouses and 3000 K for hotels and homes. The energy saving usually pays for the lamps within the first year of daily use.", "استبدل اللمبات الفلورسنت 36 وات بلمبات LED T8 18 وات، وكشافات الميتال هاليد 400 وات بكشافات LED 150 وات، والسبوتات الهالوجين 50 وات بلمبات GU10 من 5 إلى 7 وات. اختر 4000 كلفن للمكاتب والمخازن و3000 كلفن للفنادق والمنازل. التوفير في الكهرباء يغطي ثمن اللمبات عادة في أول سنة من الاستخدام اليومي.") },
    ],
    cta: L("Not sure what to order? Ask us", "غير متأكد مما تطلبه؟ اسألنا"),
  },
  "import-export": {
    title: L("Import & Export", "الاستيراد والتصدير"),
    lead: L("When the right product is not available in Egypt, we bring it in. When Egyptian products are needed abroad, we ship them out.", "عندما لا يتوفر المنتج المناسب في مصر نستورده، وعندما تحتاج منتجات مصرية في الخارج نصدرها."),
    sections: [
      { id: "import", icon: "globe", h: L("Importing for you", "الاستيراد لحسابك"), p: L("We source from manufacturers in China, Turkey, Europe and the Gulf, check samples, arrange freight and clear customs, then deliver to your door with an Egyptian tax invoice.", "نوفر من المصنعين في الصين وتركيا وأوروبا والخليج، ونفحص العينات ونرتب الشحن ونخلص الجمارك، ثم نسلم لبابك بفاتورة ضريبية مصرية."),
        b: [L("Supplier search and price comparison", "البحث عن الموردين ومقارنة الأسعار"), L("Sample approval before mass order", "اعتماد العينة قبل الطلب الكبير"), L("Sea and air freight, customs clearance", "شحن بحري وجوي وتخليص جمركي"), L("One landed price in Egyptian pounds", "سعر واحد شامل بالجنيه المصري")] },
      { id: "export", icon: "truck", h: L("Exporting Egyptian products", "تصدير المنتجات المصرية"), p: L("Textiles, uniforms, cleaning products, packaging and building materials made in Egypt, supplied to buyers in Africa, the Gulf and Europe.", "منسوجات وزي موحد ومنتجات نظافة وتغليف ومواد بناء مصنوعة في مصر، نوردها للمشترين في أفريقيا والخليج وأوروبا."),
        b: [L("Factory sourcing and quality checks", "التوريد من المصانع وفحص الجودة"), L("Export documents and certificates of origin", "مستندات التصدير وشهادات المنشأ"), L("Consolidated shipments", "شحنات مجمعة")] },
    ],
    cta: L("Send us what you need to import or export", "أرسل لنا ما تريد استيراده أو تصديره"),
  },
  about: {
    title: L("About Palm General Supply", "عن بالم للتوريدات العامة"),
    lead: L("General supplies, procurement, import and export for businesses in Egypt.", "توريدات عامة ومشتريات واستيراد وتصدير للشركات في مصر."),
    sections: [
      { id: "what", icon: "box", h: L("What we do", "ماذا نفعل"), p: L("Palm General Supply is a single source for the thousands of small and large items a business needs to operate: from bolts and gloves to cleaning chemicals, uniforms, tools, lighting and spare parts. We quote fast, deliver on time and keep the paperwork clean.", "بالم للتوريدات العامة مصدر واحد لآلاف الأصناف الصغيرة والكبيرة التي يحتاجها أي عمل: من المسامير والقفازات إلى منتجات النظافة والزي والعدد والإضاءة وقطع الغيار. نسعر بسرعة ونورد في الموعد ونحافظ على المستندات سليمة.") },
      { id: "how", icon: "service", h: L("How we work", "كيف نعمل"), p: L("You send a list. We check every line, suggest equivalents when something is not available, and send one itemised quotation. Once approved, we deliver, invoice and follow up until the order is closed.", "ترسل القائمة. نراجع كل بند ونقترح البدائل عند عدم التوفر، ونرسل عرض سعر واحد مفصل. بعد الموافقة نورد ونصدر الفاتورة ونتابع حتى إغلاق الطلب.") },
      { id: "promise", icon: "quote", h: L("Our promise", "وعدنا"), p: L("Quotation within 24 hours on working days, honest lead times, genuine products with the documents that should come with them, and a real person who answers the phone.", "عرض سعر خلال 24 ساعة في أيام العمل، ومواعيد توريد صادقة، ومنتجات أصلية بمستنداتها، وشخص حقيقي يرد على الهاتف.") },
    ],
    cta: L("Start with a quotation", "ابدأ بعرض سعر"),
  },
  help: {
    title: L("Help & FAQ", "المساعدة والأسئلة الشائعة"),
    lead: L("Answers to the questions buyers ask us most.", "إجابات الأسئلة الأكثر شيوعا من المشترين."),
    faq: [
      [L("How do I get a price?", "كيف أحصل على السعر؟"), L("Add items to your quote list, or send us a list by WhatsApp or email. We reply with an itemised quotation, usually within 24 hours on working days.", "أضف الأصناف إلى قائمة الطلب، أو أرسل القائمة بالواتساب أو البريد. نرد بعرض سعر مفصل خلال 24 ساعة غالبا في أيام العمل.")],
      [L("Why are prices not shown on the website?", "لماذا لا تظهر الأسعار على الموقع؟"), L("Prices depend on brand, quantity, delivery location and exchange rates, so we quote each request to give you the best current price.", "الأسعار تعتمد على الماركة والكمية ومكان التوصيل وسعر الصرف، لذلك نسعر كل طلب لنعطيك أفضل سعر حالي.")],
      [L("Is there a minimum order?", "هل يوجد حد أدنى للطلب؟"), L("No fixed minimum. Small orders may carry a delivery charge, which we show clearly on the quotation.", "لا يوجد حد أدنى ثابت. الطلبات الصغيرة قد يضاف لها مصاريف توصيل نوضحها في عرض السعر.")],
      [L("Where do you deliver?", "أين توصلون؟"), L("Across Egypt. Greater Cairo and Alexandria usually within 1 to 3 working days for stocked items; other governorates and imported items on the lead time stated in the quotation.", "في جميع أنحاء مصر. القاهرة الكبرى والإسكندرية عادة خلال 1 إلى 3 أيام عمل للأصناف المتوفرة، وباقي المحافظات والأصناف المستوردة حسب المدة المذكورة في عرض السعر.")],
      [L("How can I pay?", "كيف أدفع؟"), L("Bank transfer, cheque, Instapay or cash on delivery for approved orders. Credit terms are available for registered companies after the first orders.", "تحويل بنكي أو شيك أو إنستاباي أو نقدا عند الاستلام للطلبات المعتمدة. تتاح فترات سداد للشركات المسجلة بعد أول الطلبات.")],
      [L("Do you issue tax invoices?", "هل تصدرون فواتير ضريبية؟"), L("Yes, every order comes with an Egyptian e-invoice including VAT.", "نعم، كل طلب يصدر له فاتورة إلكترونية مصرية شاملة ضريبة القيمة المضافة.")],
      [L("Can you supply an item that is not on the website?", "هل يمكنكم توريد صنف غير موجود على الموقع؟"), L("Yes. Most of what we supply is sourced to order. Use 'Add an item that is not listed' on the quote page, or send a photo or part number.", "نعم. معظم ما نورده يتم توفيره حسب الطلب. استخدم خانة إضافة صنف غير موجود في صفحة الطلب، أو أرسل صورة أو رقم القطعة.")],
      [L("What if something arrives wrong or damaged?", "ماذا لو وصل صنف خطأ أو تالف؟"), L("Tell us within 3 days of delivery with a photo and we replace it or credit you. Items made or imported to order cannot be returned unless faulty.", "أبلغنا خلال 3 أيام من الاستلام مع صورة ونستبدله أو نخصمه. الأصناف المصنعة أو المستوردة حسب الطلب لا ترد إلا في حالة العيب.")],
    ],
    cta: L("Still have a question? Contact us", "لديك سؤال آخر؟ تواصل معنا"),
  },
  contact: {
    title: L("Contact us", "تواصل معنا"),
    lead: L("Call, WhatsApp, email or send the form. We answer every message on the same working day.", "اتصل أو راسلنا بالواتساب أو البريد أو أرسل النموذج. نرد على كل رسالة في نفس يوم العمل."),
    contact: true,
  },
  terms: {
    title: L("Terms of sale", "شروط البيع"),
    lead: L("The basic terms that apply to quotations and orders from Palm General Supply.", "الشروط الأساسية المطبقة على عروض الأسعار والطلبات من بالم للتوريدات العامة."),
    sections: [
      { id: "quotes", h: L("Quotations", "عروض الأسعار"), p: L("Quotations are valid for the period stated on them, or 7 days if no period is stated. Prices of imported items may be revised if the exchange rate moves before the order is confirmed.", "عروض الأسعار سارية للمدة المذكورة بها أو 7 أيام إذا لم تذكر مدة. أسعار الأصناف المستوردة قد تعدل إذا تغير سعر الصرف قبل تأكيد الطلب.") },
      { id: "orders", h: L("Orders and delivery", "الطلبات والتوريد"), p: L("An order is confirmed by a purchase order, signed quotation or written approval. Delivery times are estimates given in good faith; we tell you straight away if anything changes.", "يتأكد الطلب بأمر شراء أو عرض سعر موقع أو موافقة كتابية. مواعيد التوريد تقديرية بحسن نية، ونبلغك فورا بأي تغيير.") },
      { id: "payment", h: L("Payment", "السداد"), p: L("Payment is due as agreed on the quotation. Goods remain the property of Palm General Supply until paid in full.", "السداد مستحق حسب المتفق عليه في عرض السعر. تظل البضاعة ملكا لبالم للتوريدات العامة حتى السداد الكامل.") },
      { id: "returns", h: L("Returns and warranty", "المرتجعات والضمان"), p: L("Report shortages or damage within 3 days of delivery. Manufacturer warranties pass to you in full. Custom and imported-to-order items are not returnable unless faulty.", "أبلغ عن النقص أو التلف خلال 3 أيام من الاستلام. ضمانات المصنعين تنتقل إليك بالكامل. الأصناف المصنعة أو المستوردة حسب الطلب لا ترد إلا في حالة العيب.") },
    ],
  },
  privacy: {
    title: L("Privacy", "الخصوصية"),
    lead: L("How we handle the details you send us.", "كيف نتعامل مع البيانات التي ترسلها لنا."),
    sections: [
      { id: "collect", h: L("What we collect", "ما نجمعه"), p: L("When you request a quotation we keep your name, company, phone, email and the items you asked for. Your quote list is stored only in your own browser until you send it.", "عند طلب عرض سعر نحتفظ باسمك وشركتك وهاتفك وبريدك والأصناف المطلوبة. قائمة الطلب تحفظ في متصفحك فقط حتى ترسلها.") },
      { id: "use", h: L("How we use it", "كيف نستخدمها"), p: L("Only to prepare quotations, deliver orders, invoice and follow up with you. We do not sell or share your details with third parties, except couriers and authorities where the law requires.", "فقط لإعداد عروض الأسعار وتوريد الطلبات والفوترة والمتابعة معك. لا نبيع بياناتك ولا نشاركها مع أطراف أخرى إلا شركات الشحن والجهات الرسمية حين يتطلب القانون.") },
      { id: "rights", h: L("Your choices", "اختياراتك"), p: L("Ask us at any time to see, correct or delete your details.", "اطلب منا في أي وقت الاطلاع على بياناتك أو تصحيحها أو حذفها.") },
    ],
  },
};

const NAV_PAGES = [["services", L("Services & Solutions", "الخدمات والحلول")], ["industries", L("Industries", "القطاعات")], ["offers", L("Offers", "العروض")], ["guides", L("Buying guides", "أدلة الشراء")], ["blog", L("Blog", "المدونة")], ["import-export", L("Import & Export", "الاستيراد والتصدير")], ["about", L("About", "من نحن")], ["contact", L("Contact", "تواصل معنا")]];

Object.assign(PAGES, {
  offers: {
    title: L("Offers", "العروض"),
    lead: L("Featured products and seasonal offers for business buyers. Sign up to the newsletter to hear about new offers first.", "منتجات مميزة وعروض موسمية لمشتري الشركات. اشترك في النشرة لتعرف العروض الجديدة أولا."),
    featured: true,
    sections: [
      { id: "bulk", icon: "box", h: L("Bulk pricing", "أسعار الكميات"), p: L("Every quotation shows quantity breaks. Order a full carton, pallet or season's stock and the unit price drops.", "كل عرض سعر يوضح خصومات الكميات. اطلب كرتونة أو بالتة أو مخزون موسم كامل وينخفض سعر الوحدة.") },
      { id: "first-order", icon: "quote", h: L("New accounts", "الحسابات الجديدة"), p: L("Opening a business account? Ask your account manager about introductory pricing on your first order.", "تفتح حساب شركة جديد؟ اسأل مسؤول الحساب عن الأسعار التعريفية لأول طلب.") },
      { id: "seasonal", icon: "leaf", h: L("Seasonal ranges", "منتجات المواسم"), p: L("Summer cooling and hydration, Ramadan hospitality, back-to-school stationery and winter workwear, stocked before the season starts.", "التبريد ومياه الشرب صيفا، ومستلزمات الضيافة في رمضان، والأدوات المكتبية مع بداية الدراسة، وملابس العمل الشتوية، متوفرة قبل بداية الموسم.") },
    ],
    cta: L("Ask for this month's prices", "اطلب أسعار هذا الشهر"),
  },
  coverage: {
    title: L("Delivery areas", "مناطق التوصيل"),
    lead: L("We deliver to businesses across Egypt from our Cairo base. Typical lead times for stocked items:", "نوصل للشركات في جميع أنحاء مصر من مقرنا في القاهرة. مدد التوريد المعتادة للأصناف المتوفرة:"),
    sections: [
      { id: "cairo", icon: "truck", h: L("Greater Cairo and Giza", "القاهرة الكبرى والجيزة"), p: L("1 to 2 working days, including New Cairo, the New Capital, 6th of October and Sheikh Zayed.", "من 1 إلى 2 يوم عمل، يشمل القاهرة الجديدة والعاصمة الإدارية و6 أكتوبر والشيخ زايد.") },
      { id: "delta", icon: "truck", h: L("Alexandria, Delta and Canal", "الإسكندرية والدلتا والقناة"), p: L("2 to 3 working days to Alexandria, Tanta, Mansoura, Ismailia, Suez, Port Said and the industrial zones.", "من 2 إلى 3 أيام عمل للإسكندرية وطنطا والمنصورة والإسماعيلية والسويس وبورسعيد والمناطق الصناعية.") },
      { id: "redsea", icon: "truck", h: L("Red Sea and South Sinai", "البحر الأحمر وجنوب سيناء"), p: L("3 to 5 working days to Hurghada, El Gouna, Sahl Hasheesh, Marsa Alam and Sharm El Sheikh. Hotel deliveries scheduled with your receiving team.", "من 3 إلى 5 أيام عمل للغردقة والجونة وسهل حشيش ومرسى علم وشرم الشيخ. توصيل الفنادق يجدول مع فريق الاستلام لديكم.") },
      { id: "upper", icon: "truck", h: L("Upper Egypt and North Coast", "الصعيد والساحل الشمالي"), p: L("3 to 6 working days to Assiut, Sohag, Luxor, Aswan, El Alamein and Marsa Matrouh.", "من 3 إلى 6 أيام عمل لأسيوط وسوهاج والأقصر وأسوان والعلمين ومرسى مطروح.") },
    ],
    cta: L("Need it faster? Ask about same-day delivery", "تحتاجه أسرع؟ اسأل عن التوصيل في نفس اليوم"),
  },
  orders: {
    title: L("Track an order", "تتبع طلب"),
    lead: L("Enter your quotation or order number and we will send you the latest status on WhatsApp.", "أدخل رقم عرض السعر أو الطلب وسنرسل لك آخر حالة على الواتساب."),
    track: true,
  },
  suppliers: {
    title: L("Become a supplier", "كن موردا لنا"),
    lead: L("Manufacturers, importers and workshops: join our supplier network and reach business buyers across Egypt.", "المصنعون والمستوردون والورش: انضموا لشبكة موردينا وصلوا لمشتري الشركات في جميع أنحاء مصر."),
    sections: [
      { id: "who", icon: "factory", h: L("Who we work with", "مع من نعمل"), p: L("Egyptian factories, authorised distributors, importers and specialist workshops with consistent quality and clear lead times.", "المصانع المصرية والموزعون المعتمدون والمستوردون والورش المتخصصة بجودة ثابتة ومدد توريد واضحة.") },
      { id: "need", icon: "book", h: L("What we ask for", "ما نطلبه"), p: L("Commercial register, tax card, product list or catalogue, and price list. Samples for new product lines.", "السجل التجاري والبطاقة الضريبية وقائمة أو كتالوج المنتجات وقائمة الأسعار. وعينات لخطوط المنتجات الجديدة.") },
    ],
    form: { source: "supplier-signup", fields: ["company", "name", "phone", "email"], msg: L("What do you make or supply?", "ماذا تصنع أو تورد؟") },
  },
  documents: {
    title: L("Safety data sheets and documents", "نشرات السلامة والمستندات"),
    lead: L("Request safety data sheets, technical data sheets, test reports or certificates of conformity for any product you buy from us.", "اطلب نشرات بيانات السلامة أو النشرات الفنية أو تقارير الاختبار أو شهادات المطابقة لأي منتج تشتريه منا."),
    form: { source: "document-request", fields: ["company", "name", "phone", "email"], msg: L("Product name, order number and document needed", "اسم المنتج ورقم الطلب والمستند المطلوب") },
  },
  careers: {
    title: L("Careers", "الوظائف"),
    lead: L("We are a growing team in sales, purchasing, warehouse and delivery. If you like solving problems for customers, we would like to hear from you.", "نحن فريق ينمو في المبيعات والمشتريات والمخازن والتوصيل. إذا كنت تحب حل مشكلات العملاء نحب أن نسمع منك."),
    sections: [
      { id: "roles", icon: "service", h: L("Roles we hire for", "الوظائف التي نعين لها"), p: L("Account managers, purchasing officers, warehouse staff, drivers and customer service.", "مسؤولو حسابات وموظفو مشتريات وعاملو مخازن وسائقون وخدمة عملاء.") },
    ],
    form: { source: "career-application", fields: ["name", "phone", "email"], msg: L("Which role, your experience and a link to your CV", "الوظيفة وخبرتك ورابط سيرتك الذاتية") },
  },
  accessibility: {
    title: L("Accessibility", "سهولة الاستخدام"),
    lead: L("We want everyone to be able to use this website.", "نريد أن يتمكن الجميع من استخدام هذا الموقع."),
    sections: [
      { id: "what", h: L("What we do", "ما نفعله"), p: L("The site works with a keyboard and screen readers, supports Arabic and English, adapts to phones and respects reduced-motion settings.", "الموقع يعمل بلوحة المفاتيح وقارئات الشاشة، ويدعم العربية والإنجليزية، ويتكيف مع الهواتف ويحترم إعدادات تقليل الحركة.") },
      { id: "help", h: L("Need help?", "تحتاج مساعدة؟"), p: L("If anything is hard to use, call or WhatsApp us and we will take your order directly.", "إذا كان أي شيء صعب الاستخدام، اتصل بنا أو راسلنا بالواتساب ونأخذ طلبك مباشرة.") },
    ],
  },
  blog: { title: L("Blog", "المدونة"), lead: L("Practical articles on buying, safety and running facilities in Egypt.", "مقالات عملية عن الشراء والسلامة وإدارة المنشآت في مصر."), blog: true },
});
const NAV_SERVICES = [["service-model", L("Account service", "خدمة الحسابات")], ["inventory", L("Inventory management", "إدارة المخزون")], ["contracts", L("Corporate contracts", "التعاقدات المؤسسية")], ["lean", L("Kitting & 5S", "التجهيز و5S")], ["safety", L("Safety programmes", "برامج السلامة")], ["manufacturing", L("Custom manufacturing", "التصنيع حسب الطلب")], ["sourcing", L("Technical sourcing", "التوريد الفني")], ["logistics", L("Delivery", "التوصيل")]];
const FOOT = [
  [L("Company", "الشركة"), [["about", L("About us", "من نحن")], ["careers", L("Careers", "الوظائف")], ["suppliers", L("Become a supplier", "كن موردا")], ["blog", L("Blog", "المدونة")]]],
  [L("Connect", "تواصل"), [["contact", L("Contact us", "تواصل معنا")], ["coverage", L("Delivery areas", "مناطق التوصيل")], ["orders", L("Track an order", "تتبع طلب")], ["import-export", L("International orders", "الطلبات الدولية")]]],
  [L("Governance", "الحوكمة"), [["terms", L("Terms of sale", "شروط البيع")], ["privacy", L("Privacy", "الخصوصية")], ["accessibility", L("Accessibility", "سهولة الاستخدام")]]],
  [L("Resources", "الموارد"), [["guides", L("Buying guides", "أدلة الشراء")], ["documents", L("Safety data sheets", "نشرات السلامة")], ["help", L("Help & FAQ", "المساعدة")], ["offers", L("Offers", "العروض")]]],
];
window.NAV_SERVICES = NAV_SERVICES; window.FOOT = FOOT;

window.PAGES = PAGES; window.NAV_PAGES = NAV_PAGES;
