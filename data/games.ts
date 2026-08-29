/**
 * ============================================================
 * GAMES — EDIT ME
 * ============================================================
 * Each entry is a card in the "Our Work" section.
 * - `role`: 'created' (made by Slow Games) or 'contributed'
 *   (we worked on it). ← adjust per game.
 * - `image`: official Roblox thumbnail in /public/games.
 * - `meta`: the stat line on the card, shown as-is.
 *
 * Thumbnails and visit counts pulled from the official Roblox
 * APIs (games.roblox.com / thumbnails.roblox.com), August 2026.
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
    image: '/games/strawberry-tower.png', // official Roblox thumbnail
    role: 'contributed', // ← set to 'created' if this is your own game
    meta: '126M+ visits',
    url: 'https://www.roblox.com/games/139733286702777/Strawberry-Tower',
  },
  {
    id: 'fat-and-skinny',
    title: 'Fat And Skinny',
    description:
      'A 2-player obby: one of you is fat, the other is skinny. Team up, pass the tracks and reach the treasure together.',
    image: '/games/fat-and-skinny.png', // official Roblox thumbnail
    role: 'contributed', // ← set to 'created' if this is your own game
    meta: '86M+ visits',
    url: 'https://www.roblox.com/games/134989184196699/Fat-And-Skinny',
  },
  {
    id: 'triangulate',
    title: 'TRIANGULATE',
    description:
      'A physics-based sandbox: build crazy contraptions to produce enough triangles and meet the daily quota.',
    image: '/games/triangulate.png', // official Roblox thumbnail
    role: 'contributed', // ← set to 'created' if this is your own game
    meta: '6.2M+ visits',
    url: 'https://www.roblox.com/games/110413938071189/TRIANGULATE',
  },
];
