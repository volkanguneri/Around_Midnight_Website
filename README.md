# Around Midnight - Site Web Officiel

![Around Midnight](https://trioaroundmidnight.fr/logo.png)

## À propos

Site web officiel du trio de jazz "Around Midnight". Ce site est développé avec SvelteKit et déployé sur GitHub Pages à l'adresse [trioaroundmidnight.fr](https://trioaroundmidnight.fr).

## Technologies utilisées

- [SvelteKit](https://kit.svelte.dev/) - Framework web
- [TypeScript](https://www.typescriptlang.org/) - Langage de programmation
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Vite](https://vitejs.dev/) - Outil de build
- [GitHub Pages](https://pages.github.com/) - Hébergement

## Développement

### Prérequis

- [Node.js](https://nodejs.org/) (version recommandée : 18.x ou supérieure)
- [pnpm](https://pnpm.io/) (gestionnaire de paquets)

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-utilisateur/around-midnight.git
cd around-midnight

# Installer les dépendances
pnpm install
```

### Scripts disponibles

```bash
# Lancer le serveur de développement
pnpm dev

# Construire le site pour la production
pnpm build

# Prévisualiser la version de production
pnpm preview

# Optimiser les images
pnpm optimize-images

# Vérifier le code
pnpm check

# Formater le code
pnpm format

# Linter le code
pnpm lint

# Exécuter les tests
pnpm test
```

## Déploiement

Le site est automatiquement déployé sur GitHub Pages à chaque push sur la branche principale. La configuration de déploiement se trouve dans le dossier `.github/workflows`.

## Structure du projet

- `src/` - Code source du site
  - `lib/` - Composants et utilitaires
  - `routes/` - Pages du site
- `static/` - Fichiers statiques (images, fonts, etc.)
- `public/` - Fichiers publics copiés à la racine du site
- `scripts/` - Scripts utilitaires

## Contact

Pour toute question concernant le site, veuillez contacter [contact@trioaroundmidnight.fr](mailto:contact@trioaroundmidnight.fr).
