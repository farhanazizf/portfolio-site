const items = [
  "Available for select projects",
  "Senior Software Engineer",
  "Based in Jakarta, ID",
  "Open to collaboration",
  "Six years of practice",
  "Web · Mobile · Platform",
];

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
                  ✦
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
