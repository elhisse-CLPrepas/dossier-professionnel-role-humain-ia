#!/usr/bin/env python3
"""Vérification locale de forme et des repères documentaires. Pas de validation métier."""
from pathlib import Path
import sys
BASE=Path(__file__).resolve().parent.parent
required_dirs=['00-pilotage','01-besoin','02-prompts','03-documents','04-ressources','05-controles','06-publication','07-portfolio','08-archives-privees']
required_files=[
'03-documents/note-cadrage-courte.md','03-documents/fiche-projet-v1.md',
'03-documents/plan-guide-pratique.md','03-documents/guide-pratique-v1.md',
'03-documents/guide-pratique-v2-a-relire.md','03-documents/journal-corrections-v1-v2.md',
'03-documents/grille-relecture-s12.md',
'02-prompts/prompt-note-cadrage-s09.md','02-prompts/prompt-fiche-projet-s10.md',
'02-prompts/prompt-plan-s11.md','02-prompts/prompt-guide-s12.md',
]+[f'07-portfolio/preuve-seance-{n}.md' for n in ['09','10','11','12']]
fail=[]
for d in required_dirs:
 if not (BASE/d).is_dir():fail.append('Dossier absent: '+d)
for f in required_files:
 if not (BASE/f).is_file() or not (BASE/f).read_text(encoding='utf8').strip(): fail.append('Fichier manquant/vide: '+f)
if not fail:
 text=(BASE/'03-documents/note-cadrage-courte.md').read_text(encoding='utf8')
 for h in ['## Sujet','## Public concerné','## Problème ou besoin','## Objectif du document','## Résultat attendu','## Première action']:
  if h not in text:fail.append('S09: rubrique absente '+h)
 text=(BASE/'03-documents/fiche-projet-v1.md').read_text(encoding='utf8')
 for h in ['Nom du projet','Objectif','Public cible','Problème traité','Solution proposée','Livrables attendus','Outils utiles','Étapes de production','Critères de réussite','Risques ou limites','Prochaine action','Points à vérifier par l’humain']:
  if ('## '+h) not in text:fail.append('S10: rubrique absente '+h)
 text=(BASE/'03-documents/plan-guide-pratique.md').read_text(encoding='utf8')
 for part in ['Comprendre','Préparer','Produire','Vérifier','Améliorer']:
  if ('## Partie' not in text) or (f'— {part}' not in text):fail.append('S11: partie absente '+part)
 for h in ['## Titre du guide','## Public visé','## Résultat attendu','## Prérequis','## Checklist finale']:
  if h not in text:fail.append('S11: rubrique absente '+h)
 text=(BASE/'03-documents/guide-pratique-v1.md').read_text(encoding='utf8')
 if text.count('**Résultat à vérifier :**')<3:fail.append('S12 V1: moins de 3 résultats à vérifier')
 v1=(BASE/'03-documents/guide-pratique-v1.md').read_bytes()
 v2=(BASE/'03-documents/guide-pratique-v2-a-relire.md').read_bytes()
 if v1==v2:fail.append('S12: V1 et V2 sont identiques')
 j=(BASE/'03-documents/journal-corrections-v1-v2.md').read_text(encoding='utf8')
 if '| Fond' not in j or '| Forme' not in j:fail.append('S12: journal sans correction fond/forme')
for e in fail:print('ÉCHEC —',e)
if fail:
 print(f'{len(fail)} anomalie(s) structurelles détectées, aucun statut métier attribué.')
 sys.exit(1)
print('STRUCTURE : conforme aux contrôles automatiques de base.')
print('S09 : six rubriques ; S10 : douze rubriques ; S11 : cinq parties ; S12 : V1/V2 distinctes et journal présent.')
print('ATTENTION : ni validation humaine, ni vérité des contenus, ni droit de publication ne sont vérifiés par ce script.')
