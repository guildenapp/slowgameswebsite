import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { site } from '@/data/site';
import './globals.css';

/**
 * Typographies :
 * - Space Grotesk : sans-serif géométrique pour les titres (uppercase, tracking large)
 * - Inter : corps de texte neutre
 */
const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

/**
 * SEO — métadonnées globales du site.
 * Pense à mettre à jour `site.url` dans data/site.ts avec ton domaine réel.
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Slow Games — Roblox Game Studio',
    template: '%s — Slow Games',
  },
  description:
    'Slow Games est un studio de jeux Roblox indépendant. Great games take time. Découvrez nos expériences, rejoignez la communauté et contactez-nous pour partenariats & publishing.',
  keywords: [
    'Roblox game studio',
    'Roblox',
    'Slow Games',
    'studio de jeux',
    'jeux Roblox',
    'game development',
    'Roblox experiences',
  ],
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: 'Slow Games',
    title: 'Slow Games — Roblox Game Studio',
    description:
      'Studio de jeux Roblox indépendant. Great games take time.',
    images: [
      {
        // ← REMPLACER : ajoute une image /public/og.png (1200×630) pour un meilleur rendu
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Slow Games — logo escargot',
      },
    ],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slow Games — Roblox Game Studio',
    description:
      'Studio de jeux Roblox indépendant. Great games take time.',
    images: ['/logo.png'],
    creator: '@SlowGames', // ← REMPLACER par ton handle X/Twitter
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo-mark.png',
    apple: '/logo-mark.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
