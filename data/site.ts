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

/**
 * Animated stats in the "Studio" section.
 * 120M+ = Strawberry Tower (~114M) + TRIANGULATE (~6.2M) visits,
 * per public trackers, August 2026 — Fat And Skinny not included
 * (count unavailable). Refresh from the Roblox pages when you can.
 * `plain: true` renders the number as-is (no K/M formatting).
 */
export const stats = [
  { label: 'Combined visits', value: 120_000_000, suffix: '+' },
  { label: 'Games shipped', value: 3, suffix: '' },
  { label: 'On Roblox since', value: 2025, suffix: '', plain: true },
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
