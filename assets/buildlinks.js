/* "Open the build" links: wherever a live build is named, put a link to it next to the name.
   One link per section (so a page that talks about ReconOS ten times shows it once per section),
   plus a button under the title on the build's own case page. */
(function () {
  "use strict";
  var B = [
    { id: "reconos", re: /\bReconOS\b/, u: "https://www.reconos.in", n: "ReconOS" },
    { id: "mid", re: /\bMID Procurement\b/, u: "https://workflowmidprocurement.vercel.app/", n: "MID Procurement" },
    { id: "routeiq", re: /\bRouteIQ\b/, u: "https://route-wise-ai-51.lovable.app", n: "the RouteIQ prototype" }
  ];
  var SKIP = "a, button, select, option, input, textarea, label, summary, script, style, svg, h1, .bl-pill, .bl-cta, [data-nobl]";
  var ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>';
  function pill(b, cls, text) {
    var a = document.createElement("a");
    a.className = cls; a.href = b.u; a.target = "_blank"; a.rel = "noopener";
    a.setAttribute("aria-label", "Open " + b.n + " (opens in a new tab)");
    a.innerHTML = (text || "Open the build") + " " + ARROW;
    return a;
  }
  function scope(el) { return el.closest("section, .panel, .box, .ep, details, li, tr, .card") || el.parentElement; }
  function pass(root) {
    // 1. Case page of a build: a clear button under the title.
    var m = location.hash.match(/#\/(?:r|case|show|pn)\/([a-z0-9-]+)/);
    var cur = m && B.filter(function (b) { return b.id === m[1]; })[0];
    if (cur) {
      var h1 = root.querySelector("h1");
      if (h1 && !root.querySelector(".bl-cta")) {
        var wrap = document.createElement("div"); wrap.className = "bl-cta-wrap";
        wrap.appendChild(pill(cur, "bl-cta", "Open the live build"));
        h1.parentNode.insertBefore(wrap, h1.nextSibling);
      }
    }
    // 2. Cards and rows that link to a build's case page: add the link beside the card
    //    (a link can't sit inside another link). Only where the card's wrapper holds just that card.
    B.forEach(function (b) {
      var sel = '#view a[href$="/' + b.id + '"], #view a[href*="/' + b.id + '?"]';
      Array.prototype.forEach.call(root.querySelectorAll(sel), function (a) {
        if (a.classList.contains("bl-pill") || a.classList.contains("bl-cta") || a.closest("nav, [data-nobl]")) return;
        if (!/#\/(r|case|show|pn)\//.test(a.getAttribute("href") || "")) return;
        var par = a.parentElement; if (!par || par.getAttribute("data-blc")) return;
        var links = Array.prototype.filter.call(par.querySelectorAll('a[href^="#/"]'), function (x) { return !x.classList.contains("bl-pill"); });
        if (links.length !== 1) return;
        var el = pill(b, getComputedStyle(a).display === "inline" ? "bl-pill" : "bl-pill bl-card");
        a.parentNode.insertBefore(el, a.nextSibling);
        par.setAttribute("data-blc", "1");
      });
    });
    // 3. Inline: first mention of each build in each section gets a link.
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), nodes = [], t;
    while ((t = walker.nextNode())) nodes.push(t);
    nodes.forEach(function (node) {
      var el = node.parentElement; if (!el || el.closest(SKIP)) return;
      B.forEach(function (b) {
        if (!node.parentNode || !b.re.test(node.nodeValue)) return;
        if (cur && cur.id === b.id) return; // the button under the title covers its own page
        var sc = scope(el); if (!sc) return;
        var done = (sc.getAttribute("data-bl") || "").split(" ");
        if (done.indexOf(b.id) > -1) return;
        var mm = node.nodeValue.match(b.re), end = mm.index + mm[0].length;
        var rest = node.splitText(end);
        rest.parentNode.insertBefore(pill(b, "bl-pill"), rest);
        sc.setAttribute("data-bl", (done.join(" ") + " " + b.id).trim());
      });
    });
  }
  var root = document.getElementById("view"), q = 0;
  if (!root) return;
  function run() { q = 0; obs.disconnect(); try { pass(root); } catch (e) {} obs.observe(root, { childList: true, subtree: true }); }
  var obs = new MutationObserver(function () { if (!q) q = requestAnimationFrame(run); });
  run();
})();
