# Roadmap

## Methode

Chaque phase se termine par une porte de validation. La suivante ne commence pas tant que les criteres obligatoires ne sont pas satisfaits. Les changements restent petits, testables et documentes.

## Etat des phases

| Phase | Objet | Etat |
|---:|---|---|
| 0 | Sauvegarde des prototypes | Termine |
| 1 | Fondation monorepo | Termine |
| 2 | Documentation centrale | Termine |
| 3 | Implementation du design system | Termine |
| 4 | Tokens et identites par site | Termine |
| 5 | Configuration partagee, liens et SEO helpers | Termine |
| 6 | Site Main | En validation |
| 7 | Premium Travel | A faire |
| 8 | Insurance | A faire |
| 9 | Travel, Visa, Immigration et Translation | A faire |
| 10 | Driving School et DMV | A faire |
| 11 | Notary Legal vitrine | A faire |
| 12 | Maquette Notary Online | A faire |
| 13 | Formulaires et conversion | A faire |
| 14 | Responsive multi-ecrans | A faire |
| 15 | SEO et structure de contenu | A faire |
| 16 | Performance | A faire |
| 17 | Accessibilite | A faire |
| 18 | Tests et controle qualite | A faire |
| 19 | Deploiement | A faire |

## Phase 2 - Documentation centrale

Livrables termines : vision, cartographie des sites, roadmap, specification du design system, regles responsive et motion, six briefs editoriaux, prompts permanents, checklists QA et ADR initiaux.

Porte de validation : aucun contenu commercial invente, frontieres des apps explicites, regles testables, documents indexes et aucun code applicatif commence.

## Phase 3 - Design system

Ordre : tokens de base, `Container`, `Section`, `SectionHeader`, `Button`, puis cartes, statistiques, temoignages, newsletter, navigation et footer.

Porte : TypeScript strict, CSS Modules, exports documentes, clavier, contraste, reduced motion et commandes racine vertes.

Livrables termines : package `@sanaa/design-system`, configurations TypeScript et ESLint partagees, fondations, composants structurels, exemple de composition et documentation des contrats. Les controles `lint`, `typecheck` et `build` passent depuis la racine.

## Phase 4 - Themes

Implementer les six surcharges de tokens et verifier que chaque identite garde le meme contrat semantique. Aucun composant ne doit contenir une couleur propre a une app.

Livrables termines : themes `main`, `premium-travel`, `travel`, `notary-legal`, `insurance` et `driving-school`. Les couleurs propres aux identites restent limitees aux fichiers de tokens; la validation visuelle sera rejouee dans chaque application avec son contenu reel.

## Phase 5 - Shared

Creer `sites.ts`, `crossLinks.ts`, `contact.ts`, `languages.ts`, types partages, helpers metadata et conventions d'analytics. Les valeurs inconnues restent bloquees par `TBD`.

Livrables termines : package `@sanaa/shared`, registre des six sites, routes et URLs locales, liens inter-sites types, contact global bloque par `TBD`, anglais actif avec francais et arabe planifies, helpers metadata, taxonomie analytics sans PII et gardes de publication. La preview Main consomme le package; les futurs builds publics devront activer les gardes correspondant aux donnees rendues.

## Phases 6 a 11 - Sites vitrines

Ordre : Main, Premium Travel, Insurance, Travel, Driving School, Notary Legal. Pour chaque app : brief valide, initialisation, layout, accueil, routes internes, donnees typees, liens croises, puis controles QA.

Etat Phase 6 : implementation technique terminee pour l'accueil, About, Contact, Privacy, Accessibility, 404, robots et sitemap. Publication bloquee tant que le brief editorial, le NAP, les langues operationnelles et les politiques ne sont pas approuves. Le formulaire Contact reste hors scope jusqu'a la Phase 13. Rapport : [`../qa/main-phase-6.md`](../qa/main-phase-6.md).

## Phase 12 - Notary Online

Maquette en quatre etapes : document, identite, creneau, confirmation. Aucun vrai upload, paiement, stockage, controle d'identite ou acte notarie sans nouvel ADR et validation juridique.

## Phase 13 - Formulaires

Provider abstrait, validation client et serveur, anti-spam, erreurs honnetes et collecte minimale. Les documents sensibles restent desactives tant que l'architecture securisee n'est pas approuvee.

## Phase 14 - Responsive

Appliquer la matrice 360, 390, 430, 768, 1024, 1280, 1440 et 1920 px. Verifier zoom 200 %, paysage mobile, tactile et contenu long.

## Phase 15 - SEO

Metadata uniques, canonical, sitemap, robots, Open Graph, donnees structurees locales, NAP et architecture linguistique complete.

## Phase 16 - Performance

Mesurer les builds de production, images, fonts, JavaScript client, carrousels, formulaires et embeds. Respecter les budgets documentes.

## Phase 17 - Accessibilite

Audit WCAG 2.2 AA : semantique, clavier, focus, contraste, lecteurs d'ecran, erreurs, zoom et reduced motion.

## Phase 18 - Tests

Tests unitaires cibles, smoke de chaque route, E2E des CTA et formulaires, liens inter-sites, metadata et checklists de release.

## Phase 19 - Deploiement

Un projet Vercel par app, previews non indexables, domaines et variables separes, monitoring, rollback et verification post-production.

## Definition of Done generale

- scope et brief respectes;
- aucun contenu `TBD` publie;
- `pnpm lint`, `pnpm typecheck` et `pnpm build` verts;
- routes, ancres et liens testes;
- responsive, clavier et reduced motion verifies;
- metadata et donnees structurees valides;
- documentation mise a jour;
- aucune modification involontaire de `_backup/`.
