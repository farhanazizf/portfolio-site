import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { memo, useEffect, useState } from "react";
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

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time || "--:--:--"}</span>;
}

export default function Hero() {
  return (
    <>
      <CursorGlow />
      <section
        id="top"
        className="relative flex min-h-[100dvh] flex-col overflow-hidden px-6 pb-16 pt-28 md:px-10 md:pt-32"
      >
        {/* Decorative blobs — terracotta accent + warm neutral */}
        <div
          className="pointer-events-none absolute -right-32 top-20 size-[500px] rounded-full opacity-60 blur-3xl md:size-[700px]"
          style={{
            background:
              "radial-gradient(circle, rgba(184,74,36,0.06) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-20 size-[400px] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(212,207,196,0.25) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto flex w-full max-w-[1600px] flex-1 flex-col">
          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="grid grid-cols-12 gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted"
          >
            <div className="col-span-6 md:col-span-3">
              <div>Portfolio · MMXXVI</div>
              <div>Vol. 04 · Engineering</div>
            </div>
            <div className="hidden md:col-span-6 md:block md:text-center">
              <span className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-line" />
                An ongoing record
                <span className="h-px w-10 bg-line" />
              </span>
            </div>
            <div className="col-span-6 text-right md:col-span-3">
              <div>{profile.location}</div>
              <div>
                <LiveClock /> · WIB
              </div>
            </div>
          </motion.div>

          {/* Main — asymmetric 7 / 5 split */}
          <div className="mt-14 grid grid-cols-12 gap-6 md:mt-20 md:gap-12">
            {/* LEFT — name, tagline, meta */}
            <div className="col-span-12 md:col-span-7">
              {/* Availability pill */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.04] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-accent backdrop-blur-sm"
              >
                <span className="relative inline-flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
                {profile.availability}
              </motion.div>

              {/* Display name */}
              <h1 className="font-display font-extralight leading-[0.9] tracking-[-0.035em] text-[clamp(2.5rem,9vw,8rem)]">
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
                    className="block pl-[6vw] font-thin italic"
                  >
                    Aziz
                    <motion.span
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 240,
                        damping: 18,
                        delay: 0.85,
                      }}
                      className="ml-3 inline-block align-middle text-accent"
                      style={{ fontSize: "0.2em" }}
                    >
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 40,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="block"
                      >
                        <Asterisk />
                      </motion.span>
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

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease }}
                className="mt-10 max-w-[44ch] font-display text-xl italic leading-snug text-ink-soft md:text-2xl"
              >
                <span className="text-accent">—</span> {profile.tagline}
              </motion.p>

              {/* Role / company meta */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.85, ease }}
                className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted"
              >
                <span className="text-ink">{profile.role}</span>
                <span className="size-1 rounded-full bg-accent" />
                <span>Full-stack · Web · Mobile</span>
                <span className="size-1 rounded-full bg-accent" />
                <span>{profile.company}</span>
              </motion.div>
            </div>

            {/* RIGHT — portrait placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease }}
              className="col-span-12 md:col-span-5"
            >
              <div className="relative mx-auto max-w-sm rounded-[2rem] border border-line/60 bg-paper-soft p-2 shadow-[0_24px_64px_-16px_rgba(17,17,17,0.08)] md:ml-auto md:mr-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-paper-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                  {/* dotted texture */}
                  <svg
                    viewBox="0 0 200 250"
                    className="absolute inset-0 h-full w-full text-ink-soft opacity-30"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <defs>
                      <pattern
                        id="hero-dots"
                        x="0"
                        y="0"
                        width="7"
                        height="7"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="3.5" cy="3.5" r="0.6" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="200" height="250" fill="url(#hero-dots)" />
                  </svg>

                  {/* diagonal cross */}
                  <svg
                    viewBox="0 0 200 250"
                    className="absolute inset-0 h-full w-full text-ink opacity-15"
                    preserveAspectRatio="none"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="200"
                      y2="250"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="200"
                      y1="0"
                      x2="0"
                      y2="250"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </svg>

                  {/* centered monogram */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="font-display text-7xl font-light italic text-ink/50">
                      FA
                    </div>
                    <div className="mt-3 font-mono text-[9px] uppercase tracking-[0.3em] text-muted">
                      Portrait · 4 : 5
                    </div>
                  </div>

                  {/* corner labels */}
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

                {/* Caption below */}
                <div className="flex items-center justify-between px-2 pt-3 pb-1">
                  <div className="font-display text-sm italic text-ink-soft">
                    Full-stack, patient work.
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted">
                    ID · ENG
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1" />

          {/* Scroll hint */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="group mt-16 inline-flex items-center gap-3 self-start font-mono text-[10px] uppercase tracking-[0.25em] text-muted hover:text-ink"
          >
            <span className="h-px w-10 bg-line transition-all duration-500 group-hover:w-16 group-hover:bg-ink" />
            Scroll to continue
            <span className="inline-block transition-transform duration-500 group-hover:translate-y-1">
              ↓
            </span>
          </motion.a>
        </div>
      </section>
    </>
  );
}
