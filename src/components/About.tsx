import profile from "../content/profile.json";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel number="02" title="A Profile" meta="Currently in Jakarta · UTC+7" />

        <div className="grid grid-cols-12 gap-6 md:gap-12">
          {/* Portrait — Double-Bezel */}
          <Reveal className="col-span-12 md:col-span-4">
            {/* Outer shell */}
            <div className="rounded-[2rem] border border-line/60 bg-paper-soft p-2 shadow-[0_24px_64px_-16px_rgba(17,17,17,0.07)]">
              {/* Inner core */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-paper-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                {/* Dotted texture */}
                <svg
                  viewBox="0 0 200 250"
                  className="absolute inset-0 h-full w-full text-ink-soft opacity-30"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <pattern
                      id="about-dots"
                      x="0"
                      y="0"
                      width="6"
                      height="6"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="3" cy="3" r="0.6" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="200" height="250" fill="url(#about-dots)" />
                </svg>

                {/* Diagonal cross */}
                <svg
                  viewBox="0 0 200 250"
                  className="absolute inset-0 h-full w-full text-ink opacity-20"
                  preserveAspectRatio="none"
                >
                  <line x1="0" y1="0" x2="200" y2="250" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="200" y1="0" x2="0" y2="250" stroke="currentColor" strokeWidth="0.5" />
                </svg>

                {/* FA monogram */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="font-display text-7xl font-light italic text-ink/60">FA</div>
                  <div className="mt-3 font-mono text-[9px] uppercase tracking-[0.3em] text-muted">
                    Portrait · 4 : 5
                  </div>
                </div>

                {/* Corner labels */}
                <div className="absolute left-3 top-3 font-mono text-[9px] uppercase tracking-[0.3em] text-ink">
                  FA / 2026
                </div>
                <div className="absolute right-3 top-3 font-mono text-[9px] uppercase tracking-[0.3em] text-ink">
                  ◯ 01
                </div>
                <div className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-[0.3em] text-muted">
                  Replace
                </div>
                <div className="absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-[0.3em] text-muted">
                  Placeholder
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <Reveal delay={0.1}>
              <p className="mb-12 font-display text-3xl font-light leading-[1.15] tracking-[-0.02em] md:text-5xl">
                {profile.bio[0]}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mb-16 max-w-[55ch] text-base leading-relaxed text-ink-soft md:text-lg">
                {profile.bio[1]}
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.3}>
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 border-t border-line pt-10 md:grid-cols-4">
                {profile.stats.map((s, i) => (
                  <div key={s.label} className="relative">
                    {i > 0 && (
                      <span className="absolute -left-2 top-2 hidden h-12 w-px bg-line md:block" />
                    )}
                    <div className="font-display text-5xl font-light tracking-tight md:text-6xl">
                      {s.value}
                    </div>
                    <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.25em] text-muted">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
