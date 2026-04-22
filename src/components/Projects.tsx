import projects from "../content/projects.json";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

type Project = (typeof projects)[number];

function DotPattern({ id }: { id: string }) {
  return (
    <svg
      viewBox="0 0 200 250"
      className="pointer-events-none absolute inset-0 h-full w-full text-ink-soft opacity-15"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id={`dots-${id}`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="0.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="200" height="250" fill={`url(#dots-${id})`} />
    </svg>
  );
}

function ProjectCard({ p, large = false }: { p: Project; large?: boolean }) {
  const inner = (
    <div className={`group ${p.url ? "cursor-pointer" : "cursor-default"}`}>
      {/* thumbnail */}
      <div
        className={`relative overflow-hidden bg-paper-soft ${
          large ? "mb-7 aspect-[16/9]" : "mb-6 aspect-[4/5]"
        }`}
      >
        <DotPattern id={p.id} />
        {/* concentric rings */}
        <div className="absolute inset-0 grid place-items-center text-ink-soft">
          <svg
            viewBox="0 0 100 100"
            className={`opacity-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              p.url ? "group-hover:scale-110 group-hover:rotate-3 group-hover:opacity-35" : ""
            } ${large ? "h-1/2 w-1/2" : "h-2/3 w-2/3"}`}
          >
            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.4" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.4" />
            <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="0.4" />
            <circle cx="50" cy="50" r="6" fill="currentColor" />
            <line x1="4" y1="50" x2="96" y2="50" stroke="currentColor" strokeWidth="0.25" />
            <line x1="50" y1="4" x2="50" y2="96" stroke="currentColor" strokeWidth="0.25" />
          </svg>
        </div>

        {/* corners */}
        <div className="absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[0.3em] text-muted">
          No. {p.no}
        </div>
        <div className="absolute right-4 top-4 font-mono text-[9px] uppercase tracking-[0.3em] text-muted">
          {p.year}
        </div>

        <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 border border-ink/20 bg-paper px-2 py-1 font-mono text-[9px] uppercase tracking-[0.25em]">
          {p.featured && <span className="size-1 rounded-full bg-accent" />}
          {p.tag}
        </div>

        {p.url && (
          <div className="absolute bottom-4 right-4 translate-y-1 font-mono text-[9px] uppercase tracking-[0.3em] text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            Visit ↗
          </div>
        )}
      </div>

      {/* info */}
      <div>
        <div className="mb-2 flex items-baseline justify-between gap-4">
          <div
            className={`font-display tracking-tight transition-colors duration-300 ${
              large ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
            } ${p.url ? "group-hover:text-accent" : ""}`}
          >
            {p.title}
          </div>
          {p.url && (
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
              ↗
            </span>
          )}
        </div>
        <p className="mb-4 max-w-[52ch] text-sm leading-relaxed text-muted">{p.description}</p>
        <div className="flex flex-wrap gap-2">
          {p.techStack.map((t) => (
            <span
              key={t}
              className="border border-line px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (p.url) {
    return (
      <a href={p.url} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }
  return <div>{inner}</div>;
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel
          number="05"
          title="Portfolio"
          meta={`${projects.length} projects · featured & archive`}
        />

        <Reveal>
          <h2 className="mb-16 font-display text-5xl font-light leading-[0.95] tracking-[-0.03em] md:mb-20 md:text-7xl">
            Selected <span className="italic">work</span>,
            <br />
            across platforms.
          </h2>
        </Reveal>

        {/* Featured — 2-column */}
        {featured.length > 0 && (
          <>
            <div className="mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
              ◉ Featured
            </div>
            <div className="mb-20 grid grid-cols-12 gap-6 md:mb-28 md:gap-8">
              {featured.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.1} className="col-span-12 md:col-span-6">
                  <ProjectCard p={p} large />
                </Reveal>
              ))}
            </div>
          </>
        )}

        {/* Rest — 3-column grid */}
        {rest.length > 0 && (
          <>
            <div className="mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
              ◎ Archive
            </div>
            <div className="grid grid-cols-12 gap-6 md:gap-8">
              {rest.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.08} className="col-span-12 md:col-span-6 lg:col-span-4">
                  <ProjectCard p={p} />
                </Reveal>
              ))}
            </div>
          </>
        )}

        <div className="mt-16 border-t border-line pt-10 text-center">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            And more on GitHub
          </p>
          <a
            href="https://github.com/farhanazizf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-display text-xl italic transition-colors hover:text-accent"
          >
            Explore open-source work
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
