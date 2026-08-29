'use client';

import { useState, type FormEvent } from 'react';
import { site } from '@/data/site';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

/**
 * Section "Contact / Business" — formulaire statique.
 * Le site étant 100% statique, l'envoi ouvre le client mail (mailto)
 * avec le message pré-rempli vers site.contactEmail.
 * Si tu préfères un vrai backend plus tard : Formspree, Resend, etc.
 */
export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Slow Games] Message de ${name}`);
    const body = encodeURIComponent(`Nom : ${name}\nEmail : ${email}\n\n${message}`);
    window.location.href = `mailto:${site.contactEmail}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    'w-full border border-line bg-transparent px-4 py-3.5 text-sm text-paper placeholder:text-muted/60 transition-colors duration-300 focus:border-paper/60 focus:outline-none';

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28 md:px-8 md:py-40">
      <SectionHeading number="04" title="Contact" />

      <div className="grid gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs uppercase tracking-widest2 text-muted">
            Partenariats &amp; publishing
          </p>
          <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-snug tracking-widest md:text-3xl">
            Travaillons ensemble.
            <br />À notre rythme.
          </h3>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            Une proposition de partenariat, une question business, une idée de collaboration ?
            Écrivez-nous — on répond toujours, jamais dans la précipitation.
          </p>
          <a
            href={`mailto:${site.contactEmail}`}
            className="mt-8 inline-block border-b border-paper/40 pb-1 text-sm tracking-widest transition-colors duration-300 hover:border-paper"
          >
            {site.contactEmail}
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulaire de contact">
            <div>
              <label htmlFor="contact-name" className="sr-only">
                Nom
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="sr-only">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre message"
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="w-full border border-paper bg-paper px-10 py-4 text-xs font-bold uppercase tracking-widest text-ink transition-colors duration-400 hover:bg-transparent hover:text-paper sm:w-auto"
            >
              Envoyer le message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
