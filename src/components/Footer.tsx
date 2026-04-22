import { useEffect, useState } from "react";

export default function Footer() {
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

  return (
    <footer className="bg-ink px-6 pb-10 pt-6 text-paper md:px-10">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-6 border-t border-paper/15 pt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">
        <div className="col-span-6 md:col-span-3">
          © MMXXVI — F. A. Fajarrudin
        </div>
        <div className="col-span-6 md:col-span-3 md:text-center">
          <span className="inline-flex items-center gap-2">
            <span className="size-1 rounded-full bg-accent blink" />
            Jakarta · {time}
          </span>
        </div>
        <div className="hidden md:col-span-3 md:block md:text-center">
          Last revision · 04 / 2026
        </div>
        <div className="col-span-12 mt-3 md:col-span-3 md:mt-0 md:text-right">
          Designed & built in-house
        </div>
      </div>
    </footer>
  );
}
