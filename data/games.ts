/**
 * ============================================================
 * GAMES — EDIT ME
 * ============================================================
 * Each entry is a card in the "Our Work" section.
 * - `role`: 'created' (made by Slow Games) or 'contributed'
 *   (we worked on it). ← adjust per game.
 * - `image`: replace the SVG covers with real screenshots
 *   (drop them in /public/games and update the path).
 * - `visits`: shown as-is on the card. ← replace with real numbers.
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
  /** Display string, e.g. "128M visits" — shown as-is */
  visits: string;
  /** Link to the Roblox experience */
  url: string;
}

export const games: Game[] = [
  {
    id: 'strawberry-tower',
    title: 'Strawberry Tower',
    description:
      'Climb a tower of berries, one careful jump at a time. Patience is the real skill.',
    image: '/games/strawberry-tower.svg', // ← REPLACE with a real screenshot
    role: 'contributed', // ← set to 'created' if this is your own game
    visits: '— visits', // ← REPLACE, e.g. '128M visits'
    url: 'https://www.roblox.com/games/139733286702777/Strawberry-Tower',
  },
  {
    id: 'fat-and-skinny',
    title: 'Fat And Skinny',
    description:
      'Two shapes, one duo, endless trouble. A chaotic co-op about being very different.',
    image: '/games/fat-and-skinny.svg', // ← REPLACE with a real screenshot
    role: 'contributed', // ← set to 'created' if this is your own game
    visits: '— visits', // ← REPLACE
    url: 'https://www.roblox.com/games/134989184196699/Fat-And-Skinny',
  },
  {
    id: 'triangulate',
    title: 'TRIANGULATE',
    description:
      'Sharp minds only. A geometric challenge where every angle counts.',
    image: '/games/triangulate.svg', // ← REPLACE with a real screenshot
    role: 'contributed', // ← set to 'created' if this is your own game
    visits: '— visits', // ← REPLACE
    url: 'https://www.roblox.com/games/110413938071189/TRIANGULATE',
  },
];
