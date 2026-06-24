# Regles responsive

## Principe

Mobile-first signifie que le HTML, l'ordre du contenu et les interactions fonctionnent d'abord sans media query. Les breakpoints enrichissent la mise en page; ils ne repareront pas un composant concu uniquement pour desktop.

## Viewports de validation

| Categorie | Largeur |
|---|---:|
| Petit mobile | 360 px |
| Mobile standard | 390 px |
| Grand mobile | 430 px |
| Tablette portrait | 768 px |
| Laptop/tablette paysage | 1024 px |
| Desktop | 1280 px |
| Grand desktop | 1440 px |
| Tres grand ecran | 1920 px et plus |

Ces largeurs sont des points de test, pas des cibles de design fixes. Tester aussi les largeurs intermediaires.

## Breakpoints de mise en page

- Base : 0-767 px.
- Tablette : 768 px et plus.
- Desktop compact : 1024 px et plus.
- Desktop large : 1280 px et plus.
- Wide : 1600 px et plus uniquement si necessaire.

Un composant peut changer plus tot ou plus tard si son contenu le demande. Les breakpoints de composant sont motives par un test, pas par un appareil.

## Dimensions fluides

- Utiliser `min()`, `max()`, `clamp()`, grid et flex avant d'ajouter un breakpoint.
- Eviter les hauteurs fixes pour les cartes, titres et sections.
- `min-height` est accepte pour un hero si le contenu reste entier a 200 % de zoom.
- Une image decoratrice utilise `object-fit`; une image informative conserve son ratio et son contenu essentiel.
- Les conteneurs utilisent un padding lateral fluide compris entre 16 et 64 px selon la largeur.

## Grilles

- Une colonne par defaut.
- Deux colonnes uniquement lorsque chaque carte conserve une largeur lisible.
- Trois ou quatre colonnes sur desktop selon la densite du contenu.
- Preferer `repeat(auto-fit, minmax(...))` pour les grilles homogenes.
- Ne pas etirer une carte textuelle au seul motif de remplir une ligne.

## Hero

- Le H1 et le CTA principal restent visibles sans collision a 360 px.
- Le media ne porte jamais le texte essentiel.
- Le contraste repose sur un overlay ou une surface, pas sur une zone supposee sombre de l'image.
- Les carrousels exposent controles, statut et geste tactile; aucune rotation automatique rapide.
- Sur mobile, la hauteur suit le contenu et les zones sures du navigateur.

## Navigation

- Desktop et mobile utilisent la meme source de liens.
- Le menu mobile est un vrai dialogue ou panneau accessible avec focus gere.
- Le bouton menu mesure au moins 44 x 44 px.
- Aucun sous-menu ne depend uniquement du hover.
- Le header sticky ne doit pas masquer les ancres; utiliser `scroll-margin-top`.

## Typographie

- Les tailles fluides sont bornees par `clamp()`.
- Verifier les titres longs en anglais, francais et arabe.
- Ne jamais tronquer un titre, un label de champ ou un CTA critique.
- A 320-360 px, autoriser les retours naturels plutot que reduire excessivement la police.

## Cartes et modales

- Une carte ne contient pas une seconde carte visuellement equivalente sans raison semantique.
- Les cartes de contenu n'utilisent pas de largeur fixe.
- Une modal mobile occupe l'espace utile, reste scrollable et conserve fermeture et titre accessibles.
- Le contenu sous la modal ne defile pas.
- A 200 % de zoom, aucune action ne devient inaccessible.

## Formulaires

- Une colonne sur mobile.
- Les groupes courts peuvent passer a deux colonnes a partir de 768 px.
- Le clavier virtuel ne masque pas l'action ou l'erreur active.
- Utiliser les bons `type`, `inputMode` et `autocomplete`.
- Les boutons d'envoi prennent toute la largeur seulement lorsque cela renforce la hierarchie mobile.

## Media

- Sources dimensionnees pour le rendu reel et densites d'ecran.
- `sizes` obligatoire avec `next/image` pour les images responsives.
- Point focal documente pour les crops importants.
- Pas de video hero lourde sans poster et strategie mobile.
- Les embeds carte et video sont charges a la demande.

## Tres grands ecrans

- Le texte reste dans un conteneur lisible.
- Les espaces peuvent grandir, pas les lignes de texte sans limite.
- Une image full-bleed peut s'etendre, tandis que son contenu reste contraint.
- Eviter les interfaces concentrees dans un coin ou les cartes etirees sur 1900 px.

## Checklist par composant

- 360 px sans scroll horizontal.
- 390 px avec texte reel le plus long.
- 768 px sans zone vide artificielle.
- 1024 px avec navigation et grilles stables.
- 1280 et 1440 px avec densite equilibree.
- 1920 px avec largeur de lecture maitrisee.
- Zoom navigateur 200 %.
- Orientation paysage mobile.
- Clavier uniquement.
- Reduced motion.
