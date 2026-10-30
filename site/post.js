/* Renders a blog article in the current language (static English copy is in the HTML for search engines) */
(function () {
  function render() {
    const S = window.Site; const slug = document.body.dataset.slug; const p = (window.POSTS || []).find((x) => x.slug === slug); if (!p) return;
    const ar = S.lang === "ar"; const tx = (o) => S.tx(o);
    const d = new Date(p.date + "T00:00:00").toLocaleDateString(ar ? "ar-EG" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
    document.title = tx(p.title) + " | Palm General Supply";
    const body = (p.body[S.lang] || p.body.en).map(([h, t]) => (h ? `<h2>${S.esc(h)}</h2>` : "") + `<p>${S.esc(t)}</p>`).join("");
    const more = (window.POSTS || []).filter((x) => x.slug !== slug).slice(0, 2).map((x) => S.postCard(x)).join("");
    document.getElementById("main").innerHTML = `${S.crumbs([{ label: ar ? "المدونة" : "Blog", href: "blog.html" }, { label: tx(p.title) }])}<article class="article" id="article"><h1>${S.esc(tx(p.title))}</h1><time datetime="${p.date}">${d}</time><div class="hero-img"><img src="${p.img}" alt="" /></div>${body}
      <div class="pg-cta"><h2>${ar ? "تحتاج هذه المنتجات؟ اطلب عرض سعر" : "Need these products? Get a quotation"}</h2><div><a class="btn dark" href="quote.html" data-t="request_quote"></a></div></div></article>${more ? `<section class="article"><h2>${ar ? "اقرأ أيضا" : "Read next"}</h2><div class="bgrid">${more}</div></section>` : ""}`;
    S.apply();
  }
  document.addEventListener("DOMContentLoaded", render); document.addEventListener("langchange", render);
})();
