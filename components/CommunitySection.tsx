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
 * "Community" — link cards (Discord, X, YouTube, Roblox).
 * Cards fully invert (white on black → black on white) on hover.
 * URLs live in data/site.ts.
 */
export default function CommunitySection() {
  return (
    <section id="community" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28 md:px-8 md:py-40">
      <SectionHeading
        number="03"
        title="Community"
        kicker="Where the herd hangs out"
        ghost="Join us"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {socials.map((social, i) => {
          const Icon = icons[social.id];
          return (
            <Reveal key={social.id} delay={i * 0.1}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 border border-line p-10 text-center transition-all duration-400 hover:border-paper hover:bg-paper"
              >
                <span className="text-muted transition-colors duration-400 group-hover:text-ink">
                  <Icon />
                </span>
                <span className="font-display text-sm font-bold uppercase tracking-widest transition-colors duration-400 group-hover:text-ink">
                  {social.label}
                </span>
                <span className="text-xs text-muted transition-colors duration-400 group-hover:text-ink/60">
                  {social.handle}
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
