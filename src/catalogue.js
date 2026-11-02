// Sélection explicite : aucune glob sur les archives privées ou l’historique.
const documents = import.meta.glob('../03-documents/*.md', { query: '?raw', import: 'default', eager: true });
const prompts = import.meta.glob('../02-prompts/*.md', { query: '?raw', import: 'default', eager: true });
const portfolio = import.meta.glob('../07-portfolio/*.md', { query: '?raw', import: 'default', eager: true });
import charte from '../00-pilotage/charte-projet.md?raw';
import provenance from '../references/PROVENANCE-ET-DIFFERENCES.md?raw';
export const catalogue = [
  ...Object.entries(documents).map(([path, text]) => ({path: path.slice(3), text, category:'Documents'})),
  ...Object.entries(prompts).map(([path, text]) => ({path: path.slice(3), text, category:'Prompts'})),
  ...Object.entries(portfolio).map(([path, text]) => ({path: path.slice(3), text, category:'Portfolio'})),
  {path:'00-pilotage/charte-projet.md', text:charte, category:'Pilotage'},
  {path:'references/PROVENANCE-ET-DIFFERENCES.md', text:provenance, category:'Pilotage'}
].map(doc => ({...doc, name:doc.path.split('/').at(-1), title:doc.text.split('\n').find(line=>line.startsWith('# '))?.slice(2).trim() || doc.path}));

export const corrections = [
 {before:'« Vérifier les informations importantes » : la V1 ne précise pas le critère de décision.',after:'Rechercher une source autorisée ou marquer « À VÉRIFIER ». Bloquer la diffusion si un point essentiel reste invérifiable.',reason:'Fond / Un contrôle doit conduire à une décision explicite.'},
 {before:'Présenter la copie à une personne habilitée si le contexte demande une autorisation.',after:'Distinguer la revue du texte et la décision de diffusion. Consigner date et responsable uniquement après une revue effective.',reason:'Fond / Aucune validation ne se déduit de la présence du fichier.'},
 {before:'« Simplifier les termes inaccessibles » : une indication générale.',after:'Un exemple explicite : remplacer « épistémologie du modèle » par « ce que l’IA sait ou ne sait pas vérifier ».',reason:'Forme / Montrer comment adapter le vocabulaire au public débutant.'}
];
