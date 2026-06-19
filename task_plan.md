# Task Plan: Auth & Account Pages (Mobile + Desktop)

## Goal
Créer les pages auth (login/register) et compte (account) pour les dossiers `mobile/` et `desktop/` (HTML prototypes) + les composants Next.js correspondants, avec simulation de navigation entre pages.

## Phases

- [x] Phase 1: Exploration du style existant (checkout, success, header, PhosphorIcon)
- [x] Phase 2: HTML prototype — mobile/auth.html
- [x] Phase 3: HTML prototype — mobile/compte.html
- [x] Phase 4: HTML prototype — desktop/auth.html
- [x] Phase 5: HTML prototype — desktop/compte.html
- [ ] Phase 6: Next.js — stores/auth-store.ts + app routes + composants (optionnel)
- [x] Phase 7: Vérification finale

## Key Decisions
- **Navigation simulation** : liens `<a href>` entre HTML files + setTimeout JS pour simuler le login
- **Tabs auth** : Login / Register togglés en JS pur dans les HTML
- **Compte sections** : Profile · Orders · Settings avec tab switching JS
- **React** : `stores/auth-store.ts` Zustand (isLoggedIn, user simulé), pas de vrai backend
- **Style** : copier l'en-tête Tailwind config des fichiers existants, input-underline/input-subtle, tokens MD3

## Findings (Phase 1)
- Les 4 fichiers existent déjà avec bon design MAIS aucune navigation ni JS fonctionnel
- mobile/auth.html et desktop/auth.html : tabs sans onclick, form sans submit handler, pas de panel "Create Account"
- mobile/compte.html : "Sign Out" button sans action
- desktop/compte.html : sidebar nav inactive, pas de bouton Sign Out
- Action : écrire le JS de navigation dans les 4 fichiers

## Status
**Phase 2–5 en cours** — ajout simulation navigation dans les fichiers existants
