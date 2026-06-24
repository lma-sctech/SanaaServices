# Regles d'animation

## Intention

Le mouvement doit expliquer un changement, guider l'attention ou renforcer la qualite percue. Il ne doit jamais ralentir l'acces au contenu ni masquer une absence de hierarchie.

## Tokens de duree

| Token | Duree | Usage |
|---|---:|---|
| `--motion-instant` | 80 ms | Feedback presse tres court |
| `--motion-fast` | 140 ms | Hover, focus visuel, petits controles |
| `--motion-base` | 220 ms | Panneau, accordion, changement d'etat |
| `--motion-slow` | 360 ms | Modal, drawer, transition editoriale |
| `--motion-scene` | 600 ms max | Changement de scene hero exceptionnel |

## Easings

- Entrer : courbe decelerante.
- Sortir : courbe accelerante plus courte.
- Deplacement d'interface : courbe standard douce.
- Pas de rebond sur les services juridiques, assurance ou formulaires sensibles.

Les courbes sont centralisees dans les tokens; aucune courbe aleatoire dans un composant.

## Animations autorisees

- changement discret de couleur, bordure ou elevation au hover;
- apparition legere d'un panneau declenche par l'utilisateur;
- accordion avec hauteur et opacite maitrisees;
- drawer et modal avec focus gere;
- progression de formulaire;
- transition de slide avec controle manuel;
- reveal de section tres leger, sans cacher durablement le contenu.

## Animations interdites

- parallax agressif ou scroll hijacking;
- texte essentiel anime en boucle;
- curseur personnalise;
- auto-play audio;
- clignotement ou flash;
- animations qui retardent un CTA;
- plusieurs animations concurrentes dans le premier viewport;
- mouvement purement decoratif sur chaque carte.

## Reduced motion

Sous `prefers-reduced-motion: reduce` :

- supprimer les translations et zooms non essentiels;
- remplacer les transitions de scene par un fondu court ou un changement instantane;
- stopper marquee et carrousel automatique;
- conserver les changements d'etat necessaires sans mouvement spatial;
- ne jamais desactiver un feedback fonctionnel comme focus ou validation.

## Hero slideshow

- Rotation automatique optionnelle, jamais inferieure a six secondes.
- Pause lors du hover, du focus et lorsque l'onglet n'est pas visible.
- Boutons precedent/suivant avec noms accessibles.
- Indication de la slide active lisible par technologie d'assistance sans annonces excessives.
- Le contenu de la premiere slide est present dans le HTML initial.
- Aucun layout shift entre les slides.

## Carrousel d'avis infini

- Utiliser uniquement de vrais avis approuves.
- Le defilement peut etre continu sur desktop, mais doit se mettre en pause au hover et au focus.
- Sur tactile, permettre le scroll horizontal natif et le snap.
- Les duplications visuelles sont `aria-hidden`; la liste semantique ne repete pas les avis.
- Reduced motion affiche une grille ou liste statique.
- La vitesse reste lisible et ne sert pas a dissimuler le texte.

## Apparition au scroll

Le contenu doit rester visible sans JavaScript. Une enhancement peut appliquer une faible opacite et un decalage maximal de 16 px. Une section ne doit jamais rester invisible si l'observer echoue.

## Performance

- Animer principalement `transform` et `opacity`.
- Eviter les animations de grandes ombres floues, filtres et dimensions.
- Ne pas charger une librairie globale pour deux transitions CSS.
- Mesurer le cout des carrousels et observer le budget JavaScript.

## Validation

Tester chaque interaction avec souris, tactile, clavier, reduced motion et onglet en arriere-plan. Une animation qui degrade l'un de ces parcours est retiree ou simplifiee.
