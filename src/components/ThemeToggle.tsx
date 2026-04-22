import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme) || "light";
    setTheme(current);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      title={`Switch to ${isLight ? "dark" : "light"} mode`}
      className="group relative flex size-9 items-center justify-center rounded-full border border-ink/20 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-ink/40 hover:bg-ink/[0.03] active:scale-95"
    >
      <span className="relative block size-[15px]">
        {/* Moon — visible in light mode */}
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`absolute inset-0 size-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isLight
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-50 opacity-0"
          }`}
        >
          <path d="M13.5 9A5 5 0 0 1 7 2.5a5.5 5.5 0 1 0 6.5 6.5z" />
        </svg>
        {/* Sun — visible in dark mode */}
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          aria-hidden="true"
          className={`absolute inset-0 size-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isLight
              ? "rotate-90 scale-50 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        >
          <circle cx="8" cy="8" r="3" />
          <line x1="8" y1="1.5" x2="8" y2="3" />
          <line x1="8" y1="13" x2="8" y2="14.5" />
          <line x1="1.5" y1="8" x2="3" y2="8" />
          <line x1="13" y1="8" x2="14.5" y2="8" />
          <line x1="3.3" y1="3.3" x2="4.4" y2="4.4" />
          <line x1="11.6" y1="11.6" x2="12.7" y2="12.7" />
          <line x1="3.3" y1="12.7" x2="4.4" y2="11.6" />
          <line x1="11.6" y1="4.4" x2="12.7" y2="3.3" />
        </svg>
      </span>
    </button>
  );
}
