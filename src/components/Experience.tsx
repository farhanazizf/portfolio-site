import experience from "../content/experience.json";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="work" className="px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel number="03" title="Selected Work" meta={`${experience.length} entries · 2019 → 2026`} />

        <Reveal>
          <h2 className="mb-16 font-display text-5xl font-light leading-[0.95] tracking-[-0.03em] md:mb-20 md:text-7xl">
            A working <span className="italic">archive</span>,
            <br />
            mostly engineering.
          </h2>
        </Reveal>

        <ul className="border-t border-ink">
          {experience.map((job, i) => (
            <li
              key={i}
              className="group/row relative overflow-hidden border-b border-line"
            >
              {/* sliding ink background */}
              <span
                aria-hidden
                className="absolute inset-0 z-0 origin-left scale-x-0 bg-ink transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/row:scale-x-100"
              />
              <div className="relative z-10">
                {/* main row */}
                <div className="grid grid-cols-12 gap-4 px-2 py-7 transition-colors duration-300 group-hover/row:text-paper md:gap-6 md:py-9">
                  <div className="col-span-3 pt-2 font-mono text-xs uppercase tracking-[0.15em] md:col-span-2">
                    {job.year}
                  </div>
                  <div className="col-span-9 font-display text-2xl font-light tracking-[-0.02em] md:col-span-5 md:text-4xl">
                    {job.company}
                  </div>
                  <div className="col-span-12 text-sm leading-relaxed md:col-span-4 md:pt-3 md:text-base">
                    <div>{job.role}</div>
                    <div
                      className="mt-1 text-xs text-muted transition-colors duration-300 group-hover/row:text-paper/60"
                    >
                      {job.context}
                    </div>
                  </div>
                  <div className="hidden md:col-span-1 md:flex md:items-start md:justify-end md:pt-3">
                    <span className="inline-block transition-transform duration-500 group-hover/row:translate-x-1 group-hover/row:-translate-y-1">
                      ↗
                    </span>
                  </div>
                </div>
                {/* expanding tech tags */}
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/row:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 px-2 pb-7 md:gap-6">
                      <div className="col-span-3 md:col-span-2" />
                      <div className="col-span-9 flex flex-wrap gap-2 md:col-span-10">
                        {job.stack.map((s) => (
                          <span
                            key={s}
                            className="border border-paper/30 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-paper"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          <span>End of record</span>
          <span>{experience.length} / {experience.length}</span>
        </div>
      </div>
    </section>
  );
}
