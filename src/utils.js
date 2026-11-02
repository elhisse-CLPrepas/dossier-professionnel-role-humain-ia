export const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
export function filterDocuments(docs, category, query) {
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  return docs.filter(doc => (category === 'Tous' || doc.category === category) && terms.every(term => normalize(`${doc.title} ${doc.path} ${doc.text}`).includes(term)));
}
export function safeLink(href) {
  try { const url = new URL(href, 'https://local.test/'); return ['https:', 'http:'].includes(url.protocol); } catch { return false; }
}
