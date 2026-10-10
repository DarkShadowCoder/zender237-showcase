import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChevronRight, Search, Plus } from 'lucide-react';
import pages from '@/content/pages.json';
import { DraftNotice,AssistanceBand } from './zender-shared';
import { FeeCalculator } from './fee-calculator';
import { SupportForm } from './support-form';
function slug(text:string){return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');}
export function ContentPage({path}:{path:string}){
 const [query,setQuery]=useState('');const page=pages.find(p=>p.path===path);if(!page)return null;
 const headings=Array.from(page.body.matchAll(/^## (.+)$/gm),m=>m[1] ?? '');
 const questions=path==='/aide'?page.body.split(/^### /m).slice(1).map(s=>({question:s.split('\n')[0] ?? '',answer:(s.slice(s.indexOf('\n')).split(/^## /m)[0] ?? '').trim()})):[];
 const filtered=questions.filter(q=>(q.question+' '+q.answer).toLowerCase().includes(query.toLowerCase()));
 return <><section className="page-banner"><div className="site-container"><div className="breadcrumb"><Link to="/">Accueil</Link><ChevronRight size={13}/><span>{path==='/aide'?'Centre d’aide':page.title}</span></div><span className="eyebrow">Zender237 · {page.legal?'Informations & protection':'L’application au quotidien'}</span><h1 className="mt-3">{page.title}</h1><p>{page.description}</p></div></section><div className="site-container content-layout"><aside className="contents-nav" aria-label="Sommaire de la page"><strong>Sur cette page</strong>{headings.map((h,i)=><a key={i} href={`#${slug(h)}`}>{h}</a>)}<Link to="/contact" className="mt-5 text-primary">Contacter l’assistance →</Link></aside><main className="document">{(page.body.includes('[')&&path!=='/aide'||page.legal)&&<DraftNotice fees={path==='/tarifs'}/>} {path==='/tarifs'&&<FeeCalculator/>}{path==='/contact'&&<SupportForm kind="contact"/>}{path==='/suppression-compte'&&<SupportForm kind="deletion"/>}{path==='/reclamations'&&<SupportForm kind="complaint"/>}
 {path==='/aide'?<><div className="help-search"><Search size={18}/><input className="field" aria-label="Rechercher dans le centre d’aide" placeholder="Rechercher une question…" value={query} onChange={e=>setQuery(e.target.value)}/></div>{filtered.map((q,i)=><details className="faq-item" key={i}><summary>{q.question}<Plus size={18}/></summary><ReactMarkdown remarkPlugins={[remarkGfm]}>{q.answer}</ReactMarkdown></details>)}{!filtered.length&&<p>Aucune réponse trouvée. <Link to="/contact">Contactez l’assistance.</Link></p>}</>:<ReactMarkdown remarkPlugins={[remarkGfm]} components={{h2:({children})=><h2 id={slug(String(children))}>{children}</h2>,table:({children})=><div className="table-scroll"><table>{children}</table></div>}}>{page.body}</ReactMarkdown>}
 </main></div><AssistanceBand/></>;
}
