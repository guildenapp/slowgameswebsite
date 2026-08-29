'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Preloader plein écran : logo centré + compteur 0 → 100% + "Initializing".
 * Volontairement posé (ironie du nom oblige), puis fondu vers le site.
 */
export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Progression irrégulière mais tranquille (~2s au total)
    let current = 0;
    const tick = () => {
      current += Math.floor(Math.random() * 9) + 3;
      if (current >= 100) {
        setCount(100);
        // Petite pause à 100% avant le fondu
        setTimeout(() => setVisible(false), 400);
        return;
      }
      setCount(current);
      setTimeout(tick, Math.random() * 90 + 40);
    };
    const start = setTimeout(tick, 200);
    return () => clearTimeout(start);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="/logo-mark.png"
              alt=""
              width={120}
              height={120}
              priority
              className="h-24 w-24 object-contain md:h-32 md:w-32"
            />
          </motion.div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <span className="font-display text-4xl font-bold tabular-nums tracking-widest md:text-5xl">
              {count}%
            </span>
            <span className="text-xs uppercase tracking-widest2 text-muted">
              Initializing
            </span>
          </div>

          {/* Barre de progression fine */}
          <div className="absolute bottom-0 left-0 h-px w-full bg-line">
            <motion.div
              className="h-full bg-paper"
              initial={{ width: '0%' }}
              animate={{ width: `${count}%` }}
              transition={{ ease: 'easeOut', duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
