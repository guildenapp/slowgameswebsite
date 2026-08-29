import Image from 'next/image';
import { site, socials } from '@/data/site';

const navLinks = [
  { href: '#games', label: 'Nos jeux' },
  { href: '#about', label: 'À propos' },
  { href: '#community', label: 'Communauté' },
  { href: '#contact', label: 'Contact' },
];

/**
 * Footer : logo, navigation, réseaux, copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Logo + baseline */}
          <div className="flex flex-col gap-4">
            <a href="#top" className="flex items-center gap-3" aria-label="Slow Games — retour en haut">
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
          <nav aria-label="Navigation du pied de page">
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

          {/* Réseaux */}
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
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-[11px] uppercase tracking-widest text-muted md:flex-row">
          <span>© {year} Slow Games. Tous droits réservés.</span>
          <span>Great games take time.</span>
        </div>
      </div>
    </footer>
  );
}
