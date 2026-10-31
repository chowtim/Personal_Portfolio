/**
 * Site copy. Facts come from the curriculum vitae.
 * Edit this file to change what the page says.
 */

export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const profile = {
  name: "Chow Wing Tim",
  chineseName: "周永添",
  title: "Chartered Civil Engineer",
  membership: "MICE",
  h1: "Chow Wing Tim, Martin",
  sentence: "Chartered Engineer. Geotechnical design for high-rise public housing.",
  email: "chowwingtimmartin@yahoo.com.hk",
  phoneDisplay: "+852 9606 2698",
  phoneHref: "tel:+85296062698",
  location: "Kwai Tsing, Hong Kong",
  notice: "Notice period 3 months, negotiable",
  linkedIn: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wing-tim-chow-496489229",
  },
} as const;

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#background", label: "Background" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const aboutLead =
  "Chartered civil engineer (MICE) at the Hong Kong Housing Authority. He designs and supervises site formation and excavation and lateral support for public housing developments of about HK$1 billion, leads site supervision teams, and coordinates with contractors on quality, safety and programme.";

export const aboutFacts = [
  { label: "Name", value: "Chow Wing Tim, Martin (周永添)" },
  { label: "Based in", value: "Kwai Tsing, N.T." },
  { label: "Notice", value: "3 months, negotiable" },
] as const;

export const registrations = [
  { name: "Member, Institution of Civil Engineers", value: "93497557" },
  { name: "BEAM Affiliate, Hong Kong Green Building Council", value: "BA2026-0035" },
  { name: "BIM Viewer, Construction Industry Council", value: "" },
  {
    name: "MiC installation quality assurance, site inspection and supervision, Construction Industry Council",
    value: "",
  },
] as const;

export type Stratum = {
  id: string;
  name: string;
  swatch: string;
  lines: string[];
};

export const strata: Stratum[] = [
  {
    id: "cdg1",
    name: "CDG1",
    swatch: "#e37b2f",
    lines: [
      "Mohr-Coulomb",
      "Unit weight 19 kN/m³",
      "Effective cohesion 5 kPa",
      "Effective friction angle 35°",
    ],
  },
  {
    id: "cdg2",
    name: "CDG2",
    swatch: "#3ec6e0",
    lines: [
      "Mohr-Coulomb",
      "Unit weight 19 kN/m³",
      "Effective cohesion 10 kPa",
      "Effective friction angle 40°",
    ],
  },
  {
    id: "colluvium",
    name: "Colluvium",
    swatch: "#6fbf3a",
    lines: [
      "Mohr-Coulomb",
      "Unit weight 19 kN/m³",
      "Effective cohesion 0 kPa",
      "Effective friction angle 35°",
    ],
  },
  {
    id: "fill",
    name: "Fill",
    swatch: "#f0d35a",
    lines: [
      "Mohr-Coulomb",
      "Unit weight 19 kN/m³",
      "Effective cohesion 2 kPa",
      "Effective friction angle 33°",
    ],
  },
  {
    id: "bedrock",
    name: "Bedrock",
    swatch: "#9a9a9a",
    lines: ["Impenetrable"],
  },
];

export type Project = {
  id: string;
  employer: string;
  title: string;
  kind: string;
  period: string;
  visual: "section" | "type";
  visualText?: string[];
  visualNote?: string;
  minHeight: string;
  image?: { src: string; alt: string; caption: string };
  sideImage?: { src: string; alt: string; caption: string };
  paragraphs: string[];
  strata?: boolean;
};

export const workIntro = {
  role: "Geotechnical Engineering Graduate",
  org: "The Hong Kong Housing Authority",
  period: "August 2022 to the present",
};

export const projects: Project[] = [
  {
    id: "san-kwai",
    employer: "Hong Kong Housing Authority",
    title: "San Kwai Street, Kwai Chung",
    kind: "Public housing, site formation",
    period: "",
    visual: "section",
    visualText: ["Site Formation", "Design"],
    visualNote: "slope stability analysis",
    minHeight: "80svh",
    image: {
      src: asset("/san-kwai-section.png"),
      alt: "SLOPE/W section 2-2 for the public housing development at San Kwai Street, showing soil layers, slip surfaces and soil nails",
      caption: "Section 2-2, slope 7SW-C/CR393",
    },
    sideImage: {
      src: asset("/san-kwai-bim.png"),
      alt: "BIM view of proposed soil nails set out against existing minipiles at San Kwai Street",
      caption: "Proposed soil nails and existing minipiles in BIM",
    },
    paragraphs: [
      "Contract sum about HK$0.9 billion. One domestic block of about 40 storeys on a 2-storey podium, on a site of about 6,500 m².",
      "Prepared the geotechnical design for slope 7SW-C/CR393: the crest footpath structure RW1, compensation soil nails and slope drainage, using SLOPE/W. The design meets factors of safety of 1.4 and 1.1 under the 10-year groundwater condition and the predicted worst groundwater table.",
      "Used BIM to set out the nails and avoid clashes with the Footbridge B minipiles.",
      "Led Assistant Inspectors of Works in supervising 61 working soil nails, 6 to 16 m long, in T25 and T40 bar, including setting-out, drilling, grouting, nail heads, pull-out tests and time-domain reflectometry, to the approved drawings, Geoguide 7 and the Code of Practice for Site Supervision.",
      "Prepared the design amendment for site issues and instructed Technical Officers on drawing revisions for ICU and GEO amendments. Reviewed the contractor’s method statements, master programme and submissions.",
      "Coordinated with the contractor, the survey team and the Project Geotechnical Engineer on clashes, progress and site safety.",
    ],
    strata: true,
  },
  {
    id: "lai-chi-kok",
    employer: "Hong Kong Housing Authority",
    title: "373 Lai Chi Kok Road, Sham Shui Po",
    kind: "Public housing, excavation and lateral support",
    period: "",
    visual: "type",
    visualText: ["ELS Design"],
    visualNote: "for pile caps",
    minHeight: "60svh",
    paragraphs: [
      "Contract sum about HK$1 billion. A 24-storey domestic block on a 5-storey podium, on a flat site of about 1,700 m² at the junction of Lai Chi Kok Road and Yen Chow Street.",
      "Assessed the excavation and lateral support for the pile caps: FSP VI sheet piles, up to three strut levels and a local 30° open cut. Excavation is generally 4.0 m and locally 6.6 m. The check used FREW, SEEP/W and SLOPE/W, including toe and hydraulic stability.",
      "Accounted for settlement of the Grade II historic Sham Shui Po Police Station at 37 Yen Chow Street, on shallow foundations, the Kiu Kiang Street Substation, and the adjoining six-lane roads, with pre-grouting and a pumping test before excavation.",
    ],
  },
  {
    id: "geo",
    employer: "Hong Kong Housing Authority",
    title: "Secondment Training",
    kind: "Geotechnical Engineering Office, Civil Engineering and Development Department",
    period: "",
    visual: "type",
    visualText: ["Secondment Training"],
    visualNote: "Planning Division and Public Works Central Laboratory",
    minHeight: "70svh",
    paragraphs: [
      "Planning Division: prepared an aerial photograph interpretation report and carried out rock joint mapping.",
      "Public Works Central Laboratory: strength and dilatancy of compacted completely decomposed tuff, and a comparison of incremental-loading and constant-rate-of-strain oedometer tests on kaolin.",
    ],
  },
  {
    id: "ground-investigation",
    employer: "Hong Kong Housing Authority",
    title: "Ground Investigation Term Contracts A to D (2023–2025)",
    kind: "",
    period: "",
    visual: "type",
    visualText: ["Preparation of", "Tender Documents"],
    visualNote: "for GI Term Contracts",
    minHeight: "48svh",
    paragraphs: ["Assisted in preparing specifications for the ground investigation term contracts."],
  },
  {
    id: "buildings-department",
    employer: "Buildings Department",
    title: "Summer Intern",
    kind: "",
    period: "July to August 2021",
    visual: "type",
    visualText: ["Buildings Department"],
    visualNote: "",
    minHeight: "42svh",
    paragraphs: [
      "Issued orders for unauthorized building works and prepared compliance inspection reports.",
    ],
  },
  {
    id: "housing-society",
    employer: "Hong Kong Housing Society",
    title: "Summer Intern",
    kind: "",
    period: "July to August 2020",
    visual: "type",
    visualText: ["Hong Kong", "Housing Society"],
    visualNote: "",
    minHeight: "42svh",
    paragraphs: ["Verified design data and supported tender evaluation."],
  },
];

export const sanKwaiMeasures = [
  { word: "1.4", caption: "FoS, ten-year case" },
  { word: "1.1", caption: "FoS, worst groundwater" },
  { word: "61", caption: "Soil nails" },
  { word: "0.9 bn", caption: "Contract sum, HK$" },
] as const;

export type RecordRow = {
  year: string;
  title: string;
  body: string;
  detail: string;
  showYear: boolean;
};

export const backgroundGroups: { label: string; rows: RecordRow[] }[] = [
  {
    label: "Education",
    rows: [
      {
        year: "2024",
        title: "MSc, Civil Infrastructural Engineering and Management",
        body: "Hong Kong University of Science and Technology",
        detail: "GPA 3.83, concentration in geotechnical engineering",
        showYear: true,
      },
      {
        year: "2022",
        title: "BEng, Civil Engineering",
        body: "The University of Hong Kong",
        detail: "Second class honours, division one",
        showYear: true,
      },
    ],
  },
  {
    label: "Achievements and Awards",
    rows: [
      {
        year: "2025",
        title: "Outstanding Service Award for Young Members",
        body: "HKIE Geotechnical Division",
        detail: "Award",
        showYear: true,
      },
      {
        year: "2024",
        title: "School of Engineering Excellent Student Scholarship",
        body: "HKUST",
        detail: "Award",
        showYear: true,
      },
    ],
  },
  {
    label: "Professional Qualification",
    rows: [
      {
        year: "2026",
        title: "Member (MICE)",
        body: "Institution of Civil Engineers",
        detail: "93497557",
        showYear: true,
      },
      {
        year: "2026",
        title: "BEAM Affiliate",
        body: "Hong Kong Green Building Council",
        detail: "BA2026-0035",
        showYear: true,
      },
      {
        year: "2024",
        title: "BIM Viewer",
        body: "Construction Industry Council",
        detail: "",
        showYear: true,
      },
      {
        year: "2026",
        title: "Certificate in MiC Installation Quality Assurance, Site Inspection and Supervision",
        body: "Hong Kong Institute of Construction",
        detail: "",
        showYear: true,
      },
    ],
  },
  {
    label: "Other Professional Development",
    rows: [
      {
        year: "2026",
        title: "AI and Digital Transformation in Government",
        body: "Saïd Business School, University of Oxford",
        detail: "Course",
        showYear: true,
      },
      {
        year: "2026",
        title: "Python 101 for Data Science",
        body: "IBM",
        detail: "Course",
        showYear: true,
      },
      {
        year: "2026",
        title: "Claude Code in Action",
        body: "Anthropic",
        detail: "Course",
        showYear: true,
      },
    ],
  },
];

export const skillGroups = [
  {
    label: "Software",
    rows: [
      { name: "SLOPE/W", value: "Slopes" },
      { name: "SEEP/W", value: "Seepage" },
      { name: "FREW", value: "Excavation" },
      { name: "PLAXIS", value: "Deformation" },
    ],
  },
  {
    label: "Languages",
    rows: [
      { name: "English", value: "Proficient" },
      { name: "Cantonese", value: "Proficient" },
      { name: "Mandarin", value: "Proficient" },
      { name: "Cangjie", value: "Chinese typing" },
    ],
  },
  {
    label: "Licence",
    rows: [{ name: "Hong Kong driving licence", value: "Class 1 and 2" }],
  },
] as const;

export const heroSlides = [
  {
    src: asset("/hero/austin-crane.jpg"),
    alt: "A tower crane on a high-rise under construction. Photograph by Larry D. Moore.",
  },
  {
    src: asset("/hero/foundation-rebar.jpg"),
    alt: "Engineers on a foundation slab of reinforcing steel at a building site.",
  },
  {
    src: asset("/hero/formwork-ebisu.jpg"),
    alt: "Timber formwork and reinforcing cages on a concrete building under construction.",
  },
  {
    src: asset("/hero/foundation-formwork.webp"),
    alt: "Aerial view of foundation formwork and reinforcing steel on a building site.",
  },
] as const;

export const heroDetail = {
  src: asset("/hero/miami-crane-jpg.jpg"),
  alt: "Looking up through a tower crane during high-rise construction in Miami.",
} as const;
