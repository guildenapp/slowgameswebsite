'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';

/**
 * Contexte "preloader terminé" : permet au Hero de lancer ses animations
 * d'entrée seulement une fois le preloader parti.
 */
const PreloaderContext = createContext(false);

export function usePreloaderDone() {
  return useContext(PreloaderContext);
}

/**
 * Shell client du site : gère le preloader et le curseur personnalisé.
 * Le contenu est toujours rendu (bon pour le SEO — HTML statique complet),
 * le preloader le recouvre simplement pendant le chargement.
 */
export default function SiteShell({ children }: { children: ReactNode }) {
  const [done, setDone] = useState(false);

  return (
    <PreloaderContext.Provider value={done}>
      <Preloader onDone={() => setDone(true)} />
      <CustomCursor />
      {children}
    </PreloaderContext.Provider>
  );
}
