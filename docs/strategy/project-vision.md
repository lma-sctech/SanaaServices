# Vision du projet

## Mission

SANAASERVICES-V3 doit devenir un ecosysteme numerique coherent pour Sanaa Services, ancre a Astoria, New York. Il doit aider des particuliers, familles, voyageurs et membres de la communaute a comprendre rapidement le bon service, entrer en contact avec une personne responsable et suivre leur demande sans confusion.

Le produit reunit six sites specialises. Ils partagent une qualite de service, un design system et des donnees de contact, tout en gardant une identite et un parcours adaptes a leur secteur.

## Probleme a resoudre

Les anciens prototypes melangent plusieurs identites, langues, offres et generations techniques. Ils contiennent de bonnes idees, mais ne forment pas une base durable. La V3 doit resoudre :

- la competition entre trop de services sur une meme page;
- les promesses ou coordonnees de demonstration non verifiees;
- les contenus voyage et services generalistes melanges;
- la duplication de composants et de styles;
- l'absence de frontieres claires entre vitrine, conversion et future application;
- les incoherences mobile, accessibilite, SEO et performance;
- la difficulte a faire evoluer six marques sans les faire diverger.

## Positionnement

Sanaa Services n'est ni un annuaire de services ni un SaaS impersonnel. La proposition de valeur commune est :

> Des services importants, simplifies avec attention par une equipe locale, multilingue et responsable du suivi.

La marque doit inspirer confiance avant de chercher a impressionner. Le premium vient de la clarte, de la qualite editoriale, de la precision des interactions et de l'attention humaine.

## Publics prioritaires

1. Residents de New York et familles ayant besoin d'un accompagnement concret.
2. Communautes marocaine, arabe, francophone et internationale d'Astoria et de NYC.
3. Voyageurs recherchant une assistance pratique ou une experience premium.
4. Nouveaux arrivants confrontes a des documents, visas, traductions ou demarches.
5. Clients souhaitant une assurance ou un accompagnement DMV et conduite.

## Ecosysteme cible

| Site | Fonction principale |
|---|---|
| Main | Orienter, rassurer et distribuer vers le bon site specialise |
| Premium Travel | Inspirer et convertir des projets de voyage sur mesure |
| Travel | Resoudre les besoins pratiques de voyage, visa, immigration et traduction |
| Notary Legal | Encadrer les services notariaux et l'accompagnement documentaire |
| Insurance | Expliquer les produits et collecter des demandes de devis |
| Driving School | Presenter les cours, services DMV et demandes de reservation |

## Principes non negociables

### Une source de verite

- Le design system est dans `packages/design-system`.
- Les URLs, contacts et liens croises sont centralises.
- Les contenus repetes ne sont pas dupliques dans les composants.
- Les anciennes apps ne sont jamais importees comme dependances.

### Une promesse par page

Chaque page doit repondre a une intention principale et presenter un CTA primaire explicite. Les actions secondaires restent visuellement secondaires.

### La confiance avant la conversion

Adresse, langues, horaires, politiques, qualifications verifiees et vrais avis doivent etre proches des zones de conversion. Aucune statistique, note, licence ou disponibilite ne doit etre inventee.

### Mobile-first reel

Les interfaces sont concues d'abord a 360 px, puis enrichies. Aucun composant ne doit dependre d'une largeur fixe ou d'un survol de souris pour etre utilisable.

### Technologie discrete

Les Server Components sont le choix par defaut. Le JavaScript client, les animations et les librairies ne sont ajoutes que lorsqu'ils ameliorent une interaction mesurable.

### Accessibilite et langage

La cible est WCAG 2.2 AA. L'anglais est la langue canonique du premier MVP public. L'architecture doit accepter le francais et l'arabe sans faux selecteur de langue ni traduction partielle en production.

### Responsabilite reglementaire

- Ne jamais presenter Sanaa Services comme cabinet d'avocats sans validation formelle.
- Preferer `Legal document guidance`, `Document preparation support` et `Administrative guidance`.
- Ne jamais affirmer une licence d'assurance, de notariat ou d'immigration sans preuve.
- Les disclaimers ne compensent pas une promesse commerciale trompeuse.
- Les documents sensibles ne sont pas televerses tant que stockage, retention et securite ne sont pas definis.

## Objectifs produit

### MVP vitrine

- Expliquer l'ecosysteme en moins de cinq secondes sur le site Main.
- Permettre de joindre Sanaa par telephone, formulaire ou canal approuve.
- Distribuer clairement vers les cinq sites specialises.
- Rendre chaque site indexable, rapide et accessible.
- Mesurer les CTA et formulaires sans collecte excessive.

### Evolution applicative

La V3 doit pouvoir accueillir ensuite : formulaires connectes, CRM, paiement, espace client, gestion documentaire, devis, reservation et automatisations. Ces fonctions ne doivent pas etre simulees comme si elles etaient deja operationnelles.

## Non-objectifs initiaux

- Un backend metier complet des la premiere version.
- Une authentification multi-role en production.
- Un vrai paiement ou une vraie verification d'identite.
- Une notarisation en ligne juridiquement operationnelle.
- Un moteur de reservation voyage ou fournisseur en temps reel.
- Des traductions automatiques non relues.

## Mesures de succes

| Axe | Cible initiale |
|---|---|
| Comprehension | Service et CTA principal compris sans faire defiler la page |
| Conversion | Evenements fiables pour appel, contact, devis et reservation |
| Performance | Core Web Vitals dans la zone `good` au 75e percentile |
| Accessibilite | Score Lighthouse 95+ et aucun blocage clavier critique |
| SEO | Metadata uniques, sitemap, robots, canonical et donnees locales coherentes |
| Qualite | `pnpm lint`, `pnpm typecheck` et `pnpm build` verts |

## Sources historiques

Les references principales sont :

- `_backup/sanaa-plateform-v2-1/` pour le portail generaliste et sa cartographie;
- `_backup/sanaa-platform-v2/` pour le langage visuel Premium Travel;
- `_backup/SS/` et `_backup/SS-v2/` pour les patterns de services locaux, formulaires et contenus;
- `_backup/sanaa-platform-v1/` pour les sections alternatives.

Toute recuperation est recodee et documentee. Aucun copier-coller massif n'est accepte.
