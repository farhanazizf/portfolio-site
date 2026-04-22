import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute inset-x-0 top-0 h-px origin-left bg-accent"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <a
          href="#top"
          className="group flex items-baseline gap-1 font-display text-xl tracking-tight"
        >
          <span className="font-light italic">Farhan</span>
          <span className="inline-block text-accent transition-transform duration-500 group-hover:rotate-180">
            °
          </span>
        </a>

        <ul className="hidden items-center gap-10 font-mono text-[10px] uppercase tracking-[0.25em] md:flex">
          {links.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} className="group flex items-center gap-2">
                <span className="text-muted transition-colors group-hover:text-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="group hidden items-center gap-2 border border-ink/25 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-ink hover:text-paper md:inline-flex"
          >
            <span className="relative inline-flex size-1.5 items-center justify-center">
              <span className="absolute inline-flex size-full rounded-full bg-accent opacity-60 blink" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            Available
          </a>
        </div>
      </div>
    </nav>
  );
}
