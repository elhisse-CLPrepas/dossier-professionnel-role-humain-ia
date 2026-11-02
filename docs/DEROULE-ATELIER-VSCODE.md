# Animation en direct — Séance 12 avec VS Code et Codex

**Durée d'exemple :** 40–55 minutes à intégrer dans l'atelier S12 de 90 à 120 minutes.  
**Sujet fil rouge :** « Le rôle de l'humain dans la production avec l’IA ». Tous les documents et exemples sont fictifs.

| Temps indicatif | Action projetée dans VS Code | Résultat observable par le groupe |
|---:|---|---|
| 0–5 min | Extraire ZIP, ouvrir `COMMENCER-ICI.md`, montrer dossiers 00–08 | Architecture comprise, répertoire privé identifié |
| 5–10 min | Lire note S09 et ses six rubriques | Besoin, public et résultat définis |
| 10–15 min | Lire fiche S10 et ses 12 rubriques | Projet, étapes, risques et livrables identifiables |
| 15–20 min | Lire plan S11 ; présenter cinq parties | Les étapes du futur guide sont ordonnées |
| 20–30 min | Lire guide S12 V1 ; repérer ses contrôles faibles | Liste de points à corriger sans masquer la V1 |
| 30–40 min | Ouvrir V2 et journal ; lancer `scripts/comparer-versions.py` | Diff réel, correction de fond/forme, motif |
| 40–45 min | Lancer `scripts/verifier-dossier.py` | Contrôle structurel avec sortie console |
| 45–55 min | Lire `07-portfolio/`, `06-publication/controle-diffusion.md` ; demander revue | Preuve pédagogique, limites et décision humaine distinctes |

## Manipulations et commandes Windows

```powershell
# Terminal à la racine du dossier extrait :
python scripts/verifier-dossier.py
python scripts/comparer-versions.py
# Vérifiez les fichiers sans publier :
git status
```

`git status` peut signaler « not a git repository » si aucun dépôt n'a été initialisé ; ce n'est pas un échec de l'atelier. Ne pas créer ni publier de dépôt sans demande.

## Épreuve pédagogique sur Codex

1. Sélectionner le document `00-pilotage/PROMPT-MAITRE-CODEX-DEMONSTRATION.md` et copier dans Codex.
2. Demander d'abord un **inventaire sans écriture**.
3. Faire identifier S09 → S10 → S11 → S12 et les deux versions.
4. Lire ensemble le journal ; repérer **quel fait était insuffisamment vérifié**.
5. Après accord explicite du formateur, faire proposer (sans écraser) un nouveau cas d'amélioration dans `demo-travail/`.
6. Rejouer les contrôles ; présenter les résultats réels sans inventer d'issue de validation.

## Questions aux participants

- Quelle différence entre « réponse IA », « document V1 » et « livrable autorisé » ?
- À quel moment faut-il arrêter la diffusion d'un guide ?
- Comment prouver une vraie correction de fond et pas une reformulation superficielle ?
- Quelle preuve permettrait à un tiers de vérifier votre progression ?

## Clôture

Faire expliquer : **L’IA propose ; l’humain pilote, contrôle et décide ; un livrable n'est utile que si son usage, ses limites et sa trace sont visibles.**
