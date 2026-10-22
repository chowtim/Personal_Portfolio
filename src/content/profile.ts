/**
 * Site copy. Facts come from Curriculum Vitae.pdf.
 * Phone number and home address are intentionally omitted.
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
    "Chartered civil engineer with practical experience in public-sector infrastructure, including slope stability, ELS design, and site supervision.",
  location: "Kwai Chung, Hong Kong",
  email: "chowwingtimmartin@yahoo.com.hk",
  linkedIn: {
    label: "Wing Tim Chow",
    href: "https://www.linkedin.com/in/wing-tim-chow-496489229",
  },
  github: {
    label: "chowtim",
    href: "https://github.com/chowtim",
  },
  availability: "Notice period: 3 months (negotiable)",
} as const;

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const aboutParagraphs = [
  "I am a chartered civil engineer and a Member of the Institution of Civil Engineers (MICE, membership number 93497557). My work is in public-sector infrastructure, with a track record in slope stability analysis, excavation and lateral support (ELS) design, and site supervision for large-scale housing developments.",
  "At the Hong Kong Housing Authority I prepare geotechnical designs and reports, review ELS schemes, and support ground investigation contracts. A secondment to the Geotechnical Engineering Office covered the geology of Hong Kong, aerial photograph interpretation, and laboratory and field testing of soil and rock.",
  "I hold an MSc in Civil Infrastructural Engineering and Management from The Hong Kong University of Science and Technology (GPA 3.83, geotechnical engineering) and a BEng in Civil Engineering from The University of Hong Kong. I have also completed training in BIM, MiC site inspection, Python for data science, and AI and digital transformation in government.",
] as const;

export type Role = {
  title: string;
  organization: string;
  period: string;
  points: string[];
  groups?: { title: string; points: string[] }[];
};

export const experience: Role[] = [
  {
    title: "Geotechnical Engineering Graduate",
    organization: "The Hong Kong Housing Authority",
    period: "August 2022 – Present",
    points: [
      "Developed geotechnical reports for soil nail designs at the San Kwai Street public housing project, with slope stability analyses in SLOPE/W.",
      "Managed on-site construction progress and enforced safety compliance for soil nails and general civil works.",
      "Evaluated excavation and lateral support (ELS) designs for the Lai Chi Kok Road project, including settlement calculations with FREW.",
      "Assisted with project specifications for Ground Investigation Term Contracts A to D (2023–2025).",
    ],
    groups: [
      {
        title:
          "Secondment to the Geotechnical Engineering Office, Civil Engineering and Development Department",
        points: [
          "Planning Division: engineering geology, the geology of Hong Kong, and aerial photograph interpretation.",
          "Public Works Central Laboratory: laboratory and field testing of soil and rock for geotechnical assessments.",
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
    points: ["Verified design data and supported tender evaluation."],
  },
];

export const skillGroups = [
  {
    title: "Technical",
    items: [
      "Slope stability analysis",
      "Soil nail design",
      "ELS design",
      "Settlement calculation",
      "Site supervision",
      "Ground investigation contracts",
      "Engineering geology",
      "Soil and rock testing",
    ],
  },
  {
    title: "Tools",
    items: ["SLOPE/W", "SEEP/W", "FREW", "PLAXIS", "BIM Viewer"],
  },
  {
    title: "Languages",
    items: ["English", "Cantonese", "Mandarin", "Cangjie Chinese typing"],
  },
] as const;

export const credentials = [
  {
    name: "Member (MICE), Institution of Civil Engineers",
    detail: "Membership number 93497557",
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

export const otherFacts = ["Hong Kong Driving Licence Class 1 and 2"] as const;

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
