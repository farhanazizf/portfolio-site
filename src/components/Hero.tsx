import { motion } from "motion/react";
import profile from "../content/profile.json";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col px-6 pb-16 pt-32 md:px-10 md:pt-40"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-12 grid grid-cols-12 gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted md:mb-20"
        >
          <div className="col-span-6 md:col-span-3">
            <div>Portfolio</div>
            <div>Vol. 04 · MMXXVI</div>
          </div>
          <div className="hidden md:col-span-6 md:block md:text-center">
            <span className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-line" />
              An ongoing record
              <span className="h-px w-10 bg-line" />
            </span>
          </div>
          <div className="col-span-6 text-right md:col-span-3">
            <div>01 / Index</div>
            <div>{profile.location}</div>
          </div>
        </motion.div>

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
                className="block pl-[8vw] italic font-thin"
              >
                Aziz
                <span className="ml-3 inline-block align-middle text-accent" style={{ fontSize: "0.18em" }}>
                  ✦
                </span>
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

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease }}
          className="mt-12 grid grid-cols-12 gap-6 md:mt-20"
        >
          <div className="col-span-12 max-w-md font-display text-xl italic leading-snug md:col-span-5 md:text-2xl">
            <span className="text-accent">—</span> {profile.tagline}
          </div>
          <div className="hidden md:col-span-3 md:block" />
          <div className="col-span-12 flex flex-col gap-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted md:col-span-4 md:items-end md:text-right">
            <div>{profile.role}</div>
            <div>{profile.company}</div>
            <div className="mt-3 inline-flex items-center gap-2 self-start md:self-end">
              <span className="size-1.5 rounded-full bg-accent blink" />
              {profile.availability}
            </div>
            <a
              href="#about"
              className="group mt-6 inline-flex items-center gap-2 self-start text-ink hover:text-accent md:self-end"
            >
              <span>Scroll</span>
              <span className="inline-block transition-transform duration-500 group-hover:translate-y-1">↓</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
