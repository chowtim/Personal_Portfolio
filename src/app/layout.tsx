import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { asset, profile } from "@/content/profile";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-jost",
});

const description =
  "Chow Wing Tim is a chartered civil engineer (MICE) at the Hong Kong Housing Authority. He designs and supervises site formation and excavation support for public housing.";

const themeBoot = `(function(){try{var s=localStorage.getItem("theme");var dark=s?s==="dark":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.dataset.theme=dark?"dark":"light";}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.GITHUB_PAGES === "1" ? "https://chowtim.github.io" : "http://localhost:3456",
  ),
  title: `${profile.name} · ${profile.title}`,
  description,
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} · ${profile.title}`,
    description,
    type: "profile",
    locale: "en_HK",
    images: [{ url: asset("/chow-wing-tim.jpg"), alt: "Portrait of Chow Wing Tim" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · ${profile.title}`,
    description,
    images: [asset("/chow-wing-tim.jpg")],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.chineseName,
  jobTitle: profile.title,
  email: profile.email,
  telephone: "+85296062698",
  image: asset("/chow-wing-tim.jpg"),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kwai Tsing",
    addressRegion: "New Territories",
    addressCountry: "HK",
  },
  worksFor: {
    "@type": "Organization",
    name: "Hong Kong Housing Authority",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "The University of Hong Kong" },
    {
      "@type": "CollegeOrUniversity",
      name: "The Hong Kong University of Science and Technology",
    },
  ],
  sameAs: [profile.linkedIn.href],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip" href="#content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
