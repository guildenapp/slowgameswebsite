import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { site } from '@/data/site';
import './globals.css';

/**
 * Typography:
 * - Space Grotesk: geometric sans for display (uppercase, wide tracking)
 * - Inter: neutral body text
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
 * SEO — global site metadata.
 * Remember to update `site.url` in data/site.ts with your real domain.
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Slow Games — Roblox Game Studio',
    template: '%s — Slow Games',
  },
  description:
    'Slow Games is an independent Roblox game studio. Great games take time. Explore the games we build and contribute to, join the community, and reach out for partnerships & publishing.',
  keywords: [
    'Roblox game studio',
    'Roblox',
    'Slow Games',
    'game studio',
    'Roblox games',
    'game development',
    'Roblox experiences',
  ],
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: 'Slow Games',
    title: 'Slow Games — Roblox Game Studio',
    description: 'Independent Roblox game studio. Great games take time.',
    images: [
      {
        // ← REPLACE: add a /public/og.png (1200×630) for a nicer share card
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Slow Games — snail logo',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slow Games — Roblox Game Studio',
    description: 'Independent Roblox game studio. Great games take time.',
    images: ['/logo.png'],
    creator: '@SlowGames', // ← REPLACE with your X/Twitter handle
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
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
