# Organigramme de l'exemple S09–S12

Ce schéma décrit la progression pédagogique, non une application automatique capable de valider des contenus.

```mermaid
flowchart TD
  A([Besoin fictif : rôle de l'humain avec IA]) --> B[S09 Note de cadrage\n6 rubriques]
  B --> C{Besoin, public, objectif, action clairs ?}
  C -- non --> B
  C -- oui, à relire --> D[S10 Fiche projet V1\n12 rubriques]
  D --> E{Livrables et étapes réalistes ?}
  E -- non --> D
  E -- oui, à relire --> F[S11 Plan du guide\n5 parties maximum]
  F --> G{Public, prérequis, actions cohérents ?}
  G -- non --> F
  G -- oui, à relire --> H[S12 Guide V1\n5 étapes contrôlables]
  H --> I[Correction documentée\nV1 conservée]
  I --> J{V2 vraiment différente\net journal avant/après ?}
  J -- non --> I
  J -- oui --> K[V2 À RELIRE + grille + preuves]
  K --> L{Revue humaine et autorisation réelles ?}
  L -- non --> M([Dossier pédagogique non validé])
  L -- oui et documenté --> N([Diffusion possible selon autorisation])
```

## Algorithme opérationnel

**Début →** choisir un besoin non confidentiel ; classer le cas comme fictif ; créer les dossiers 00–08.

**S09 →** décrire les six rubriques ; relire ; exporter une note V1 ; conserver la trace.

**S10 →** importer la note ; préciser les douze rubriques ; écrire « À vérifier » si nécessaire ; exporter fiche V1 et preuve.

**S11 →** importer note et fiche ; structurer cinq parties maximum ; prévoir checklist et priorité S12 ; exporter plan V1.

**S12 V1 →** importer le plan ; décrire au moins trois procédures avec résultat observé ; rédiger erreurs, checklist et points à vérifier ; conserver V1.

**S12 V2 →** modifier réellement la V1, décrire chaque changement et son motif ; vérifier le diff ; exporter la V2 **sans la déclarer validée**.

**Clôture →** classer prompts, grilles, preuves et bilan ; revue humaine explicite avant tout partage réel ; ne jamais publier les archives privées.

## Exemple de porte de contrôle

**Question :** « Peut-on diffuser un guide dont une affirmation importante n'a pas de source ? »  
**Non.** Marquer « À vérifier », suspendre la diffusion, rechercher une source compétente ou supprimer l'affirmation.
