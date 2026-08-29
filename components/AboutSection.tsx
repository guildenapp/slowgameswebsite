import { stats } from '@/data/site';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import AnimatedStat from '@/components/AnimatedStat';

/**
 * "Studio" section — who we are + animated stats.
 * ← REPLACE the paragraphs with your real story.
 */
export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28 md:px-8 md:py-40">
      <SectionHeading number="02" title="The Studio" kicker="Who we are" ghost="Studio" />

      <div className="grid gap-16 lg:grid-cols-2">
        <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
          {/* ← REPLACE: studio presentation */}
          <Reveal>
            <p>
              <span className="text-paper">Slow Games</span> is an independent Roblox game
              studio. Our philosophy fits in one sentence: great games take time. While others
              chase trends, we move at our own pace — the snail&apos;s pace — building
              experiences that are meant to last.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Every world we ship — and every game we help build — is designed, tested and
              polished until it&apos;s genuinely ready. No rushed releases, no disposable
              content: solid mechanics, considered art direction, and communities that stick
              around.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              The games we&apos;ve worked on have gathered well over a hundred million visits.
              The best is still ahead — slowly, but surely.
            </p>
          </Reveal>
        </div>

        {/* Animated stats — values live in data/site.ts */}
        <div className="grid content-start gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.12}>
              <AnimatedStat
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                plain={'plain' in stat && stat.plain}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
