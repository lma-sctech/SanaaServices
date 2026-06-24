# Checklist performance

## Budgets

- [ ] LCP <= 2.5 s au 75e percentile.
- [ ] INP <= 200 ms au 75e percentile.
- [ ] CLS <= 0.1 au 75e percentile.
- [ ] Lighthouse Performance >= 90 sur la cible de production, ou ecart documente.
- [ ] JavaScript client initial justifie et mesure par route.
- [ ] Aucune dependance lourde ajoutee pour une interaction native simple.

## Rendu

- [ ] Server Components par defaut.
- [ ] `use client` limite au sous-arbre interactif.
- [ ] Aucun fetch client pour une donnee disponible au rendu serveur.
- [ ] Aucun layout shift provoque par header, hero, font, image ou consent banner.
- [ ] Les sections essentielles rendent sans attendre une animation ou un observer.

## Images et medias

- [ ] `next/image` utilise pour les images de contenu.
- [ ] `width`/`height` ou `fill` dans un conteneur dimensionne.
- [ ] Attribut `sizes` coherent avec la grille.
- [ ] WebP/AVIF lorsque pertinent.
- [ ] Hero prioritaire uniquement pour l'image LCP reelle.
- [ ] Images sous la ligne de flottaison chargees paresseusement.
- [ ] Pas de video hero lourde sur mobile sans poster et strategie reseau.
- [ ] Embeds carte/video charges apres interaction ou proximite.

## Fonts et CSS

- [ ] Fonts via `next/font` et sous-ensembles limites.
- [ ] Pas de requete de font externe bloquante.
- [ ] CSS critique raisonnable et sans duplication majeure.
- [ ] Animations limitees a `transform` et `opacity` lorsque possible.
- [ ] Reduced motion ne telecharge pas une librairie supplementaire.

## JavaScript

- [ ] Carrousels et menus sans listeners globaux dupliques.
- [ ] Les composants caches ne restent pas actifs inutilement.
- [ ] Pas de timer permanent pour une preuve ou statistique decorative.
- [ ] Analytics charges avec strategie et consentement documentes.
- [ ] Erreurs client surveillees avant production.

## Validation

- [ ] Build de production mesure, pas seulement dev.
- [ ] Test mobile avec throttling CPU/reseau.
- [ ] Route la plus lourde identifiee.
- [ ] Rapport avant/apres conserve pour toute optimisation importante.
