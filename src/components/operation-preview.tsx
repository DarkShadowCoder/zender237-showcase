import { useState } from 'react';
import { ArrowUpRight, Check, Headphones, History, Receipt, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

const tabs = [
  { icon: Smartphone, label: 'Opérer' },
  { icon: Receipt, label: 'Frais' },
  { icon: History, label: 'Historique' },
  { icon: Headphones, label: 'Aide' },
];

export function OperationPreview({ hero = false }: { hero?: boolean }) {
  const [active, setActive] = useState(0);
  return <div className={`operation-preview ${hero ? 'operation-preview-hero' : ''}`}>
    <div className="phone">
      <span className="phone-notch" aria-hidden="true" />
      <div className="phone-status"><span>9:41</span><span aria-hidden="true">● ● ▰</span></div>
      <div className="phone-greeting"><div>Votre espace<strong>Zender237<span>.</span></strong></div><span className="phone-avatar"><Smartphone size={16} /></span></div>
      <div className="phone-balance"><span>{['Vos opérations', 'En toute transparence', 'Votre suivi', 'À votre écoute'][active]}</span><strong>{['Tout est ici.', '5 % / 3 %', 'Chaque étape.', 'Besoin d’aide ?'][active]}</strong><ArrowUpRight size={18} /></div>
      <div className="phone-tools" role="tablist" aria-label="Aperçu de l’application">
        {tabs.map(({ icon: Icon, label }, i) => <Button key={label} variant="ghost" className="phone-tool" role="tab" aria-selected={active === i} aria-controls={hero ? 'hero-phone-panel' : 'bento-phone-panel'} onClick={() => setActive(i)}><Icon size={17} /><span>{label}</span></Button>)}
      </div>
      <div className="phone-panel" id={hero ? 'hero-phone-panel' : 'bento-phone-panel'} role="tabpanel" aria-label={tabs[active]?.label} key={active}>
        {active === 0 && <><div className="phone-panel-title">Vos dernières demandes<History size={13} /></div>{['Retrait confirmé', 'Demande en cours'].map((text, i) => <div className="phone-row" key={text}><span className={`phone-row-icon ${i ? 'pending' : ''}`}>{i ? <History size={13} /> : <Check size={13} />}</span><span><strong>{text}</strong><small>Exemple · ZEN-0{i + 1}</small></span><ArrowUpRight size={13} /></div>)}</>}
        {active === 1 && <><div className="phone-panel-title">Grille indicative<Receipt size={13} /></div><div className="phone-rate"><span>Jusqu’à 50 000 FCFA</span><strong>5 %</strong></div><div className="phone-rate"><span>Au-delà</span><strong>3 %</strong></div><small className="phone-disclaimer">À confirmer avant publication</small></>}
        {active === 2 && <><div className="phone-panel-title">Statut d’une demande<History size={13} /></div><div className="mini-timeline"><span>Demande préparée</span><span>Suivi en cours</span><span>Confirmation</span></div></>}
        {active === 3 && <><div className="phone-panel-title">L’assistance Zender237<Headphones size={13} /></div><p className="phone-help">Une question sur votre compte ou une opération ?</p><Button asChild variant="secondary" className="phone-contact"><Link to="/contact">Nous contacter <ArrowUpRight size={13} /></Link></Button></>}
      </div>
      <div className="phone-bottom-line" aria-hidden="true" />
    </div>
    <span className="phone-note">Illustration non contractuelle</span>
  </div>;
}