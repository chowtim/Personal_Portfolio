import { profile } from "@/content/profile";

const portraitSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/profile.jpg`;

export function Hero() {
  return (
    <section id="top">
      <div className="mx-auto grid max-w-[1120px] items-end gap-10 px-6 pb-16 pt-12 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:gap-16 lg:pb-20">
        <div className="order-2 lg:order-1 lg:pb-6">
          <h1 className="max-w-4xl font-serif text-6xl font-medium leading-[0.92] tracking-tight text-balance sm:text-7xl lg:text-8xl">
            {profile.name}
            <span className="mt-3 block font-sans text-2xl font-normal leading-normal text-stone sm:text-3xl">
              {profile.chineseName}
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-snug text-foreground sm:text-2xl">
            {profile.title}, {profile.membership}
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            {profile.currentRole} at the {profile.organization}. {profile.tagline}
          </p>
          <p className="mt-8 max-w-xl text-lg">{profile.openTo}</p>
          <p className="mt-1 text-sm text-stone">{profile.availability}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#experience"
              className="press press-ink inline-flex h-12 items-center justify-center px-6 text-sm"
            >
              View experience
            </a>
            <a
              href="#contact"
              className="press press-plate inline-flex h-12 items-center justify-center border border-line px-6 text-sm"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src={portraitSrc}
            alt={`Portrait of ${profile.name}`}
            width={397}
            height={400}
            decoding="sync"
            fetchPriority="high"
            className="block h-auto w-64 max-w-full shadow-[10px_16px_32px_rgb(26_24_20/0.16)] sm:w-80 lg:ml-auto lg:w-full"
          />
        </div>
      </div>
    </section>
  );
}
