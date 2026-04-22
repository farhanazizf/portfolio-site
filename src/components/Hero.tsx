import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { memo, useEffect } from "react";
import profile from "../content/profile.json";

const ease = [0.16, 1, 0.3, 1] as const;

const CursorGlow = memo(function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const translateX = useTransform(x, (v) => v - 350);
  const translateY = useTransform(y, (v) => v - 350);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 hidden h-[700px] w-[700px] rounded-full md:block"
      style={{
        x: translateX,
        y: translateY,
        background:
          "radial-gradient(circle, rgba(184,74,36,0.055) 0%, transparent 70%)",
      }}
    />
  );
});

function Asterisk() {
  return (
    <svg
      viewBox="0 0 12 12"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6 0L7.3 4.7L12 6L7.3 7.3L6 12L4.7 7.3L0 6L4.7 4.7Z" />
    </svg>
  );
}

const metaItems = [
  {
    content: (
      <>
        <div>Portfolio</div>
        <div>Vol. 04 · MMXXVI</div>
      </>
    ),
    className: "col-span-6 md:col-span-3",
  },
  {
    content: (
      <span className="inline-flex items-center gap-3">
        <span className="h-px w-10 bg-line" />
        An ongoing record
        <span className="h-px w-10 bg-line" />
      </span>
    ),
    className: "hidden md:col-span-6 md:block md:text-center",
  },
  {
    content: (
      <>
        <div>01 / Index</div>
        <div>{profile.location}</div>
      </>
    ),
    className: "col-span-6 text-right md:col-span-3",
  },
];

export default function Hero() {
  return (
    <>
      <CursorGlow />
      <section
        id="top"
        className="relative flex min-h-[100dvh] flex-col px-6 pb-16 pt-32 md:px-10 md:pt-40"
      >
        <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col">
          {/* Top meta row — individually staggered */}
          <div className="mb-12 grid grid-cols-12 gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted md:mb-20">
            {metaItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className={item.className}
              >
                {item.content}
              </motion.div>
            ))}
          </div>

          {/* Display name */}
          <div className="flex flex-1 flex-col justify-center">
            <h1 className="font-display font-extralight text-display-hero">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease }}
                  className="block"
                >
                  Farhan
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.08, ease }}
                  className="block pl-[8vw] font-thin italic"
                >
                  Aziz
                  <motion.span
                    initial={{ opacity: 0, rotate: -90, scale: 0.4 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 18,
                      delay: 0.8,
                    }}
                    className="ml-3 inline-block align-middle text-accent"
                    style={{ fontSize: "0.18em" }}
                  >
                    <Asterisk />
                  </motion.span>
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.16, ease }}
                  className="block"
                >
                  Fajarrudin
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Hairline — draws from left */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 0.7, ease }}
            className="my-8 h-px w-full origin-left bg-line md:my-10"
          />

          {/* Stats strip */}
          <div className="mb-10 grid grid-cols-2 gap-y-8 md:mb-14 md:grid-cols-4">
            {profile.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85 + i * 0.08, ease }}
                className="flex flex-col gap-1.5"
              >
                <span className="font-display text-4xl font-extralight italic leading-none tracking-tight md:text-5xl">
                  {stat.value}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bottom row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease }}
            className="grid grid-cols-12 gap-6"
          >
            <div className="col-span-12 max-w-md font-display text-xl italic leading-snug md:col-span-5 md:text-2xl">
              <span className="text-accent">—</span> {profile.tagline}
            </div>
            <div className="hidden md:col-span-3 md:block" />
            <div className="col-span-12 flex flex-col gap-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted md:col-span-4 md:items-end md:text-right">
              <div>{profile.role}</div>
              <div>{profile.company}</div>
              <div className="mt-3 inline-flex items-center gap-2 self-start md:self-end">
                <span className="relative inline-flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-40" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                {profile.availability}
              </div>
              <a
                href="#about"
                className="group mt-6 inline-flex items-center gap-2 self-start text-ink transition-colors duration-300 hover:text-accent md:self-end"
              >
                <span>Scroll</span>
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block"
                >
                  ↓
                </motion.span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
