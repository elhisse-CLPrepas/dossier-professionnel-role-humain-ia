# GitHub Actions : contrôler puis publier

Le dépôt de référence est `elhisse-CLPrepas/dossier-professionnel-role-humain-ia`, dans le checkout indépendant voisin de l’atelier. Ne pas changer le remote du parent.

## Contrôles continus

Le workflow `ci.yml` contrôle les push sur main et les pull requests : installation reproductible avec npm ci, contrôle du site, tests, vérification documentaire, build Pages et build autonome. Il dispose seulement du droit de lecture du dépôt.

## Publication manuelle

Dans GitHub → Actions → Publier le dossier sur GitHub Pages → Run workflow → main. Le workflow reconstruit et vérifie le site avant de publier uniquement dist. Le job deploy dépend du succès du job build. Les droits Pages et OIDC servent à cette publication, sans clé API à ajouter.

Après un changement : créer une branche, examiner le diff, committer, pousser et ouvrir une pull request. Lire le résultat CI avant fusion. Pour publier la version choisie sur main, lancer ensuite le workflow Pages.

## Résultats du 2 novembre 2026

Sur le checkout dédié au commit 3c6221f : npm run check, npm test (3/3), npm run build, npm run standalone et les deux scripts Python documentaires réussissent. V1 et V2 restent distinctes et À RELIRE.

Premier lancement Pages : https://github.com/elhisse-CLPrepas/dossier-professionnel-role-humain-ia/actions/runs/41529250852

La recette visuelle Chrome bureau/mobile reste à effectuer : Computer Use a interrompu la session car l’URL du navigateur ne pouvait pas être déterminée avec assez de certitude. Aucun succès visuel n’est revendiqué. Les 22 slides et autres contrôles de l’atelier parent ne constituent pas des tests de ce site documentaire dédié.

Documentation officielle : https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
