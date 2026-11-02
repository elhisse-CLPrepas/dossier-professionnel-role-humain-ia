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

## Publication confirmée

Le lancement Pages 41529250852 est terminé avec succès : jobs build et deploy réussis, version applicative 3c6221f. Le contrôle HTTP du site, du JavaScript, du CSS et du logo renvoie 200.

Site : https://elhisse-clprepas.github.io/dossier-professionnel-role-humain-ia/

Le premier contrôle continu du commit 1ba14a2 est réussi : https://github.com/elhisse-CLPrepas/dossier-professionnel-role-humain-ia/actions/runs/41529473841

Les ajouts ultérieurs concernent la CI et sa documentation ; la publication reste manuelle. Ces résultats techniques ne changent pas le statut pédagogique À RELIRE de V1/V2.

## Harmonisation des couleurs — 2 novembre 2026

Le pilote confirme dans la conversation la relecture visuelle et pédagogique de la version précédente et demande le retour aux couleurs du mini-site Module 03 : https://elhisse-clprepas.github.io/mini-site-module03-ln-ia/.

Palette reprise de sa feuille CSS publiée : fond #f3f5f8, panneaux blancs, marine #071a31 et #0c294c, or #edcc89 et #d6ac60, texte secondaire #536579. Le bandeau d’accueil est marine avec accents dorés. La typographie, les dimensions, Bootstrap, les métadonnées SEO et les documents sont conservés. Seuls theme-color et les couleurs du favicon sont harmonisés dans le head.

Contrôles réellement exécutés après modification : check, 3/3 tests, build Pages, build autonome et les deux scripts Python documentaires réussis. La capture Chrome a expiré (FrameArrived timed out) ; aucune nouvelle vérification visuelle automatisée n’est revendiquée. La validation exprimée par le pilote porte sur la relecture du site ; elle ne transforme pas les exemples fictifs V1/V2 en attestations réelles.

## Logo et contraste orange/blanc — 2 novembre 2026

À la demande du pilote : logo officiel rectangulaire conservé sans retouche, affichage 176 × 88 px sur ordinateur et 140 × 70 px sur mobile, sans arrondi circulaire. L’en-tête s’adapte et le menu compact apparaît sous 1100 px ; le libellé adjacent s’efface sous 480 px pour laisser la place au logo complet.

Boutons principaux, filtres sélectionnés et couverture du dossier : orange #b54708 et texte blanc, contraste calculé 5,43:1. Survol #903700. Typographie, Bootstrap et métadonnées conservés.

Check, 3/3 tests, build Pages, build autonome, deux scripts documentaires et diff --check réussis. La capture visuelle automatisée n’a pas été effectuée pour cette itération ; le calcul de contraste ne remplace pas la recette visuelle.
