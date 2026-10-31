import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { HeroMedia } from "@/components/hero-media";
import { Practice } from "@/components/practice";
import { Record } from "@/components/record";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Work } from "@/components/work";

export function Portfolio() {
  return (
    <>
      <HeroMedia />
      <SiteHeader />
      <div className="hero-rest" />
      <main id="content">
        <About />
        <Work />
        <Record />
        <Practice />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
