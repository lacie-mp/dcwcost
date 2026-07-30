// ============================================================
// Insights / thought-leadership posts. Drives /insights and
// /insights/[slug].
//
// These are evergreen explainers written to be true regardless of
// market data. The "PNW cost trends" post is intentionally a
// FRAMING piece for a recurring quarterly series — DCW should
// populate future editions with real escalation / bid-climate
// numbers from your own project data. Do not invent statistics.
//
// Body blocks: { h2 } heading · { p } paragraph · { ul: [] } list.
// ============================================================

export const posts = [
  {
    slug: 'what-independent-cost-management-means',
    title: 'What “independent” actually means on the owner’s side',
    date: '2026-07-14',
    dateLabel: 'July 14, 2026',
    category: 'Perspective',
    author: 'The DCW Team',
    excerpt:
      'Plenty of firms call themselves “independent.” Here’s the specific, structural version of independence that changes the numbers an owner sees.',
    body: [
      { p: 'Search any cost consultancy and you’ll find the word “independent.” It has become table stakes — which means it no longer tells an owner much on its own. So it’s worth being specific about what independence means at DCW, and why it changes the advice you get.' },
      { h2: 'Whose side the numbers serve' },
      { p: 'A cost estimate is never just a number; it’s a number produced by someone with incentives. When estimating sits inside a design firm, the budget can quietly bend to protect the design. When it sits inside a contractor, it can bend the other way. Neither is dishonest — it’s gravity.' },
      { p: 'DCW sits on the owner’s side of the table and nowhere else. We don’t design the project and we don’t build it, so our only agenda is an accurate, defensible number you can plan and fund against.' },
      { h2: 'What that looks like in practice' },
      { ul: [
        'Estimates built from first principles — quantities and market-based pricing — not backed into a target.',
        'Alternates and value options that protect design intent instead of gutting it.',
        'Conservative, transparent contingencies, so owners are more likely to finish with uncommitted funds than a surprise.',
        'A documentation trail that holds up when a board, an auditor, or the public asks how a decision was made.',
      ] },
      { h2: 'Why it matters most on public work' },
      { p: 'For agencies and institutions, independence isn’t a nicety — it’s accountability. Public owners have to defend their decisions in the open, and a truly third-party cost read is the difference between a project that survives scrutiny and one that doesn’t.' },
    ],
  },
  {
    slug: 'how-we-estimate',
    title: 'How we estimate: our approach to a defensible number',
    date: '2026-06-20',
    dateLabel: 'June 20, 2026',
    category: 'Methodology',
    author: 'The DCW Team',
    excerpt:
      'A look at the estimating philosophy behind DCW’s work — from quantity takeoffs to the contingencies that keep owners out of trouble.',
    body: [
      { p: 'An estimate is only as useful as it is defensible. Anyone can produce a number; the question is whether it holds up when scope shifts, when the market moves, and when someone asks how you got there. Here is how we think about building one.' },
      { h2: 'Build it up, don’t back it in' },
      { p: 'We estimate from the ground up — measured quantities priced against current market conditions — rather than starting from a target and working backward. That’s slower and more honest, and it’s the only way an estimate can tell an owner something they didn’t already assume.' },
      { h2: 'Market-based, sector-specific' },
      { p: 'We structure ourselves around the sectors we serve, because a hospital, a ferry terminal, and a K-12 school don’t price the same way. Market-based pricing rooted in the specific sector is what turns a spreadsheet into guidance.' },
      { h2: 'Alternates that preserve design intent' },
      { p: 'When a project is over budget, the easy move is to cut what’s expensive. The better move is to offer alternates that hold the design’s intent while bringing cost back in line. Preserving why a design exists — not just trimming it — is part of the job.' },
      { h2: 'Contingencies that protect the owner' },
      { p: 'We’d rather an owner finish with money unspent than be surprised late. Transparent, appropriately conservative contingencies are how a budget absorbs the unknowns that every project carries.' },
    ],
  },
  {
    slug: 'whole-life-cost-lcca',
    title: 'The cheapest building to build is rarely the cheapest to own',
    date: '2026-05-28',
    dateLabel: 'May 28, 2026',
    category: 'Perspective',
    author: 'The DCW Team',
    excerpt:
      'Why life-cycle cost analysis belongs in the earliest design decisions — not the maintenance budget years later.',
    body: [
      { p: 'First cost is visible and immediate; operating cost is quiet and enormous. Over a building’s life, what it costs to run and maintain typically dwarfs what it cost to build — yet the decisions that lock in those costs are made early, when everyone is focused on the construction budget.' },
      { h2: 'What LCCA brings to the table' },
      { p: 'Life-cycle cost analysis (LCCA) puts operations, maintenance, energy, and replacement on the same page as first cost. It lets an owner compare options on what they’ll actually cost to own — not just to build — and make trade-offs with eyes open.' },
      { h2: 'Whole-life thinking is owner-first thinking' },
      { p: 'For public and institutional owners who hold buildings for decades, whole-life cost is simply the honest measure of value. Bringing that lens in early — alongside independent cost management and O&M planning — is one of the highest-leverage things an owner can do.' },
    ],
  },
  {
    slug: 'pnw-public-sector-cost-trends',
    title: 'Reading the Pacific Northwest public-sector bid climate',
    date: '2026-07-25',
    dateLabel: 'July 25, 2026',
    category: 'Cost Trends',
    author: 'The DCW Team',
    excerpt:
      'The first in a recurring series on what’s moving cost for WA and OR public owners — escalation, bid climate, labor, and materials.',
    body: [
      { p: 'This is the first edition of a recurring look at the cost forces shaping public and institutional projects across Washington and Oregon. The national cost consultancies publish global indices; our aim here is narrower and more useful to a PNW owner — what’s actually moving bids on government, healthcare, higher-ed, and K-12 work in this region.' },
      { h2: 'What we watch' },
      { ul: [
        'Escalation — the rate at which construction costs are rising, and how far ahead owners should price it into budgets.',
        'Bid climate — how many contractors are actually bidding public work, and how that competition (or lack of it) shows up in pricing.',
        'Labor — trade availability and prevailing-wage dynamics specific to WA and OR.',
        'Materials — the categories with the most volatility this quarter, and where long-lead items are worth locking early.',
      ] },
      { h2: 'Why a regional read matters' },
      { p: 'A global cost survey can tell you the direction of the wind; it can’t tell you what a school district in the Puget Sound region should carry for escalation on a bond project delivering in three years. That gap — between global data and a specific owner’s decision — is exactly where independent, sector-specific cost management earns its keep.' },
      { h2: 'Coming in future editions' },
      { p: 'We’ll build this series out with concrete commentary drawn from the 400+ projects DCW touches each year. If there’s a sector or a cost question you’d like us to address, tell us — this series is most valuable when it answers the questions owners are actually asking.' },
    ],
  },
];

export const sortedPosts = () =>
  [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
export const getPost = (slug) => posts.find((p) => p.slug === slug);
