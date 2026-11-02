# LN-IA — Démonstration de dossier professionnel : rôle de l’humain dans la production avec l’IA

**Challenge 100 Jours — Relance Automne 2026 · Module 03 · Séance 12 (2 novembre 2026)**  
**Cas pédagogique : EXEMPLE FICTIF ADAPTÉ de l’« exemple 10 » des supports été 2026.**  
**Statut des productions : V1/V2 — À RELIRE / NON VALIDÉES PAR UN PILOTE.**  
**Finalité :** présenter dans VS Code, avec l’aide de Codex, le passage S09 → S10 → S11 → S12 et les preuves associées.

## À retenir

1. La **note de cadrage** clarifie six éléments (S09).
2. La **fiche projet** transforme le besoin en travail réalisable (S10).
3. Le **plan du guide** organise cinq parties au maximum (S11).
4. Le **guide V1** décrit des actions contrôlables ; la **V2** est réellement différente et documente les corrections (S12).
5. Les **preuves de démonstration** attestent ici de fichiers présents et d'une logique pédagogique ; elles ne prouvent **ni exécution réelle par des candidats ni validation humaine définitive**.

## Démarrer en séance dans VS Code

- Extraire le ZIP dans un nouveau dossier local et ouvrir **le dossier racine de cet exemple** dans VS Code.
- Si Codex ne s'ouvre pas, vérifier `Ctrl+Shift+P` → `Workspaces: Manage Workspace Trust` uniquement pour une source maîtrisée.
- Lire `00-pilotage/README.md` et `docs/DEROULE-ATELIER-VSCODE.md`.
- Copier `00-pilotage/PROMPT-MAITRE-CODEX-DEMONSTRATION.md` dans Codex. Il commence par un audit, sans écraser les fichiers.
- Lancer dans le terminal à la racine : `python scripts/verifier-dossier.py` (Python 3, bibliothèque standard seulement).
- Comparer V1/V2 : `python scripts/comparer-versions.py`.
- Afficher le graphe Mermaid et les étapes dans `docs/PARCOURS-ET-ALGORITHME.md`.

## Arborescence (fidèle au modèle)

`00-pilotage/` gouvernance et décision ; `01-besoin/` intention ; `02-prompts/` prompts S09–S12 ; `03-documents/` note, fiche, plan, guide V1/V2 et corrections ; `04-ressources/` références ; `05-controles/` vérifications et risques ; `06-publication/` revue de diffusion ; `07-portfolio/` traces S09–S12 et bilan ; `08-archives-privees/` emplacement exclusivement local, non public.

Les compléments `docs/`, `scripts/` et `references/` servent à l'animation ; ils ne remplacent pas les huit dossiers du modèle.

## Publication et limites

Aucun appel réseau ni API IA n'est effectué par les scripts. Aucun fichier ne doit être déclaré validé uniquement parce qu'il existe ou parce qu'un contrôle technique passe. Les textes sont fictifs, les liens de référence sont documentaires. Ne pas publier `08-archives-privees/` ni d'informations personnelles ou secrets. Aucune publication GitHub automatique.

**Signature :** LAB-NUMÉRIQUE-IA — Prof. Abderrahman EL HISSE.  
**Règle :** L’IA propose. L’humain pilote, vérifie et décide. Le livrable et ses corrections constituent des preuves inspectables.
