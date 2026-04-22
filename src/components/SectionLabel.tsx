type Props = {
  number: string;
  title: string;
  meta?: string;
};

export default function SectionLabel({ number, title, meta }: Props) {
  return (
    <div className="mb-16 grid grid-cols-12 gap-6 md:mb-24">
      <div className="col-span-6 md:col-span-3">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          <span className="text-ink">{number}</span> — {title}
        </div>
      </div>
      {meta && (
        <div className="col-span-6 text-right font-mono text-[10px] uppercase tracking-[0.25em] text-muted md:col-span-9 md:text-right">
          {meta}
        </div>
      )}
    </div>
  );
}
