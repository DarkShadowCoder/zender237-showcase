import { Link, useRouterState } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { ArrowDownToLine, ArrowUpRight, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/icon.png';
export const navItems = [
 {to:'/' as const,label:'Accueil'}, {to:'/comment-ca-marche' as const,label:'Fonctionnement'},
 {to:'/tarifs' as const,label:'Tarifs'}, {to:'/a-propos' as const,label:'À propos'},
 {to:'/aide' as const,label:'Aide'}, {to:'/contact' as const,label:'Contact'},
];
export function Brand() { return <Link to="/" className="brand" aria-label="Zender237, accueil"><img src={logo} alt="" aria-hidden="true" className="brand-logo" /></Link>; }
export function DownloadButton({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
 const [open, setOpen] = useState(false);
 const closeRef = useRef<HTMLButtonElement>(null);
 const triggerRef = useRef<HTMLButtonElement>(null);
 useEffect(() => { if(!open) return; const previousOverflow=document.body.style.overflow; document.body.style.overflow='hidden'; closeRef.current?.focus(); const handler=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false);}; document.addEventListener('keydown',handler); return ()=>{document.removeEventListener('keydown',handler);document.body.style.overflow=previousOverflow;triggerRef.current?.focus();}; },[open]);
 return <><Button ref={triggerRef} variant={light?'secondary':'default'} className={`btn-brand ${light?'btn-light':''}`} onClick={()=>setOpen(true)}>{compact?<ArrowDownToLine size={16}/>:<svg width="17" height="20" viewBox="0 0 17 20" fill="currentColor" aria-hidden="true"><path d="M1 1v18l15-9L1 1Z"/></svg>}Découvrir l’application{!compact&&<ArrowUpRight size={15}/>}</Button>
 {open&&<div className="modal-overlay" onClick={()=>setOpen(false)}><section className="download-modal" role="dialog" aria-modal="true" aria-labelledby="download-title" onClick={e=>e.stopPropagation()} onKeyDown={e=>{if(e.key==='Tab'){e.preventDefault();closeRef.current?.focus();}}}><Button ref={closeRef} variant="ghost" size="icon" className="modal-close" aria-label="Fermer" onClick={()=>setOpen(false)}><X/></Button><img src={logo} alt="" aria-hidden="true" className="brand-logo"/><h2 id="download-title">Zender237 sur Android</h2><p>Le lien officiel Google Play n’a pas encore été communiqué. Il sera ajouté après validation de la publication de l’application.</p><p className="mt-4">Téléchargez uniquement depuis une source officielle. Ne partagez jamais votre code secret.</p></section></div>}</>;
}
export function SiteHeader() {
 const [open,setOpen]=useState(false);
 return <header className="site-header"><div className="site-container header-inner"><Brand/><nav className="desktop-nav" aria-label="Navigation principale">{navItems.map(item=><Link key={item.to} to={item.to} activeOptions={{exact:true}}>{item.label}</Link>)}</nav><div className="header-download"><DownloadButton compact/></div><Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={open?'Fermer le menu':'Ouvrir le menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button></div>{open&&<nav className="mobile-nav" aria-label="Navigation mobile">{navItems.map(item=><Link key={item.to} to={item.to} activeOptions={{exact:true}} onClick={()=>setOpen(false)}>{item.label}</Link>)}</nav>}</header>;
}
const footerGroups=[
 {title:'Zender237',links:[{to:'/a-propos' as const,label:'À propos'},{to:'/comment-ca-marche' as const,label:'Comment ça marche'},{to:'/tarifs' as const,label:'Tarifs'}]},
 {title:'Un coup de main ?',links:[{to:'/aide' as const,label:'Centre d’aide'},{to:'/contact' as const,label:'Nous contacter'},{to:'/reclamations' as const,label:'Réclamations et remboursements'},{to:'/securite' as const,label:'Sécurité'}]},
 {title:'En toute transparence',links:[{to:'/mentions-legales' as const,label:'Mentions légales'},{to:'/informations-services' as const,label:'Informations sur les services'},{to:'/conditions-generales' as const,label:'Conditions générales'},{to:'/confidentialite' as const,label:'Politique de confidentialité'},{to:'/cookies' as const,label:'Cookies'},{to:'/suppression-compte' as const,label:'Suppression de compte'}]},
];
export function SiteFooter(){return <footer className="site-footer"><div className="site-container"><div className="footer-grid"><div className="footer-brand-column"><Brand/><p className="footer-description">Vos opérations, simplement.<br/>Une application pensée pour gérer et suivre vos demandes depuis votre téléphone.</p></div>{footerGroups.map(g=><div key={g.title}><h3>{g.title}</h3><nav aria-label={g.title}>{g.links.map(l=><Link key={l.to} to={l.to}>{l.label}</Link>)}</nav></div>)}</div><div className="footer-bottom"><span>© 2026 Zender237. Tous droits réservés.</span><span>Version de préparation · Informations officielles à confirmer</span></div></div></footer>;}
export function AssistanceBand(){return <section className="cta-band"><div className="site-container cta-inner"><div><h2>Une question ? Parlons-en.</h2><p>Pour votre compte ou une transaction, nous sommes à votre écoute.</p></div><Button asChild variant="secondary" className="btn-brand btn-light"><Link to="/contact">Contacter l’assistance <ArrowRight/></Link></Button></div></section>;}
export function ScrollMotion(){
 const pathname=useRouterState({select:state=>state.location.pathname});
 useEffect(()=>{
  const root=document.documentElement;
   const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
   const syncMotion=()=>{root.classList.toggle('motion-reduced',motionPreference.matches);};
   syncMotion();motionPreference.addEventListener('change',syncMotion);
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target);}}),{threshold:.06});
  const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;document.querySelectorAll('.contents-nav a[href^="#"]').forEach(link=>{if(link.getAttribute('href')===`#${entry.target.id}`)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current');});}),{rootMargin:'-15% 0px -65% 0px'});
  const observe=()=>{document.querySelectorAll('.document>h2,.document>h3,.document>p,.document>ul,.document>ol,.document>.faq-item,.calculator,.support-form').forEach(el=>el.setAttribute('data-reveal',''));document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach(el=>observer.observe(el));document.querySelectorAll('.document h2[id]').forEach(el=>sectionObserver.observe(el));};
  observe();root.classList.add('motion-ready');
  const mutation=new MutationObserver(observe);mutation.observe(document.body,{childList:true,subtree:true});
  let frame=0;
   const update=()=>{frame=0;const total=root.scrollHeight-window.innerHeight;root.style.setProperty('--read-progress',String(total>0?window.scrollY/total:0));const hero=document.querySelector('.immersive-hero');if(hero instanceof HTMLElement&&!motionPreference.matches){const progress=Math.min(1,Math.max(0,window.scrollY/hero.offsetHeight));hero.style.setProperty('--hero-drift',`${progress*90}px`);hero.style.setProperty('--hero-depth',String(1+progress*.08));}};
  const scroll=()=>{if(!frame)frame=requestAnimationFrame(update);};
  window.addEventListener('scroll',scroll,{passive:true});update();
   const tilt=(e:PointerEvent)=>{if(motionPreference.matches||e.pointerType==='touch'||!(e.target instanceof Element))return;const tile=e.target.closest('[data-tilt]');if(!(tile instanceof HTMLElement))return;const rect=tile.getBoundingClientRect();const x=(e.clientX-rect.left)/rect.width-.5;const y=(e.clientY-rect.top)/rect.height-.5;tile.getAnimations().forEach(a=>a.cancel());tile.animate([{transform:`perspective(900px) rotateX(${-y*5}deg) rotateY(${x*5}deg)`}],{duration:200,fill:'forwards'});};
  const reset=(e:PointerEvent)=>{if(!(e.target instanceof Element))return;const tile=e.target.closest('[data-tilt]');if(tile instanceof HTMLElement&&(!(e.relatedTarget instanceof Node)||!tile.contains(e.relatedTarget))){tile.getAnimations().forEach(a=>a.cancel());tile.animate([{transform:'perspective(900px) rotateX(0deg) rotateY(0deg)'}],{duration:300,fill:'forwards'});}};
  document.addEventListener('pointermove',tilt);document.addEventListener('pointerout',reset);
  return()=>{observer.disconnect();sectionObserver.disconnect();mutation.disconnect();window.removeEventListener('scroll',scroll);document.removeEventListener('pointermove',tilt);document.removeEventListener('pointerout',reset);cancelAnimationFrame(frame);motionPreference.removeEventListener('change',syncMotion);document.querySelectorAll('[data-tilt]').forEach(el=>el.getAnimations().forEach(animation=>animation.cancel()));document.querySelector('.immersive-hero')?.removeAttribute('style');root.style.removeProperty('--read-progress');root.classList.remove('motion-ready','motion-reduced');};
 },[pathname]);
 return <div className="scroll-progress" aria-hidden="true"/>;
}
export function DraftNotice({ fees = false }: {fees?:boolean}){return <aside className="draft-notice"><strong>{fees?'Grille fournie · À confirmer avant publication':'Document de préparation · Informations à compléter'}</strong>{fees?'Les taux ci-dessous proviennent du document Zender237. Leur application en production, les plafonds et les règles d’arrondi doivent être confirmés.':'Les champs entre crochets proviennent du document fourni et ne sont pas des informations officielles validées. L’identité de l’éditeur, les contacts, les prestataires et les pratiques de conservation doivent être complétés avant publication.'}</aside>;}
