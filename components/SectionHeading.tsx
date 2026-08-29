import Reveal from '@/components/Reveal';

/**
 * Titre de section : numéro + titre uppercase, style éditorial.
 */
export default function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <div className="flex items-baseline gap-4">
        <span className="font-display text-xs text-muted">({number})</span>
        <h2 className="font-display text-3xl font-bold uppercase tracking-widest md:text-5xl">
          {title}
        </h2>
      </div>
      <div className="mt-6 h-px w-full bg-line" />
    </Reveal>
  );
}
