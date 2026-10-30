/* Renders a content page from PAGES[document.body.dataset.page] */
(function () {
  let P; const S = window.Site;
  const tx = (o) => (o ? o[S.lang] || o.en : "");
  let wa; const _wa = () => PALM.phone;
  function render() {
    wa = _wa().replace(/[^\d]/g, "");
    P = window.PAGES[document.body.dataset.page]; if (!P) return;
    const el = document.getElementById("page"); document.title = tx(P.title) + " | Palm General Supply";
    let h = `<div class="wrap">${S.crumbs([{ label: tx(P.title) }])}</div><section class="pg-hero"><div class="wrap"><h1>${S.esc(tx(P.title))}</h1><p>${S.esc(tx(P.lead))}</p></div></section><div class="wrap pg-body">`;
    if (P.sections) {
      if (P.sections.length > 3 && P.sections[0].icon) h += `<nav class="pg-toc" aria-label="On this page">${P.sections.map((x) => `<a href="#${x.id}">${x.icon ? icon(x.icon, 20) : ""}<span>${S.esc(tx(x.h))}</span></a>`).join("")}</nav>`;
      h += `<div class="pg-secs ${P.sections[0].icon ? "" : "plain"}">` + P.sections.map((x) => `<section class="pg-sec" id="${x.id}">${x.icon ? `<div class="pg-ico">${icon(x.icon, 34)}</div>` : ""}<div><h2>${S.esc(tx(x.h))}</h2><p>${S.esc(tx(x.p))}</p>${x.b ? `<ul class="ticks">${x.b.map((b) => `<li>${S.esc(tx(b))}</li>`).join("")}</ul>` : ""}</div></section>`).join("") + `</div>`;
    }
    if (P.industries) h += `<div class="ind-grid">` + P.industries.map((x) => `<article class="ind" id="${x.id}"><div class="pg-ico">${icon(x.icon, 34)}</div><h2>${S.esc(tx(x.h))}</h2><p>${S.esc(tx(x.p))}</p><div class="ind-deps" data-deps="${x.d.join(",")}"></div></article>`).join("") + `</div>`;
    if (P.faq) h += `<div class="faq">` + P.faq.map(([q, a]) => `<details><summary>${S.esc(tx(q))}</summary><p>${S.esc(tx(a))}</p></details>`).join("") + `</div>`;
    if (P.contact) h += `<div class="ct-grid"><div class="ct-cards">
        <a class="ct-card" href="tel:${PALM.phone.replace(/\s/g, "")}">${icon("chat", 28)}<span>${S.t("c_call")}</span><b dir="ltr">${PALM.phone}</b></a>
        <a class="ct-card" href="https://wa.me/${wa}">${icon("chat", 28)}<span>WhatsApp</span><b dir="ltr">${PALM.phone}</b></a>
        <a class="ct-card" href="mailto:${PALM.email}">${icon("paper", 28)}<span>${S.t("c_mail")}</span><b>${PALM.email}</b></a>
        <div class="ct-card">${icon("truck", 28)}<span>${S.lang === "ar" ? "مواعيد العمل" : "Working hours"}</span><b>${S.lang === "ar" ? "الأحد إلى الخميس، 9 ص إلى 6 م" : "Sunday to Thursday, 9 am to 6 pm"}</b></div>
      </div><form id="cform" class="form ct-form"><h2>${S.lang === "ar" ? "أرسل رسالة" : "Send a message"}</h2>
        <label><span data-t="fm_company"></span><input name="company" autocomplete="organization" /></label>
        <label><span data-t="fm_name"></span><input name="name" required autocomplete="name" /></label>
        <label><span data-t="fm_phone"></span><input name="phone" required dir="ltr" inputmode="tel" autocomplete="tel" /></label>
        <label><span data-t="fm_email"></span><input name="email" type="email" dir="ltr" autocomplete="email" /></label>
        <label><span>${S.lang === "ar" ? "رسالتك" : "Your message"}</span><textarea name="notes" rows="4" required></textarea></label>
        <button class="btn dark big" type="submit" data-t="fm_send"></button><p class="msg" id="cmsg" role="status"></p></form></div>`;
    if (P.featured) h += `<section><div class="sec-head"><h2>${S.lang === "ar" ? "منتجات مميزة" : "Featured products"}</h2><a class="more" href="catalog.html">${S.t("shop_all")} ›</a></div><div class="pgrid" id="feat"><div class="empty">${S.t("loading")}</div></div></section>`;
    if (P.track) h += `<form id="tform" class="form ct-form track"><label><span>${S.lang === "ar" ? "رقم عرض السعر أو الطلب" : "Quotation or order number"}</span><input name="ref" required dir="ltr" placeholder="Q-2026-0001" /></label><label><span data-t="fm_phone"></span><input name="phone" dir="ltr" inputmode="tel" /></label><button class="btn dark big" type="submit">${S.lang === "ar" ? "اسأل عن الحالة على الواتساب" : "Ask for status on WhatsApp"}</button></form>`;
    if (P.form) h += `<form id="gform" class="form ct-form"><h2>${S.lang === "ar" ? "أرسل بياناتك" : "Send your details"}</h2>${P.form.fields.map((k) => `<label><span data-t="fm_${k}"></span><input name="${k}" ${k === "name" || k === "phone" ? "required" : ""} ${k === "phone" || k === "email" ? 'dir="ltr"' : ""} ${k === "email" ? 'type="email"' : ""} /></label>`).join("")}<label><span>${S.esc(tx(P.form.msg))}</span><textarea name="notes" rows="4" required></textarea></label><button class="btn dark big" type="submit" data-t="fm_send"></button><p class="msg" id="gmsg" role="status"></p></form>`;
    if (P.blog) h += `<div class="bgrid">${(window.POSTS || []).map((p) => S.postCard(p)).join("")}</div><p class="muted">${S.lang === "ar" ? "مقالات جديدة كل أسبوع. اشترك في النشرة أسفل الصفحة." : "New articles every week. Sign up to the newsletter at the bottom of the page."}</p>`;
    if (P.cta) h += `<div class="pg-cta"><h2>${S.esc(tx(P.cta))}</h2><div><a class="btn dark" href="quote.html" data-t="request_quote"></a> <a class="btn wa" href="https://wa.me/${wa}">WhatsApp</a></div></div>`;
    h += `</div>`;
    el.innerHTML = h; S.apply();
    if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(() => t.scrollIntoView({ block: "start" }), 50); }
    if (P.industries) S.departments().then((deps) => document.querySelectorAll(".ind-deps").forEach((box) => { box.innerHTML = box.dataset.deps.split(",").map((c) => deps.find((d) => d.code === c)).filter(Boolean).map((d) => `<a href="catalog.html?d=${d.code}">${S.esc(S.pick(d, "name"))}</a>`).join(""); })).catch(() => {});
    if (P.featured) S.catalogue().then((rows) => { const f = rows.filter((x) => x.featured).concat(rows.filter((x) => !x.featured && x.images && x.images.length)).slice(0, 8); const box = document.getElementById("feat"); box.innerHTML = f.map((x) => S.card(x)).join(""); S.bindAdd(box, f); }).catch(() => {});
    const tf = document.getElementById("tform");
    if (tf) tf.onsubmit = (e) => { e.preventDefault(); const ref = tf.ref.value.trim(); const msg = (S.lang === "ar" ? "مرحبا، أريد معرفة حالة الطلب رقم " : "Hello, I would like the status of order ") + ref; window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(msg), "_blank"); };
    const gf = document.getElementById("gform");
    if (gf) gf.onsubmit = async (e) => { e.preventDefault(); const b = gf.querySelector("button"); b.disabled = true; const m = document.getElementById("gmsg"); const d = Object.fromEntries(new FormData(gf));
      try { await S.lead(P.form.source, d, d.notes); gf.reset(); m.textContent = S.lang === "ar" ? "تم الإرسال. سنتواصل معك قريبا." : "Sent. We will get back to you shortly."; m.className = "msg ok"; }
      catch (err) { m.textContent = S.lang === "ar" ? "تعذر الإرسال، راسلنا على الواتساب." : "Could not send. Please message us on WhatsApp."; m.className = "msg bad"; }
      b.disabled = false; };
    const f = document.getElementById("cform");
    if (f) f.onsubmit = async (e) => { e.preventDefault(); const b = f.querySelector("button"); b.disabled = true; const msg = document.getElementById("cmsg");
      try { await S.submitRequest(Object.fromEntries(new FormData(f)), []); f.reset(); msg.textContent = S.lang === "ar" ? "تم الإرسال. سنتواصل معك قريبا." : "Sent. We will get back to you shortly."; msg.className = "msg ok"; }
      catch (err) { msg.textContent = S.lang === "ar" ? "تعذر الإرسال، راسلنا على الواتساب." : "Could not send. Please message us on WhatsApp."; msg.className = "msg bad"; }
      b.disabled = false; };
  }
  document.addEventListener("DOMContentLoaded", render); document.addEventListener("langchange", render);
})();
