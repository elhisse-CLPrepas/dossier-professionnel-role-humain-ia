import { readFileSync, existsSync, readdirSync } from 'node:fs';
import assert from 'node:assert/strict';
const dir=process.argv[2] || 'dist';
const html=readFileSync(`${dir}/index.html`,'utf8');
const markup=html.replace(/(<script\b[^>]*>)[\s\S]*?<\/script>/gi,'$1</script>').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,'');
const attrs=[...markup.matchAll(/<(script|link|img)\b[^>]*>/g)].map(m=>m[0]);
const resources=attrs.flatMap(tag=>{
  if(tag.startsWith('<link') && !/rel="(?:stylesheet|icon|modulepreload)"/.test(tag))return [];
  return [...tag.matchAll(/(?:src|href)="([^"]+)"/g)].map(m=>m[1]);
});
for(const resource of resources){
  if(resource.startsWith('data:'))continue;
  assert.notEqual(dir,'standalone',`Ressource non intégrée : ${resource}`);
  const base='/dossier-professionnel-role-humain-ia/';
  assert.ok(resource.startsWith(base),resource);
  assert.ok(existsSync(`${dir}/${resource.slice(base.length)}`),resource);
}
const ids=[...markup.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(ids.length,new Set(ids).size,'IDs dupliqués');
for(const [,anchor] of markup.matchAll(/href="#([^"]+)"/g))assert.ok(ids.includes(anchor),anchor);
const files=readdirSync(dir,{recursive:true}).map(String);
assert.ok(!files.some(f=>/08-archives-privees|demo-travail|historique-chat|\.env/.test(f)));
console.log(`${dir} : ressources, chemins Pages, ancres et sélection publique vérifiés.`);
