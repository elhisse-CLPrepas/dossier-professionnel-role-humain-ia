# Journal de préparation du site Vite

Date : 2 novembre 2026. Dépôt dédié uniquement ; aucune modification de l’application de l’atelier parent.

## Production

Présentation du dossier en cinq sections : parcours, bibliothèque, correction V1/V2, responsabilités et preuves. Lecture Markdown assainie avec DOMPurify ; recherche sans accents, filtres, copie et téléchargement. Dialog natif avec fermeture clavier ; menu mobile ; impression ; préférence de réduction des mouvements. Les documents préparés, V1/V2, prompts et preuves restent inchangés.

Vite 8.3.5, Bootstrap **6.0.0-alpha.1** exact, Marked 17.0.6, DOMPurify 3.4.17 et vite-plugin-singlefile 2.3.4 installés. Le lockfile reproduit ces versions. `npm install` a signalé zéro vulnérabilité lors de cette installation, sans garantie pour des versions futures.

Métadonnées HTML : titre, description, auteur, langue, viewport, thème, canonical, Open Graph, Twitter et JSON-LD LearningResource. Carte PNG 1200 × 630 dessinée par code, source graphique SVG ; logo officiel copié à l’identique depuis l’atelier. Aucun CDN, police distante, appel IA ou collecte dans le site.

## Vérifications réellement exécutées

| Vérification | Résultat observé | Limite |
|---|---|---|
| `npm run check` | Réussi | Repères de métadonnées, fichiers et configuration |
| `npm test` | 3 tests réussis | Recherche/filtre, protocoles de lien et versions ; pas test navigateur |
| `npm run build` | Réussi | Build statique ; base Pages correctement préfixée |
| `npm run standalone` | Réussi | HTML avec CSS/JS, logo et favicon intégrés |
| Deux scripts Python documentaires | Réussis | Structure et différences textuelles, aucune validation métier |
| Analyse HTML des builds | IDs uniques, ancres existantes et ressources correctes | Pas rendu visuel |
| Serveur de prévisualisation | HTTP 200 sur le sous-chemin du dépôt | Serveur local, pas URL publique |
| Sélection publique du build | Aucun répertoire privé/chat/rejeu dans les fichiers générés | Import Markdown limité explicitement aux dossiers publics |
| `git diff` sur documents/prompts/portfolio | Aucun changement | Conservation des sources préparées |

L’avertissement CSS initial sur un import vide a été corrigé. Le favicon initialement externe a été intégré pour l’autonomie du HTML.

## Recette restant à faire

L’hôte d’accès navigateur direct est indisponible. Chrome a été sélectionné par l’interface Windows, mais les commandes et captures ont échoué : délai `press_key`, géométrie indisponible puis `FrameArrived timed out`. Aucun affichage du site dans Chrome n’a pu être attesté.

À vérifier dans Chrome/Chromium : rendu bureau et mobile, menu, quatre étapes, lecteur Markdown, navigation interne, trois comparaisons, cinq responsabilités, recherche et états vides, copie, téléchargements de V1/V2/prompts/preuves, impression et ouverture effective du HTML autonome hors réseau. La structure responsive et les ressources intégrées sont préparées, mais cette recette visuelle et fonctionnelle n’est pas déclarée réussie.

Les 22 slides, quiz et flashcards appartiennent à l’application parent ; ils ne sont pas recréés dans cette présentation du dossier.

## Publication

Workflow GitHub Actions à déclenchement manuel uniquement. Il exécute les contrôles puis publie exclusivement `dist/`, avec le base `/dossier-professionnel-role-humain-ia/`. Aucun déploiement ni activation Pages effectué par cette préparation. Les aperçus sociaux, les liens externes et l’URL publique seront à vérifier après publication.

Sources techniques consultées : [Bootstrap 6 Alpha](https://blog.getbootstrap.com/2026/10/08/bootstrap-6-alpha/), [déploiement Vite sur GitHub Pages](https://vite.dev/guide/static-deploy.html#github-pages). Les contrôles ne changent pas le statut V2 À RELIRE / NON VALIDÉE.
