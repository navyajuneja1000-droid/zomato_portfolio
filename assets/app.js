/* Navya Juneja · Program Manager portfolio, shaped like a food delivery app.
   Vanilla JS, hash routing, no build step. Content lives in data.js. */
(function () {
  "use strict";
  var D = window.NJ;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function load(k, d) { try { var v = localStorage.getItem("znj_" + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem("znj_" + k, JSON.stringify(v)); } catch (e) {} }
  var RM = false; try { RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  var S = {
    cart: load("cart", []).filter(function (id) { return !!byId(id); }),
    slot: load("slot", "intro"),
    role: load("role", "Program Manager"),
    note: load("note", ""),
    calc: { ver: 2, cat: 3, fin: 2, bounce: 2, intake: false, parallel: false }
  };

  /* ---------------- icons ---------------- */
  function ic(d, vb) { return '<svg viewBox="' + (vb || "0 0 24 24") + '" aria-hidden="true" focusable="false">' + d + "</svg>"; }
  var I = {
    search: ic('<circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 20l-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'),
    pin: ic('<path d="M12 22s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12z" fill="currentColor"/><circle cx="12" cy="10" r="2.6" fill="#fff"/>'),
    down: ic('<path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>'),
    right: ic('<path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>'),
    left: ic('<path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>'),
    tri: ic('<path d="M9 6l7 6-7 6z" fill="currentColor"/>'),
    star: ic('<path d="M12 2.8l2.8 5.8 6.3.8-4.6 4.4 1.1 6.3L12 17.1 6.4 20.1l1.1-6.3L2.9 9.4l6.3-.8z" fill="currentColor"/>'),
    bag: ic('<path d="M5 8h14l-1.2 12.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8" fill="none" stroke="currentColor" stroke-width="2"/>'),
    plus: ic('<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>'),
    minus: ic('<path d="M5 12h14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>'),
    check: ic('<path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>'),
    x: ic('<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>'),
    home: ic('<path d="M4 11l8-7 8 7v8.5a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z" fill="currentColor"/>'),
    compass: ic('<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15.5 8.5l-2 5-5 2 2-5z" fill="currentColor"/>'),
    book: ic('<path d="M5 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H5zM19 4h-4a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'),
    clock: ic('<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'),
    scooter: ic('<circle cx="6" cy="17" r="2.6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="17" r="2.6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8.6 17h6.8l2-6H20M14 7h3l.4 4M4 13h6l1.5 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="2.5" y="8" width="6" height="5" rx="1" fill="currentColor"/>'),
    user: ic('<circle cx="12" cy="8" r="4" fill="currentColor"/><path d="M4 20c1.2-4 4.4-6 8-6s6.8 2 8 6" fill="currentColor"/>'),
    filter: ic('<path d="M4 7h10M18 7h2M4 17h4M12 17h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="7" r="2.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="10" cy="17" r="2.2" fill="none" stroke="currentColor" stroke-width="2"/>'),
    ext: ic('<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'),
    mail: ic('<rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" stroke-width="2"/>'),
    phone: ic('<path d="M6.6 3.5l3 .5 1.3 4-2 1.6a12 12 0 0 0 5.5 5.5l1.6-2 4 1.3.5 3c0 1-1 2.1-2 2.1A16.5 16.5 0 0 1 4.5 5.5c0-1 1.1-2 2.1-2z" fill="currentColor"/>'),
    li: ic('<rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor"/><path d="M7.5 10v6.5M7.5 7.3v.2M11 16.5V10m0 3c0-2 1.2-3 2.7-3s2.3 1 2.3 3v3.5" stroke="#fff" stroke-width="2" stroke-linecap="round"/>'),
    dl: ic('<path d="M12 4v11M7 10.5l5 5 5-5M5 20h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'),
    info: ic('<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 11v6M12 7.5v.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>'),
    play: ic('<path d="M8 5.5v13l11-6.5z" fill="currentColor"/>'),
    link: ic('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>')
  };
  /* problem glyphs (drawn, 48px) */
  var PG = {
    parties: '<circle cx="16" cy="18" r="5"/><circle cx="32" cy="18" r="5"/><circle cx="24" cy="30" r="5"/><path d="M8 40c1-5 4-7 8-7M40 40c-1-5-4-7-8-7M17 44c1-5 3.5-7 7-7s6 2 7 7"/>',
    owner: '<circle cx="24" cy="24" r="14"/><path d="M24 15v9l6 4"/><path d="M38 9l3-3M10 9L7 6"/>',
    handoffs: '<rect x="6" y="14" width="12" height="12" rx="3"/><rect x="30" y="22" width="12" height="12" rx="3"/><path d="M18 20h7a3 3 0 0 1 3 3v3M26 24l2 3 2-3"/><path d="M12 32v4M36 14v-4"/>',
    leaks: '<path d="M24 8c6 8 10 13 10 19a10 10 0 0 1-20 0c0-6 4-11 10-19z"/><path d="M19 30a5 5 0 0 0 5 4"/><path d="M38 38l2 4M10 38l-2 4M24 42v3"/>',
    gates: '<path d="M10 42V12M38 42V12M10 18h28M10 28h28"/><path d="M16 18l6 10M28 18l6 10"/><circle cx="24" cy="8" r="2.5"/>',
    scale: '<path d="M8 34l16 8 16-8M8 26l16 8 16-8M8 18l16-8 16 8-16 8z"/>'
  };
  var DG = { /* domain glyphs (24px) */
    fintech: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M7 15h4"/>',
    edtech: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c2 2 10 2 12 0v-5M22 9v5"/>',
    d2c: '<path d="M5 8h14l-1.2 12H6.2z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    fmcg: '<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M7 8h10M10 13h4"/>',
    retail: '<path d="M4 9l1.5-5h13L20 9M4 9h16v11H4zM4 9c0 2 4 2 4 0 0 2 4 2 4 0 0 2 4 2 4 0 0 2 4 2 4 0"/>',
    research: '<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5M8 11l2 2 3-4"/>',
    ops: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
    revrec: '<path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18 3v4h-4M6 21v-4h4M10 9.5h4M10 12h4M12 9.5c1.5 0 2 1 2 1.5 0 1.5-2 2-4 3l4 2"/>'
  };
  function dglyph(id, col) { return '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="' + (col || "currentColor") + '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + (DG[id] || "") + "</svg>"; }

  function mark(sz) { sz = sz || 34; return '<svg class="mk" viewBox="0 0 64 64" width="' + sz + '" height="' + sz + '" aria-hidden="true"><rect width="64" height="64" rx="18" fill="#E23744"/><circle cx="32" cy="33" r="17" fill="none" stroke="#fff" stroke-width="5"/><path d="M24 33.5l5.5 5.5L41 27" fill="none" stroke="#fff" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'; }
  function logo() { return '<a class="logo" href="#/" aria-label="Navya Juneja, home">' + mark() + '<span class="lw"><b>navya<i>.</i></b><small>programs, delivered</small></span></a>'; }

  /* ---------------- lookups ---------------- */
  function byId(id) { return D.cases.filter(function (c) { return c.id === id; })[0]; }
  function dom(id) { return D.domains.filter(function (d) { return d.id === id; })[0]; }
  function skill(id) { var s = D.skills.filter(function (s) { return s.id === id; })[0]; return s ? s.name : id; }
  function prob(id) { return D.problems.filter(function (p) { return p.id === id; })[0]; }
  function coll(id) { return D.collections.filter(function (c) { return c.id === id; })[0]; }
  function inCart(id) { return S.cart.indexOf(id) > -1; }

  function provChip(p, big) {
    var x = D.prov[p]; if (!x) return "";
    return '<span class="rt rt-' + p + (big ? " big" : "") + '" title="' + esc(x.label + ": " + x.tip) + '">' + esc(x.label) + I.star + "</span>";
  }
  function provTag(p) { var x = D.prov[p]; return x ? '<span class="pt pt-' + p + '" title="' + esc(x.tip) + '">' + esc(x.label) + "</span>" : ""; }

  /* ---------------- cards ---------------- */
  function cover(c, cls) {
    var inner;
    if (c.cardImg) inner = '<img src="' + c.cardImg + '" alt="" loading="lazy">';
    else inner = '<div class="gen" style="--a:' + c.cover.a + ";--b:" + c.cover.b + '"><b>' + esc(c.cover.big) + "</b><small>" + esc(c.cover.small) + '</small>' + dglyph(c.domain, "rgba(255,255,255,.22)") + "</div>";
    return '<div class="cv ' + (cls || "") + '">' + inner + "</div>";
  }
  function addBtn(c, cls) {
    var on = inCart(c.id);
    return '<button class="add ' + (cls || "") + (on ? " on" : "") + '" type="button" data-act="cart" data-id="' + c.id + '" aria-pressed="' + on + '" aria-label="' + (on ? "Remove " : "Add ") + esc(c.short) + (on ? " from" : " to") + ' your interview order">' + (on ? I.check + "<span>Added</span>" : "<span>ADD</span>" + I.plus) + "</button>";
  }
  function card(c) {
    var d = dom(c.domain);
    return '<article class="rc">' +
      '<a class="rc-a" href="#/r/' + c.id + '">' +
        '<div class="rc-img">' + cover(c) +
          '<span class="rc-st">' + esc(c.status) + "</span>" +
          '<span class="rc-off"><b>' + esc(c.offer.t) + "</b> " + esc(c.offer.s) + "</span>" +
        "</div>" +
        '<div class="rc-b">' +
          '<div class="rc-r1"><h3>' + esc(c.short) + "</h3>" + provChip(c.rating) + "</div>" +
          '<div class="rc-r2"><span class="cu" style="--dc:' + d.col + '">' + esc(d.name) + '</span><span class="dur">' + I.clock + esc(c.dur) + "</span></div>" +
          '<p class="rc-sk">' + c.skills.slice(0, 3).map(skill).map(esc).join(" · ") + "</p>" +
          (c.phonepe ? '<p class="rc-note">PhonePe · figures as stated on my CV</p>' : '<p class="rc-note">' + esc(D.orgs[c.org].name) + " · " + esc(c.when) + "</p>") +
        "</div>" +
      "</a>" + addBtn(c, "rc-add") +
    "</article>";
  }
  function grid(list) { return list.length ? '<div class="grid">' + list.map(card).join("") + "</div>" : emptyState("Nothing on the menu for that", "Try fewer filters, or clear them.", "#/explore", "Clear filters"); }
  function rail(inner, label) { return '<div class="rail-w"><button class="rnav l" type="button" data-act="rail" data-d="-1" aria-label="Scroll ' + esc(label) + ' left">' + I.left + '</button><div class="rail" tabindex="0" aria-label="' + esc(label) + '">' + inner + '</div><button class="rnav r" type="button" data-act="rail" data-d="1" aria-label="Scroll ' + esc(label) + ' right">' + I.right + "</button></div>"; }
  function sh(t, sub, more) { return '<div class="sh"><div><h2>' + t + "</h2>" + (sub ? "<p>" + sub + "</p>" : "") + "</div>" + (more ? '<a class="more" href="' + more[0] + '">' + esc(more[1]) + I.tri + "</a>" : "") + "</div>"; }
  function emptyState(h, p, href, cta) { return '<div class="empty"><div class="empty-ill">' + mark(56) + "</div><h3>" + esc(h) + "</h3><p>" + esc(p) + '</p><a class="btn" href="' + href + '">' + esc(cta) + "</a></div>"; }

  /* ---------------- home ---------------- */
  function hero() {
    var p = D.person;
    return '<section class="hero">' +
      '<div class="hero-t">' +
        '<p class="hk">' + I.scooter + "Now delivering to Zomato · Program Manager</p>" +
        "<h1>I run programs that cross <em>many teams</em>, and get them to <em>done</em>.</h1>" +
        '<p class="hs">Many parties, unclear ownership, slow handoffs, hidden leaks, launches with gates. 11 programs across 8 domains, from a 10-stage merchant go-live to a gated FMCG pilot. Every number says where it came from.</p>' +
        '<div class="hero-cta"><a class="btn" href="#/explore">Browse the menu</a><a class="btn ghost" href="#/golive">Try the go-live clock</a></div>' +
      "</div>" +
      '<aside class="hero-o" aria-label="Order summary">' +
        '<div class="ho-top"><img src="assets/portrait.jpg" alt="Portrait of Navya Juneja" width="64" height="80"><div><b>' + esc(p.name) + "</b><span>" + esc(p.location) + '</span><span class="ok">' + I.check + "Open to work</span></div></div>" +
        '<ol class="ho-trk"><li class="done"><b>3 years</b><span>PhonePe payments ops, Cogent product delivery</span></li><li class="done"><b>Google Project Management</b><span>Scoping, stakeholder alignment, risk planning, Agile</span></li><li class="now"><b>Masters\' Union PGP-TBM</b><span>Two ventures, two live builds</span></li></ol>' +
        '<a class="btn full" href="#/cart">Request an interview</a>' +
      "</aside>" +
    "</section>";
  }
  function offers() {
    var list = [
      ["53% OFF", "go-live time, Cards (40% NetBanking)", "pp-golive", "result"],
      ["360 IN 1", "merchant go-lives in one upload", "pp-golive", "result"],
      ["95% MOVED", "payment traffic, in 3 months, phased", "pp-migration", "result"],
      ["90% ON TIME", "150+ orders, 3 teams", "h2h", "result"],
      ["4 + 5", "network launches and partner integrations", "pp-launches", "result"],
      ["5 GATES", "decide a pilot's scale-up", "wowworld", "target"],
      ["4 CLOCKS", "one per party: whose time was it?", "mid", "built"]
    ];
    return '<section class="sec">' + sh("Top offers on the menu", "Program evidence, straight from my CV and builds") + rail(list.map(function (o) {
      return '<a class="cp" href="#/r/' + o[2] + '"><span class="cp-t">' + esc(o[0]) + '</span><span class="cp-s">' + esc(o[1]) + "</span>" + provTag(o[3]) + "</a>";
    }).join(""), "Top offers") + "</section>";
  }
  function problemsBlock() {
    return '<section class="sec">' + sh("What's on your mind?", "Pick the shape of the problem") + '<div class="wom">' + D.problems.map(function (p, i) {
      return '<a class="wm" href="#/explore?p=' + p.id + '"><span class="wm-c c' + i + '"><svg viewBox="0 0 48 48" aria-hidden="true">' + PG[p.id] + "</svg></span><b>" + esc(p.name) + "</b><small>" + esc(p.line) + "</small></a>";
    }).join("") + "</div></section>";
  }
  function cuisines(active) {
    return '<div class="cuis" role="list">' + D.domains.map(function (d) {
      var n = D.cases.filter(function (c) { return c.domain === d.id; }).length;
      return '<a role="listitem" class="cz' + (active === d.id ? " on" : "") + '" href="#/explore?d=' + d.id + '" style="--dc:' + d.col + ";--db:" + d.bg + '"><span class="cz-i">' + dglyph(d.id, d.col) + "</span><span><b>" + esc(d.name) + "</b><small>" + n + (n === 1 ? " case" : " cases") + "</small></span></a>";
    }).join("") + "</div>";
  }
  function collectionsRail() {
    return '<section class="sec">' + sh("Collections", "Curated lists of cases, by the kind of program", ["#/collections", "All collections"]) + rail(D.collections.map(collCard).join(""), "Collections") + "</section>";
  }
  function collArt(c) { return '<span class="col-g" style="--a:' + c.a + ";--b:" + c.b + '" aria-hidden="true"><svg viewBox="0 0 48 48">' + PG[c.glyph] + "</svg><b>" + c.ids.length + "<small>cases</small></b></span>"; }
  function collCard(c) {
    return '<a class="col" href="#/c/' + c.id + '">' + collArt(c) + '<span class="col-t"><b>' + esc(c.name) + "</b><small>" + c.ids.length + " cases " + I.tri + "</small></span></a>";
  }
  function pills(qs) {
    var f = [["", "All"], ["result", "Results only"], ["built", "Built & live"], ["phonepe", "PhonePe"], ["nonpay", "Beyond payments"], ["gating", "Launch gating"], ["align", "Stakeholder alignment"]];
    var cur = qs.f || "";
    return '<div class="pills" role="group" aria-label="Quick filters"><button class="pill fl" type="button" data-act="filters">' + I.filter + "Filters" + (activeCount(qs) ? ' <i class="cnt">' + activeCount(qs) + "</i>" : "") + "</button>" + f.map(function (x) {
      return '<a class="pill' + (cur === x[0] ? " on" : "") + '" href="#/explore' + (x[0] ? "?f=" + x[0] : "") + '"' + (cur === x[0] ? ' aria-current="true"' : "") + ">" + esc(x[1]) + "</a>";
    }).join("") + "</div>";
  }
  function playStrip() {
    return '<section class="sec">' + sh("How I run a program", "Five steps, each one shown in a real case", ["#/playbook", "The playbook"]) + '<ol class="pstrip">' + D.playbook.map(function (s, i) {
      return '<li><a href="#/playbook#pb-' + s.id + '"><span class="pn">' + (i + 1) + "</span><b>" + esc(s.n) + "</b><small>" + esc(s.t) + "</small></a></li>";
    }).join("") + "</ol></section>";
  }
  function ninetyTeaser() {
    return '<section class="sec">' + sh("First 90 days at Zomato", "Hypotheses from public information, each with the number that would prove it wrong", ["#/90-days", "See all four"]) + '<div class="nt">' + D.ninety.slice(0, 3).map(function (h) {
      return '<a class="nt-c" href="#/90-days"><span class="nt-k">' + esc(h.k) + "</span><b>" + esc(h.t) + '</b><small><span class="pt pt-hyp">Hypothesis</span> Wrong if: ' + esc(h.wrong.replace(/^Wrong if /, "")) + "</small></a>";
    }).join("") + "</div></section>";
  }
  function hireStrip() {
    return '<section class="hire"><div><h2>Hungry for a Program Manager?</h2><p>Add the cases you want to talk about, pick an interview slot, and place the order. It opens an email with everything filled in.</p></div><a class="btn white" href="#/cart">' + I.bag + "View your order</a></section>";
  }
  function vHome() {
    var ordered = D.cases.slice().sort(homeSort);
    return hero() + '<div class="wrap">' +
      offers() + problemsBlock() +
      '<section class="sec">' + sh("Cuisines", "Eight domains. The thread is execution across teams, not an industry") + cuisines() + "</section>" +
      collectionsRail() +
      '<section class="sec" id="list">' + sh("Programs delivering to Zomato", D.cases.length + " cases, mixed across domains") + pills({}) + grid(ordered) + "</section>" +
      '<section class="sec">' + sh("Where did the time go?", "A restaurant going live, with one clock per party. Illustrative numbers, labelled Modelled", ["#/golive", "Full screen"]) + calcBlock(true) + "</section>" +
      playStrip() + ninetyTeaser() + hireStrip() +
    "</div>";
  }
  /* mixes domains on the home list so payments is not the headline */
  var HOME = ["pp-golive", "h2h", "wowworld", "mid", "pp-migration", "perfora", "foundit", "pp-launches", "reconos", "prolectro", "pp-recon"];
  function homeSort(a, b) { return HOME.indexOf(a.id) - HOME.indexOf(b.id); }

  /* ---------------- explore ---------------- */
  function qsArr(v) { return v ? String(v).split(",").filter(Boolean) : []; }
  function activeCount(qs) { return qsArr(qs.d).length + qsArr(qs.s).length + qsArr(qs.r).length + qsArr(qs.p).length; }
  function filtered(qs) {
    var list = D.cases.slice();
    var d = qsArr(qs.d), s = qsArr(qs.s), r = qsArr(qs.r), p = qsArr(qs.p), f = qs.f || "", q = (qs.q || "").toLowerCase().trim();
    if (d.length) list = list.filter(function (c) { return d.indexOf(c.domain) > -1; });
    if (s.length) list = list.filter(function (c) { return s.some(function (x) { return c.skills.indexOf(x) > -1; }); });
    if (r.length) list = list.filter(function (c) { return r.indexOf(c.rating) > -1; });
    if (p.length) list = list.filter(function (c) { return p.some(function (x) { return c.problems.indexOf(x) > -1; }); });
    if (f === "result") list = list.filter(function (c) { return c.rating === "result"; });
    if (f === "built") list = list.filter(function (c) { return c.rating === "built"; });
    if (f === "phonepe") list = list.filter(function (c) { return c.phonepe; });
    if (f === "nonpay") list = list.filter(function (c) { return !c.phonepe; });
    if (f === "gating" || f === "align") list = list.filter(function (c) { return c.skills.indexOf(f) > -1; });
    if (q) list = list.filter(function (c) { return hay(c).indexOf(q) > -1; });
    var sort = qs.sort || "mix";
    if (sort === "mix") list.sort(homeSort);
    if (sort === "recent") list.sort(function (a, b) { return b.sort - a.sort; });
    if (sort === "result") { var o = ["result", "built", "target", "modelled", "sourced"]; list.sort(function (a, b) { return o.indexOf(a.rating) - o.indexOf(b.rating) || homeSort(a, b); }); }
    return list;
  }
  function hay(c) { return [c.name, c.short, c.hook, dom(c.domain).name, c.skills.map(skill).join(" "), c.problems.map(function (p) { return prob(p).name; }).join(" "), D.orgs[c.org].name, c.summary.problem, c.summary.did].join(" ").toLowerCase(); }
  function vExplore(qs) {
    var list = filtered(qs);
    var tags = [];
    qsArr(qs.d).forEach(function (x) { tags.push(["d", x, dom(x) ? dom(x).name : x]); });
    qsArr(qs.s).forEach(function (x) { tags.push(["s", x, skill(x)]); });
    qsArr(qs.p).forEach(function (x) { tags.push(["p", x, prob(x) ? prob(x).name : x]); });
    qsArr(qs.r).forEach(function (x) { tags.push(["r", x, D.prov[x] ? D.prov[x].label : x]); });
    var title = "All programs";
    if (qsArr(qs.d).length === 1 && tags.length === 1) title = dom(qs.d).name;
    else if (qsArr(qs.p).length === 1 && tags.length === 1) title = prob(qs.p).name;
    else if (qs.q) title = "Results for “" + qs.q + "”";
    return '<div class="wrap pg">' +
      '<nav class="crumb" aria-label="Breadcrumb"><a href="#/">Home</a> / <span>Explore</span></nav>' +
      "<h1 class=\"pg-h\">" + esc(title) + "</h1>" +
      '<p class="pg-s">' + list.length + (list.length === 1 ? " case" : " cases") + ". Filter by cuisine (domain), program skill, problem or provenance.</p>" +
      cuisines(qsArr(qs.d).length === 1 ? qs.d : "") +
      '<div class="xbar">' + pills(qs) + '<label class="sort"><span>Sort</span><select data-act="sort" aria-label="Sort cases">' +
        [["mix", "Mixed domains"], ["recent", "Most recent"], ["result", "Results first"]].map(function (o) { return '<option value="' + o[0] + '"' + ((qs.sort || "mix") === o[0] ? " selected" : "") + ">" + o[1] + "</option>"; }).join("") + "</select></label></div>" +
      (tags.length ? '<div class="tags">' + tags.map(function (t) { return '<button class="tag" type="button" data-act="untag" data-k="' + t[0] + '" data-v="' + t[1] + '">' + esc(t[2]) + I.x + "</button>"; }).join("") + '<a class="clr" href="#/explore">Clear all</a></div>' : "") +
      grid(list) + "</div>";
  }
  function filterSheet(qs) {
    function grp(t, k, items) {
      var cur = qsArr(qs[k]);
      return "<fieldset><legend>" + t + "</legend>" + items.map(function (x) { return '<label class="ck"><input type="checkbox" name="' + k + '" value="' + x[0] + '"' + (cur.indexOf(x[0]) > -1 ? " checked" : "") + "><span>" + esc(x[1]) + "</span></label>"; }).join("") + "</fieldset>";
    }
    openSheet(sheetHead("Filters") + '<form class="fs" id="fsForm">' +
      grp("Cuisine (domain)", "d", D.domains.map(function (d) { return [d.id, d.name]; })) +
      grp("Program skill", "s", D.skills.map(function (s) { return [s.id, s.name]; })) +
      grp("Problem", "p", D.problems.map(function (p) { return [p.id, p.name]; })) +
      grp("Rating (provenance)", "r", Object.keys(D.prov).map(function (k) { return [k, D.prov[k].label + ": " + D.prov[k].tip]; })) +
      '<div class="fs-f"><a class="btn ghost" href="#/explore" data-act="close">Clear all</a><button class="btn" type="submit">Apply</button></div></form>', "fsheet");
  }

  /* ---------------- collections ---------------- */
  function vCollections() {
    return '<div class="wrap pg"><nav class="crumb" aria-label="Breadcrumb"><a href="#/">Home</a> / <span>Collections</span></nav><h1 class="pg-h">Collections</h1><p class="pg-s">Curated lists of cases, grouped by the kind of program rather than the industry.</p><div class="cgrid">' + D.collections.map(collCard).join("") + "</div></div>";
  }
  function vCollection(id) {
    var c = coll(id); if (!c) return vNotFound();
    var list = c.ids.map(byId);
    return '<div class="ch">' + collArt(c) + '<div class="wrap"><nav class="crumb inv" aria-label="Breadcrumb"><a href="#/">Home</a> / <a href="#/collections">Collections</a> / <span>' + esc(c.name) + "</span></nav><h1>" + esc(c.name) + "</h1><p>" + esc(c.sub) + " · " + list.length + " cases</p></div></div>" +
      '<div class="wrap pg">' + grid(list) + '<section class="sec">' + sh("More collections") + rail(D.collections.filter(function (x) { return x.id !== id; }).map(collCard).join(""), "More collections") + "</section></div>";
  }

  /* ---------------- case page ---------------- */
  function secBody(s) {
    var o = "";
    if (s.p) o += "<p>" + esc(s.p) + "</p>";
    if (s.list) o += '<ul class="dl">' + s.list.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
    if (s.steps) o += '<ol class="steps">' + s.steps.map(function (x) { return "<li><b>" + esc(x[0]) + "</b><span>" + esc(x[1]) + "</span></li>"; }).join("") + "</ol>";
    if (s.compare) o += '<div class="cmp">' + s.compare.map(function (x) { return "<div><b>" + esc(x[0]) + "</b><p>" + esc(x[1]) + "</p></div>"; }).join("") + "</div>";
    if (s.tiers) o += '<div class="menu">' + s.tiers.map(function (x) { return '<div class="dish"><span class="vg" aria-hidden="true"></span><div><b>' + esc(x[0]) + "</b><small>" + esc(x[2]) + '</small></div><span class="dp">' + esc(x[1]) + "</span></div>"; }).join("") + "</div>";
    return o;
  }
  function vCase(id) {
    var c = byId(id); if (!c) return vNotFound();
    var d = dom(c.domain), o = D.orgs[c.org];
    var media = c.media || [];
    var gal = media.length ? '<div class="gal' + (media.length === 1 ? " one" : "") + '">' + media.slice(0, 3).map(function (m, i) {
      return '<button class="gi' + (i === 0 ? " big" : "") + '" type="button" data-act="lightbox" data-id="' + c.id + '" data-i="' + i + '" aria-label="Open ' + esc(m.alt) + '"><img src="' + (m.type === "video" ? m.poster : m.src) + '" alt="' + esc(m.alt) + '" loading="lazy">' + (m.type === "video" ? '<span class="pl">' + I.play + "</span>" : "") + (i === 2 && media.length > 3 ? '<span class="morep">+' + (media.length - 3) + " more</span>" : "") + "</button>";
    }).join("") + "</div>" : '<div class="gal one">' + cover(c, "hero-cv") + "</div>";
    var similar = D.cases.filter(function (x) { return x.id !== c.id && (x.problems.some(function (p) { return c.problems.indexOf(p) > -1; }) || x.skills.some(function (s) { return c.skills.indexOf(s) > -1; })); }).sort(function (a, b) { return (a.domain === c.domain) - (b.domain === c.domain) || homeSort(a, b); }).slice(0, 6);
    var main = c.metrics[0];
    return '<div class="wrap pg case">' +
      '<nav class="crumb" aria-label="Breadcrumb"><a href="#/">Home</a> / <a href="#/explore?d=' + d.id + '">' + esc(d.name) + "</a> / <span>" + esc(c.short) + "</span></nav>" +
      gal +
      '<div class="ch-head"><div class="ch-l">' +
        "<h1>" + esc(c.name) + "</h1>" +
        '<p class="ch-cu"><a class="cu" style="--dc:' + d.col + '" href="#/explore?d=' + d.id + '">' + esc(d.name) + "</a> · " + c.skills.map(function (s) { return '<a href="#/explore?s=' + s + '">' + esc(skill(s)) + "</a>"; }).join(", ") + "</p>" +
        '<p class="ch-m"><img src="' + o.logo + '" alt="" width="18" height="18"> ' + esc(o.name) + " · " + esc(c.when) + ' <span class="stt">' + esc(c.status) + "</span></p>" +
        '<p class="ch-m mut">' + I.clock + esc(c.dur) + " · " + esc(c.parties) + "</p>" +
      "</div>" +
      '<div class="ch-r"><div class="rbox"><span class="rbig rt-' + c.rating + '">' + esc(main.v) + "</span><small>" + esc(main.l) + "</small>" + provChip(main.p) + '</div><button class="ib" type="button" data-act="provinfo" aria-label="What do the labels mean?">' + I.info + "</button></div>" +
      "</div>" +
      '<div class="ch-act">' + addBtn(c, "big") + '<button class="btn ghost sm" type="button" data-act="share">' + I.link + "Copy link</button>" + (c.links || []).map(function (l) { return '<a class="btn ghost sm" href="' + l.u + '" target="_blank" rel="noopener">' + esc(l.t) + I.ext + "</a>"; }).join("") + (c.deck ? '<a class="btn ghost sm" href="' + c.deck.u + '" target="_blank" rel="noopener">' + I.dl + esc(c.deck.t) + " · PDF " + esc(c.deck.size) + "</a>" : "") + "</div>" +
      (c.phonepe ? '<p class="note">' + I.info + "PhonePe figures are as stated on my CV. No internal data or documents are reproduced.</p>" : "") +
      '<nav class="tabs" aria-label="Case sections"><a href="#ov" data-act="jump">Overview</a><a href="#hw" data-act="jump">How it ran</a><a href="#zm" data-act="jump">Why it matters at Zomato</a>' + (media.length ? '<a href="#ph" data-act="jump">Photos</a>' : "") + "</nav>" +
      '<div class="ch-body"><div class="ch-main">' +
        '<section id="ov" class="blk"><h2>Overview</h2>' +
          '<div class="psl"><div><span class="k">The problem</span><p>' + esc(c.summary.problem) + '</p></div><div><span class="k">What I did</span><p>' + esc(c.summary.did) + '</p></div><div><span class="k">Where it landed</span><p>' + esc(c.summary.landed) + "</p></div></div>" +
          '<h3 class="h3">Top numbers</h3><div class="mets">' + c.metrics.map(function (m) { return '<div class="met"><b>' + esc(m.v) + "</b><span>" + esc(m.l) + "</span>" + provTag(m.p) + "</div>"; }).join("") + "</div>" +
        "</section>" +
        '<section id="hw" class="blk"><h2>How it ran</h2>' + (c.sections.length ? c.sections.map(function (s) { return '<div class="sx"><h3 class="h3">' + esc(s.h) + "</h3>" + secBody(s) + "</div>"; }).join("") : "<p>" + esc(c.summary.did) + "</p>") + "</section>" +
        (media.length ? '<section id="ph" class="blk"><h2>Photos</h2><div class="phs">' + media.map(function (m, i) { return '<button class="ph" type="button" data-act="lightbox" data-id="' + c.id + '" data-i="' + i + '"><img src="' + (m.type === "video" ? m.poster : m.src) + '" alt="' + esc(m.alt) + '" loading="lazy">' + (m.type === "video" ? '<span class="pl">' + I.play + "</span>" : "") + "</button>"; }).join("") + "</div></section>" : "") +
      "</div>" +
      '<aside class="ch-side">' +
        '<section id="zm" class="zm"><span class="zm-k">' + I.scooter + "Why this matters at Zomato</span><p>" + esc(c.zomato) + '</p><small>Relevance, not a claim about how Zomato works inside.</small></section>' +
        '<div class="facts"><h3 class="h3">Details</h3><dl>' + c.details.map(function (x) { return "<dt>" + esc(x[0]) + "</dt><dd>" + esc(x[1]) + "</dd>"; }).join("") + "</dl></div>" +
        '<div class="facts"><h3 class="h3">Problem shape</h3><p class="chips">' + c.problems.map(function (p) { return '<a class="chip" href="#/explore?p=' + p + '">' + esc(prob(p).name) + "</a>"; }).join("") + "</p></div>" +
      "</aside></div>" +
      (similar.length ? '<section class="sec">' + sh("Similar programs", "Same problem shape or skill, different domain") + rail(similar.map(function (x) { return '<div class="rail-c">' + card(x) + "</div>"; }).join(""), "Similar programs") + "</section>" : "") +
    "</div>";
  }

  /* ---------------- playbook ---------------- */
  function vPlaybook() {
    return '<div class="wrap pg">' +
      '<nav class="crumb" aria-label="Breadcrumb"><a href="#/">Home</a> / <span>Playbook</span></nav>' +
      '<h1 class="pg-h">How I run a program</h1><p class="pg-s">Four habits, and a five-step model drawn only from what I have actually done. Each step links to the case that shows it.</p>' +
      '<section class="sec"><h2 class="h2">Four habits</h2><div class="habits">' + D.habits.map(function (h, i) { return '<div class="hb"><span class="hb-n">0' + (i + 1) + "</span><b>" + esc(h[0]) + "</b><p>" + esc(h[1]) + "</p></div>"; }).join("") + "</div></section>" +
      '<section class="sec"><h2 class="h2">Intake → Plan → Phase → Monitor → Close</h2>' +
      '<ol class="pb">' + D.playbook.map(function (s, i) {
        return '<li id="pb-' + s.id + '" class="pb-s"><div class="pb-dot"><span>' + (i + 1) + '</span></div><div class="pb-c"><span class="pb-k">' + esc(s.n) + "</span><h3>" + esc(s.t) + "</h3><p>" + esc(s.p) + '</p><div class="pb-ex">' + s.ex.map(function (e) {
          var c = byId(e[0]); return '<a class="pbx" href="#/r/' + c.id + '">' + cover(c, "mini") + "<span><b>" + esc(c.short) + "</b><small>" + esc(e[1]) + "</small></span>" + I.right + "</a>";
        }).join("") + "</div></div></li>";
      }).join("") + "</ol></section>" +
      '<section class="sec"><div class="cert"><span class="cert-i">' + I.check + '</span><div><b>Google Project Management certificate</b><p>Project scoping, stakeholder alignment, risk planning and Agile delivery.</p></div></div></section>' +
    "</div>";
  }

  /* ---------------- first 90 days ---------------- */
  function vNinety() {
    return '<div class="wrap pg">' +
      '<nav class="crumb" aria-label="Breadcrumb"><a href="#/">Home</a> / <span>First 90 days</span></nav>' +
      '<h1 class="pg-h">First 90 days as a Program Manager at Zomato</h1>' +
      '<p class="pg-s">Hypotheses, not findings. Each one starts from a public fact (Sourced, with a link), says what I would test, and names the number that would prove me wrong. I have no internal Zomato data.</p>' +
      '<section class="sec"><h2 class="h2">What Zomato says in public</h2><div class="facts-row">' + D.facts.map(function (f) { return '<a class="fact" href="' + f.u + '" target="_blank" rel="noopener"><b>' + esc(f.v) + "</b><span>" + esc(f.l) + "</span><small>" + provTag("sourced") + esc(f.src) + I.ext + "</small></a>"; }).join("") + "</div></section>" +
      '<section class="sec"><ol class="nn">' + D.ninety.map(function (h) {
        return '<li class="nc"><div class="nc-h"><span class="nt-k">' + esc(h.k) + "</span><h3>" + esc(h.t) + "</h3></div>" +
          '<div class="nc-g"><div><span class="k">' + provTag("sourced") + 'Public fact</span><p>' + esc(h.fact) + ' <a href="' + h.src[1] + '" target="_blank" rel="noopener">' + esc(h.src[0]) + "</a></p></div>" +
          '<div><span class="k"><span class="pt pt-hyp">Hypothesis</span>What I would test</span><p>' + esc(h.hyp) + "</p></div>" +
          '<div class="wrong"><span class="k">What would prove it wrong</span><p>' + esc(h.wrong) + '</p><p class="mt"><b>Measure:</b> ' + esc(h.metric) + "</p></div></div>" +
          '<p class="nc-f">Drawn from: ' + h.cases.map(function (id) { var c = byId(id); return '<a href="#/r/' + id + '">' + esc(c.short) + "</a>"; }).join(" · ") + "</p></li>";
      }).join("") + "</ol></section></div>";
  }

  /* ---------------- go-live clock (interactive) ---------------- */
  var PARTIES = [
    { id: "rest", n: "Restaurant", c: "#E23744", what: "Submits documents; fixes anything sent back" },
    { id: "onb", n: "Onboarding", c: "#6C3BC4", what: "Verifies documents" },
    { id: "cat", n: "Menu & catalogue", c: "#D9480F", what: "Builds the menu and photos" },
    { id: "fin", n: "Payouts", c: "#1C6DD0", what: "Bank account and payout set-up" },
    { id: "city", n: "City ops", c: "#2F7D32", what: "Go-live check and first order" }
  ];
  function simulate(k) {
    var seg = { rest: [], onb: [], cat: [], fin: [], city: [] };
    var sub = k.intake ? 1.5 : 1, t = sub;
    seg.rest.push([0, sub, "Submit"]);
    seg.onb.push([t, t + k.ver, "Verify"]); t += k.ver;
    var b = k.intake ? 0 : k.bounce;
    for (var i = 0; i < b; i++) { seg.rest.push([t, t + 1.5, "Fix #" + (i + 1)]); t += 1.5; seg.onb.push([t, t + 1, "Re-check"]); t += 1; }
    var verEnd = t;
    var cs = k.parallel ? sub : verEnd;
    seg.cat.push([cs, cs + k.cat, "Menu"]);
    seg.fin.push([verEnd, verEnd + k.fin, "Payouts"]);
    var gs = Math.max(cs + k.cat, verEnd + k.fin);
    seg.city.push([gs, gs + 1, "Live"]);
    var el = gs + 1, sum = 0, per = {};
    Object.keys(seg).forEach(function (p) { per[p] = seg[p].reduce(function (a, s) { return a + (s[1] - s[0]); }, 0); sum += per[p]; });
    return { seg: seg, el: el, sum: sum, per: per, bounces: b };
  }
  function fmt(n) { return (Math.round(n * 10) / 10).toString().replace(/\.0$/, ""); }
  function calcBlock(compact) {
    var k = S.calc;
    function sl(id, label, min, max, step, unit) { return '<label class="sl"><span><b>' + label + '</b><output id="o-' + id + '">' + fmt(k[id]) + unit + '</output></span><input type="range" data-calc="' + id + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + k[id] + '" aria-label="' + esc(label) + '"></label>'; }
    return '<div class="calc' + (compact ? " compact" : "") + '" id="calc">' +
      '<div class="calc-in">' +
        '<p class="calc-k">' + provTag("modelled") + "Illustrative parties and days. Not Zomato's actual process.</p>" +
        sl("ver", "Document verification", 0.5, 6, 0.5, " d") +
        sl("bounce", "Times documents bounce back", 0, 3, 1, "") +
        sl("cat", "Menu & photos", 1, 7, 0.5, " d") +
        sl("fin", "Payout set-up", 0.5, 6, 0.5, " d") +
        '<div class="tg"><label class="sw"><input type="checkbox" data-calc="intake"' + (k.intake ? " checked" : "") + '><span class="sw-t" aria-hidden="true"></span><span><b>Intake check at sign-up</b><small>Catch missing documents before they cost a round (+0.5 d for the restaurant, no bounces)</small></span></label>' +
        '<label class="sw"><input type="checkbox" data-calc="parallel"' + (k.parallel ? " checked" : "") + '><span class="sw-t" aria-hidden="true"></span><span><b>Start the menu in parallel</b><small>Menu work begins at submission instead of after verification</small></span></label></div>' +
        '<p class="calc-src">' + provTag("sourced") + 'Documents a restaurant keeps ready, per Zomato\'s <a href="https://www.zomato.com/partner-with-us/" target="_blank" rel="noopener">partner page</a>: PAN, GST (if applicable), FSSAI licence, menu and profile food image, bank details.</p>' +
      "</div>" +
      '<div class="calc-out" aria-live="polite" id="calcOut"></div>' +
    "</div>";
  }
  function calcOut() {
    var el = $("#calcOut"); if (!el) return;
    var r = simulate(S.calc), base = simulate({ ver: S.calc.ver, cat: S.calc.cat, fin: S.calc.fin, bounce: S.calc.bounce, intake: false, parallel: false });
    var span = Math.max(r.el, base.el, 8);
    var top = PARTIES.slice().sort(function (a, b) { return r.per[b.id] - r.per[a.id]; })[0];
    var saved = base.el - r.el;
    var ticks = ""; for (var d = 0; d <= Math.ceil(span); d += (span > 16 ? 4 : 2)) ticks += '<span style="left:' + (d / span * 100) + '%">' + d + "</span>";
    el.innerHTML =
      '<div class="co-top"><div class="co-n"><small>Sign-up to first order</small><b>' + fmt(r.el) + ' <i>working days</i></b>' + (saved > 0 ? '<span class="sv">' + I.check + "<span>" + fmt(saved) + " d faster than with no changes</span></span>" : '<span class="sv off"><span>Try the two switches</span></span>') + '</div>' +
      '<div class="co-n"><small>Days summed across parties</small><b>' + fmt(r.sum) + ' <i>party-days</i></b><span class="sv off"><span>Longest holder: ' + esc(top.n) + " (" + fmt(r.per[top.id]) + " d)</span></span></div></div>" +
      '<div class="gantt" role="img" aria-label="Timeline: ' + PARTIES.map(function (p) { return p.n + " " + fmt(r.per[p.id]) + " days"; }).join(", ") + ", elapsed " + fmt(r.el) + ' days">' +
        PARTIES.map(function (p) {
          return '<div class="gl"><span class="gn"><i style="background:' + p.c + '"></i>' + esc(p.n) + "<small>" + fmt(r.per[p.id]) + ' d</small></span><span class="gt">' + r.seg[p.id].map(function (s) {
            return '<span class="gb" style="left:' + (s[0] / span * 100) + "%;width:" + ((s[1] - s[0]) / span * 100) + "%;background:" + p.c + '" title="' + esc(p.n + ": " + s[2] + ", day " + fmt(s[0]) + " to " + fmt(s[1])) + '"><em>' + esc(s[2]) + "</em></span>";
          }).join("") + '<span class="gend" style="left:' + (r.el / span * 100) + '%"></span></span></div>';
        }).join("") +
        '<div class="gl axis"><span class="gn"></span><span class="gt">' + ticks + "</span></div>" +
      "</div>" +
      '<p class="co-why">' + (r.sum > r.el ? "Party-days (" + fmt(r.sum) + ") add up to more than elapsed days (" + fmt(r.el) + ") because some clocks run at the same time. That is why a share-of-delay pie chart would be wrong, and why I draw one timeline per request." : "No clocks overlap here, so party-days equal elapsed days.") + (r.bounces ? " Each bounce costs a restaurant fix and a re-check: " + fmt(r.bounces * 2.5) + " days in total." : "") + '</p>' +
      '<p class="co-src">Same logic as <a href="#/r/mid">MID Procurement</a>, where each party has its own clock.</p>';
  }

  /* ---------------- orders = experience ---------------- */
  function vOrders() {
    return '<div class="wrap pg">' +
      '<nav class="crumb" aria-label="Breadcrumb"><a href="#/">Home</a> / <span>Your orders</span></nav>' +
      '<h1 class="pg-h">Order history</h1><p class="pg-s">Experience and education, most recent first. Tap "Reorder" to see the programs from each one.</p>' +
      '<div class="live"><div class="live-map" aria-hidden="true"><svg viewBox="0 0 320 120" preserveAspectRatio="none"><path d="M10 100 C 80 100, 90 30, 160 40 S 260 90, 310 20" fill="none" stroke="#E23744" stroke-width="4" stroke-dasharray="2 9" stroke-linecap="round"/><circle cx="10" cy="100" r="7" fill="#1C1C1C"/><circle cx="310" cy="20" r="9" fill="#E23744"/></svg><span class="rider">' + I.scooter + '</span></div><div class="live-t"><span class="live-k">Live order</span><b>Your Program Manager is on the way</b><p>Gurgaon → anywhere Zomato needs, Bengaluru included. Arriving after one conversation.</p><a class="btn sm" href="#/cart">Speed it up: request an interview</a></div></div>' +
      '<ol class="orders">' + D.orders.map(orderCard).join("") + "</ol>" +
      '<section class="sec"><h2 class="h2">Off the clock</h2><div class="off">' + D.offclock.map(function (o) { return '<div class="of"><b>' + esc(o[0]) + "</b><span>" + esc(o[1]) + "</span></div>"; }).join("") + "</div></section>" +
    "</div>";
  }
  function orderCard(o) {
    return '<li class="oc"><div class="oc-h"><img src="' + o.logo + '" alt="" width="44" height="44"><div><b>' + esc(o.org) + "</b><span>" + esc(o.title) + "</span><small>" + esc(o.when) + " · " + esc(o.where) + '</small></div><span class="os ' + o.status + '">' + (o.status === "delivered" ? I.check : I.clock) + esc(o.statusText) + "</span></div>" +
      "<p>" + esc(o.body) + "</p>" +
      (o.bullets ? '<ul class="ob">' + o.bullets.map(function (b) { return "<li><b>" + esc(b[0]) + "</b> " + esc(b[1]) + "</li>"; }).join("") + "</ul>" : "") +
      (o.track ? '<ol class="trk">' + o.track.map(function (t, i) { return '<li class="' + (o.status === "ongoing" && i === o.track.length - 1 ? "now" : "done") + '"><b>' + esc(t[0]) + "</b><small>" + esc(t[1]) + "</small></li>"; }).join("") + "</ol>" : "") +
      (o.related ? '<div class="oc-f"><span>' + o.related.length + (o.related.length === 1 ? " program" : " programs") + ': ' + o.related.map(function (id) { return esc(byId(id).short); }).join(", ") + '</span><button class="btn ghost sm" type="button" data-act="reorder" data-ids="' + o.related.join(",") + '">Reorder ' + I.right + "</button></div>" : "") +
    "</li>";
  }

  /* ---------------- cart = interview request ---------------- */
  var SLOTS = [
    { id: "intro", n: "20-minute intro call", s: "Who I am, what I'm looking for" },
    { id: "case", n: "45-minute case walkthrough", s: "Two or three programs in depth" },
    { id: "panel", n: "Panel interview", s: "With the team I'd work with" }
  ];
  function mailto() {
    var p = D.person, items = S.cart.map(byId);
    var slot = SLOTS.filter(function (s) { return s.id === S.slot; })[0] || SLOTS[0];
    var subj = "Interview request: " + S.role + " · Navya Juneja";
    var body = "Hi Navya,\n\nWe'd like to talk to you about a " + S.role + " role.\n\nFormat: " + slot.n + "\n" +
      (items.length ? "\nPrograms we'd like to discuss:\n" + items.map(function (c) { return "- " + c.short + " (" + dom(c.domain).name + ")"; }).join("\n") + "\n" : "") +
      (S.note ? "\nNote: " + S.note + "\n" : "") + "\nTimes that work for us:\n\n\nThanks,\n";
    return "mailto:" + p.email + "?subject=" + encodeURIComponent(subj) + "&body=" + encodeURIComponent(body);
  }
  function vCart() {
    var items = S.cart.map(byId), p = D.person;
    var suggest = D.cases.filter(function (c) { return !inCart(c.id); }).sort(homeSort).slice(0, 4);
    return '<div class="wrap pg cart">' +
      '<nav class="crumb" aria-label="Breadcrumb"><a href="#/">Home</a> / <span>Your order</span></nav>' +
      '<h1 class="pg-h">Your order</h1>' +
      '<div class="ct"><div class="ct-l">' +
        '<section class="box"><div class="box-h"><img src="assets/portrait.jpg" alt="" width="40" height="50"><div><b>Navya Juneja · ' + esc(S.role) + "</b><small>" + esc(p.location) + "</small></div></div>" +
        (items.length ? '<ul class="ci">' + items.map(function (c) { var d = dom(c.domain); return '<li><span class="vg" aria-hidden="true"></span><div><a href="#/r/' + c.id + '"><b>' + esc(c.short) + "</b></a><small>" + esc(d.name) + " · " + esc(c.offer.t.toLowerCase()) + " " + esc(c.offer.s) + '</small></div><button class="qty" type="button" data-act="cart" data-id="' + c.id + '" aria-label="Remove ' + esc(c.short) + '">' + I.minus + "<span>1</span></button></li>"; }).join("") + "</ul>"
          : '<p class="ce">No programs added yet. Add the ones you want to talk about, or place the order as it is.</p>') +
        '<div class="sug"><small>Complete your order with</small>' + rail(suggest.map(function (c) { return '<div class="sg">' + cover(c, "mini") + "<b>" + esc(c.short) + "</b>" + addBtn(c, "sm") + "</div>"; }).join(""), "Suggested programs") + "</div></section>" +
        '<section class="box"><h2 class="h3">Interview format</h2><div class="slots" role="radiogroup" aria-label="Interview format">' + SLOTS.map(function (s) { return '<label class="slot"><input type="radio" name="slot" value="' + s.id + '"' + (S.slot === s.id ? " checked" : "") + ' data-act="slot"><span><b>' + esc(s.n) + "</b><small>" + esc(s.s) + "</small></span></label>"; }).join("") + "</div>" +
        '<label class="fld"><span>Role</span><select data-act="role">' + ["Program Manager", "Associate Program Manager", "Senior Program Manager", "Another role (say in the note)"].map(function (r) { return "<option" + (S.role === r ? " selected" : "") + ">" + esc(r) + "</option>"; }).join("") + "</select></label>" +
        '<label class="fld"><span>Delivery instructions (optional)</span><textarea data-act="note" rows="3" placeholder="Team, timeline, anything you want me to prepare">' + esc(S.note) + "</textarea></label></section>" +
      "</div>" +
      '<div class="ct-r"><section class="box bill"><h2 class="h3">Bill details</h2><dl>' +
        "<dt>Programs to discuss</dt><dd>" + items.length + "</dd>" +
        "<dt>Interview</dt><dd>" + esc((SLOTS.filter(function (s) { return s.id === S.slot; })[0] || SLOTS[0]).n) + "</dd>" +
        "<dt>Relocation</dt><dd>Open, Bengaluru included</dd>" +
        '<dt>Delivery fee</dt><dd><s>₹∞</s> Free</dd>' +
        '<dt class="tot">To pay</dt><dd class="tot">One conversation</dd></dl>' +
        '<a class="btn full place" href="' + mailto() + '" data-act="place">Place order<span>Opens an email to ' + esc(p.email) + "</span></a>" +
        '<p class="alt">Or reach me directly</p><ul class="contact"><li><a href="mailto:' + p.email + '">' + I.mail + esc(p.email) + '</a></li><li><a href="' + p.phoneHref + '">' + I.phone + esc(p.phone) + '</a></li><li><a href="' + p.linkedin + '" target="_blank" rel="noopener">' + I.li + esc(p.linkedinShort) + '</a></li><li><a href="' + p.resume + '" download>' + I.dl + "Download résumé (PDF)</a></li></ul>" +
        '<div class="qr"><img src="assets/qr-linkedin.svg" alt="QR code linking to Navya Juneja\'s LinkedIn profile" width="84" height="84"><small>Scan for LinkedIn</small></div>' +
      "</section></div></div></div>";
  }

  /* ---------------- profile ---------------- */
  function vProfile() {
    var p = D.person;
    return '<div class="wrap pg prof">' +
      '<nav class="crumb" aria-label="Breadcrumb"><a href="#/">Home</a> / <span>Profile</span></nav>' +
      '<div class="pf"><img src="assets/portrait.jpg" alt="Portrait of Navya Juneja" width="120" height="150"><div><h1>' + esc(p.name) + '</h1><p class="pf-r">Program Manager · ' + esc(p.location) + "</p>" +
        "<p>I run work that crosses teams: a 10-stage merchant go-live at PhonePe, SLAs and hand-offs for three teams at Cogent (90% of 150+ orders on time), gated pilots and plans pitched to two CEOs at Masters' Union, and two live builds of my own. Payments is one of my domains, not the whole of it.</p>" +
        '<div class="pf-a"><a class="btn" href="#/cart">Request an interview</a><a class="btn ghost" href="' + p.resume + '" download>' + I.dl + 'Résumé</a><a class="btn ghost" href="' + p.portfolio + '" target="_blank" rel="noopener">Main portfolio' + I.ext + "</a></div></div></div>" +
      '<section class="sec"><h2 class="h2">Contact</h2><ul class="contact row"><li><a href="mailto:' + p.email + '">' + I.mail + esc(p.email) + '</a></li><li><a href="' + p.phoneHref + '">' + I.phone + esc(p.phone) + '</a></li><li><a href="' + p.linkedin + '" target="_blank" rel="noopener">' + I.li + esc(p.linkedinShort) + "</a></li></ul></section>" +
      '<section class="sec"><h2 class="h2">Certifications</h2><div class="certs">' + D.certs.map(function (c) { return '<div class="cert"><span class="cert-i">' + I.check + "</span><div><b>" + esc(c[0]) + "</b><p>" + esc(c[1]) + "</p></div></div>"; }).join("") + "</div></section>" +
      '<section class="sec"><h2 class="h2">What the ratings mean</h2><div class="provs">' + Object.keys(D.prov).map(function (k) { return '<div class="pv">' + provChip(k) + "<span>" + esc(D.prov[k].tip) + "</span></div>"; }).join("") + "</div></section>" +
      '<section class="sec"><h2 class="h2">FAQ</h2><div class="faq">' + D.faq.map(function (f) { return "<details><summary>" + esc(f[0]) + I.down + "</summary><p>" + esc(f[1]) + "</p></details>"; }).join("") + "</div></section>" +
    "</div>";
  }

  function vNotFound() { return '<div class="wrap pg">' + emptyState("This page isn't on the menu", "That link doesn't lead anywhere. Let's get you back home.", "#/", "Go home") + "</div>"; }

  /* ---------------- shell ---------------- */
  function searchBox(id) {
    return '<div class="srch" role="search"><span class="loc">' + I.pin + '<b>Zomato</b><small>Program Manager</small></span><span class="sep" aria-hidden="true"></span>' + I.search +
      '<input id="' + id + '" type="search" autocomplete="off" placeholder="Search a problem, domain or skill" aria-label="Search the portfolio" aria-controls="' + id + '-drop" aria-expanded="false"><div class="drop" id="' + id + '-drop" role="listbox" hidden></div></div>';
  }
  function renderShell() {
    var n = S.cart.length;
    $("#hdr").innerHTML = '<div class="hdr-in">' + logo() + searchBox("q") +
      '<nav class="hn" aria-label="Main"><a href="#/explore" data-n="explore">Explore</a><a href="#/playbook" data-n="playbook">Playbook</a><a href="#/90-days" data-n="90-days">90 days</a><a href="#/orders" data-n="orders">Orders</a><a class="hc" href="#/cart" data-n="cart" aria-label="Your order, ' + n + ' programs">' + I.bag + '<span>Order</span><i class="cnt" ' + (n ? "" : "hidden") + ">" + n + '</i></a><a class="hp" href="#/profile" data-n="profile" aria-label="Profile"><img src="assets/portrait.jpg" alt="" width="32" height="32"></a></nav></div>';
    $("#bnav").innerHTML = [["", "Home", I.home], ["explore", "Explore", I.compass], ["playbook", "Playbook", I.book], ["orders", "Orders", I.clock], ["cart", "Order", I.bag]].map(function (x) {
      return '<a href="#/' + x[0] + '" data-n="' + (x[0] || "home") + '">' + x[2] + "<span>" + x[1] + "</span>" + (x[0] === "cart" && n ? '<i class="cnt">' + n + "</i>" : "") + "</a>";
    }).join("");
    $("#ftr").innerHTML = '<div class="wrap"><div class="ft-t">' + logo() + '<div class="ft-c"><a href="mailto:' + D.person.email + '">' + esc(D.person.email) + '</a><a href="' + D.person.phoneHref + '">' + esc(D.person.phone) + '</a><a href="' + D.person.linkedin + '" target="_blank" rel="noopener">' + esc(D.person.linkedinShort) + '</a><a href="' + D.person.portfolio + '" target="_blank" rel="noopener">Main portfolio</a></div></div>' +
      '<div class="ft-g"><div><b>Menu</b><a href="#/explore">All programs</a><a href="#/collections">Collections</a><a href="#/golive">Go-live clock</a></div><div><b>About</b><a href="#/playbook">How I run a program</a><a href="#/90-days">First 90 days</a><a href="#/orders">Experience</a></div><div><b>Order</b><a href="#/cart">Request an interview</a><a href="' + D.person.resume + '" download>Résumé (PDF)</a><a href="#/profile">Profile & FAQ</a></div></div>' +
      '<p class="disc">Independent job-application portfolio by Navya Juneja. Not affiliated with or endorsed by Zomato, Eternal, PhonePe or any other company named here. The logo mark is an original drawing; no Zomato logo or wordmark is used. Zomato facts come from its public website and investor materials and are labelled Sourced. PhonePe figures are as stated on my CV.</p></div>';
    renderCartBar();
  }
  function renderCartBar() {
    var n = S.cart.length, el = $("#cartbar");
    var hide = !n || CUR === "cart";
    el.classList.toggle("on", !hide);
    document.body.classList.toggle("has-cart", !hide);
    el.innerHTML = n ? '<a href="#/cart"><span><b>' + n + (n === 1 ? " program" : " programs") + " added</b><small>Interview order · free delivery</small></span><span>View order " + I.tri + "</span></a>" : "";
    $$(".cnt", $("#hdr")).forEach(function (c) { c.textContent = n; c.hidden = !n; });
    var hc = $(".hc"); if (hc) hc.setAttribute("aria-label", "Your order, " + n + " programs");
  }
  function markNav() {
    $$("[data-n]").forEach(function (a) { var on = a.getAttribute("data-n") === (CUR || "home"); a.classList.toggle("on", on); if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  }

  /* ---------------- search dropdown ---------------- */
  function results(q) {
    q = q.toLowerCase().trim(); if (!q) return [];
    var out = [];
    D.problems.forEach(function (p) { if ((p.name + " " + p.line).toLowerCase().indexOf(q) > -1) out.push({ t: p.name, s: "Problem", h: "#/explore?p=" + p.id }); });
    D.domains.forEach(function (d) { if (d.name.toLowerCase().indexOf(q) > -1) out.push({ t: d.name, s: "Cuisine (domain)", h: "#/explore?d=" + d.id }); });
    D.skills.forEach(function (s) { if (s.name.toLowerCase().indexOf(q) > -1) out.push({ t: s.name, s: "Program skill", h: "#/explore?s=" + s.id }); });
    D.cases.forEach(function (c) { if (hay(c).indexOf(q) > -1) out.push({ t: c.short, s: dom(c.domain).name + " · " + c.status, h: "#/r/" + c.id, c: c }); });
    [["Playbook: how I run a program", "#/playbook"], ["First 90 days at Zomato", "#/90-days"], ["Go-live clock: where did the time go?", "#/golive"], ["Order history: experience", "#/orders"], ["Request an interview", "#/cart"], ["Profile, certifications and FAQ", "#/profile"]].forEach(function (x) { if (x[0].toLowerCase().indexOf(q) > -1) out.push({ t: x[0], s: "Page", h: x[1] }); });
    return out.slice(0, 8);
  }
  var DI = -1;
  function showDrop(inp) {
    var dr = document.getElementById(inp.id + "-drop"), list = results(inp.value);
    DI = -1;
    if (!inp.value.trim()) { dr.hidden = true; inp.setAttribute("aria-expanded", "false"); return; }
    dr.innerHTML = (list.length ? list.map(function (r, i) { return '<a role="option" id="' + inp.id + "-o" + i + '" href="' + r.h + '" class="dr">' + (r.c ? cover(r.c, "mini") : '<span class="dr-i">' + I.search + "</span>") + "<span><b>" + esc(r.t) + "</b><small>" + esc(r.s) + "</small></span></a>"; }).join("") : '<p class="dr-e">No exact match.</p>') +
      '<a role="option" class="dr all" href="#/explore?q=' + encodeURIComponent(inp.value.trim()) + '">See all results for “' + esc(inp.value.trim()) + "”" + I.right + "</a>";
    dr.hidden = false; inp.setAttribute("aria-expanded", "true");
  }
  function hideDrops() { $$(".drop").forEach(function (d) { d.hidden = true; }); $$(".srch input").forEach(function (i) { i.setAttribute("aria-expanded", "false"); }); }

  /* ---------------- sheets, toast ---------------- */
  var lastFocus = null, tt;
  function openSheet(html, cls) {
    lastFocus = document.activeElement; var s = $("#sheet"); s.className = "sheet " + (cls || ""); s.innerHTML = html;
    requestAnimationFrame(function () { s.classList.add("on"); $("#scrim").classList.add("on"); });
    document.body.classList.add("no-scroll");
    setTimeout(function () { var f = $("button, a, input, select", s); if (f) f.focus(); }, 60);
  }
  function closeSheet() {
    var s = $("#sheet"); if (!s.classList.contains("on")) return;
    s.classList.remove("on"); $("#scrim").classList.remove("on"); document.body.classList.remove("no-scroll");
    $$("video", s).forEach(function (v) { try { v.pause(); } catch (e) {} });
    if (lastFocus && lastFocus.focus) try { lastFocus.focus(); } catch (e) {}
  }
  function sheetHead(h) { return '<div class="sheet-h"><h2>' + esc(h) + '</h2><button class="ib" type="button" data-act="close" aria-label="Close">' + I.x + "</button></div>"; }
  function lightbox(id, i) {
    var c = byId(id), m = c.media, k = +i || 0, x = m[k];
    openSheet(sheetHead(c.short + " · " + (k + 1) + " of " + m.length) + '<div class="lb">' +
      (x.type === "video" ? '<video src="' + x.src + '" poster="' + x.poster + '" controls playsinline preload="metadata" aria-label="' + esc(x.alt) + '"></video>' : '<img src="' + x.src + '" alt="' + esc(x.alt) + '">') +
      '<p class="lb-c">' + esc(x.alt) + "</p>" +
      (m.length > 1 ? '<div class="lb-n"><button class="ib" type="button" data-act="lightbox" data-id="' + id + '" data-i="' + ((k - 1 + m.length) % m.length) + '" aria-label="Previous">' + I.left + '</button><button class="ib" type="button" data-act="lightbox" data-id="' + id + '" data-i="' + ((k + 1) % m.length) + '" aria-label="Next">' + I.right + "</button></div>" : "") +
      "</div>", "wide");
  }
  function provInfo() {
    openSheet(sheetHead("What the ratings mean") + '<div class="provs pad">' + Object.keys(D.prov).map(function (k) { return '<div class="pv">' + provChip(k) + "<span>" + esc(D.prov[k].tip) + "</span></div>"; }).join("") + '<p class="mut">On a restaurant card the rating chip is the provenance of the headline number, not a score. If a project didn\'t launch, its page says so.</p></div>');
  }
  function toast(html) { var el = $("#toast"); el.innerHTML = html; el.classList.add("on"); clearTimeout(tt); tt = setTimeout(function () { el.classList.remove("on"); }, 2400); }

  function setCart(id, force) {
    var c = byId(id); if (!c) return;
    var on = inCart(id);
    if (force === true && on) return;
    if (on) { S.cart = S.cart.filter(function (x) { return x !== id; }); toast("Removed <b>" + esc(c.short) + "</b>"); }
    else { S.cart.push(id); toast(I.check + "Added <b>" + esc(c.short) + '</b> · <a href="#/cart">View order</a>'); }
    save("cart", S.cart);
    $$('[data-act="cart"][data-id="' + id + '"]').forEach(function (b) { var tmp = document.createElement("div"); tmp.innerHTML = addBtn(c, b.className.replace(/\badd\b|\bon\b/g, "").trim()); b.replaceWith(tmp.firstChild); });
    renderCartBar();
    if (CUR === "cart") rerender();
  }

  /* ---------------- routing ---------------- */
  var CUR = "";
  function parse() {
    var h = location.hash.replace(/^#/, "").split("#")[0] || "/";
    var parts = h.split("?"), path = parts[0].replace(/^\//, ""), qs = {};
    (parts[1] || "").split("&").forEach(function (kv) { if (!kv) return; var p = kv.split("="); try { qs[decodeURIComponent(p[0])] = decodeURIComponent((p[1] || "").replace(/\+/g, " ")); } catch (e) {} });
    var seg = path.split("/").filter(Boolean);
    return { seg: seg, qs: qs };
  }
  function route() {
    var r = parse(), s0 = r.seg[0] || "", html, title = "Navya Juneja · Program Manager portfolio for Zomato";
    if (s0 === "playbook" && r.seg[1]) { /* anchor inside playbook */ }
    CUR = s0;
    switch (s0) {
      case "": html = vHome(); break;
      case "explore": html = vExplore(r.qs); title = "Explore programs · Navya Juneja"; break;
      case "collections": html = vCollections(); title = "Collections · Navya Juneja"; break;
      case "c": html = vCollection(r.seg[1]); CUR = "explore"; title = ((coll(r.seg[1]) || {}).name || "Collection") + " · Navya Juneja"; break;
      case "r": html = vCase(r.seg[1]); CUR = "explore"; title = ((byId(r.seg[1]) || {}).short || "Case") + " · Navya Juneja"; break;
      case "playbook": html = vPlaybook(); title = "How I run a program · Navya Juneja"; break;
      case "90-days": html = vNinety(); title = "First 90 days at Zomato · Navya Juneja"; break;
      case "golive": html = '<div class="wrap pg"><nav class="crumb" aria-label="Breadcrumb"><a href="#/">Home</a> / <span>Go-live clock</span></nav><h1 class="pg-h">Where did the time go?</h1><p class="pg-s">A restaurant going live passes through several desks. One clock per party shows whose time it was, the way MID Procurement does for bank requests. Move the sliders; the numbers are illustrative.</p>' + calcBlock(false) + "</div>"; title = "Go-live clock · Navya Juneja"; break;
      case "orders": html = vOrders(); title = "Order history · Navya Juneja"; break;
      case "cart": html = vCart(); title = "Your order · Navya Juneja"; break;
      case "profile": html = vProfile(); title = "Profile · Navya Juneja"; break;
      default: html = vNotFound(); title = "Not found · Navya Juneja";
    }
    document.title = title;
    $("#view").innerHTML = html;
    document.body.className = document.body.className.replace(/\br-\S+/g, "").trim() + " r-" + (s0 || "home");
    markNav(); renderCartBar(); calcOut(); railNav();
  }
  function rerender() { var y = window.scrollY; route(); window.scrollTo(0, y); }
  function railEdge(r) { var w = r.parentNode; w.classList.toggle("at-start", r.scrollLeft < 8); w.classList.toggle("at-end", r.scrollLeft + r.clientWidth >= r.scrollWidth - 8); }
  function railNav() { $$(".rail").forEach(function (r) { var w = r.parentNode; w.classList.toggle("scrolls", r.scrollWidth > r.clientWidth + 4); railEdge(r); if (!r._e) { r._e = 1; r.addEventListener("scroll", function () { railEdge(r); }, { passive: true }); } }); }

  /* ---------------- events ---------------- */
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-act]");
    if (!t) { if (!e.target.closest(".srch")) hideDrops(); if (e.target.id === "scrim") closeSheet(); return; }
    var a = t.getAttribute("data-act");
    if (a === "cart") { e.preventDefault(); setCart(t.getAttribute("data-id")); }
    else if (a === "close") { closeSheet(); }
    else if (a === "filters") { filterSheet(parse().qs); }
    else if (a === "lightbox") { e.preventDefault(); lightbox(t.getAttribute("data-id"), t.getAttribute("data-i")); }
    else if (a === "provinfo") { provInfo(); }
    else if (a === "rail") { var r = t.parentNode.querySelector(".rail"); r.scrollBy({ left: +t.getAttribute("data-d") * r.clientWidth * 0.8, behavior: RM ? "auto" : "smooth" }); }
    else if (a === "untag") { var q = parse().qs, k = t.getAttribute("data-k"), v = t.getAttribute("data-v"); q[k] = qsArr(q[k]).filter(function (x) { return x !== v; }).join(","); go(q); }
    else if (a === "jump") { e.preventDefault(); var el = document.getElementById(t.getAttribute("href").slice(1)); if (el) { el.scrollIntoView({ behavior: RM ? "auto" : "smooth", block: "start" }); } }
    else if (a === "share") { var u = location.href; try { navigator.clipboard.writeText(u).then(function () { toast(I.check + "Link copied"); }, function () { toast("Copy this link: " + esc(u)); }); } catch (er) { toast("Copy this link: " + esc(u)); } }
    else if (a === "reorder") { var ids = t.getAttribute("data-ids").split(","), added = 0; ids.forEach(function (id) { if (!inCart(id)) { S.cart.push(id); added++; } }); save("cart", S.cart); renderCartBar(); toast(I.check + (added ? added + " added to your order" : "Already in your order") + ' · <a href="#/cart">View order</a>'); }
    else if (a === "place") { toast("Opening your email app…"); }
  });
  document.addEventListener("submit", function (e) {
    if (e.target.id !== "fsForm") return; e.preventDefault();
    var f = e.target, q = {};
    ["d", "s", "p", "r"].forEach(function (k) { q[k] = $$('input[name="' + k + '"]:checked', f).map(function (i) { return i.value; }).join(","); });
    var cur = parse().qs; if (cur.sort) q.sort = cur.sort;
    closeSheet(); go(q);
  });
  function go(q) { var s = Object.keys(q).filter(function (k) { return q[k]; }).map(function (k) { return k + "=" + encodeURIComponent(q[k]); }).join("&"); location.hash = "#/explore" + (s ? "?" + s : ""); }
  document.addEventListener("change", function (e) {
    var t = e.target, a = t.getAttribute("data-act"), c = t.getAttribute("data-calc");
    if (a === "sort") { var q = parse().qs; q.sort = t.value; go(q); }
    else if (a === "slot") { S.slot = t.value; save("slot", S.slot); rerenderCartBits(); }
    else if (a === "role") { S.role = t.value; save("role", S.role); rerenderCartBits(); }
    else if (c === "intake" || c === "parallel") { S.calc[c] = t.checked; calcOut(); }
  });
  document.addEventListener("input", function (e) {
    var t = e.target, c = t.getAttribute("data-calc");
    if (c && t.type === "range") { S.calc[c] = parseFloat(t.value); var o = document.getElementById("o-" + c); if (o) o.textContent = fmt(S.calc[c]) + (c === "bounce" ? "" : " d"); calcOut(); }
    else if (t.getAttribute("data-act") === "note") { S.note = t.value.slice(0, 500); save("note", S.note); var p = $(".place"); if (p) p.href = mailto(); }
    else if (t.closest(".srch")) showDrop(t);
  });
  function rerenderCartBits() { var y = window.scrollY; var f = document.activeElement && document.activeElement.getAttribute("data-act"); route(); window.scrollTo(0, y); if (f) { var el = $('[data-act="' + f + '"]' + (f === "slot" ? ":checked" : "")); if (el) el.focus(); } }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeSheet(); hideDrops(); }
    var inp = e.target.closest && e.target.closest(".srch input");
    if (inp) {
      var dr = document.getElementById(inp.id + "-drop"), opts = $$(".dr", dr);
      if (e.key === "ArrowDown" && opts.length) { e.preventDefault(); DI = Math.min(DI + 1, opts.length - 1); }
      else if (e.key === "ArrowUp" && opts.length) { e.preventDefault(); DI = Math.max(DI - 1, 0); }
      else if (e.key === "Enter") { e.preventDefault(); var h = DI > -1 && opts[DI] ? opts[DI].getAttribute("href") : "#/explore?q=" + encodeURIComponent(inp.value.trim()); hideDrops(); inp.blur(); location.hash = h; return; }
      else return;
      opts.forEach(function (o, i) { o.classList.toggle("act", i === DI); o.setAttribute("aria-selected", i === DI); });
      if (opts[DI]) inp.setAttribute("aria-activedescendant", opts[DI].id || "");
    }
    if (e.key === "Tab" && $("#sheet").classList.contains("on")) {
      var fs = $$("#sheet button, #sheet a, #sheet input, #sheet select, #sheet video").filter(function (x) { return x.offsetParent !== null; });
      if (!fs.length) return; var first = fs[0], last = fs[fs.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  window.addEventListener("hashchange", function () {
    closeSheet(); hideDrops();
    var h = location.hash;
    if (/^#(ov|hw|zm|ph)$/.test(h)) return;
    route();
    var anchor = h.split("#")[2];
    if (anchor) { var el = document.getElementById(anchor); if (el) { el.scrollIntoView({ block: "start" }); return; } }
    window.scrollTo(0, 0);
    var v = $("#view"); try { v.focus({ preventScroll: true }); } catch (er) {}
  });
  window.addEventListener("resize", function () { railNav(); });

  /* ---------------- splash ---------------- */
  function splash() {
    var sp = $("#splash"), seen = false;
    try { seen = sessionStorage.getItem("znj_splash") === "1"; } catch (e) {}
    if (seen || RM || /[?&]nosplash/.test(location.search)) { sp.remove(); return; }
    try { sessionStorage.setItem("znj_splash", "1"); } catch (e) {}
    document.body.classList.add("no-scroll");
    var done = function () { if (!sp.parentNode) return; sp.classList.add("out"); document.body.classList.remove("no-scroll"); setTimeout(function () { sp.remove(); }, 450); };
    $("#spSkip").addEventListener("click", done);
    $("#spSkip").focus();
    setTimeout(done, 2600);
  }

  renderShell(); route();
  var a0 = location.hash.split("#")[2]; if (a0) { var e0 = document.getElementById(a0); if (e0) e0.scrollIntoView(); }
  splash();
})();
