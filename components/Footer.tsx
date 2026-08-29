import Image from 'next/image';
import { site, socials } from '@/data/site';

const navLinks = [
  { href: '#games', label: 'Our Work' },
  { href: '#about', label: 'Studio' },
  { href: '#community', label: 'Community' },
  { href: '#contact', label: 'Contact' },
];

/**
 * Footer: giant outlined wordmark, navigation, socials, copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden border-t border-line">
      {/* Wordmark géant en filigrane */}
      <div aria-hidden="true" className="select-none px-5 pt-14 md:px-8">
        <p
          className="whitespace-nowrap text-center font-display text-[13.5vw] font-bold uppercase leading-none tracking-tight text-transparent"
          style={{ WebkitTextStroke: '1px #2A2A2A' }}
        >
          Slow Games
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Logo + baseline */}
          <div className="flex flex-col gap-4">
            <a href="#top" className="flex items-center gap-3" aria-label="Slow Games — back to top">
              <Image
                src="/logo-mark.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-sm font-bold uppercase tracking-widest2">
                Slow Games
              </span>
            </a>
            <p className="text-xs uppercase tracking-widest text-muted">{site.tagline}</p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-widest text-muted transition-colors duration-300 hover:text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <ul className="flex flex-col gap-3">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-muted transition-colors duration-300 hover:text-paper"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Back to top */}
          <a
            href="#top"
            className="self-start border border-line px-5 py-3 text-xs uppercase tracking-widest text-muted transition-colors duration-400 hover:border-paper hover:text-paper"
          >
            Back to top ↑
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-[11px] uppercase tracking-widest text-muted md:flex-row">
          <span>© {year} Slow Games. All rights reserved.</span>
          <span>Great games take time.</span>
        </div>
      </div>
    </footer>
  );
}
