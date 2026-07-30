// ============================================================
// Project / case-study data.
//
// NOTE FOR DCW: project facts below are drawn from public record
// (agency pages, press, DCW's own listings) and should be
// confirmed and expanded with your internal project sheets before
// launch. Each case study follows the same shape:
//   challenge  → DCW's independent role → outcome/scope.
// `image` points at a file in /public (optional).
// ============================================================

export const projects = [
  {
    slug: 'colman-dock',
    name: 'Colman Dock',
    subtitle: 'Seattle Ferry Terminal',
    sector: 'Ports · Transportation & Utilities',
    sectorSlugs: ['ports', 'transportation-utilities', 'government'],
    client: 'Washington State Ferries (WSDOT)',
    image: '/qtq80-gQrixd-2048x1404.jpeg',
    featured: true,
    summary:
      'Independent cost management and estimating for the replacement of one of the busiest ferry terminals on the West Coast — delivered while the terminal stayed in full operation.',
    body: [
      'Colman Dock is one of the busiest ferry terminals on the West Coast, and its replacement had to happen without interrupting daily service. That put a premium on cost certainty and disciplined change control.',
      "DCW developed a comparative cost estimate to reconcile with the contractor across the Entry Building and the Elevated Pedestrian Connector, and reviewed change orders spanning dry systems, electrical, mechanical, and structural work, in-water infrastructure, a temporary pedestrian bridge, and roadway modifications — all as an independent, owner's-side check.",
    ],
    facts: [
      { label: 'Role', value: 'Independent cost management & estimating' },
      { label: 'Setting', value: 'Fully operational marine terminal' },
      { label: 'Scope', value: 'Comparative estimate + change-order review' },
    ],
  },
  {
    slug: 'university-link',
    name: 'University Link Light Rail Station',
    subtitle: 'Sound Transit · Seattle',
    sector: 'Transportation & Utilities',
    sectorSlugs: ['transportation-utilities', 'government'],
    client: 'Regional transit authority',
    image: '',
    featured: true,
    summary:
      'Owner-side cost support for a new underground light-rail station and track crossover area serving the University of Washington.',
    body: [
      'The University Link station extended light rail beneath one of Seattle’s densest, most active districts, adjacent to Husky Stadium — a new underground transit station plus a track crossover area.',
      'DCW provided independent cost intelligence on complex underground and transit infrastructure, where geotechnical conditions and phased construction drive both cost and risk.',
    ],
    facts: [
      { label: 'Type', value: 'Underground transit station' },
      { label: 'Role', value: 'Independent cost estimating' },
      { label: 'Context', value: 'Track crossover, dense urban site' },
    ],
  },
  {
    slug: 'pcc-metro-center',
    name: 'PCC Metro Center',
    subtitle: 'Portland Community College',
    sector: 'Higher Education',
    sectorSlugs: ['higher-education'],
    client: 'Portland Community College',
    image: '',
    featured: false,
    summary:
      'Cost planning for a new two-story, 49,404-square-foot Metro Center building for Portland Community College.',
    body: [
      'DCW provided cost planning for a new two-story Metro Center building of roughly 49,404 square feet, helping the institution align an ambitious program against a realistic, market-based budget from the earliest stages.',
    ],
    facts: [
      { label: 'Size', value: '~49,404 SF' },
      { label: 'Stories', value: 'Two' },
      { label: 'Role', value: 'Early-stage cost planning' },
    ],
  },
  {
    slug: 'gilkey-middle-school',
    name: 'Gilkey International Middle School',
    subtitle: 'French American International School',
    sector: 'K-12',
    sectorSlugs: ['k-12'],
    client: 'French American International School',
    image: '',
    featured: false,
    summary:
      'Cost planning for a new ~29,500-square-foot middle-school building on the French American International School campus.',
    body: [
      'DCW supported cost planning for a new building of roughly 29,500 square feet — classrooms, science rooms, collaboration and lunch areas, and offices, along with pedestrian walkways, an amphitheater, outdoor dining, and a trailhead deck.',
      'Independent cost guidance helped the school shape scope and program against its budget while protecting the design intent that made the project distinctive.',
    ],
    facts: [
      { label: 'Size', value: '~29,500 SF' },
      { label: 'Program', value: 'Classrooms, science, amphitheater' },
      { label: 'Role', value: 'Cost planning' },
    ],
  },
];

export const featuredProjects = () => projects.filter((p) => p.featured);
export const getProject = (slug) => projects.find((p) => p.slug === slug);
export const projectsForSector = (sectorSlug) =>
  projects.filter((p) => p.sectorSlugs?.includes(sectorSlug));
