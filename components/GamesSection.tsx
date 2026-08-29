import Image from 'next/image';
import { games, type Game } from '@/data/games';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

function GameCard({ game, index }: { game: Game; index: number }) {
  const created = game.role === 'created';
  return (
    <Reveal delay={index * 0.12}>
      <a
        href={game.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block border border-line bg-ink transition-all duration-400 hover:-translate-y-1.5 hover:border-paper/40 hover:shadow-[0_24px_60px_-24px_rgba(250,250,250,0.12)]"
        aria-label={`${game.title} — open the Roblox experience`}
      >
        {/* Index number, magazine style */}
        <span
          aria-hidden="true"
          className="absolute -top-4 left-5 z-10 bg-ink px-2 font-display text-xs tracking-widest text-muted"
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Cover (16:9) */}
        <div className="relative aspect-video overflow-hidden border-b border-line">
          <Image
            src={game.image}
            alt={`${game.title} cover art`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {/* Voile qui se lève au survol */}
          <div className="absolute inset-0 bg-ink/30 transition-opacity duration-500 group-hover:opacity-0" />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-bold uppercase tracking-widest">
              {game.title}
            </h3>
            {/* Role badge */}
            <span
              className={`mt-0.5 shrink-0 border px-3 py-1 text-[10px] uppercase tracking-widest ${
                created ? 'border-paper/40 text-paper' : 'border-line text-muted'
              }`}
            >
              {created ? 'Our game' : 'Contribution'}
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted">{game.description}</p>

          <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
            <span className="text-xs uppercase tracking-widest text-muted">{game.meta}</span>
            <span className="text-xs uppercase tracking-widest transition-transform duration-300 group-hover:translate-x-1">
              Play →
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

/**
 * "Our Work" — games we've made and contributed to (data/games.ts).
 */
export default function GamesSection() {
  return (
    <section id="games" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28 md:px-8 md:py-40">
      <SectionHeading
        number="01"
        title="Our Work"
        kicker="Games we've made & contributed to"
        ghost="Games"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game, i) => (
          <GameCard key={game.id} game={game} index={i} />
        ))}
      </div>
    </section>
  );
}
