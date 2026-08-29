/**
 * ============================================================
 * CONFIGURATION DU SITE — DONNÉES À MODIFIER
 * ============================================================
 * Liens réseaux, stats du studio, email de contact, URL du site.
 */

export const site = {
  name: 'Slow Games',
  tagline: 'Great games take time.',
  /** ← REMPLACER par l'URL de production (utilisée pour le SEO / Open Graph / sitemap) */
  url: 'https://slowgames.com',
  /** ← REMPLACER par ton email business */
  contactEmail: 'contact@slowgames.com',
};

/** Stats affichées (et animées) dans la section "À propos" */
export const stats = [
  { label: 'Visites totales', value: 25_000_000, suffix: '+' }, // ← REMPLACER
  { label: 'Joueurs', value: 1_200_000, suffix: '+' }, // ← REMPLACER
  { label: 'Jeux publiés', value: 2, suffix: '' }, // ← REMPLACER
];

/** Cartes de la section "Communauté" — remplace les URLs par les tiennes */
export const socials = [
  {
    id: 'discord',
    label: 'Discord',
    handle: 'Rejoins le serveur',
    url: 'https://discord.gg/xxxxxxx', // ← REMPLACER
  },
  {
    id: 'twitter',
    label: 'X / Twitter',
    handle: '@SlowGames',
    url: 'https://x.com/slowgames', // ← REMPLACER
  },
  {
    id: 'youtube',
    label: 'YouTube',
    handle: '@SlowGames',
    url: 'https://youtube.com/@slowgames', // ← REMPLACER
  },
  {
    id: 'roblox',
    label: 'Groupe Roblox',
    handle: 'Slow Games',
    url: 'https://www.roblox.com/groups/0000000', // ← REMPLACER
  },
] as const;
