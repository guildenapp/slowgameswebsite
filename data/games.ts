/**
 * ============================================================
 * NOS JEUX — DONNÉES À MODIFIER
 * ============================================================
 * Chaque entrée = une carte dans la section "Nos jeux".
 * - Remplace `image` par tes screenshots (place-les dans /public,
 *   ex: /public/games/mon-jeu.png → image: '/games/mon-jeu.png').
 * - `status` : 'live' ou 'dev' (affiche "Live" ou "En développement").
 * - `players` : texte libre (ex: "12.4K joueurs", "—").
 * - `url` : lien vers l'expérience Roblox.
 */

export type GameStatus = 'live' | 'dev';

export interface Game {
  /** Identifiant unique (utilisé comme clé React) */
  id: string;
  title: string;
  description: string;
  /** Chemin vers l'image dans /public */
  image: string;
  status: GameStatus;
  /** Nombre de joueurs affiché tel quel sur la carte */
  players: string;
  /** Lien vers l'expérience Roblox */
  url: string;
}

export const games: Game[] = [
  {
    id: 'game-1',
    title: 'Snail Tycoon', // ← REMPLACER : titre de ton jeu
    description: 'Construis l’empire d’escargots le plus lent — et le plus rentable — de Roblox.',
    image: '/games/placeholder-1.svg', // ← REMPLACER par ton screenshot
    status: 'live',
    players: '12.4K joueurs',
    url: 'https://www.roblox.com/games/0000000000', // ← REMPLACER par le lien Roblox
  },
  {
    id: 'game-2',
    title: 'Slow Race Simulator', // ← REMPLACER
    description: 'La course où arriver dernier est un art. Améliore ton escargot, savoure le trajet.',
    image: '/games/placeholder-2.svg', // ← REMPLACER
    status: 'live',
    players: '8.1K joueurs',
    url: 'https://www.roblox.com/games/0000000000', // ← REMPLACER
  },
  {
    id: 'game-3',
    title: 'Projet S', // ← REMPLACER
    description: 'Notre prochain monde. On prend notre temps — il sera prêt quand il sera prêt.',
    image: '/games/placeholder-3.svg', // ← REMPLACER
    status: 'dev',
    players: '—',
    url: 'https://www.roblox.com/games/0000000000', // ← REMPLACER
  },
];
