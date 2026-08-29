/**
 * ============================================================
 * GAMES — EDIT ME
 * ============================================================
 * Each entry is a card in the "Our Work" section.
 * - `role`: 'created' (made by Slow Games) or 'contributed'
 *   (we worked on it). ← adjust per game.
 * - `image`: replace the SVG covers with the real Roblox
 *   thumbnails (drop them in /public/games, update the path).
 * - `meta`: the stat line on the card, shown as-is.
 *
 * Visit counts sourced from public trackers (Rolimon's),
 * August 2026 — refresh them from the Roblox game pages.
 */

export type GameRole = 'created' | 'contributed';

export interface Game {
  /** Unique id (React key) */
  id: string;
  title: string;
  description: string;
  /** Path to the cover image inside /public */
  image: string;
  role: GameRole;
  /** Stat line displayed on the card, e.g. "114M+ visits" */
  meta: string;
  /** Link to the Roblox experience */
  url: string;
}

export const games: Game[] = [
  {
    id: 'strawberry-tower',
    title: 'Strawberry Tower',
    description:
      'A fun and easy tower obby with colorful stages. Climb solo or with friends and reach the top of the tower.',
    image: '/games/strawberry-tower.svg', // ← REPLACE with the real thumbnail
    role: 'contributed', // ← set to 'created' if this is your own game
    meta: '114M+ visits',
    url: 'https://www.roblox.com/games/139733286702777/Strawberry-Tower',
  },
  {
    id: 'fat-and-skinny',
    title: 'Fat And Skinny',
    description:
      'A 2-player obby: one of you is fat, the other is skinny. Team up, pass the tracks and reach the treasure together.',
    image: '/games/fat-and-skinny.svg', // ← REPLACE with the real thumbnail
    role: 'contributed', // ← set to 'created' if this is your own game
    meta: '2-player co-op', // ← put the real visit count here when you have it
    url: 'https://www.roblox.com/games/134989184196699/Fat-And-Skinny',
  },
  {
    id: 'triangulate',
    title: 'TRIANGULATE',
    description:
      'A physics-based sandbox: build crazy contraptions to produce enough triangles and meet the daily quota.',
    image: '/games/triangulate.svg', // ← REPLACE with the real thumbnail
    role: 'contributed', // ← set to 'created' if this is your own game
    meta: '6.2M+ visits',
    url: 'https://www.roblox.com/games/110413938071189/TRIANGULATE',
  },
];
