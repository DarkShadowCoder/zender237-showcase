import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Download, History, Receipt, UserRound } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

const steps = [
  { icon: Download, title: 'Votre téléphone. Votre point de départ.', short: 'Téléchargez', text: 'Installez Zender237 depuis une source officielle.', display: 'Zender237', caption: 'L’application Android' },
  { icon: UserRound, title: 'Un espace qui vous ressemble.', short: 'Créez votre compte', text: 'Renseignez vos informations et sécurisez votre accès.', display: 'Votre espace.', caption: 'Un accès personnel et sécurisé' },
  { icon: Receipt, title: 'Tout savoir. Avant de valider.', short: 'Préparez l’opération', text: 'Choisissez le montant et vérifiez les frais affichés avant de confirmer.', display: 'En toute clarté.', caption: 'Les frais, avant la confirmation' },
  { icon: History, title: 'La suite, sans perdre le fil.', short: 'Suivez', text: 'Consultez le statut et retrouvez l’historique de vos transactions.', display: 'Gardez le fil.', caption: 'Chaque demande, chaque étape' },
];

export function OperationStory() {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible instanceof IntersectionObserverEntry) setActive(Number(visible.target.getAttribute('data-story-step')));
    }, { rootMargin: '-25% 0px -30% 0px', threshold: [0, .2, .5, .8] });
    root.current?.querySelectorAll('[data-story-step]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const current = steps[active] ?? steps[0];
  if (!current) return null;
  const Icon = current.icon;
  return <section className="story-section" ref={root}>
    <div className="site-container story-heading" data-reveal><span className="eyebrow">De l’idée à l’opération</span><h2>Un mouvement.<br /><span>Quatre étapes.</span></h2><span className="section-count">02 / Fonctionnement</span></div>
    <div className="site-container story-layout">
      <div className="story-scene"><div className="story-scene-top"><span>ZENDER237 / ANDROID</span><span>0{active + 1} — 04</span></div><div className="story-visual" key={active}><div className={`story-symbol story-symbol-${active}`}><Icon strokeWidth={1} /><span className="symbol-check"><Check size={20} /></span></div><h3>{current.display}</h3><p>{current.caption}</p></div><div className="story-track">{steps.map((step, i) => <a href={`#etape-${i + 1}`} key={step.short} aria-label={`Étape ${i + 1} : ${step.short}`} aria-current={active === i ? 'step' : undefined}><span /></a>)}</div></div>
      <div className="story-chapters">{steps.map((step, i) => <article key={step.short} id={`etape-${i + 1}`} data-story-step={i} className={active === i ? 'story-chapter active' : 'story-chapter'}><span className="chapter-number">0{i + 1}</span><div data-reveal><span className="eyebrow">{step.short}</span><h3>{step.title}</h3><p>{step.text}</p>{i === 3 && <Button asChild variant="ghost" className="story-link"><Link to="/comment-ca-marche">Tout le fonctionnement <ArrowUpRight size={17} /></Link></Button>}</div></article>)}</div>
    </div>
  </section>;
}