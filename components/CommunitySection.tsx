import { socials } from '@/data/site';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { DiscordIcon, RobloxIcon, XIcon, YouTubeIcon } from '@/components/SocialIcons';

const icons: Record<string, () => JSX.Element> = {
  discord: DiscordIcon,
  twitter: XIcon,
  youtube: YouTubeIcon,
  roblox: RobloxIcon,
};

/**
 * Section "Communauté" — cartes de liens (Discord, X, YouTube, Roblox).
 * Les URLs sont dans data/site.ts.
 */
export default function CommunitySection() {
  return (
    <section id="community" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28 md:px-8 md:py-40">
      <SectionHeading number="03" title="Communauté" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {socials.map((social, i) => {
          const Icon = icons[social.id];
          return (
            <Reveal key={social.id} delay={i * 0.1}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 border border-line p-10 text-center transition-colors duration-400 hover:border-paper/40 hover:bg-paper/[0.02]"
              >
                <span className="text-muted transition-colors duration-400 group-hover:text-paper">
                  <Icon />
                </span>
                <span className="font-display text-sm font-bold uppercase tracking-widest">
                  {social.label}
                </span>
                <span className="text-xs text-muted">{social.handle}</span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
