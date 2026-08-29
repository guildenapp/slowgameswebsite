'use client';

import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import { site } from '@/data/site';

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/**
 * Hero: big logo, tagline, two CTAs.
 * Quiet animated backdrop: breathing concentric rings + a faint grid,
 * with a slow mouse parallax on the logo. Everything scrolls away with
 * a gentle fade (the logo drifts up slower than the page).
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Parallax souris — le logo suit à peine, en retard (spring très mou)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(useTransform(mx, [-1, 1], [-14, 14]), { stiffness: 40, damping: 15 });
  const py = useSpring(useTransform(my, [-1, 1], [-10, 10]), { stiffness: 40, damping: 15 });

  // Fondu + drift du contenu quand on scrolle hors du hero
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const drift = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const onMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX / innerWidth) * 2 - 1);
    my.set((e.clientY / innerHeight) * 2 - 1);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5"
    >
      {/* Grille discrète en fond */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(#1F1F1F 1px, transparent 1px), linear-gradient(90deg, #1F1F1F 1px, transparent 1px)',
          backgroundSize: '96px 96px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 45%, black 30%, transparent 75%)',
        }}
      />

      {/* Anneaux qui respirent lentement */}
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
        {[520, 780, 1040].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-line"
            style={{ width: size, height: size }}
            animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{
              duration: 10 + i * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
          />
        ))}
        <div className="absolute h-[600px] w-[600px] rounded-full bg-paper/[0.03] blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        style={{ opacity: fade, y: drift }}
      >
        <motion.div {...enter(0)} style={{ x: px, y: py }}>
          <Image
            src="/logo.png"
            alt="Slow Games — snail logo"
            width={560}
            height={560}
            priority
            className="h-auto w-72 object-contain md:w-[28rem]"
          />
        </motion.div>

        <motion.p
          className="mt-2 max-w-md text-sm uppercase tracking-widest2 text-muted md:text-base"
          {...enter(0.25)}
        >
          {site.tagline}
        </motion.p>

        <motion.div className="mt-12 flex flex-col gap-4 sm:flex-row" {...enter(0.45)}>
          <a
            href="#games"
            className="border border-paper bg-paper px-10 py-4 text-center text-xs font-bold uppercase tracking-widest text-ink transition-colors duration-400 hover:bg-transparent hover:text-paper"
          >
            Our games
          </a>
          <a
            href="#community"
            className="border border-paper/40 px-10 py-4 text-center text-xs font-bold uppercase tracking-widest text-paper transition-colors duration-400 hover:border-paper hover:bg-paper hover:text-ink"
          >
            Join us
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-10 flex flex-col items-center gap-2"
        style={{ opacity: fade }}
      >
        <span className="text-[10px] uppercase tracking-widest2 text-muted">Scroll</span>
        <motion.span
          className="block h-10 w-px bg-muted/50"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
}
