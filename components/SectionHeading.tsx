import Reveal from '@/components/Reveal';

/**
 * Section heading: index number + uppercase title + optional kicker,
 * with a huge ghost word floating behind (outlined, barely-there).
 */
export default function SectionHeading({
  number,
  title,
  kicker,
  ghost,
}: {
  number: string;
  title: string;
  /** Small line above the title */
  kicker?: string;
  /** Giant translucent word behind the heading (defaults to the title) */
  ghost?: string;
}) {
  return (
    <Reveal className="relative mb-14 md:mb-20">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-0 select-none font-display text-[22vw] font-bold uppercase leading-none tracking-tight text-paper/[0.03] md:-top-16 md:text-[11rem]"
      >
        {ghost ?? title}
      </span>
      <div className="relative">
        {kicker && (
          <p className="mb-3 text-[11px] uppercase tracking-widest2 text-muted">{kicker}</p>
        )}
        <div className="flex items-baseline gap-4">
          <span className="font-display text-xs text-muted">({number})</span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-widest md:text-5xl">
            {title}
          </h2>
        </div>
        <div className="mt-6 h-px w-full bg-line" />
      </div>
    </Reveal>
  );
}
