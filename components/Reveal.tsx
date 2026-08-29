'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Wrapper d'animation au scroll : fade + translate vers le haut.
 * Lent et posé (0.7s) — c'est la marque de fabrique du studio.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  /** Délai en secondes (pour décaler les éléments d'une même section) */
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
