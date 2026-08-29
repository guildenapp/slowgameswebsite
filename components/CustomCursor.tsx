'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Curseur personnalisé — desktop uniquement (pointeur précis).
 * Un point net + un anneau qui suit avec un léger retard (lent, évidemment).
 * S'agrandit au survol des liens et boutons.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // L'anneau traîne derrière le point — spring doux
  const ringX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.6 });

  useEffect(() => {
    // Activation seulement sur desktop avec souris
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return;

    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-active');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      // Détecte les éléments interactifs sous le curseur
      const target = e.target as HTMLElement;
      setHovering(!!target.closest('a, button, input, textarea, [role="button"]'));
    };

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Point central */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[99] h-1.5 w-1.5 rounded-full bg-paper"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      {/* Anneau en retard */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[99] rounded-full border border-paper/60"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          opacity: hovering ? 0.9 : 0.5,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </>
  );
}
