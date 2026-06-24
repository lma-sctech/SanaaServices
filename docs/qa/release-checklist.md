# Release checklist

## Scope et contenu

- [ ] Scope de la release documente.
- [ ] Brief editorial respecte.
- [ ] Aucun `TBD`, faux avis, faux prix ou fausse disponibilite visible.
- [ ] Informations de contact verifiees.
- [ ] Contenus reglementes approuves.
- [ ] `_backup/` non modifie.

## Build

- [ ] `pnpm install --frozen-lockfile` fonctionne.
- [ ] `pnpm lint` OK.
- [ ] `pnpm typecheck` OK.
- [ ] `pnpm build` OK.
- [ ] Tests unitaires cibles OK.
- [ ] Smoke/E2E des routes critiques OK.
- [ ] Aucun warning de build non explique.

## UX

- [ ] CTA primaire evident sur chaque page.
- [ ] Menu desktop et mobile testes.
- [ ] Liens internes et inter-sites testes.
- [ ] Etats loading, succes, vide et erreur testes.
- [ ] Formulaires soumis dans un environnement de test.
- [ ] Aucun faux succes lorsque le provider echoue.

## Responsive

- [ ] Checklist responsive complete.
- [ ] Zoom 200 %.
- [ ] Mobile paysage.
- [ ] Vrai appareil tactile teste pour les parcours critiques.

## Accessibilite

- [ ] Checklist accessibilite complete.
- [ ] Navigation clavier.
- [ ] Reduced motion.
- [ ] Contrastes verifies.
- [ ] Aucun probleme critique automatise.

## SEO

- [ ] Checklist SEO complete.
- [ ] Sitemap et robots inspectes.
- [ ] Metadata sociales inspectees.
- [ ] JSON-LD valide.
- [ ] Preview non indexable.

## Performance

- [ ] Checklist performance complete.
- [ ] Lighthouse mobile et desktop archives.
- [ ] Web Vitals mesures ou plan de mesure actif.
- [ ] Aucune regression majeure face au dernier baseline.

## Securite et confidentialite

- [ ] Aucun secret dans le client ou le depot.
- [ ] Variables de production configurees.
- [ ] Anti-spam actif sur formulaires publics.
- [ ] Politique de retention coherente avec les donnees collectees.
- [ ] Upload desactive s'il n'est pas securise.
- [ ] Consentement analytics conforme au dispositif reel.

## Deploiement

- [ ] Preview validee avant production.
- [ ] Domaine et redirections verifies.
- [ ] Variables propres a l'environnement.
- [ ] Monitoring erreurs actif.
- [ ] Rollback identifie.
- [ ] Verification post-deploiement des pages et formulaires critiques.
