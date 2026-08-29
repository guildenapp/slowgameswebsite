'use client';

import { motion } from 'framer-motion';
import { manifesto } from '@/data/site';

/**
 * Manifesto strip: three giant words, outlined by default,
 * filling with white as they enter the viewport. One idea, said big.
 */
export default function Manifesto() {
  return (
    <section aria-label="Studio manifesto" className="border-y border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <ul className="flex flex-col">
          {manifesto.map((word, i) => (
            <li key={word} className="overflow-hidden">
              <motion.span
                className="block cursor-default font-display text-[16vw] font-bold uppercase leading-[1.05] tracking-tight md:text-[8.5rem]"
                style={{
                  WebkitTextStroke: '1.5px #FAFAFA',
                  color: 'transparent',
                }}
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                whileHover={{ color: '#FAFAFA', transition: { duration: 0.4 } }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}.
              </motion.span>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-md text-sm leading-relaxed text-muted">
          Our whole philosophy in three words. We&apos;d rather ship one game that lasts than ten
          that don&apos;t.
        </p>
      </div>
    </section>
  );
}
