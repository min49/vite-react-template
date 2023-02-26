# vite-react-template

A React TypeScript Starter Template with Tailwind CSS, React Router, React
Query, Linting & Testing setup.

## Features

- **Dev Tools**: Vite, TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Data Fetching and Caching**: Axios, TanStack React Query
- **Unit/Integration Testing**: Vitest, Testing Library
- **End-to-end Testing**: Cypress
- **Linting & Formating**: ESLint, Stylelint, Prettier, Husky, lint-staged

## Additional Features

- Mocks API calls during integration testing and development using
  [MSW](https://mswjs.io/). Add handlers in
  [server-handlers.ts](src/test/server/server-handler.ts)
- Absolute import for directories under `/src` folder using
  [vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths)
- Sort imports using
  [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)

## Getting Started

1. Clone with [degit](https://github.com/Rich-Harris/degit).

```
npx degit minthulim/vite-react-template my-project
cd my-project
```

2. Install and run.

   - With [pnpm](https://pnpm.io/):

   ```
   pnpm install
   pnpm dev
   ```

   - With `npm`:

   ```
   rm pnpm-lock.yaml
   npm install
   npm run dev
   ```

## Scripts

- `dev` - Start Vite dev server.
- `build` - Build for production. Output will be in `dist` folder.
- `preview` - Locally preview production build. This serves files from `dist`
  folder.
- `lint` - Runs ESLint, Stylelint and TypeScript.
- `test` - Runs unit/integration tests in watch mode.
- `test:ci` - Runs unit/integration tests one time and create code coverage
  report.
- `e2e` - Opens Cypress test window.
- `e2e:headless` - Start dev server and runs Cypress test in headless mode.
- `e2e:ci` - Build project and run Cypress test in headless mode on Production
  build.
