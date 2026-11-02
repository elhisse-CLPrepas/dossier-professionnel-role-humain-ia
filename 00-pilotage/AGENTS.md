# Consignes permanentes — agent Codex

1. Lire `COMMENCER-ICI.md`, la charte, les quatre documents et le journal V1→V2 avant toute écriture.
2. Conserver la structure numérotée 00 à 08 du modèle fourni. Les fichiers existants sont des exemples **préparés**, ne les écraser ni les effacer sans instruction explicite.
3. Distinguer **source historique**, **adaptation 2026**, **simulation** et **contrôle réellement exécuté**.
4. Ne jamais présenter l'exemple comme expérience réelle, pilotage humain effectivement validé ou production mesurée.
5. Ne pas inventer d'autorisation, témoignage, taux de qualité, date de validation ni résultat de test.
6. Ne pas exposer données personnelles, secrets, clés, références sensibles. `08-archives-privees/` ne doit pas être publié.
7. Pour un changement V2 : garder V1 intacte ; journaliser avant/après, type de correction, raison, vérification manquante.
8. Exécuter `python scripts/verifier-dossier.py` et `python scripts/comparer-versions.py` après modification, puis résumer factuellement la sortie.
9. Faire un diff clair, demander accord avant commit, push, suppression ou publication. Pas de `--force`, pas de changement sur les dépôts S09-S12.
10. Prioriser la clarté pour les débutants, les actions observables, les limites et les décisions humaines.
