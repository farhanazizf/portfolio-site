type Props = {
  number: string;
  title: string;
  meta?: string;
};

export default function SectionLabel({ number, title, meta }: Props) {
  return (
    <div className="mb-16 grid grid-cols-12 gap-6 md:mb-24">
      <div className="col-span-6 md:col-span-3">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          <span className="flex size-6 items-center justify-center rounded-full border border-line-soft bg-paper-soft text-ink">
            {number}
          </span>
          <span>{title}</span>
        </div>
      </div>
      {meta && (
        <div className="col-span-6 text-right font-mono text-[10px] uppercase tracking-[0.25em] text-muted md:col-span-9">
          {meta}
        </div>
      )}
    </div>
  );
}
