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
    "Designing and supervising site formation and ELS works for public housing developments of about HK$1 billion.",
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
  "Chartered civil engineer (MICE) at the Hong Kong Housing Authority, designing and supervising site formation and ELS works for public housing developments of about HK$1 billion. Leads site supervision teams and coordinates with contractors on quality, safety and programme.",
  "Member of the Institution of Civil Engineers, membership number 93497557.",
] as const;

export type ProjectFigure = {
  src: string;
  alt: string;
  caption: string;
};

export type Role = {
  title: string;
  organization: string;
  period: string;
  points: string[];
  projects?: {
    title: string;
    points: string[];
    figures?: { after: number; figure: ProjectFigure }[];
  }[];
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
          "Contract sum about HK$0.9 billion. One domestic block of about 40 storeys on a 2-storey podium, on a site of about 6,500 m². Site supervision: February–July 2025.",
          "Prepared the geotechnical design for slope 7SW-C/CR393 (crest footpath structure RW1, compensation soil nails and slope drainage) using SLOPE/W, meeting factors of safety of 1.4 and 1.1 under 10-year groundwater condition and the predicted worst groundwater table respectively.",
          "Used BIM to set out the nails and avoid clashes with the Footbridge B minipiles.",
          "Led Assistant Inspectors of Works in supervising 61 working soil nails (6–16 m, T25/T40), including setting-out, drilling, grouting, nail heads, pull-out tests and TDR, to the approved drawings, Geoguide 7 and the Code of Practice for Site Supervision.",
          "Prepared the design amendment due to site issues and instructed Technical Officers on drawing revisions for ICU and GEO amendments.",
          "Reviewed the contractor's method statements, master programme and submissions.",
          "Coordinated with the contractor, the survey team and the Project Geotechnical Engineer on clashes, progress and site safety.",
        ],
        figures: [
          {
            after: 1,
            figure: {
              src: "/san-kwai-section.png",
              alt: "SLOPE/W section 2-2 for the site formation design at San Kwai Street",
              caption: "slope stability analysis for the San Kwai Street",
            },
          },
          {
            after: 2,
            figure: {
              src: "/san-kwai-bim.png",
              alt: "BIM view of proposed soil nails and existing minipiles at San Kwai Street",
              caption: "Proposed soil nails and existing minipiles in BIM",
            },
          },
        ],
      },
      {
        title: "Public Housing Development at 373 Lai Chi Kok Road, Sham Shui Po",
        points: [
          "Contract sum about HK$1 billion. A 24-storey domestic block on a 5-storey podium on a flat site of about 1,700 m² at the junction of Lai Chi Kok Road and Yen Chow Street.",
          "Assessed the excavation and lateral support for the pile caps (FSP VI sheet piles, up to three strut levels and a local 30° open cut; excavation generally 4.0 m and locally 6.6 m) with FREW, SEEP/W and SLOPE/W, including toe and hydraulic stability.",
          "Accounted for the settlement of the Grade II historic Sham Shui Po Police Station, 37 Yen Chow Street on shallow foundations, the Kiu Kiang Street Substation and the adjoining six-lane roads, with pre-grouting and a pumping test before excavation.",
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
          "Public Works Central Laboratory: strength and dilatancy of compacted completely decomposed tuff, and comparison of incremental-loading and constant-rate-of-strain oedometer tests on kaolin.",
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
