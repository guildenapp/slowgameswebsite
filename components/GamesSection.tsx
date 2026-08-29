import Image from 'next/image';
import { games, type Game } from '@/data/games';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

function GameCard({ game, index }: { game: Game; index: number }) {
  const isLive = game.status === 'live';
  return (
    <Reveal delay={index * 0.12}>
      <a
        href={game.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block border border-line transition-colors duration-400 hover:border-paper/40"
        aria-label={`${game.title} — ouvrir l'expérience Roblox`}
      >
        {/* Image du jeu (ratio 16:9) */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={game.image}
            alt={`Screenshot de ${game.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover grayscale transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-lg font-bold uppercase tracking-widest">
              {game.title}
            </h3>
            {/* Badge de statut */}
            <span
              className={`flex shrink-0 items-center gap-2 border px-3 py-1 text-[10px] uppercase tracking-widest ${
                isLive ? 'border-paper/40 text-paper' : 'border-line text-muted'
              }`}
            >
              {isLive && (
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-paper opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-paper" />
                </span>
              )}
              {isLive ? 'Live' : 'En développement'}
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted">{game.description}</p>

          <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
            <span className="text-xs uppercase tracking-widest text-muted">{game.players}</span>
            <span className="text-xs uppercase tracking-widest transition-transform duration-300 group-hover:translate-x-1">
              Jouer →
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

/**
 * Section "Nos jeux" — les cartes viennent de data/games.ts.
 */
export default function GamesSection() {
  return (
    <section id="games" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28 md:px-8 md:py-40">
      <SectionHeading number="01" title="Nos jeux" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game, i) => (
          <GameCard key={game.id} game={game} index={i} />
        ))}
      </div>
    </section>
  );
}
