import education from "../content/education.json";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-line bg-paper-soft px-6 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel number="04" title="Foundations" meta="Studies, languages & laurels" />

        <Reveal>
          <h2 className="mb-16 font-display text-4xl font-light leading-[1] tracking-[-0.03em] md:mb-20 md:text-6xl">
            Education <span className="italic">&</span> off-screen.
          </h2>
        </Reveal>

        <div className="grid grid-cols-12 gap-6 md:gap-12">
          {/* Schools */}
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <ul className="border-t border-ink">
                {education.schools.map((e, i) => (
                  <li key={i} className="grid grid-cols-12 gap-4 border-b border-line py-8 md:gap-6">
                    <div className="col-span-3 pt-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                      {e.year}
                    </div>
                    <div className="col-span-9">
                      <div className="font-display text-2xl tracking-tight md:text-3xl">
                        {e.school}
                      </div>
                      <div className="mt-1 text-sm text-muted md:text-base">{e.degree}</div>
                      <div className="mt-3 inline-block border border-ink/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.25em]">
                        GPA · {e.gpa}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Languages + Achievements */}
          <div className="col-span-12 mt-12 md:col-span-4 md:col-start-9 md:mt-0">
            <Reveal delay={0.1}>
              <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                Languages
              </div>
              <ul className="mb-12 space-y-3">
                {education.languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-baseline justify-between border-b border-line pb-3"
                  >
                    <span className="font-display text-xl">{l.name}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                Off-screen
              </div>
              <ul className="space-y-4">
                {education.achievements.map((a) => (
                  <li key={a.title} className="border-b border-line pb-3">
                    <div className="flex items-baseline justify-between">
                      <div className="font-display text-lg">{a.title}</div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                        {a.year}
                      </div>
                    </div>
                    <div className="mt-1 text-xs text-muted">{a.detail}</div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
