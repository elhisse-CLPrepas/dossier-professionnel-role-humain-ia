import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { filterDocuments, safeLink } from '../src/utils.js';
test('recherche sans accents et à plusieurs mots, avec filtre',()=>{
const docs=[{title:'Guide corrigé',path:'03-documents/v2.md',text:'Vérification humaine',category:'Documents'},{title:'Prompt',path:'02-prompts/p.md',text:'Guide',category:'Prompts'}];
assert.equal(filterDocuments(docs,'Documents','guide verification').length,1);
assert.equal(filterDocuments(docs,'Prompts','verification').length,0);
assert.equal(filterDocuments(docs,'Tous','inexistant').length,0);
});
test('les protocoles actifs sont refusés',()=>{assert.equal(safeLink('javascript:alert(1)'),false);assert.equal(safeLink('data:text/html,test'),false);assert.equal(safeLink('https://example.com'),true);});
test('V1 et V2 restent distinctes et le journal explique le fond et la forme',()=>{
const read=p=>readFileSync('03-documents/'+p,'utf8');
assert.notEqual(read('guide-pratique-v1.md'),read('guide-pratique-v2-a-relire.md'));
assert.match(read('journal-corrections-v1-v2.md'),/Fond/);assert.match(read('journal-corrections-v1-v2.md'),/Forme/);
assert.match(read('guide-pratique-v2-a-relire.md'),/NON VALIDÉE/);
});
