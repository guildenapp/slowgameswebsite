/**
 * ============================================================
 * SITE CONFIG — EDIT ME
 * ============================================================
 * Social links, studio stats, contact email, production URL.
 */

export const site = {
  name: 'Slow Games',
  tagline: 'Great games take time.',
  /** ← REPLACE with your production URL (used for SEO / Open Graph / sitemap) */
  url: 'https://slowgames.com',
  /** ← REPLACE with your business email */
  contactEmail: 'contact@slowgames.com',
};

/** Animated stats in the "Studio" section — ← REPLACE with real numbers */
export const stats = [
  { label: 'Total visits', value: 25_000_000, suffix: '+' },
  { label: 'Players reached', value: 1_200_000, suffix: '+' },
  { label: 'Games shipped', value: 3, suffix: '' },
];

/** The three words of the manifesto strip — tweak freely */
export const manifesto = ['Slow', 'Steady', 'Shipped'];

/** "Community" cards — ← REPLACE the URLs with yours */
export const socials = [
  {
    id: 'discord',
    label: 'Discord',
    handle: 'Join the server',
    url: 'https://discord.gg/xxxxxxx', // ← REPLACE
  },
  {
    id: 'twitter',
    label: 'X / Twitter',
    handle: '@SlowGames',
    url: 'https://x.com/slowgames', // ← REPLACE
  },
  {
    id: 'youtube',
    label: 'YouTube',
    handle: '@SlowGames',
    url: 'https://youtube.com/@slowgames', // ← REPLACE
  },
  {
    id: 'roblox',
    label: 'Roblox Group',
    handle: 'Slow Games',
    url: 'https://www.roblox.com/groups/0000000', // ← REPLACE
  },
] as const;
