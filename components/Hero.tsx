'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { site } from '@/data/site';
import { usePreloaderDone } from '@/components/SiteShell';

/**
 * Hero : logo en grand, tagline, deux CTA.
 * Fond animé discret : cercles concentriques qui dérivent très lentement.
 * Les animations d'entrée ne démarrent qu'une fois le preloader terminé.
 */
export default function Hero() {
  const done = usePreloaderDone();
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 32 },
    animate: done ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 },
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5"
    >
      {/* Fond animé — anneaux qui tournent / respirent lentement */}
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
        {/* Halo radial très léger derrière le logo */}
        <div className="absolute h-[600px] w-[600px] rounded-full bg-paper/[0.03] blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div {...enter(0)}>
          <Image
            src="/logo.png"
            alt="Slow Games — logo escargot"
            width={560}
            height={560}
            priority
            className="h-auto w-72 object-contain md:w-[28rem]"
          />
        </motion.div>

        <motion.p
          className="mt-2 max-w-md text-sm uppercase tracking-widest2 text-muted md:text-base"
          {...enter(0.3)}
        >
          {site.tagline}
        </motion.p>

        <motion.div className="mt-12 flex flex-col gap-4 sm:flex-row" {...enter(0.5)}>
          <a
            href="#games"
            className="border border-paper bg-paper px-10 py-4 text-center text-xs font-bold uppercase tracking-widest text-ink transition-colors duration-400 hover:bg-transparent hover:text-paper"
          >
            Nos jeux
          </a>
          <a
            href="#community"
            className="border border-paper/40 px-10 py-4 text-center text-xs font-bold uppercase tracking-widest text-paper transition-colors duration-400 hover:border-paper hover:bg-paper hover:text-ink"
          >
            Nous rejoindre
          </a>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: done ? 1 : 0 }}
        transition={{ delay: 1.2, duration: 1 }}
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
