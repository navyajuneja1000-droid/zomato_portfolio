/* =========================================================
   Navya Juneja · portfolio content, written for Program Manager roles at Zomato
   Every figure carries a provenance label:
   result = achieved · built = working product · modelled = my assumption
   target = success criterion · sourced = external, cited
   ========================================================= */
window.NJ = {
  person: {
    name: "Navya Juneja",
    role: "Program Manager",
    location: "Gurgaon · open to relocating (Bengaluru included)",
    email: "navyajuneja1000@gmail.com",
    phone: "+91 85568 17288",
    phoneHref: "tel:+918556817288",
    linkedin: "https://www.linkedin.com/in/junejanavya/",
    linkedinShort: "linkedin.com/in/junejanavya",
    resume: "Navya_Juneja_Resume.pdf",
    portfolio: "https://personalportfolio-lilac-tau.vercel.app/"
  },

  prov: {
    result:   { label: "Result",   tip: "Achieved, as stated on my CV" },
    built:    { label: "Built",    tip: "A working product you can open" },
    modelled: { label: "Modelled", tip: "My own assumption, stated" },
    target:   { label: "Target",   tip: "A success criterion, not an outcome" },
    sourced:  { label: "Sourced",  tip: "External or survey data, cited" }
  },

  orgs: {
    phonepe: { name: "PhonePe", sub: "Payments ops · Jun 2023 – Jun 2025", logo: "assets/logos/phonepe.svg" },
    cogent:  { name: "Cogent Infotech", sub: "Product development · Aug 2025 – Jun 2026", logo: "assets/logos/cogent.svg" },
    mu:      { name: "Masters' Union", sub: "PGP-TBM · team projects and ventures", logo: "assets/logos/masters-union.svg" },
    navya:   { name: "Independent build", sub: "Built and shipped by me", logo: "assets/logos/navya.svg" }
  },

  /* Cuisines = domains */
  domains: [
    { id: "fintech",  name: "Fintech & payments ops", short: "Fintech",   col: "#6C3BC4", bg: "#F1EAFD" },
    { id: "edtech",   name: "Edtech · US career prep", short: "Edtech",   col: "#1C6DD0", bg: "#E6F0FD" },
    { id: "d2c",      name: "D2C brand growth",        short: "D2C",      col: "#0C8A8A", bg: "#E2F5F4" },
    { id: "fmcg",     name: "FMCG category launch",    short: "FMCG",     col: "#D9480F", bg: "#FFF0E6" },
    { id: "retail",   name: "Retail venture",          short: "Retail",   col: "#B7791F", bg: "#FFF6DF" },
    { id: "research", name: "Consumer research & GTM", short: "Research", col: "#C2255C", bg: "#FDE8EF" },
    { id: "ops",      name: "Ops tooling",             short: "Ops tools",col: "#2F7D32", bg: "#E7F5E8" },
    { id: "revrec",   name: "Revenue recovery",        short: "Recovery", col: "#3B5BDB", bg: "#E9EEFF" }
  ],

  /* Program skills, used as tags and filters */
  skills: [
    { id: "align",     name: "Stakeholder alignment" },
    { id: "process",   name: "Process redesign" },
    { id: "phased",    name: "Phased rollout" },
    { id: "gating",    name: "Launch gating" },
    { id: "metrics",   name: "Metrics & guardrails" },
    { id: "risk",      name: "Risk planning" },
    { id: "partner",   name: "Vendor & partner management" },
    { id: "uat",       name: "Requirements & UAT" },
    { id: "unitecon",  name: "Unit economics" },
    { id: "discovery", name: "Discovery & research" }
  ],

  /* "What's on your mind?" = the shape of the problem */
  problems: [
    { id: "parties",  name: "Many parties",       line: "Four teams, six banks, one request" },
    { id: "owner",    name: "Unclear ownership",  line: "Late, but whose time was it?" },
    { id: "handoffs", name: "Slow handoffs",      line: "Work waiting between desks" },
    { id: "leaks",    name: "Hidden leaks",       line: "Money that drifts, no error message" },
    { id: "gates",    name: "Launch with gates",  line: "Decide the kill criteria first" },
    { id: "scale",    name: "Change at scale",    line: "Move it all without a dip" }
  ],

  collections: [
    { id: "golive",  name: "Go-lives that got faster",  sub: "Onboarding, handoffs and the time in between", ids: ["pp-golive", "mid", "pp-launches"], glyph: "handoffs", a: "#E23744", b: "#7A0F1E" },
    { id: "gated",   name: "Launches with gates",       sub: "Pilots that decide before they spend", ids: ["wowworld", "perfora", "pp-launches", "prolectro"], glyph: "gates", a: "#D9480F", b: "#5C1A02" },
    { id: "teams",   name: "Many teams, one plan",      sub: "Getting owners to agree on scope", ids: ["h2h", "pp-golive", "pp-migration", "perfora"], glyph: "parties", a: "#1C6DD0", b: "#0B2E5E" },
    { id: "leaks",   name: "Money that leaks quietly",  sub: "Reconciliation, RTO and margin", ids: ["pp-recon", "reconos", "perfora", "foundit"], glyph: "leaks", a: "#6C3BC4", b: "#24104F" },
    { id: "live",    name: "Built and live",            sub: "Working products you can open", ids: ["mid", "reconos"], glyph: "scale", a: "#2F7D32", b: "#0F3311" }
  ],

  /* ---------------- CASES = restaurants ---------------- */
  cases: [
    {
      id: "pp-golive", org: "phonepe", domain: "fintech", phonepe: true, sort: 10,
      name: "Merchant go-live, from MID to live",
      short: "MID-to-live onboarding",
      skills: ["process", "align", "uat"], problems: ["handoffs", "parties", "owner"],
      status: "Delivered", when: "Jun 2023 – Jun 2024", dur: "1 year", parties: "Stakeholder teams across a 10-stage workflow",
      offer: { t: "53% OFF", s: "go-live time for Cards · 40% for NetBanking", p: "result" },
      rating: "result",
      hook: "Mapped onboarding as a 10-stage workflow, found where requests sat between teams, and removed those friction points.",
      cover: { a: "#6C3BC4", b: "#2B1059", big: "53%", small: "faster Cards go-live" },
      zomato: "A restaurant going live on Zomato is the same shape of problem: documents, verification, menu, payouts and a first order, each owned by a different desk. The lesson I'd bring is to map every stage and handoff before fixing anything, because the delay usually sits between two teams, not inside one.",
      summary: {
        problem: "A merchant cannot take card or netbanking payments until the bank side is set up and live. Every go-live passed through several stakeholder teams, and requests waited at the handoffs.",
        did: "Mapped MID-to-live onboarding as a 10-stage workflow with every handoff written down, removed the friction points, and defined the requirements for a bulk configuration tool so many merchants could go live at once.",
        landed: "Go-live turnaround cut by 53% for Cards and 40% for NetBanking. The bulk tool enabled 360 merchant go-lives in one upload."
      },
      details: [
        ["Role", "Operations Analyst – Payments, PhonePe"],
        ["When", "Jun 2023 – Jun 2024 · Bengaluru"],
        ["Program shape", "10 stages, several stakeholder teams, many merchants in flight at once"],
        ["Data note", "Figures as stated on my CV. No PhonePe internal data is reproduced here."]
      ],
      metrics: [
        { v: "10", l: "stages mapped, with every handoff between teams", p: "result" },
        { v: "53% / 40%", l: "cut in go-live turnaround, Cards / NetBanking", p: "result" },
        { v: "360", l: "merchant go-lives in one upload, from a bulk tool I wrote requirements for", p: "result" }
      ],
      sections: [
        { h: "How I ran it",
          steps: [["Map the stages", "Wrote down all 10 stages from MID request to live, and which team held the request at each one."], ["Find the friction", "Marked the friction points along the workflow, many of them at handoffs between teams."], ["Remove them", "Removed those friction points from MID-to-live onboarding."], ["Remove the repeat work", "Defined requirements for a bulk configuration tool, so a batch of merchants goes live in one upload instead of one at a time."]] },
        { h: "What made it a program, not a task",
          list: ["Several teams each owned a stage; none owned the whole", "Success was measured end to end (go-live turnaround), not per team", "The fix was partly process and partly a tool, so it needed written requirements"] }
      ]
    },

    {
      id: "pp-migration", org: "phonepe", domain: "fintech", phonepe: true, sort: 9,
      name: "95% of payment traffic moved in three months",
      short: "Traffic migration & routing",
      skills: ["phased", "metrics", "risk", "align"], problems: ["scale", "parties"],
      status: "Delivered", when: "Jul 2024 – Jun 2025", dur: "3 months", parties: "Growth, Engineering, Success, Testing, banks",
      offer: { t: "95% MOVED", s: "of payment traffic across acquiring banks in 3 months", p: "result" },
      rating: "result",
      hook: "Phased routing shifts with live monitoring, so merchants never felt the move.",
      cover: { a: "#4C1D95", b: "#1E0B3D", big: "95%", small: "traffic migrated · 3 months" },
      zomato: "Moving a live system, whether a payments partner, a dispatch rule or a new app flow, is a migration problem: shift in tranches, watch the guardrail metrics, and keep a way back. Zomato runs at a scale where a bad cut-over is felt by customers, restaurants and riders at once.",
      summary: {
        problem: "Payment traffic for large travel merchants (₹500+ Cr TPV, including ixigo and MakeMyTrip) had to move across acquiring-bank partners. Every shift risked merchant success rates.",
        did: "Ran the move as phased routing shifts with live monitoring instead of one cut-over. Separately, A/B tested routes with Growth, Engineering, Success and Testing, and optimised acquiring-bank allocation across Cards and NetBanking.",
        landed: "95% of payment traffic migrated in three months. The routing work saved ₹8 Cr a year and lifted travel payment success by 4 pp."
      },
      details: [
        ["Role", "Senior Operations Analyst – Product & Payments, PhonePe"],
        ["When", "Jul 2024 – Jun 2025 · Bengaluru"],
        ["Teams", "Growth, Engineering, Success, Testing, acquiring banks"],
        ["Data note", "Figures as stated on my CV. No PhonePe internal data is reproduced here."]
      ],
      metrics: [
        { v: "95%", l: "of payment traffic migrated across acquiring banks in 3 months", p: "result" },
        { v: "₹8 Cr", l: "saved a year by optimising bank allocation and routing", p: "result" },
        { v: "+4 pp", l: "travel payment success from A/B tested routes", p: "result" }
      ],
      sections: [
        { h: "The rollout pattern",
          steps: [["Phase it", "Routing shifted in phases, not in one cut-over."], ["Monitor live", "Each shift watched live while merchants kept transacting."], ["Finish inside the window", "95% of traffic moved across acquiring-bank partners within three months."]] },
        { h: "The numbers I already read every week",
          p: "In both PhonePe roles, routing decisions were informed weekly by SQL dashboards of success rates, bank traffic and error codes. Those are the same signals a phased move is judged on." }
      ]
    },

    {
      id: "pp-launches", org: "phonepe", domain: "fintech", phonepe: true, sort: 8,
      name: "Four network launches and 5+ partner integrations",
      short: "Partner launches",
      skills: ["partner", "uat", "gating"], problems: ["parties", "gates"],
      status: "Delivered", when: "Jun 2023 – Jun 2025", dur: "2 years", parties: "Card networks, banks, PSPs, internal teams",
      offer: { t: "4 LAUNCHES", s: "CVV-less, PAR API, Visa Direct, MoneySend", p: "result" },
      rating: "result",
      hook: "Owned requirements, UAT and go-live with external partners who do not report to you.",
      cover: { a: "#7C3AED", b: "#3B0764", big: "4 + 5", small: "network launches · integrations" },
      zomato: "Much of a Zomato launch depends on partners outside the building: restaurants, insurers, EV fleets, payment providers. Owning requirements, UAT and a go-live date with a partner you cannot instruct is the core skill, and these launches are where I practised it.",
      summary: {
        problem: "New card capabilities only work when the network, the bank and the internal teams go live together. Each partner runs its own timeline.",
        did: "Owned requirements, UAT and go-live with card networks, banks and PSPs. Coordinated the go-live date across all of them.",
        landed: "Launched CVV-less payments, PAR API, Visa Direct and MoneySend, and delivered 5+ bank and PSP integrations."
      },
      details: [
        ["Roles", "Operations Analyst, then Senior Operations Analyst, PhonePe"],
        ["Launches", "CVV-less payments, PAR API, Visa Direct, MoneySend"],
        ["Data note", "Figures as stated on my CV. No PhonePe internal data is reproduced here."]
      ],
      metrics: [
        { v: "4", l: "card network launches taken to go-live", p: "result" },
        { v: "5+", l: "bank and PSP integrations: requirements, UAT and go-live", p: "result" }
      ],
      sections: [
        { h: "The launch checklist I worked to",
          steps: [["Requirements", "Owned the requirements with each partner."], ["UAT", "Owned user acceptance testing with the partner."], ["Go-live", "Coordinated the go-live date with the card networks, banks and PSPs."]] }
      ]
    },

    {
      id: "pp-recon", org: "phonepe", domain: "fintech", phonepe: true, sort: 7,
      name: "₹15+ Cr recovered from reconciliation mismatches",
      short: "Reconciliation recovery",
      skills: ["align", "process"], problems: ["leaks", "owner"],
      status: "Delivered", when: "Jul 2024 – Jun 2025", dur: "Ongoing", parties: "Finance, Recon, banks",
      offer: { t: "₹15+ Cr", s: "recovered with Finance and Recon", p: "result" },
      rating: "result",
      hook: "Traced mismatches between what was transacted and what settled, then coordinated the fixes.",
      cover: { a: "#5B21B6", b: "#1F0A44", big: "₹15+ Cr", small: "recovered" },
      zomato: "Refunds, restaurant payouts and delivery-partner payouts are all money that has to land where it should. Mismatches there don't throw errors; they drift. Closing them takes Finance, Ops and the partner on the other side agreeing on one fix.",
      summary: {
        problem: "Mismatches between transactions and settlements don't raise an alarm. They sit in the books until someone traces them.",
        did: "Traced reconciliation mismatches and coordinated settlement fixes with Finance and the Recon team.",
        landed: "₹15+ Cr recovered. The same problem later became ReconOS."
      },
      details: [
        ["Teams", "Finance, Recon"],
        ["Data note", "Figures as stated on my CV. No PhonePe internal data is reproduced here."]
      ],
      metrics: [{ v: "₹15+ Cr", l: "recovered by tracing mismatches and closing settlement fixes", p: "result" }],
      sections: []
    },

    {
      id: "h2h", org: "cogent", domain: "edtech", sort: 20,
      name: "H2H: a pricing pivot, a launch, and 3 teams delivering on time",
      short: "H2H career-prep launch",
      skills: ["discovery", "metrics", "process", "unitecon"], problems: ["parties", "handoffs", "leaks"],
      status: "Delivered", when: "Aug 2025 – Jun 2026", dur: "10 months", parties: "3 delivery teams, plus Engineering",
      offer: { t: "~$110K", s: "in 2 months at 6x ROAS", p: "result" },
      rating: "result",
      hook: "From pay-after-placement to upfront pricing, a launch in 5 US states, and SLAs that kept 3 teams at 90% on time.",
      cover: { a: "#1C6DD0", b: "#0B2E5E", big: "90%", small: "on time across 150+ orders" },
      zomato: "Most Zomato programs succeed or fail in the hand-offs: a restaurant, a delivery partner and an internal team each own a piece. At H2H I set the SLAs, SOPs and hand-offs for 3 teams, and 90% of 150+ orders were delivered on time. I treated the funnel the same way: find where people drop, cut it (form drop-off 72% to 45%), and go after the ones who left (18% recovered by email).",
      summary: {
        problem: "US job seekers were buying separate CV, LinkedIn and interview services and still not getting callbacks. Cogent's pay-after-placement (ISA) model left revenue waiting on each customer's job search.",
        did: "Pivoted H2H to upfront pricing after 60+ interviews, a payback analysis and 15+ rivals. Built a 5-metric LinkedIn score (0–100) and packaged ~30 features into 3 tiers. Launched to 2 personas in 5 priority US states, ran the funnel experiments, and set the SLAs, SOPs and hand-offs for 3 teams.",
        landed: "~$110K in 2 months at 6x ROAS. Sign-ups up 4.6×, 8% of 1,500+ sign-ups converted to paid, 22% of $499 buyers upgraded, and 90% of 150+ orders delivered on time."
      },
      details: [
        ["Role", "Assistant Project Manager – Product Development, Cogent Infotech"],
        ["When", "Aug 2025 – Jun 2026 · Remote"],
        ["Teams", "3 delivery teams with SLAs and SOPs; Engineering for the résumé audit"],
        ["Output", "Upfront pricing, 3 tiers, a 0–100 LinkedIn score, the launch, SLAs, SOPs and hand-offs"]
      ],
      metrics: [
        { v: "90%", l: "on-time delivery across 150+ orders, from SLAs, SOPs and hand-offs for 3 teams", p: "result" },
        { v: "~$110K", l: "in 2 months at 6x ROAS, launching to 2 personas in 5 US states", p: "result" },
        { v: "4.6×", l: "sign-ups: form drop-off cut from 72% to 45%, 18% of drop-offs recovered via email", p: "result" },
        { v: "8%", l: "of 1,500+ sign-ups converted to paid, via a free résumé audit as the lead magnet", p: "result" },
        { v: "22%", l: "of $499 buyers upgraded across the 3 tiers", p: "result" },
        { v: "60+", l: "interviews, a payback analysis and 15+ rivals behind the pricing pivot", p: "result" }
      ],
      sections: [
        { h: "How the program ran",
          steps: [["Evidence first", "60+ interviews, a payback analysis and 15+ rivals before the model moved from pay-after-placement to upfront pricing."], ["Make the gap measurable", "A 5-metric LinkedIn scoring model (0–100) showed which of the 3 tiers a buyer needed."], ["Launch narrow", "2 personas, 5 priority US states, and a free résumé audit, shipped with Engineering, as the way in."], ["Fix the leaks", "Form drop-off from 72% to 45%, 18% of drop-offs recovered by email, sign-ups up 4.6×."], ["Hold delivery", "SLAs, SOPs and hand-offs for 3 teams: 90% on time across 150+ orders."]] },
        { h: "Tiers named for where the buyer is stuck",
          tiers: [["Interview Accelerator", "$499", "Stuck before the interview"], ["Offer Builder", "$899", "Stuck at conversion"], ["Offer Accelerator", "$1,300", "Stuck at the offer"]],
          p: "About 30 features packaged into 3 tiers. 22% of $499 buyers upgraded." }
      ]
    },

    {
      id: "perfora", org: "mu", domain: "d2c", sort: 30,
      name: "Perfora: a gated six-month plan from ₹3 Cr to ₹6 Cr",
      short: "Perfora growth plan",
      skills: ["gating", "metrics", "risk", "unitecon"], problems: ["gates", "leaks"],
      status: "Pitched to CEO", when: "2026", dur: "6-month plan", parties: "Growth, CX, logistics, CRM owners",
      offer: { t: "70% FROM FIXES", s: "of the extra revenue from RTO, checkout and repeats", p: "modelled" },
      rating: "modelled",
      hook: "Every phase had an owner, leading KPIs and a gate. New spend unlocked only when the gate cleared.",
      cover: { a: "#0C8A8A", b: "#063F3F", big: "₹3 → ₹6 Cr", small: "monthly revenue plan" },
      media: [
        { type: "img", src: "assets/work/perfora-slide-1.jpg", alt: "Slide 1: diagnosis of funnel leaks, ad payback and four root causes" },
        { type: "img", src: "assets/work/perfora-slide-2.jpg", alt: "Slide 2: growth bridge from ₹3 Cr to ₹6 Cr, lever by lever" },
        { type: "img", src: "assets/work/perfora-slide-3.jpg", alt: "Slide 3: six-month roadmap with owners, KPIs and gates" }
      ],
      deck: { u: "assets/decks/Perfora-Growth-Plan-Navya-Juneja.pdf", t: "Perfora growth plan", pages: 3, size: "0.3 MB" },
      zomato: "Zomato programs that spend money (a new city, an incentive, a feature push) benefit from the same structure: fix what leaks first, prove a lever with a test, then release budget only when a pre-agreed gate clears. Owners and kill criteria are written before launch, not after.",
      summary: {
        problem: "Perfora nearly doubled ad spend, but website revenue stayed near ₹3 Cr a month. Conversion sat at 1.9–2.4% and RTO rose from ~10% to 18% (case workbook, Sourced).",
        did: "Built a driver tree to bridge ₹3 Cr to ₹6 Cr lever by lever, designed two randomised beta tests with roll-out and kill rules, and laid out a six-month roadmap where each phase has an owner, leading KPIs and a gate. Pitched it to Perfora's CEO.",
        landed: "A plan where ~70% of the extra revenue comes from fixing RTO, checkout and repeat buying, with ad spend up only 15%. A pitch, not an implemented result."
      },
      details: [
        ["My role", "Diagnosis, driver-tree model, beta-test design, gated roadmap"],
        ["Pitched to", "Perfora's CEO · Masters' Union × Perfora challenge"],
        ["Data", "MU × Perfora case workbook and brief"],
        ["Status", "Pitched. Not implemented by me."]
      ],
      metrics: [
        { v: "3 phases", l: "Fix, Prove, Grow: each with an owner, leading KPIs and a gate", p: "target" },
        { v: "2", l: "randomised beta tests with written roll-out and kill rules", p: "target" },
        { v: "₹2.1 Cr", l: "of the extra ₹3 Cr from fixing leaks, not new traffic", p: "modelled" },
        { v: "₹4.3 Cr", l: "still reached if every lever delivers only half", p: "modelled" }
      ],
      sections: [
        { h: "The gated roadmap",
          tiers: [["Fix: RTO, checkout, beta tests", "₹3.5 Cr", "Months 1–2"], ["Prove: kits, refill CRM, channel mix", "₹4.8 Cr", "Months 3–4"], ["Grow: gated new spend", "₹6.0 Cr", "Months 5–6"]],
          p: "Each phase has an owner, leading KPIs and a gate. New ad money is released only to channels whose incremental return clears breakeven." },
        { h: "Kill criteria written before the test",
          compare: [["Test 1 · COD confirmation", "Tier 2/3 shoppers randomised 50/50. Roll out if COD RTO ≤ 24% and checkout completion drops less than 1 pt. Kill if conversion falls more than 5%."], ["Test 2 · Past-buyer holdout", "Hold out 50% of past buyers from Meta for four weeks. Keep the spend only if the extra repeat orders beat its cost."]] },
        { h: "Risk planning: what if we're wrong?",
          p: "At 75% of every assumed uplift, revenue still reaches ~₹5.1 Cr; at 50%, ~₹4.3 Cr. The size of each uplift is my judgement (Modelled), which is why the two tests come before the spend." }
      ]
    },

    {
      id: "wowworld", org: "mu", domain: "fmcg", sort: 31,
      name: "WOW! World: a new category behind a 5-gate pilot",
      short: "WOW! World pilot",
      skills: ["gating", "unitecon", "risk"], problems: ["gates"],
      status: "Placed 3rd", when: "2026", dur: "6-month pilot plan", parties: "Five-person team · pitched to WOW! Momo's CEO",
      offer: { t: "5 GATES", s: "before the ₹29 L scale-up is released", p: "target" },
      rating: "target",
      hook: "A ₹54 L pilot in nine quick-commerce clusters, where velocity, taste, trial, repeat and viability decide what happens next.",
      cardImg: "assets/work/wow-packshot.jpg",
      cover: { a: "#D9480F", b: "#5C1A02", big: "5 gates", small: "pilot before scale" },
      media: [
        { type: "img", src: "assets/work/wow-pilot.jpg", alt: "Pilot plan slide: gated pilot and scale-up" },
        { type: "img", src: "assets/work/wow-pricing.jpg", alt: "Pricing slide: a cheap way to try, a better deal to keep cooking" },
        { type: "img", src: "assets/work/wow-unit-economics.jpg", alt: "Unit economics slide: contribution per pack by SKU" },
        { type: "img", src: "assets/work/wow-market.jpg", alt: "Market size slide: TAM to SAM to SOM" },
        { type: "img", src: "assets/work/wow-shelf.jpg", alt: "Shelf gap slide" },
        { type: "img", src: "assets/work/wow-range.jpg", alt: "Launch range slide: three flavours, six SKUs" }
      ],
      deck: { u: "assets/decks/WOW-World-Pitch-Deck.pdf", t: "WOW! World pitch deck", pages: 19, size: "2.4 MB" },
      zomato: "A new city, cuisine push or feature at Zomato is a pilot first. The habit I'd bring from WOW! World is to agree the gates (what number, by when, measured how) before the pilot starts, so the scale-up decision is a reading, not a debate.",
      summary: {
        problem: "WOW! Momo asked for its next FMCG category, with proof of market gap, size, SKUs, pricing and commercial viability.",
        did: "With a five-person team, we found the gap (global-inspired masalas). I owned pricing, unit economics and SOM, and the pilot was built around five gates that decide the scale-up.",
        landed: "WOW! World: three masalas across six SKUs from ₹10 to ₹99, a ₹54 L gated pilot in nine quick-commerce clusters. Placed 3rd pitching to WOW! Momo's CEO."
      },
      details: [
        ["My role", "Pricing, unit economics and SOM"],
        ["Team", "Saanvi Jindal, Yash Dhariwal, Tarushi Tyagi, Anjali Lodha & Navya Juneja"],
        ["Pitched to", "WOW! Momo's CEO · placed 3rd"],
        ["Status", "Pitch. Pack designs are concept mock-ups made by the team."]
      ],
      metrics: [
        { v: "5 gates", l: "velocity, taste, trial, repeat and viability", p: "target" },
        { v: "₹54 L", l: "pilot budget; worst case ₹51 L out of pocket", p: "modelled" },
        { v: "₹31 L", l: "pilot sales in 6 months across 9 clusters", p: "modelled" },
        { v: "₹5.2 Cr", l: "SOM a year in 3 pilot cities, built bottom-up from the pilot", p: "modelled" }
      ],
      sections: [
        { h: "The five gates",
          list: ["Velocity: 0.8 packs per dark store a day", "Taste: 4/5 or better", "Trial: 8% of tasters buy within 7 days", "Repeat: 25% buy again within 60 days", "Viability: 20%+ contribution"] },
        { h: "Sizing from the pilot, not from a share of India",
          steps: [["Pilot · ₹31 L in 6 months", "300 dark stores × 0.8 packs a day × 182 days × ₹66, plus 40 WOW! outlets × 1 pack a day."], ["Year 1 · ₹1.59 Cr", "Pilot plus scale-up in Delhi NCR, Bengaluru and Mumbai."], ["SOM · ₹5.2 Cr a year", "1,500 dark stores × 1.2 a day + 115 outlets × 1.5 + 500 modern-trade stores × 0.4."]] },
        { h: "Price ladder",
          tiers: [["Cooking masala sachet, 20 g", "₹20", "To try"], ["Carton, 5 × 20 g", "₹89", "To keep cooking"], ["Spring Onion shaker, 60 g", "₹99", "Finishing crunch"]] }
      ]
    },

    {
      id: "foundit", org: "mu", domain: "retail", sort: 32,
      name: "Found It: a retail venture run on a weekly P&L",
      short: "Found It venture",
      skills: ["metrics", "partner", "unitecon"], problems: ["leaks", "parties"],
      status: "Real revenue", when: "Jul – Sep 2026", dur: "3 months", parties: "Jaipur workshops, a team, corporate buyers",
      offer: { t: "₹6.94 L", s: "revenue in 3 months · 10.1% EBT", p: "result" },
      rating: "result",
      hook: "Sourcing from Jaipur workshops, selling at Gurugram stalls and to corporate buyers, with the P&L read every week.",
      cover: { a: "#B7791F", b: "#4A2F05", big: "₹6.94 L", small: "revenue · 3 months" },
      zomato: "A weekly P&L is a program cadence: one number everyone reads, every week, with a decision attached. It's the same rhythm I'd use for any Zomato program review, and the 62% from an unplanned channel is why I always look for the second channel early.",
      summary: {
        problem: "Build an ethnic and lifestyle retail brand from nothing with a Masters' Union team, and make it pay inside three months.",
        did: "Led sourcing, sales and people management. Tracked landed costs and ran the venture on a weekly P&L. Built a B2B gifting channel through cold outreach and sales catalogues.",
        landed: "₹6.94 L revenue at 13.1% gross margin and 10.1% EBT, from real customers. B2B gifting brought in 62% of it."
      },
      details: [
        ["My role", "Sourcing, sales, people management, P&L"],
        ["Team", "Masters' Union team venture"],
        ["When & where", "Jul – Sep 2026 · Gurugram"],
        ["Source of truth", "The weekly P&L workbook"]
      ],
      metrics: [
        { v: "₹6.94 L", l: "revenue in three months", p: "result" },
        { v: "62%", l: "from a B2B gifting channel built by cold outreach", p: "result" },
        { v: "13.1%", l: "gross margin", p: "result" },
        { v: "10.1%", l: "EBT", p: "result" }
      ],
      sections: [
        { h: "Weekly operating rhythm",
          list: ["Stock tracking", "Order packing and Shiprocket fulfilment", "Landed cost per product", "Weekly P&L and cash tracking"] },
        { h: "Trade-offs that came up every week",
          compare: [["Bulk rates vs unsold stock", "A lower unit cost only helps if the stock sells inside three months."], ["Sourcing vs selling", "Hours with workshops are hours not spent at the stall or with corporate buyers."]] }
      ]
    },

    {
      id: "prolectro", org: "mu", domain: "research", sort: 33,
      name: "Prolectro: from a 101-person survey to a gated GTM",
      short: "Prolectro research & GTM",
      skills: ["discovery", "gating"], problems: ["gates"],
      status: "Proposed", when: "Sep 2026", dur: "Research sprint", parties: "Team of five",
      offer: { t: "41 OF 74", s: "who tried protein powder had stopped", p: "sourced" },
      rating: "sourced",
      hook: "Designed for the people who left, around the reason they left. Proposed, never launched, and labelled as such.",
      cardImg: "assets/work/prolectro-keyvisual.jpg",
      cover: { a: "#C2255C", b: "#4E0B24", big: "41 / 74", small: "had quit protein" },
      media: [
        { type: "img", src: "assets/work/prolectro-pack.jpg", alt: "Prolectro Refresh sachet pack concept" },
        { type: "img", src: "assets/work/prolectro-flavours.jpg", alt: "Six proposed flavours in two families" },
        { type: "video", src: "assets/work/prolectro-teaser.mp4", poster: "assets/work/prolectro-teaser-poster.jpg", alt: "Prolectro campaign teaser" }
      ],
      links: [{ t: "Open the waitlist page", u: "https://partner-project-glow.lovable.app" }],
      zomato: "Programs start with a sharp read of who the user is and why they behave the way they do. Before planning a rollout, I'd want the equivalent of the 41-of-74 number: the specific group the program is for, and the reason they currently drop off.",
      summary: {
        problem: "41 of the 74 surveyed people who had tried protein powder had stopped. Could a product win them back?",
        did: "Created the brand; owned positioning, product definition and pricing; ran the 101-person survey the strategy argues from.",
        landed: "A GTM plan with launch gates and campaign assets. Proposed, never commercially launched."
      },
      details: [
        ["My role", "Brand, positioning, product definition, pricing, primary research"],
        ["Research", "101 urban respondents, 12-question survey, September 2026"],
        ["Status", "Proposed, never commercially launched"]
      ],
      metrics: [
        { v: "101", l: "urban respondents in the survey", p: "sourced" },
        { v: "47%", l: "found shakes too thick or filling", p: "sourced" },
        { v: "₹129", l: "per sachet, against ₹166–176 for the nearest combined product", p: "target" }
      ],
      sections: [
        { h: "Honest caveat",
          p: "101 urban respondents is directional evidence, not proof of national demand. The credible next step is a small pilot that tests price, retention and channel before anything else is built." }
      ]
    },

    {
      id: "mid", org: "navya", domain: "ops", sort: 40,
      name: "MID Procurement: whose time was it?",
      short: "MID Procurement build",
      skills: ["process", "metrics", "partner", "uat"], problems: ["owner", "handoffs", "parties"],
      status: "Live build", when: "Sep 2026 – present", dur: "Live", parties: "BD, Onboarding, Ops, 6 acquirers",
      offer: { t: "99% AUTO", s: "bank replies processed at 100% precision (synthetic data)", p: "built" },
      rating: "built",
      hook: "Four parties, six banks, and an old tracker that could say a request was late but not whose time it was.",
      cover: { a: "#2F7D32", b: "#0F3311", big: "4 clocks", small: "one per party" },
      media: [
        { type: "img", src: "assets/work/mid-timeline.png", alt: "Per-request timeline with overlapping party clocks" },
        { type: "img", src: "assets/work/mid-scorecard.png", alt: "Acquirer scorecard from the MID procurement dashboard" }
      ],
      links: [
        { t: "Open the live build", u: "https://workflowmidprocurement.vercel.app/" },
        { t: "Read the PRD", u: "https://github.com/navyajuneja1000-droid/MID-Procurement-Workflow/blob/HEAD/PRD.md" }
      ],
      zomato: "Restaurant onboarding, delivery-partner onboarding and refunds all pass through several teams. A dashboard that says 'late' without saying whose time it was starts arguments instead of fixes. Per-party clocks are the tool I'd bring to any multi-team turnaround at Zomato.",
      summary: {
        problem: "A merchant cannot take card payments until each acquiring bank issues a MID. Four parties (BD, Onboarding, Ops and the bank) touch every request, and requests bounce for missing information.",
        did: "Built an event-sourced web app that runs a separate clock for each party, reads bank replies out of the inbox, checks intake data before it costs a bank cycle, and chases SLAs. Written up as a full PRD.",
        landed: "99% of bank replies processed automatically at 100% precision across 1,250 records from 626 bank emails, on a seeded synthetic dataset, not live traffic."
      },
      details: [
        ["My role", "Built end to end: data model, turnaround rules, reply parser, intake checks, dashboards"],
        ["Context", "Generalised from operator experience; acquirer names invented"],
        ["When", "September 2026 – present"]
      ],
      metrics: [
        { v: "6", l: "acquirers, each with its own SLA dashboard", p: "built" },
        { v: "99%", l: "of bank replies processed without a human, at 100% precision", p: "built" },
        { v: "626", l: "bank emails · 1,250 records in the synthetic test set", p: "built" }
      ],
      sections: [
        { h: "Per-party clocks",
          p: "Each party gets its own clock. Ops runs alongside the bank; Onboarding runs alongside BD. Because clocks overlap, per-party days add up to more than elapsed days, so a share-of-delay pie chart would be wrong. The honest view is a timeline per request." },
        { h: "Rules that make the numbers fair",
          list: ["Working days only, per acquirer holiday calendar", "A 2pm cut-off on the bank clock", "Bank SLA judged per response round, not on total time", "Same-day handoff counts as one day, not zero", "Deprioritised requests stop every clock and are counted separately"] },
        { h: "What was built",
          steps: [["Intake readiness check", "Per-acquirer field rules catch a request that would bounce before it costs a cycle."], ["Bank reply parser", "Reads tables, lists and attached sheets from bank emails and turns them into events."], ["Turnaround engine", "Every figure derives from an event log, so a rule change recalculates history."]] }
      ]
    },

    {
      id: "reconos", org: "navya", domain: "revrec", sort: 41,
      name: "ReconOS: revenue recovery for D2C brands",
      short: "ReconOS",
      skills: ["process", "partner", "metrics"], problems: ["leaks"],
      status: "Live MVP", when: "Oct 2026 – present", dur: "Live", parties: "Brand, 6 gateways, 9 couriers",
      offer: { t: "15+ CHECKS", s: "across 6 gateways and 9 couriers", p: "built" },
      rating: "built",
      hook: "Audits courier and gateway charges against agreed rate cards, then drafts the claim email.",
      cover: { a: "#3B5BDB", b: "#121F5C", big: "15+", small: "leakage checks" },
      media: [
        { type: "video", src: "assets/work/reconos-teaser.mp4", poster: "assets/work/reconos-teaser-poster.jpg", alt: "ReconOS, 30-second product teaser" }
      ],
      links: [{ t: "Open reconos.in", u: "https://www.reconos.in" }],
      zomato: "Every food order splits money across a customer, a restaurant, a delivery partner and payment providers. Leakage across those flows is a cross-team problem: no single team sees all of it. ReconOS is my habit of tracing each rupee to the bank, turned into a product.",
      summary: {
        problem: "D2C brands pay a gateway and a courier on every order. Both deduct fees, and nobody checks either against the agreed rate card.",
        did: "Built a browser-based audit for Indian Shopify D2C brands: drop in last month's exports and rate cards, and every order is traced from sale to bank, with claim drafts ready. Designed a free first audit, then ₹999 a month.",
        landed: "Live at reconos.in in early access. No customers or recovered amounts yet, and the site says so."
      },
      details: [
        ["My role", "Problem definition, scope, the checks, pricing, the build"],
        ["Output", "Working product, 57 engine tests, live site"],
        ["When", "October 2026 – present"]
      ],
      metrics: [
        { v: "15+", l: "leakage checks", p: "built" },
        { v: "6 + 9", l: "gateways and couriers supported", p: "built" },
        { v: "57", l: "engine tests: one fails if a planted leak is missed", p: "built" }
      ],
      sections: [
        { h: "Claim vs Check",
          p: "'Claim' means the brand's own files prove it. 'Check' means something does not add up but cannot be proven from the files alone. Finding less, and being right about it, is the product." }
      ]
    }
  ],

  /* ---------------- HOW I RUN A PROGRAM ---------------- */
  habits: [
    ["The expensive failures are quiet", "I look for problems with no error message: money that drifts, requests that wait between desks."],
    ["Metrics you can argue with", "I reject the flattering number for the one that survives scrutiny, like per-round bank SLAs instead of total time."],
    ["Quantify before committing", "Market, funnel and unit economics get modelled before anything is built or launched."],
    ["Decide what not to do", "Non-goals, phasing and a manual first version. Scope discipline is a deliverable."]
  ],

  playbook: [
    { id: "intake", n: "Intake", t: "Understand the request before it costs a cycle",
      p: "Who asked, who owns each part, and what would make the request bounce. Evidence first: interviews, data, the current process written down.",
      ex: [["mid", "An intake readiness check catches a request that would bounce before it reaches the bank."], ["h2h", "60+ interviews, a payback analysis and 15+ rivals before the pricing model changed."]] },
    { id: "plan", n: "Plan", t: "One written scope, owners and gates",
      p: "Scope, owners, success metrics and the gate for each phase, agreed by every team that has to deliver it.",
      ex: [["perfora", "Six-month roadmap with an owner, leading KPIs and a gate per phase."], ["h2h", "SLAs, SOPs and hand-offs written for 3 teams before orders flowed."], ["pp-golive", "10-stage workflow mapped before anything was changed."]] },
    { id: "phase", n: "Phase", t: "Pilot, then shift in tranches",
      p: "Start small, decide with numbers, keep a way back.",
      ex: [["pp-migration", "95% of traffic moved in three months through phased routing shifts."], ["wowworld", "A ₹54 L pilot where five gates decide the scale-up."]] },
    { id: "monitor", n: "Monitor", t: "Watch the guardrails, and whose time it is",
      p: "A weekly number with a decision attached, and a clock per party so delay has an owner.",
      ex: [["pp-migration", "Weekly decisions from SQL dashboards of success rates, bank traffic and error codes."], ["mid", "Per-party clocks and acquirer SLA dashboards."], ["foundit", "The venture ran on a weekly P&L."]] },
    { id: "close", n: "Close", t: "Go-live, then confirm it actually landed",
      p: "Requirements agreed, UAT done, go-live coordinated with every party, and the loose ends, like money that didn't settle, closed.",
      ex: [["pp-launches", "Requirements, UAT and go-live owned with networks, banks and PSPs."], ["pp-recon", "₹15+ Cr recovered by closing settlement fixes with Finance."]] }
  ],

  /* ---------------- FIRST 90 DAYS (hypotheses from public info) ---------------- */
  facts: [
    { v: "3,00,000+", l: "restaurants on Zomato", src: "zomato.com homepage", u: "https://www.zomato.com/" },
    { v: "800+", l: "cities", src: "zomato.com homepage", u: "https://www.zomato.com/" },
    { v: "3 billion+", l: "orders delivered", src: "zomato.com homepage", u: "https://www.zomato.com/" },
    { v: "330K", l: "restaurant partners, FY26 (180K in FY22)", src: "Eternal company overview, Apr 2026", u: "https://b.zmtcdn.com/investor-relations/Eternal_Company_Overview_Apr_2026.pdf" },
    { v: "552K", l: "delivery partners, FY26 (285K in FY22)", src: "Eternal company overview, Apr 2026", u: "https://b.zmtcdn.com/investor-relations/Eternal_Company_Overview_Apr_2026.pdf" },
    { v: "24.3M", l: "monthly transacting customers, FY26", src: "Eternal company overview, Apr 2026", u: "https://b.zmtcdn.com/investor-relations/Eternal_Company_Overview_Apr_2026.pdf" }
  ],

  ninety: [
    { k: "Days 1–30", t: "Measure restaurant go-live by party, not just end to end",
      fact: "Zomato's partner page says sign-up 'only takes 10 minutes' and lists five things to keep ready: PAN, GST (if applicable), FSSAI licence, menu and profile food image, and bank details. Restaurant partners grew from 180K (FY22) to 330K (FY26).",
      src: ["Zomato partner-with-us page", "https://www.zomato.com/partner-with-us/"],
      hyp: "If sign-up takes minutes, most of the time to first order likely sits after it: document checks, menu, payouts, and re-submissions. A clock per party (like MID Procurement) would show where.",
      wrong: "Wrong if re-submissions are already rare (say under 1 in 20 applications) and one team's queue explains most elapsed time. Then it's a capacity problem, not a handoff one.",
      metric: "Elapsed days, sign-up to first order · days held per party · re-submission rate",
      cases: ["mid", "pp-golive"] },
    { k: "Days 31–60", t: "Roll out delivery-partner programs in tranches with guardrails",
      fact: "552K delivery partners in FY26. EV-based delivery partners doubled from 52K (Mar-25) to 100K+ (Mar-26). Over ₹116 Cr invested in delivery-partner insurance in 2026.",
      src: ["Eternal company overview, Apr 2026", "https://b.zmtcdn.com/investor-relations/Eternal_Company_Overview_Apr_2026.pdf"],
      hyp: "Programs like EV adoption or insurance involve outside partners and city teams. Shifting city by city, with a guardrail set agreed first, would catch problems before they spread, as the 95% traffic migration did.",
      wrong: "Wrong if a phased rollout adds weeks but city-level guardrails never trigger a hold. Then a faster, single cut-over is the better default.",
      metric: "Adoption per tranche · guardrail breaches that caused a hold · time to full rollout",
      cases: ["pp-migration", "pp-launches"] },
    { k: "Days 61–90", t: "Write the gates before a launch, not after",
      fact: "Zomato delivers in 800+ cities and lists features like Veg Mode, Healthy, Schedule your order and Plan a Party on its app page.",
      src: ["zomato.com homepage", "https://www.zomato.com/"],
      hyp: "For each new city or feature, agreeing the gates up front (metric, threshold, date, owner) shortens the scale-or-stop decision, as in the WOW! World and Perfora plans.",
      wrong: "Wrong if launches with written gates take longer to decide than launches without them, or if gates are routinely overridden.",
      metric: "Days from pilot end to decision · share of launches with pre-written gates · gates overridden",
      cases: ["wowworld", "perfora"] },
    { k: "Ongoing", t: "Trace refunds and payouts to the bank",
      fact: "Every order moves money between customers, restaurant partners (330K) and delivery partners (552K).",
      src: ["Eternal company overview, Apr 2026", "https://b.zmtcdn.com/investor-relations/Eternal_Company_Overview_Apr_2026.pdf"],
      hyp: "A short, recurring reconciliation of one flow at a time (refunds, restaurant payouts, rider payouts) is where I'd look for quiet leaks first. I have no view of whether any exist at Zomato.",
      wrong: "Wrong if the mismatch rate per flow is already near zero and closed within the settlement cycle. Then the time is better spent elsewhere.",
      metric: "Mismatch rate per flow · days to close a mismatch · value recovered",
      cases: ["pp-recon", "reconos"] }
  ],

  /* ---------------- ORDER HISTORY = experience ---------------- */
  orders: [
    { id: "mu", type: "edu", org: "Masters' Union", logo: "assets/logos/masters-union.svg",
      title: "PGP in Technology & Business Management", when: "2026 – Present", where: "Gurgaon",
      status: "ongoing", statusText: "Preparing",
      body: "Co-launched 2 revenue-generating ventures (₹7.3 L combined) and a live AI product. Team projects pitched to the CEOs of Perfora and WOW! Momo.",
      track: [["Order placed", "2026"], ["Perfora · WOW! World", "Pitched to CEOs"], ["Found It", "₹6.94 L revenue"], ["Builds", "MID Procurement · ReconOS"]],
      related: ["perfora", "wowworld", "foundit", "prolectro", "mid", "reconos"] },
    { id: "cogent", type: "work", org: "Cogent Infotech", logo: "assets/logos/cogent.svg",
      title: "Assistant Project Manager – Product Development", when: "Aug 2025 – Jun 2026", where: "Remote",
      status: "delivered", statusText: "Delivered · Jun 2026",
      body: "Took H2H, an expert-led US career-prep program, from pay-after-placement (ISA) to upfront pricing, launched it, and set up delivery across 3 teams. Owned discovery, pricing, the launch and delivery.",
      bullets: [["90%", "on-time delivery across 150+ orders: SLAs, SOPs and hand-offs for 3 teams"], ["~$110K", "in 2 months at 6x ROAS, launching to 2 personas in 5 US states"], ["4.6×", "sign-ups: form drop-off 72% to 45%, 18% of drop-offs recovered"], ["8%", "of 1,500+ sign-ups converted to paid via a free résumé audit"], ["22%", "of $499 buyers upgraded across 3 tiers"], ["60+", "interviews, a payback analysis and 15+ rivals behind the pivot to upfront pricing"]],
      track: [["Joined", "Aug 2025"], ["Pivot", "Upfront pricing"], ["Launch", "~$110K in 2 months"], ["Delivered", "90% on time"]],
      related: ["h2h"] },
    { id: "phonepe-sr", type: "work", org: "PhonePe", logo: "assets/logos/phonepe.svg",
      title: "Senior Operations Analyst – Product & Payments", when: "Jul 2024 – Jun 2025", where: "Bengaluru",
      status: "delivered", statusText: "Delivered · Jun 2025",
      body: "Owned integrations, routing and onboarding for ₹500+ Cr TPV travel merchants, including ixigo and MakeMyTrip. Figures as stated on my CV.",
      bullets: [["95%", "of payment traffic migrated in 3 months via phased shifts"], ["₹8 Cr", "saved a year from routing"], ["+4 pp", "travel payment success from A/B tested routes"], ["₹15+ Cr", "recovered from reconciliation"]],
      track: [["Promoted", "Jul 2024"], ["Routing", "₹8 Cr · +4 pp"], ["Migration", "95% in 3 months"], ["Delivered", "Jun 2025"]],
      related: ["pp-migration", "pp-recon", "pp-launches"] },
    { id: "phonepe", type: "work", org: "PhonePe", logo: "assets/logos/phonepe.svg",
      title: "Operations Analyst – Payments", when: "Jun 2023 – Jun 2024", where: "Bengaluru",
      status: "delivered", statusText: "Delivered · Jun 2024",
      body: "Merchant onboarding, bank integrations and the go-live process. Figures as stated on my CV.",
      bullets: [["10 stages", "MID-to-live workflow mapped across stakeholder teams"], ["53% / 40%", "cut in go-live time, Cards / NetBanking"], ["360", "merchant go-lives in one upload"], ["5+", "bank and PSP integrations"]],
      track: [["Joined", "Jun 2023"], ["Workflow", "10 stages mapped"], ["Bulk tool", "360 in one upload"], ["Promoted", "Jul 2024"]],
      related: ["pp-golive", "pp-launches"] },
    { id: "christ", type: "edu", org: "Christ University", logo: "assets/logos/christ.svg",
      title: "BBA (Hons), Finance · GPA 9.07/10", when: "2020 – 2023", where: "Bengaluru",
      status: "delivered", statusText: "Delivered · 2023",
      body: "Head of the theatre club; Student Council, Cultural Society and HR Club. Dissertation on UPI adoption: 211 users surveyed across 7 behavioural constructs." },
    { id: "school", type: "edu", org: "Saint Kabir Public School", logo: "assets/logos/school.svg",
      title: "CBSE Class XII (Commerce) · 94.8%", when: "2018", where: "Chandigarh",
      status: "delivered", statusText: "Delivered · 2018",
      body: "Outclass Team President." }
  ],

  offclock: [
    ["30", "interns selected and managed across colleges during an HR internship at Infelearn"],
    ["30+", "member team led as Mime Head, Live Illusion Productions"],
    ["1st", "at the Masters' Union Startup Weekend, pitching a D2C pet-care venture against 20+ teams"],
    ["15+", "college events run as Student Coordinator"]
  ],

  certs: [
    ["Project Management", "Google · project scoping, stakeholder alignment, risk planning, Agile delivery"],
    ["Financial Modelling & Valuation", "Udemy · three-statement modelling, DCF, unit economics"]
  ],

  faq: [
    ["Why Program Manager, and why Zomato?",
     "Because the problems I've enjoyed most were never about one industry. They were about many parties, unclear ownership and work waiting between desks: a 10-stage merchant go-live, three teams handing off to deliver 150+ orders on time, a pilot that needs gates before it spends. Zomato runs exactly that kind of program every day, across restaurants, delivery partners and customers, at a scale where a day saved in a handoff matters."],
    ["Isn't your background mostly payments?",
     "Payments at PhonePe is two of my years and one domain on this page. The others are US career-prep edtech (Cogent), D2C growth (Perfora), an FMCG launch (WOW! World), a retail venture (Found It), consumer research (Prolectro), ops tooling (MID Procurement) and revenue recovery (ReconOS). The common thread is running work across teams to a finish."],
    ["What do the Result / Built / Modelled labels mean?",
     "Every number says where it came from. Result: achieved. Built: a working product you can open. Modelled: my own assumption. Target: a success criterion. Sourced: external or survey data, cited. If a project didn't launch, it says so."],
    ["Is any Zomato data used here?",
     "No internal data. Zomato facts come from zomato.com and Eternal's public company overview, and are labelled Sourced with a link. Everything about what I'd do at Zomato is a hypothesis to test, not a finding."],
    ["Is any PhonePe data reproduced here?",
     "No. PhonePe figures are as stated on my CV. Underlying transaction data and internal documents are PhonePe's and are not reproduced."],
    ["Where are you based?",
     "Gurgaon. Open to relocating, Bengaluru included."]
  ]
};
