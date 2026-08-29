import { stats } from '@/data/site';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import AnimatedStat from '@/components/AnimatedStat';

/**
 * Section "À propos" — présentation du studio + stats animées.
 * ← REMPLACER les paragraphes par ta vraie présentation.
 */
export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28 md:px-8 md:py-40">
      <SectionHeading number="02" title="À propos" />

      <div className="grid gap-16 lg:grid-cols-2">
        <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
          {/* ← REMPLACER : présentation du studio */}
          <Reveal>
            <p>
              <span className="text-paper">Slow Games</span> est un studio de jeux Roblox
              indépendant. Notre philosophie tient en une phrase : les grands jeux prennent du
              temps. Pendant que d&apos;autres courent après les tendances, nous avançons à notre
              rythme — celui de l&apos;escargot — pour construire des expériences qui durent.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Chaque monde que nous publions est pensé, testé et poli jusqu&apos;à ce qu&apos;il
              soit vraiment prêt. Pas de sortie précipitée, pas de contenu jetable : des mécaniques
              solides, une direction artistique soignée et des communautés qui restent.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              Rejoignez des millions de joueurs qui ont déjà pris le temps de découvrir nos jeux.
              Le meilleur reste à venir — lentement, mais sûrement.
            </p>
          </Reveal>
        </div>

        {/* Stats animées — valeurs dans data/site.ts */}
        <div className="grid content-start gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.12}>
              <AnimatedStat value={stat.value} suffix={stat.suffix} label={stat.label} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
