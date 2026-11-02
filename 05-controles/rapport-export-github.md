# Contrôles de l’export destiné à GitHub

Date : 2 novembre 2026. Commit et push autorisés par le pilote ; pas de validation métier ni d’activation Pages.

Le checkout indépendant est voisin de l’atelier. Son remote cible `https://github.com/elhisse-CLPrepas/dossier-professionnel-role-humain-ia.git`. Le clone initial a confirmé un dépôt vide. Le remote du parent n’a pas été modifié.

| Contrôle exécuté | Résultat | Limite |
|---|---|---|
| verifier-dossier.py | Code 0 — [sortie](export-verifier-dossier.txt) | Structure ou différences textuelles, pas validation humaine |
| comparer-versions.py | Code 0 — [sortie](export-comparer-versions.txt) | Structure ou différences textuelles, pas validation humaine |
| Liens Markdown locaux de l’export | Aucun lien cassé détecté | Pas de vérification réseau de tous les liens externes |
| Recherche de secrets, clés privées et emails | Aucun signal selon les motifs recherchés | Recherche limitée, pas audit exhaustif |
| Guides préparés V1/V2 | Identiques octet pour octet aux sources locales | Leur statut reste À RELIRE |
| Sélection publique | Chat, rejeu, scripts de rejeu, archives et secrets exclus | Vérifier de nouveau l’index avant tout push futur |

Le manifeste est généré sur les fichiers exportés, hors `.git`, archives privées et manifeste lui-même. Les fichiers initiaux du pack source ne sont pas remplacés.

Le vérificateur attend un dossier local `08-archives-privees/`. Ce dossier vide est créé dans le checkout mais exclu de Git ; après un nouveau clone, le recréer avant le contrôle.

Tests Vite, build, génération autonome et recette navigateur du parent : non exécutés pour cet export documentaire. Aucun site, workflow de déploiement ou contenu applicatif modifié. Aucun test utilisateur ni validation humaine finale attesté.

Fins de ligne : LF imposé par `.gitattributes` pour stabiliser les empreintes entre Windows et Git. Les espaces de fin de ligne Markdown et ceux de la sortie diff sont conservés intentionnellement ; le contrôle Git est effectué en désactivant uniquement le signalement des espaces de fin de ligne.
