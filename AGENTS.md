# Repository Guidelines

This guide helps contributors work effectively on this Mantine + Next.js template. It summarizes how the project is organized, how to develop locally, and the expectations for code quality and collaboration.

## Project Structure & Module Organization
- App routes and pages: `app/` (Next.js App Router)
- Reusable UI components: `components/`
- Static assets: `public/`
- Theming and shared config: `theme.ts`, `next.config.mjs`
- Tests and helpers: colocated with code; shared utils in `test-utils/`

## Build, Test, and Development Commands
- `pnpm dev` – run Next.js in dev mode at `http://localhost:3000`
- `pnpm build` – production build of the app
- `pnpm start` – start the production server (after build)
- `pnpm analyze` – build with bundle analyzer enabled
- `pnpm test` – run format check, lint, typecheck, and Jest
- `pnpm jest` / `pnpm jest:watch` – unit tests (watch mode optional)
- `pnpm lint` – run ESLint and Stylelint
- `pnpm typecheck` – TypeScript type checking
- `pnpm prettier:write` – format code; run before committing

## Coding Style & Naming Conventions
- Language: TypeScript (`.ts`/`.tsx`) with React 19 and Next 15
- Indentation: 2 spaces; prefer named exports; imports are auto-sorted
- Components: PascalCase (e.g., `ButtonGroup.tsx`)
- App directories: kebab-case under `app/`; co-locate styles
- Tooling: Prettier (`.prettierrc.mjs`), ESLint (`eslint.config.mjs`), Stylelint

## Testing Guidelines
- Framework: Jest + Testing Library (`@testing-library/react`) with `jest-dom`
- Location: tests colocated with source (`*.test.tsx|ts`)
- Aim for meaningful coverage on new/changed logic; add DOM assertions where relevant
- Run: `pnpm jest` locally and ensure `pnpm test` passes before PRs

## Commit & Pull Request Guidelines
- Commits: concise, imperative subject (e.g., `feat: add header actions`); group related changes
- PRs: clear description, motivation, and scope; link issues; include screenshots for UI; note breaking changes and test coverage
- CI hygiene: `pnpm test` must pass; no linter/type errors

## Security & Configuration Tips
- Do not commit secrets; use env vars via Next.js (`process.env.*`)
- Prefer well-maintained deps; update `pnpm-lock.yaml` with changes

## Agent-Specific Instructions
- Respect this guide across the entire repository
- Keep changes minimal, consistent with existing patterns; avoid unrelated refactors
