import profile from "../content/profile.json";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel number="02" title="A Profile" meta="Currently in Jakarta · UTC+7" />

        <div className="grid grid-cols-12 gap-6 md:gap-12">
          {/* Left — sticky label */}
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <div className="sticky top-32">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  On the record
                </div>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-paper-soft px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.25em]">
                  <span className="size-1 rounded-full bg-accent" />
                  2019 → present
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — bio, quote, stats */}
          <div className="col-span-12 md:col-span-9">
            <Reveal delay={0.05}>
              <p className="mb-12 font-display text-3xl font-light leading-[1.15] tracking-[-0.02em] text-ink md:text-5xl">
                {profile.bio[0]}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-[60ch] text-base leading-relaxed text-ink-soft md:text-lg">
                {profile.bio[1]}
              </p>
            </Reveal>

            {/* Pull quote */}
            <Reveal delay={0.25}>
              <div className="mt-16 border-l-2 border-accent pl-6">
                <div className="font-display text-xl italic text-ink-soft md:text-2xl">
                  "Shipping platforms that scale — with care in the details."
                </div>
                <div className="mt-3 font-mono text-[9px] uppercase tracking-[0.25em] text-muted">
                  — The ethic
                </div>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.35}>
              <div className="mt-20 grid grid-cols-2 gap-x-4 gap-y-10 border-t border-line pt-10 md:grid-cols-4">
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
