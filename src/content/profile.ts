/**
 * Site copy. Facts come from the revised Curriculum Vitae.
 * The home address and phone number are intentionally omitted.
 * Edit this file to change what the page says.
 */

export const profile = {
  name: "Chow Wing Tim",
  chineseName: "周永添",
  title: "Chartered Civil Engineer",
  membership: "MICE",
  currentRole: "Geotechnical Engineering Graduate",
  organization: "Hong Kong Housing Authority",
  tagline:
    "Designing and supervising site formation and excavation and lateral support for public housing developments of about HK$1 billion.",
  location: "Kwai Tsing District, N.T.",
  email: "chowwingtimmartin@yahoo.com.hk",
  linkedIn: {
    label: "Wing Tim Chow",
    href: "https://www.linkedin.com/in/wing-tim-chow-496489229",
  },
  availability: "Notice period: 3 months (negotiable)",
  openTo: "Open to opportunities in civil and geotechnical engineering.",
} as const;

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const aboutParagraphs = [
  "Chartered civil engineer (MICE) at the Hong Kong Housing Authority, designing and supervising site formation and excavation and lateral support for public housing developments of about HK$1 billion. Experience covers slope stability, soil nails and ELS works beside existing buildings and utilities.",
  "Member of the Institution of Civil Engineers, membership number 93497557.",
] as const;

export type Role = {
  title: string;
  organization: string;
  period: string;
  points: string[];
  projects?: { title: string; points: string[] }[];
  groups?: { title: string; points: string[] }[];
};

export const experience: Role[] = [
  {
    title: "Geotechnical Engineering Graduate",
    organization: "The Hong Kong Housing Authority",
    period: "August 2022 – Present",
    projects: [
      {
        title: "Public Housing Development at San Kwai Street, Kwai Chung",
        points: [
          "Contract sum about HK$0.9 billion. One domestic block of about 40 storeys on a 2-storey podium, on a site of about 6,500 m².",
          "Prepared the geotechnical design for site formation on registered slope 7SW-C/CR393, covering a crest footpath structure (RW1) linking Footbridge B to the Lai Cho Road development, compensation soil nails, and slope drainage.",
          "Carried out slope stability analyses in SLOPE/W. After minipiling for Footbridge B damaged 25 existing soil nails, designed 64 compensation soil nails in 12 rows (T25/T40 bars, up to 16 m long, 150 mm holes, Class 2 corrosion protection) so that the permanent factor of safety met 1.4 under the 10-year groundwater condition, and 1.1 under the predicted worst groundwater table.",
          "Used BIM to set out the nails and avoid clashes with the Footbridge B minipiles. Two pull-out tests were satisfactory in accordance with Geoguide 7.",
          "Supervised soil-nail construction and monitoring of ground settlement, groundwater and tilt.",
        ],
      },
      {
        title: "Public Housing Development at 373 Lai Chi Kok Road, Sham Shui Po",
        points: [
          "Contract sum about HK$1 billion. A 24-storey domestic block on a 5-storey podium on a flat site of about 1,700 m² at the junction of Lai Chi Kok Road and Yen Chow Street.",
          "Assessed the excavation and lateral support for the pile caps: FSP VI sheet piles with up to three levels of struts, and a local 30° open cut. Excavation is generally 4.0 m and locally 6.6 m from ground at +4.2 mPD.",
          "Checked wall deflection with FREW, seepage with SEEP/W, and the temporary cut with SLOPE/W. Ultimate limit states (toe and hydraulic stability) are checked by global factors of safety.",
          "Accounted for the Grade II historic building Sham Shui Po Police Station, the 5-storey building at 37 Yen Chow Street on shallow foundations, the Kiu Kiang Street Substation, and the six-lane roads on two sides. Estimated settlement was about 13–17 mm at 37 Yen Chow Street and about 20–23 mm at the adjacent roads, with pre-grouting and a pumping test before excavation.",
        ],
      },
      {
        title: "Ground Investigation Term Contracts A to D (2023–2025)",
        points: ["Assisted in preparing specifications."],
      },
    ],
    points: [],
    groups: [
      {
        title:
          "Secondment to the Geotechnical Engineering Office, Civil Engineering and Development Department",
        points: [
          "Planning Division: prepared an aerial photograph interpretation report and carried out rock joint mapping.",
          "Public Works Central Laboratory: investigated the strength and dilatancy of densely and loosely compacted completely decomposed tuff using Proctor, particle-size, direct-shear and CD, CUM and CUS triaxial tests at relative compactions of 80% to 95%, and compared peak and critical-state friction angles.",
          "Compared incremental-loading and constant-rate-of-strain oedometer tests on kaolin at strain rates from 0.001%/min to 0.1%/min, including preconsolidation pressure and compression parameters.",
        ],
      },
    ],
  },
  {
    title: "Summer Intern",
    organization: "Buildings Department, Hong Kong",
    period: "July 2021 – August 2021",
    points: [
      "Issued orders for unauthorized building works and prepared compliance inspection reports.",
    ],
  },
  {
    title: "Summer Intern",
    organization: "Hong Kong Housing Society",
    period: "July 2020 – August 2020",
    points: ["Verified design data and supported tender evaluation processes."],
  },
];

export const skillGroups = [
  {
    title: "Geotechnical software",
    items: ["SLOPE/W", "SEEP/W", "FREW", "PLAXIS"],
  },
  {
    title: "Languages",
    items: ["English", "Cantonese", "Mandarin"],
  },
] as const;

export const qualifications = [
  {
    name: "Member (MICE), Institution of Civil Engineers",
    detail: "ICE membership number 93497557",
  },
  {
    name: "BEAM Affiliate, Hong Kong Green Building Council",
    detail: "BEAM Affiliate number BA2026-0035",
  },
  {
    name: "BIM Viewer",
    detail: "Construction Industry Council",
  },
  {
    name: "Certificate in MiC Installation Quality Assurance, Site Inspection and Supervision",
    detail: "Hong Kong Institute of Construction, Construction Industry Council",
  },
] as const;

export const professionalDevelopment = [
  {
    name: "AI and Digital Transformation in Government",
    detail: "Saïd Business School, University of Oxford",
  },
  {
    name: "Python 101 for Data Science",
    detail: "IBM",
  },
  {
    name: "Claude Code in Action",
    detail: "Anthropic",
  },
] as const;

export const otherFacts = [
  "Cangjie Chinese typing",
  "Hong Kong Driving Licence Class 1 and 2",
] as const;

export const education = [
  {
    credential: "Master of Science in Civil Infrastructural Engineering and Management",
    school: "The Hong Kong University of Science and Technology",
    period: "2024",
    details: ["GPA 3.83", "Concentration: Geotechnical Engineering"],
  },
  {
    credential: "Bachelor of Engineering in Civil Engineering",
    school: "The University of Hong Kong",
    period: "2022",
    details: ["Second Class Honours, Division One"],
  },
] as const;

export const awards = [
  {
    name: "Outstanding Service Award for Young Members 2025",
    by: "HKIE Geotechnical Division",
    year: "2025",
  },
  {
    name: "School of Engineering Excellent Student Scholarship",
    by: "HKUST",
    year: "2024",
  },
] as const;
