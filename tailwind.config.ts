import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Palette noir & blanc strict — aucune autre couleur
      colors: {
        ink: '#0A0A0A', // fond
        paper: '#FAFAFA', // texte principal
        muted: '#6B6B6B', // texte secondaire
        line: '#1F1F1F', // bordures discrètes
      },
      letterSpacing: {
        widest2: '0.3em',
      },
      transitionDuration: {
        '400': '400ms',
      },
      fontFamily: {
        // La stack système géométrique ; remplacée par les variables next/font dans layout.tsx
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
