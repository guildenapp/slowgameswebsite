'use client';

import { motion } from 'framer-motion';

/**
 * Slow scrolling marquee band. On-brand: it crawls.
 * `direction: -1` reverses the crawl.
 */
export default function Marquee({
  text,
  direction = 1,
  className = '',
}: {
  text: string;
  direction?: 1 | -1;
  className?: string;
}) {
  // Four copies so the loop never shows a gap on wide screens
  const chunk = (
    <span className="mx-6 inline-flex items-center gap-6">
      <span>{text}</span>
      <span aria-hidden="true" className="text-muted">
        ◦
      </span>
    </span>
  );

  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden whitespace-nowrap border-y border-line py-5 ${className}`}
    >
      <motion.div
        className="inline-block font-display text-sm font-bold uppercase tracking-widest2 will-change-transform"
        animate={{ x: direction === 1 ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {chunk}
        {chunk}
        {chunk}
        {chunk}
        {chunk}
        {chunk}
        {chunk}
        {chunk}
      </motion.div>
    </div>
  );
}
