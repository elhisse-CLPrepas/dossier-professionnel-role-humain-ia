# Préparer le dépôt dédié et GitHub Pages

**2 novembre 2026 — Proposition à relire, sans commit ni publication exécutés.**

**Suite autorisée le 2 novembre 2026 :** le pilote demande le commit local, le remote et le push vers le dépôt dédié. Les instructions ci-dessous documentent la préparation initiale ; le rapport d’export indique les vérifications réellement exécutées. Cette autorisation ne constitue ni validation métier de V2 ni demande d’activer Pages.

## Architecture retenue pour la préparation

Le dossier de travail actuel appartient au Git de `atelier-seance-12-ln-ia`. Son remote `origin` pointe vers ce dépôt parent. Ne pas remplacer ce remote par celui du dossier professionnel et ne pas lancer `git init` dans le sous-dossier actuel.

Préparer un checkout indépendant dans un dossier voisin de l’atelier, par exemple `ATELIERS-MODULE-03/dossier-professionnel-role-humain-ia/`. Le dossier actuel reste la source de préparation. Après le transfert initial, utiliser le dépôt dédié comme référence pour les évolutions du dossier professionnel et conserver un lien depuis l’atelier ; éviter deux copies modifiées sans synchronisation explicite.

Un futur sous-module reste possible si le pilote souhaite une intégration Git formelle ; aucun sous-module n’est nécessaire pour une liaison par README.

## État du distant

URL cible : `https://github.com/elhisse-CLPrepas/dossier-professionnel-role-humain-ia.git`.

Le connecteur GitHub confirme le 2 novembre 2026 que le dépôt existe, est public, non archivé et accessible avec droits d’administration et de push. La branche par défaut déclarée est `main` ; la taille déclarée est 0. Cette métadonnée seule ne prouve pas l’absence de commits : inspecter les références et le contenu avant copie. La configuration Pages n’a pas été contrôlée. Ne jamais remplacer un historique par force.

S’il existe, le cloner dans l’emplacement indépendant puis inspecter son état avant toute copie. S’il n’existe pas, créer le dépôt dédié après instruction du pilote, puis préparer son checkout. Ne pas copier le `.git` du parent.

## Sélection du premier commit

Copier seulement les contenus destinés au dépôt public, après revue :

- `README.md`, `COMMENCER-ICI.md`, `.gitignore` ;
- les documents pédagogiques préparés dans `00-pilotage/` à `07-portfolio/`, hors historique local et sous réserve des droits ;
- `docs/` et `references/`, après vérification des liens et références au parent ;
- `scripts/verifier-dossier.py` et `scripts/comparer-versions.py`.

Exclure `08-archives-privees/`, `demo-travail/`, `00-pilotage/etapes/`, secrets, fichiers d’environnement, clés et scripts de génération/consignation propres au rejeu. Ajouter explicitement `00-pilotage/etapes/` au `.gitignore` du checkout public avant indexation. Le dossier privé vide n’étant pas versionné, le recréer localement avant de lancer le vérificateur qui attend les dossiers 00–08.

Le manifeste SHA256 existant décrit le pack initial : ne pas le présenter comme manifeste de l’export enrichi. Le conserver comme référence historique explicitement nommée ou générer un nouveau manifeste de la sélection publique.

Les documents du pack mentionnent parfois des archives et chemins du projet parent. Transformer ces dépendances en références documentaires explicites ; ne pas copier les archives par défaut. Vérifier que tous les liens publics fonctionnent sans les fichiers locaux exclus.

## Revue avant commit

Dans le checkout dédié uniquement :

```powershell
git rev-parse --show-toplevel
git remote -v
git status --short
git diff
python -X utf8 scripts/verifier-dossier.py
python -X utf8 scripts/comparer-versions.py
```

La racine affichée doit être celle du dépôt dédié et le remote doit viser son URL. Après sélection explicite des fichiers à indexer, vérifier `git diff --cached --stat` et `git diff --cached`. Contrôler aussi les fichiers non suivis : `git diff` seul ne les affiche pas.

**Message proposé pour le premier commit documentaire :**

```text
docs: documenter le dossier professionnel S09-S12 et préparer GitHub Pages
```

Le commit, son éventuel push et la publication doivent faire l’objet d’une instruction explicite du pilote après revue. Aucun `git add`, commit ou push n’a été exécuté pour cette préparation.

## Site GitHub Pages envisagé

Adresse prévue : `https://elhisse-clprepas.github.io/dossier-professionnel-role-humain-ia/`.

Proposition : site statique dans `site/`, avec accueil, parcours S09–S12, consultation de V1/V2, journal, prompts et preuves pédagogiques. Conserver les statuts À RELIRE et la mention FICTIF ; aucun appel IA depuis le site. Utiliser des liens relatifs compatibles avec le sous-chemin du dépôt et intégrer le logo officiel après sélection de l’asset autorisé.

Prévoir un workflow GitHub Actions limité à ce dépôt, initialement déclenché manuellement, qui contrôle les documents puis publie uniquement le répertoire public généré. Ne pas envoyer toute la racine documentaire comme artefact Pages. Aucune configuration ni interface n’est créée par cette étape documentaire.

Dans GitHub : Settings → Pages → Source : GitHub Actions, lorsque le workflow sera prêt. Vérifier ensuite la réussite du déploiement et son URL réelle ; ne pas annoncer le site comme disponible avant ce résultat. Tester navigation, téléchargements, lecture mobile et fonctionnement sans accès au dossier parent.

## Références officielles

- [Types de sites et URL de projet](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Configurer la source de publication](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

GitHub Pages héberge des fichiers statiques. L’URL Git terminée par `.git` sert au dépôt ; l’adresse `github.io` sert au site.
