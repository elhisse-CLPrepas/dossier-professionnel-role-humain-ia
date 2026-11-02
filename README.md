# Dossier professionnel — Le rôle de l’humain dans la production avec l’IA

**LAB-NUMÉRIQUE-IA · Challenge 100 Jours — Relance Automne 2026**  
**Module 03 · Séance 12 · Lundi 2 novembre 2026 à 19h00**  
**Cas pédagogique fictif · V1 et V2 à relire · Aucune validation finale attestée**

Ce projet montre comment passer d’un besoin à un dossier documentaire traçable : cadrage S09, fiche projet S10, plan S11, guide S12 V1 puis V2 corrigée, journal et preuves. Il s’adresse aux participants débutants du Challenge et aux formateurs.

**Règle LN-IA :** besoin réel → cadrage → prompt → production → contrôle humain → correction → documentation → preuve.

## Lien avec l’atelier et dépôt dédié

Le dossier a été préparé dans le projet [atelier-seance-12-ln-ia](https://github.com/elhisse-CLPrepas/atelier-seance-12-ln-ia). L’atelier porte l’application Vite de la séance ; ce dossier porte la démonstration documentaire du rôle humain.

Le dépôt cible indépendant est [dossier-professionnel-role-humain-ia](https://github.com/elhisse-CLPrepas/dossier-professionnel-role-humain-ia), avec l’URL Git :

```text
https://github.com/elhisse-CLPrepas/dossier-professionnel-role-humain-ia.git
```

**Adresse GitHub Pages prévue, après activation et déploiement réussi :**

```text
https://elhisse-clprepas.github.io/dossier-professionnel-role-humain-ia/
```

Le connecteur GitHub confirme le 2 novembre 2026 l’existence du dépôt public dédié, avec `main` comme branche par défaut déclarée. La publication Pages n’a pas été vérifiée. Le dépôt dédié aura son propre historique Git. Les références pédagogiques et les liens vers l’atelier assurent la liaison entre les deux projets.

## Découvrir les documents

1. Lire [COMMENCER-ICI.md](COMMENCER-ICI.md) et la [charte](00-pilotage/charte-projet.md).
2. Parcourir la [note S09](03-documents/note-cadrage-courte.md), la [fiche S10](03-documents/fiche-projet-v1.md) puis le [plan S11](03-documents/plan-guide-pratique.md).
3. Comparer le [guide V1](03-documents/guide-pratique-v1.md) et le [guide V2 à relire](03-documents/guide-pratique-v2-a-relire.md).
4. Examiner le [journal de corrections](03-documents/journal-corrections-v1-v2.md), la [grille S12](03-documents/grille-relecture-s12.md) et les [preuves du module](07-portfolio/preuves-module-03.md).
5. Consulter le [parcours et son organigramme](docs/PARCOURS-ET-ALGORITHME.md).

## Organisation

| Dossier | Rôle |
|---|---|
| `00-pilotage/` | Charte, consignes et décisions |
| `01-besoin/` | Identification du besoin |
| `02-prompts/` | Consignes S09–S12 |
| `03-documents/` | Note, fiche, plan, V1/V2 et corrections |
| `04-ressources/` | Registre des sources |
| `05-controles/` | Grilles, risques et contrôles |
| `06-publication/` | Préparation et décision de diffusion |
| `07-portfolio/` | Quatre traces et bilan du Module 03 |
| `08-archives-privees/` | Espace local exclu de publication |
| `docs/`, `references/`, `scripts/` | Animation, provenance et contrôles locaux |

Le rejeu autorisé du 2 novembre est conservé localement dans `demo-travail/`, avec ses propres documents et résultats. L’historique des échanges et des phases est dans `00-pilotage/etapes/`. Ces deux ensembles ne font pas partie de la sélection publique initiale : les liens vers eux dans des traces locales ne doivent pas être exportés tels quels.

## Exécuter les contrôles documentaires

Depuis la racine de ce dossier, avec Python 3 et sa bibliothèque standard :

```powershell
python -X utf8 scripts/verifier-dossier.py
python -X utf8 scripts/comparer-versions.py
```

Le premier contrôle les repères de structure ; le second constate les différences entre V1 et V2. Ils ne prouvent ni la vérité des informations, ni une relecture humaine, ni un droit de diffusion.

Le 2 novembre 2026, les deux scripts ont réussi sur le pack préparé et sur le rejeu local (quatre codes de sortie 0). Les sorties et empreintes de cette exécution sont conservées localement dans `demo-travail/05-controles/`. Aucun test utilisateur ni validation finale n’est revendiqué. Les tests de l’application Vite parent ne sont pas des tests de ce dossier documentaire.

## Préparer le commit et GitHub Pages

La [procédure de préparation](06-publication/PREPARATION-DEPOT-GITHUB.md) décrit la séparation des dépôts, les fichiers à sélectionner, le message de commit proposé et la configuration Pages envisagée.

Le pilote a autorisé le 2 novembre 2026 le commit local et le push de la sélection documentaire vers le dépôt dédié. Le checkout indépendant est situé à côté de `atelier-seance-12-ln-ia`, sans changement du remote parent. Le fichier `ln-ia.code-workspace` de cet export permet d’ouvrir le dossier dédié et l’atelier voisin dans VS Code ; si l’atelier n’est pas présent, ouvrir simplement le dossier dédié.

Les contrôles propres à l’export sont consignés dans `05-controles/rapport-export-github.md`. Le manifeste `MANIFESTE-SHA256.txt` de l’export est régénéré pour ses fichiers publics. L’export initial n’incluait pas d’interface web. Le site Vite et son workflow manuel sont maintenant préparés ; voir les instructions ci-dessous. Aucun déploiement GitHub Pages n’est revendiqué.

## Sources, statut et diffusion

Voir la [provenance](references/PROVENANCE-ET-DIFFERENCES.md). L’exemple dérive des supports historiques d’été, avec adaptation Automne 2026. Les archives historiques restent inchangées dans le projet atelier ; elles ne sont pas recopiées dans le futur site.

Les productions et traces préparées sont fictives. Aucune expérience réelle de candidat, attestation, mesure de qualité ou économie de temps n’est revendiquée. La V2 reste **À RELIRE / NON VALIDÉE** jusqu’à une décision humaine effective.

Conserver les secrets, archives privées et conversations hors du dépôt public et du site. Vérifier droits, données et autorisation avant diffusion. Le `.gitignore` ne retire pas un fichier déjà suivi par Git. Aucune licence de réutilisation n’est déclarée ici ; les droits restent à préciser par le pilote.

**L’IA propose ; l’humain pilote, contrôle, corrige et décide.**


## Site Vite — Présentation interactive

Le site dédié présente le parcours, un lecteur Markdown avec recherche et filtres, les différences V1/V2, les cinq responsabilités et le portfolio. Les documents intégrés proviennent exclusivement de la sélection publique. Aucun appel à un modèle IA ni collecte de données. Le logo officiel est copié sans modification depuis l’atelier.

Prérequis : Node.js 22.12+ ou 24 LTS. Bootstrap est fixé à `6.0.0-alpha.1` (version alpha demandée).

```powershell
npm.cmd ci
npm.cmd run dev
npm.cmd run check
npm.cmd test
npm.cmd run build
npm.cmd run standalone
```

Ouvrir l’URL indiquée par Vite (port 5175). Le build Pages est dans `dist/` ; `standalone/index.html` est une version autonome à ouvrir hors ligne après génération.

Métadonnées : titre, description, langue, viewport, canonical, Open Graph, Twitter, JSON-LD, robots et sitemap. Une carte sociale PNG de 1200 × 630 px est fournie, avec sa source graphique SVG. Son aperçu par les plateformes restera à vérifier après publication. Bootstrap assure la base CSS responsive ; les métadonnées sont des balises HTML indépendantes du framework.

Pages : le `base` Vite cible `/dossier-professionnel-role-humain-ia/`. Dans Settings → Pages, choisir GitHub Actions, puis lancer manuellement « Publier le dossier sur GitHub Pages ». Le workflow publie uniquement `dist/`. Aucun push n’active automatiquement ce workflow.

Le manifeste SHA256 à la racine décrit l’export documentaire initial du commit `5ab879c` ; il ne décrit pas les évolutions ultérieures du site. Les dépendances sont reproduites par `package-lock.json`.
