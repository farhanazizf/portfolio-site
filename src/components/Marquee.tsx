const items = [
  "Available for select projects",
  "Senior Software Engineer",
  "Based in Jakarta, ID",
  "Open to collaboration",
  "Six years of practice",
  "Web · Mobile · Platform",
];

function Star() {
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

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-line bg-paper py-7">
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map((t, i) => (
              <div
                key={i}
                className="flex items-center pr-12 font-display text-4xl font-light italic md:text-6xl"
              >
                <span
                  className="mr-12 not-italic text-accent"
                  style={{ fontSize: "0.55em" }}
                >
                  <Star />
                </span>
                <span className="whitespace-nowrap">{t}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
