import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { catalogue, corrections } from './catalogue.js';
import { filterDocuments, safeLink } from './utils.js';

const $ = selector => document.querySelector(selector);
let category = 'Tous';
let current;
let toastTimer;
const reader = $('#reader');
const escape = text => { const span=document.createElement('span'); span.textContent=text; return span.innerHTML; };
function notify(text) { $('#toast').textContent=text; $('#toast').hidden=false; clearTimeout(toastTimer); toastTimer=setTimeout(()=>$('#toast').hidden=true,3500); }
function renderList() {
  const docs=filterDocuments(catalogue,category,$('#search').value);
  $('#result-count').textContent=`${docs.length} document${docs.length>1?'s':''}`;
  $('#total-count').textContent=catalogue.length;
  $('#document-list').innerHTML=docs.length ? docs.map(doc=>`<button class="document-row" data-open="${escape(doc.name)}"><span class="document-icon" aria-hidden="true">${doc.category==='Prompts'?'⌘':doc.category==='Portfolio'?'↗':'≡'}</span><span class="document-info"><strong>${escape(doc.title)}</strong><small>${escape(doc.path)}</small></span><span class="document-category">${escape(doc.category)}</span><span class="document-arrow" aria-hidden="true">↗</span></button>`).join('') : '<p class="empty-state">Aucun document ne correspond. Essayez un autre mot ou une autre catégorie.</p>';
}
function openDocument(name) {
  const doc=catalogue.find(item=>item.name===name);
  if(!doc) return false;
  current=doc;
  $('#reader-title').textContent=doc.title;
  $('#reader-path').textContent=doc.path;
  $('#reader-content').innerHTML=DOMPurify.sanitize(marked.parse(doc.text),{FORBID_TAGS:['img','iframe','style','script'],FORBID_ATTR:['style']});
  $('#reader-content').querySelectorAll('a').forEach(link=> {
    const href=link.getAttribute('href') || '';
    const basename=href.split('/').at(-1)?.split('#')[0];
    if(catalogue.some(item=>item.name===basename)) {link.setAttribute('href','#document='+encodeURIComponent(basename));link.dataset.documentLink=basename;}
    else if(href.startsWith('https://') || href.startsWith('http://')) {link.target='_blank';link.rel='noopener noreferrer';}
    else if(href.startsWith('#')) { /* conserve les ancres internes */ }
    else {link.removeAttribute('href');link.title='Référence locale non incluse dans le lecteur';}
    if(!safeLink(link.getAttribute('href') || '#')) link.removeAttribute('href');
  });
  if(!reader.open) reader.showModal();
  $('#reader-content').scrollTop=0;
  reader.scrollTop=0;
  return true;
}
function chooseCorrection(index) {
  const c=corrections[index];
  $('#before-text').textContent=c.before; $('#after-text').textContent=c.after; $('#correction-reason').textContent=c.reason;
  document.querySelectorAll('[data-correction]').forEach(button=>{const active=Number(button.dataset.correction)===index;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
}
document.addEventListener('click',event=> {
  const open=event.target.closest('[data-open]');
  if(open) openDocument(open.dataset.open);
  const link=event.target.closest('[data-document-link]');
  if(link) {event.preventDefault();openDocument(link.dataset.documentLink);}
  const stage=event.target.closest('[data-stage]');
  if(stage) { const names={S09:'note-cadrage-courte.md',S10:'fiche-projet-v1.md',S11:'plan-guide-pratique.md',S12:'guide-pratique-v2-a-relire.md'};openDocument(names[stage.dataset.stage]); }
  const filter=event.target.closest('[data-filter]');
  if(filter) { category=filter.dataset.filter;document.querySelectorAll('[data-filter]').forEach(button=>{const active=button===filter;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});renderList(); }
  const correction=event.target.closest('[data-correction]');
  if(correction) chooseCorrection(Number(correction.dataset.correction));
});
$('#search').addEventListener('input',renderList);
$('#reader-close').addEventListener('click',()=>reader.close());
reader.addEventListener('click',event=> {if(event.target===reader) {const r=reader.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)reader.close();}});
$('#copy-document').addEventListener('click',async()=> {if(!current)return;try {await navigator.clipboard.writeText(current.text);notify('Texte copié. Relisez-le avant utilisation.');}catch {notify('Copie indisponible : téléchargez le document Markdown.');}});
$('#download-document').addEventListener('click',()=> {if(!current)return;const url=URL.createObjectURL(new Blob([current.text],{type:'text/markdown;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=current.name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);notify('Téléchargement demandé. Le statut reste À RELIRE.');});
$('#menu-toggle').addEventListener('click',()=>{const open=$('#menu-toggle').getAttribute('aria-expanded')!=='true';$('#menu-toggle').setAttribute('aria-expanded',String(open));$('#navigation').classList.toggle('is-open',open);});
$('#navigation').addEventListener('click',()=>{$('#navigation').classList.remove('is-open');$('#menu-toggle').setAttribute('aria-expanded','false');});
$('#print-page').addEventListener('click',()=>window.print());
const hashDoc=()=>{if(location.hash.startsWith('#document=')){try{openDocument(decodeURIComponent(location.hash.slice(10)));}catch{notify('Le lien de document est incorrect.');}}};
window.addEventListener('hashchange',hashDoc);
renderList();chooseCorrection(0);hashDoc();
