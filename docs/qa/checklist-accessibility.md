# Checklist accessibilite

Cible : WCAG 2.2 AA.

## Structure

- [ ] Regions `header`, `nav`, `main`, `footer` presentes.
- [ ] Lien d'evitement vers le contenu principal.
- [ ] Un H1 et hierarchie de titres logique.
- [ ] Ordre DOM identique a l'ordre de lecture.
- [ ] Listes, tableaux et citations utilisent la bonne semantique.

## Clavier et focus

- [ ] Toute action utilisable au clavier.
- [ ] Focus visible avec contraste suffisant.
- [ ] Ordre de tabulation logique, sans `tabindex` positif.
- [ ] Focus place et restaure pour modal/drawer.
- [ ] Echap ferme les overlays lorsque attendu.
- [ ] Aucun piege clavier.

## Noms et etats

- [ ] Boutons et liens ont un nom accessible explicite.
- [ ] Icones decoratives masquees aux technologies d'assistance.
- [ ] Etat actif, expanded, selected et current expose si necessaire.
- [ ] Les changements asynchrones importants sont annonces sans bruit excessif.
- [ ] Le lien externe ou changement de site n'est pas trompeur.

## Visuel

- [ ] Contraste texte normal >= 4.5:1.
- [ ] Contraste grand texte >= 3:1.
- [ ] Contraste des composants et focus >= 3:1.
- [ ] Information jamais transmise uniquement par couleur.
- [ ] Zoom 200 % sans perte de contenu ou fonction.
- [ ] Reflow a 320 CSS px sans scroll horizontal bidimensionnel.

## Images et medias

- [ ] Alt utile pour images informatives.
- [ ] Alt vide pour images decoratives.
- [ ] Aucun texte essentiel integre uniquement dans une image.
- [ ] Sous-titres/transcription pour media parlant.
- [ ] Aucun auto-play audio.

## Formulaires

- [ ] Labels visibles associes aux champs.
- [ ] Instructions avant la saisie lorsque necessaire.
- [ ] Erreurs identifient le champ et la correction.
- [ ] Erreurs reliees avec `aria-describedby`.
- [ ] Resume d'erreurs pour formulaire long.
- [ ] Consentement explicite et non pre-coche.
- [ ] Delai de session ou expiration annonce et recuperable si applicable.

## Mouvement

- [ ] `prefers-reduced-motion` respecte.
- [ ] Animation clignotante absente.
- [ ] Carrousels automatiques pausables.
- [ ] Contenu reste accessible sans animation.

## Tests

- [ ] Parcours complet clavier.
- [ ] Verification lecteur d'ecran sur navigation, formulaire et modal critiques.
- [ ] Axe ou outil equivalent sans violation critique.
- [ ] Audit manuel des noms, ordre, erreurs et contraste.
