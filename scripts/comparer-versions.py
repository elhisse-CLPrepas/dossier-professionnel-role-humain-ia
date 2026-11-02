#!/usr/bin/env python3
"""Diff V1→V2 à usage de démonstration, sans certifier la correction."""
from pathlib import Path
import difflib, hashlib, sys
base=Path(__file__).resolve().parent.parent/'03-documents'
a=base/'guide-pratique-v1.md'; b=base/'guide-pratique-v2-a-relire.md'
x=a.read_text(encoding='utf8').splitlines(); y=b.read_text(encoding='utf8').splitlines()
for name,data in [(a.name,x),(b.name,y)]:
 print(name, 'lignes=',len(data),'SHA256=',hashlib.sha256(('\n'.join(data)+'\n').encode()).hexdigest()[:16])
print('\n--- Diff (premières 140 lignes) ---')
diff=list(difflib.unified_diff(x,y,fromfile=a.name,tofile=b.name,lineterm=''))
for line in diff[:140]:print(line)
print(f'\nLignes du diff: {len(diff)}')
if not diff:
 print('ÉCHEC : Aucune différence.');sys.exit(1)
print('CONSTAT TECHNIQUE : versions textuellement distinctes ; une vraie validation humaine reste nécessaire.')
