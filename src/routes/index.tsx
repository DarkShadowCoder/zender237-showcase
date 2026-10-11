import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, ShieldCheck, Receipt, Smartphone, History, Headphones, Lock, Plus, Check } from 'lucide-react';
import lifestyle from '@/assets/zender-lifestyle.jpg';
import { DownloadButton, AssistanceBand } from '@/components/zender-shared';
import { pageHead } from '@/lib/page-head';
import { Button } from '@/components/ui/button';
import { OperationPreview } from '@/components/operation-preview';
import { OperationStory } from '@/components/operation-story';

export const Route = createFileRoute('/')({
  head: () => pageHead('Vos opérations, simplement', 'Zender237 : l’application Android pour préparer, suivre et retrouver vos opérations depuis votre téléphone.', '/'),
  component: Home,
});

const faqs = [
  ['Comment créer un compte ?', 'Téléchargez l’application depuis une source officielle, renseignez votre numéro de téléphone et suivez les étapes de vérification.'],
  ['Quels sont les frais ?', 'Les frais de retrait sont de 5 % jusqu’à 50 000 FCFA et de 3 % au-delà. Le montant exact est affiché avant validation.'],
  ['Que faire en cas de problème ?', 'Rendez-vous sur la page Réclamations avec la référence de votre transaction : notre équipe examinera votre demande.'],
  ['Comment supprimer mon compte ?', 'Une page dédiée vous permet de demander la suppression de votre compte, même sans l’application installée.'],
];

function Home() {
  return <>
    <section className="hero immersive-hero"><img src={lifestyle} alt="Une utilisatrice consulte son téléphone" className="hero-photo"/><div className="hero-scrim"/><div className="hero-grain" aria-hidden="true"/><div className="site-container hero-content">
      <span className="eyebrow"><span className="eyebrow-dot" />Application Android · Internationale </span>
      <h1 className="cinema-type" aria-label="Zender237" data-reveal>{'Zender'.split('').map((letter, i) => <span key={i}>{letter}</span>)}<span className="brand-number">237</span><span className="hero-period">.</span></h1>
      <p className="hero-tagline" data-reveal>Vos opérations.<br/><span>Une nouvelle perspective.</span></p>
      <p className="hero-description" data-reveal>Préparez. Vérifiez. Suivez.<br/>L’essentiel de vos opérations, dans votre poche.</p>
      <div className="hero-actions"><DownloadButton/><Button asChild variant="ghost" className="btn-brand hero-secondary"><Link to="/comment-ca-marche">Explorer <ArrowUpRight size={16} /></Link></Button></div>
      <div className="hero-device" data-reveal><span className="device-label"><span/>VOTRE ESPACE, PARTOUT.</span><OperationPreview hero/><div className="device-caption"><ShieldCheck size={14}/><span>Votre code reste secret.</span></div></div>
      <div className="hero-bottom"><span>SIMPLICITÉ / TRANSPARENCE / SUIVI</span><a href="#au-quotidien" aria-label="Découvrir la suite"><ArrowRight size={23}/></a><span className="hero-edition">ZENDER237 — 01</span></div>
    </div></section>
    <div className="principles-strip" aria-hidden="true"><div>{[0,1].map(i=><span key={i}>VOS OPÉRATIONS <span className="strip-star">✳</span> EN TOUTE CLARTÉ <span className="strip-star">✳</span> À PORTÉE DE MAIN <span className="strip-star">✳</span> </span>)}</div></div>
    <section className="daily-section" id="au-quotidien"><div className="site-container"><div className="daily-heading" data-reveal><span className="eyebrow">01 / Au quotidien</span><h2>Moins de doutes.<br/><span>Plus de visibilité.</span></h2><p>Vos demandes, vos frais, votre suivi.<br/>L’essentiel réuni au même endroit.</p></div>
      <div className="bento">
        <div className="bento-item phone-tile" data-reveal><div className="phone-grid"/><div className="bento-copy"><span className="eyebrow">Votre espace personnel</span><h3>Tout commence<br/>dans votre poche.</h3><p>Un seul endroit pour préparer<br/>et retrouver vos demandes.</p></div><OperationPreview/></div>
        <Link to="/tarifs" className="bento-item fees-tile" data-reveal data-tilt><span className="tile-icon"><Receipt size={20}/></span><ArrowUpRight className="tile-arrow"/><span className="tile-kicker">SANS MAUVAISE SURPRISE</span><span className="fee-display">5<span>%</span> <small>/ 3 %</small></span><h3>La clarté, avant de valider.</h3><p>Grille indicative : 5 % jusqu’à 50 000 FCFA, 3 % au-delà. À confirmer avant publication.</p></Link>
        <Link to="/securite" className="bento-item security-tile" data-reveal data-tilt><span className="tile-icon"><ShieldCheck size={20}/></span><ArrowUpRight className="tile-arrow"/><div className="security-graphic" aria-hidden="true"><Lock strokeWidth={1}/></div><h3>Votre sécurité.<br/>Notre priorité.</h3><p>Ne partagez jamais votre code secret.</p></Link>
        <Link to="/aide" className="bento-item tracking-tile" data-reveal><span className="tile-icon"><History size={20}/></span><ArrowUpRight className="tile-arrow"/><div className="tracking-line" aria-hidden="true"><span/><span/><span/></div><h3>Ne perdez plus le fil.</h3><p>Le statut de vos demandes, à chaque étape.</p></Link>
      </div>
      <div className="hero-trust"><span><Lock size={14}/>Gardez votre code secret</span><span><Receipt size={14}/>Consultez vos frais</span><span><Headphones size={14}/>Contactez l’assistance</span></div>
    </div></section>

    <section className="section"><div className="site-container">
      <div className="section-heading" data-reveal><div><span className="eyebrow">Pourquoi Zender237</span><h2>Pensé pour le quotidien.</h2></div><p className="section-intro">Une application pensée pour vous donner de la visibilité à chaque étape de vos opérations.</p></div>
      <div className="features-grid">{[
        [Smartphone, 'Tout depuis votre téléphone', 'Créez votre compte et préparez vos opérations en quelques étapes.', '/comment-ca-marche'],
        [Receipt, 'Des frais transparents', 'Le montant des frais est calculé et affiché avant toute confirmation.', '/tarifs'],
        [History, 'Un suivi à chaque étape', 'Retrouvez l’historique et le statut de vos transactions à tout moment.', '/aide'],
      ].map(([I, t, d, to]: any, i) => <article className="feature-card" data-reveal data-tilt key={t}><div className="feature-top"><span className="tile-icon"><I size={18} /></span><span className="feature-index">0{i+1}</span></div><h3>{t}</h3><p>{d}</p><Link to={to}>En savoir plus <ArrowRight size={14} /></Link></article>)}</div>
    </div></section>

    <OperationStory />

    <section className="section"><div className="site-container faq-layout">
      <div data-reveal><span className="eyebrow">Questions fréquentes</span><h2>Vous vous posez une question ?</h2><p className="section-intro mt-4">Retrouvez toutes les réponses dans le <Link to="/aide" className="text-primary">centre d’aide</Link>.</p></div>
      <div>{faqs.map(([q, a]) => <details className="faq-item" key={q}><summary>{q}<Plus size={18} /></summary><p>{a}</p></details>)}</div>
    </div></section>
    <AssistanceBand />
  </>;
}
