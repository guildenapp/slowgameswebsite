'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Hairline scroll progress bar pinned to the very top of the viewport.
 * A snail's trail: it only ever moves forward, slowly.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-paper/70"
      style={{ scaleX }}
    />
  );
}
