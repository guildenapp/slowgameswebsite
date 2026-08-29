'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

/** Formate 25000000 → "25M", 1200000 → "1.2M", 12400 → "12.4K", 2 → "2" */
function formatCompact(n: number): string {
  if (n >= 1_000_000) {
    const v = n / 1_000_000;
    return `${v % 1 === 0 ? v : v.toFixed(1)}M`;
  }
  if (n >= 1_000) {
    const v = n / 1_000;
    return `${v % 1 === 0 ? v : v.toFixed(1)}K`;
  }
  return String(n);
}

/**
 * Compteur animé : monte de 0 à `value` quand la stat entre dans le viewport.
 * Lent (2s), forcément.
 */
export default function AnimatedStat({
  value,
  suffix,
  label,
  plain = false,
}: {
  value: number;
  suffix: string;
  label: string;
  /** Render the raw number (e.g. a year) instead of the K/M compact form */
  plain?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        const n = Math.round(latest);
        el.textContent = plain ? String(n) : formatCompact(n);
      },
    });
    return () => controls.stop();
  }, [inView, value, plain]);

  return (
    <div className="border border-line p-8 text-center">
      <div className="whitespace-nowrap font-display text-3xl font-bold tabular-nums tracking-wide md:text-4xl">
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <div className="mt-3 text-xs uppercase tracking-widest2 text-muted">{label}</div>
    </div>
  );
}
