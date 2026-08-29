# Slow Games — Site vitrine

Site vitrine du studio de jeux Roblox **Slow Games**. _Great games take time._

**Stack** : Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion — 100% statique (`output: export`), déployable sur Vercel ou n'importe quel hébergeur.

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvre [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run build
```

Le site statique est généré dans `out/` (avec `sitemap.xml` et `robots.txt`).

## Déployer sur Vercel

1. Pousse le repo sur GitHub.
2. Importe-le sur [vercel.com](https://vercel.com) — Next.js est détecté automatiquement, aucune config nécessaire.

## Contenu à personnaliser

| Fichier | Quoi |
| --- | --- |
| `data/games.ts` | Les 3 cartes de jeux : titres, descriptions, statuts, joueurs, liens Roblox |
| `data/site.ts` | URL du site, email de contact, stats du studio, liens Discord / X / YouTube / Roblox |
| `app/layout.tsx` | Métadonnées SEO (handle Twitter, image Open Graph) |
| `components/AboutSection.tsx` | Les paragraphes de présentation du studio |
| `public/logo.png` | Logo complet (Hero) |
| `public/logo-mark.png` | Escargot seul (navbar, favicon, preloader, footer) |
| `public/games/placeholder-*.svg` | Screenshots des jeux — remplace-les et mets à jour les chemins dans `data/games.ts` |

> 💡 Ajoute une image `public/og.png` (1200×630) et référence-la dans `app/layout.tsx` pour un meilleur aperçu sur les réseaux.

Les endroits à modifier sont marqués `← REMPLACER` dans le code.

## Structure

```
app/
  layout.tsx        # Metadata SEO, fonts (Space Grotesk + Inter), grain
  page.tsx          # Assemblage des sections
  globals.css       # Palette N&B, grain, curseur, focus clavier, reduced-motion
  sitemap.ts        # → /sitemap.xml
  robots.ts         # → /robots.txt
components/
  SiteShell.tsx     # Preloader + curseur personnalisé (contexte client)
  Preloader.tsx     # Compteur 0→100% "Initializing"
  CustomCursor.tsx  # Curseur point + anneau (desktop uniquement)
  Navbar.tsx        # Fixe, translucide au scroll, burger mobile
  Hero.tsx          # Logo, tagline, CTA, fond animé
  GamesSection.tsx  # Grille des jeux (données : data/games.ts)
  AboutSection.tsx  # Présentation + stats animées
  CommunitySection.tsx
  ContactSection.tsx # Formulaire → mailto
  Footer.tsx
data/
  games.ts          # ✏️ Tes jeux
  site.ts           # ✏️ Liens, stats, email
```
