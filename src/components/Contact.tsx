import socials from "../content/socials.json";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink px-6 pb-16 pt-32 text-paper md:px-10 md:pt-48"
    >
      {/* faint section number */}
      <div
        className="pointer-events-none absolute -top-2 right-6 font-display text-[28vw] font-extralight italic leading-none text-paper/[0.04] md:right-10 md:text-[16vw]"
        aria-hidden
      >
        06
      </div>

      <div className="relative mx-auto max-w-[1600px]">
        <div className="mb-16 grid grid-cols-12 gap-6 md:mb-20">
          <div className="col-span-6 md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">
              <span className="text-paper">06</span> — Contact
            </div>
          </div>
          <div className="col-span-6 text-right font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50 md:col-span-9">
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent blink" />
              Currently accepting briefs
            </span>
          </div>
        </div>

        <Reveal>
          <h2 className="mb-20 font-display font-extralight leading-[0.9] tracking-[-0.04em] text-display-hero md:mb-32">
            Let's build
            <br />
            <span className="block pl-[6vw] italic">something.</span>
          </h2>
        </Reveal>

        <div className="mb-24 grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-7">
            <a href={`mailto:${socials.email}`} className="group block">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50">
                Write to
              </div>
              <div className="relative inline-block max-w-full font-display text-3xl tracking-tight md:text-6xl">
                <span className="break-all">{socials.email}</span>
                <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 bg-paper/30 transition-transform duration-500 ease-out group-hover:origin-right group-hover:scale-x-0" />
                <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-paper transition-transform delay-200 duration-500 ease-out group-hover:origin-left group-hover:scale-x-100" />
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.15} className="col-span-12 md:col-span-4 md:col-start-9">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50">
              Or call
            </div>
            <a
              href={`tel:${socials.phone.replace(/\s/g, "")}`}
              className="font-display text-2xl tracking-tight md:text-3xl link-reveal"
            >
              {socials.phone}
            </a>
          </Reveal>
        </div>

        <Reveal>
          <ul className="grid grid-cols-12 gap-6 border-t border-paper/15 pt-8">
            {socials.links.map((s) => (
              <li key={s.label} className="col-span-12 md:col-span-4">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between border-b border-paper/15 py-4 transition-colors hover:border-paper"
                >
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50">
                      {s.label}
                    </div>
                    <div className="mt-1 font-display text-xl md:text-2xl">{s.handle}</div>
                  </div>
                  <span className="font-mono text-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
