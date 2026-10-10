import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, ShieldCheck, Receipt, Smartphone, History, Headphones, Lock, Plus, Check } from 'lucide-react';
import lifestyle from '@/assets/zender-lifestyle.jpg';
import { DownloadButton, AssistanceBand } from '@/components/zender-shared';
import { pageHead } from '@/lib/page-head';

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
    <section className="hero"><div className="site-container">
      <span className="eyebrow"><span className="eyebrow-dot" />Application Android · Cameroun</span>
      <h1 data-reveal className="reveal">Zender<span className="brand-number">237</span></h1>
      <p className="hero-tagline">Vos opérations, simplement.</p>
      <p className="hero-description">Préparez vos opérations, consultez les frais avant de valider et suivez chaque transaction depuis votre téléphone, en toute transparence.</p>
      <div className="hero-actions"><DownloadButton /><Link to="/comment-ca-marche" className="btn-brand inline-flex items-center gap-2 rounded-md border border-border px-5 font-medium">Comment ça marche <ArrowRight size={16} /></Link></div>
      <div className="bento">
        <div className="bento-item lifestyle-tile"><img src={lifestyle} alt="Utilisatrice consultant l’application Zender237 sur son téléphone" className="h-full w-full object-cover" /><div className="lifestyle-caption"><h3>Au quotidien</h3><p>Vos demandes, où que vous soyez.</p></div></div>
        <div className="bento-item phone-tile"><div className="phone-grid" /><div className="phone"><span className="phone-notch" /><div className="phone-status"><span>9:41</span><span>●●●</span></div><div className="phone-greeting"><div>Bonjour<strong>Aïcha</strong></div><span className="phone-avatar">A</span></div><div className="phone-balance"><span>Opérations du mois</span><strong>3 suivies</strong></div><div className="phone-tools">{[Smartphone, Receipt, History, Headphones].map((I, i) => <span className="phone-tool" key={i}><i><I size={15} /></i>{['Opérer', 'Frais', 'Historique', 'Aide'][i]}</span>)}</div>{['Retrait confirmé', 'Demande en cours'].map((t, i) => <div className="phone-row" key={t}><span className="phone-row-icon"><Check size={12} /></span><span><strong>{t}</strong><small>Aujourd’hui · ZEN-0{i + 1}</small></span><span>FCFA</span></div>)}</div><span className="phone-note">Illustration non contractuelle</span></div>
        <Link to="/tarifs" className="bento-item fees-tile"><span className="tile-icon"><Receipt size={18} /></span><ArrowUpRight className="tile-arrow" /><h3>Frais affichés avant validation</h3><p>5 % jusqu’à 50 000 FCFA, 3 % au-delà.</p></Link>
        <Link to="/securite" className="bento-item security-tile"><span className="tile-icon"><ShieldCheck size={18} /></span><ArrowUpRight className="tile-arrow" /><h3>Sécurité d’abord</h3><p>Ne partagez jamais votre code secret.</p></Link>
      </div>
      <div className="hero-trust"><span><Lock size={14} />Données protégées</span><span><Receipt size={14} />Frais transparents</span><span><Headphones size={14} />Assistance dédiée</span></div>
    </div></section>

    <section className="section"><div className="site-container">
      <div className="section-heading" data-reveal><div><span className="eyebrow">Pourquoi Zender237</span><h2>Simple, clair, suivi.</h2></div><p className="section-intro">Une application pensée pour vous donner de la visibilité à chaque étape de vos opérations.</p></div>
      <div className="features-grid">{[
        [Smartphone, 'Tout depuis votre téléphone', 'Créez votre compte et préparez vos opérations en quelques étapes.', '/comment-ca-marche'],
        [Receipt, 'Des frais transparents', 'Le montant des frais est calculé et affiché avant toute confirmation.', '/tarifs'],
        [History, 'Un suivi à chaque étape', 'Retrouvez l’historique et le statut de vos transactions à tout moment.', '/aide'],
      ].map(([I, t, d, to]: any) => <article className="feature-card" data-reveal key={t}><span className="tile-icon"><I size={18} /></span><h3>{t}</h3><p>{d}</p><Link to={to}>En savoir plus <ArrowRight size={14} /></Link></article>)}</div>
    </div></section>

    <section className="section how-band"><div className="site-container">
      <span className="eyebrow">Fonctionnement</span><h2>En quatre étapes</h2>
      <div className="steps-grid">{[['Téléchargez', 'Installez Zender237 depuis une source officielle.'], ['Créez votre compte', 'Renseignez vos informations et sécurisez votre accès.'], ['Préparez l’opération', 'Choisissez le montant et vérifiez les frais affichés.'], ['Suivez', 'Consultez le statut et l’historique de vos transactions.']].map(([t, d], i) => <div data-reveal key={t}><span className="step-number">0{i + 1}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
    </div></section>

    <section className="section"><div className="site-container faq-layout">
      <div data-reveal><span className="eyebrow">Questions fréquentes</span><h2>Vous vous posez une question ?</h2><p className="section-intro mt-4">Retrouvez toutes les réponses dans le <Link to="/aide" className="text-primary">centre d’aide</Link>.</p></div>
      <div>{faqs.map(([q, a]) => <details className="faq-item" key={q}><summary>{q}<Plus size={18} /></summary><p>{a}</p></details>)}</div>
    </div></section>
    <AssistanceBand />
  </>;
}
