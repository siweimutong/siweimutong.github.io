(function () {
  function setLang(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    try { localStorage.setItem("site-lang", lang); } catch (e) {}
    applyBibsearch(lang);
  }
  function applyBibsearch(lang) {
    var bib = document.getElementById("bibsearch");
    if (bib) {
      bib.setAttribute("placeholder", lang === "zh" ? "输入关键词筛选" : "Type to filter");
    }
  }
  var saved = "en";
  try { saved = localStorage.getItem("site-lang") === "zh" ? "zh" : "en"; } catch (e) {}
  setLang(saved);
  document.addEventListener("DOMContentLoaded", function () {
    applyBibsearch(document.documentElement.getAttribute("data-lang"));
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var cur = document.documentElement.getAttribute("data-lang");
        setLang(cur === "zh" ? "en" : "zh");
      });
    }
  });
})();
