# Samso Studios Development Starter

A lightweight TypeScript starter for custom Webflow development projects by Samso Studios.

The starter provides a modern development environment for writing, bundling, linting, and formatting custom JavaScript and TypeScript used alongside Webflow projects.

## Stack

- [TypeScript](https://www.typescriptlang.org/) for type-safe development
- [esbuild](https://esbuild.github.io/) for fast development and production builds
- [ESLint](https://eslint.org/) for code quality and import sorting
- [Prettier](https://prettier.io/) for code formatting
- [GSAP](https://gsap.com/) for animation
- [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling

## Getting Started

Create a new project from this template and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The development build watches for changes and serves the compiled files locally.

Create a production build:

```bash
npm run build
```

Production files are output to the `dist` directory.

## Scripts

### Development

```bash
npm run dev
```

Starts the esbuild development environment with file watching and source maps.

### Build

```bash
npm run build
```

Creates a minified production build.

### Lint

```bash
npm run lint
```

Checks files in `src` with ESLint.

Automatically fix supported ESLint issues:

```bash
npm run lint:fix
```

### Type Check

```bash
npm run check
```

Runs TypeScript without emitting files to check for type errors.

### Format

```bash
npm run format
```

Formats files in `src` with Prettier.

## Project Structure

```text
.
├── bin/
│   └── build.js
├── dist/
├── src/
│   ├── components/
│   ├── utils/
│   └── index.ts
├── eslint.config.js
├── global.d.ts
├── package.json
├── prettier.config.js
└── tsconfig.json
```

### `src/index.ts`

The main entry point for project-specific code.

### `src/components`

Reusable or page-specific components can be organized here.

### `src/utils`

Shared utilities used throughout the project.

The starter includes utilities for:

- Webflow breakpoint detection
- Webflow environment detection
- Touch-device detection
- Dynamic component loading
- Lenis smooth scrolling

## Path Aliases

TypeScript path aliases are available for commonly used project directories:

```ts
import { example } from '$utils/example';
import { example } from '$components/example';
import { example } from '$animation/example';
```

Aliases can be configured in `tsconfig.json`.

## Webflow

This starter is designed for custom code that runs alongside a Webflow project.

Project code should generally be initialized through Webflow's loading queue:

```ts
window.Webflow ||= [];

window.Webflow.push(() => {
  // Initialize project code
});
```

This ensures the Webflow runtime and DOM are ready before project scripts execute.

## Requirements

- Node.js 24 LTS
- npm

## License

ISC
