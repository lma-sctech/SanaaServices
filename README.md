# SANAASERVICES-V3

Monorepo for the Sanaa Services digital ecosystem, based in Astoria, Queens — New York.

## Applications

| App | Role | Port |
|---|---|---|
| `apps/main` | Institutional portal and entry point | 3000 |
| `apps/premium-travel` | Premium travel — tailor-made journeys | 3001 |

## Structure

```
SanaaServices-V3/
├── apps/
│   ├── main/              Next.js static site
│   └── premium-travel/    Next.js static site
├── packages/
│   ├── eslint-config/     Shared ESLint configuration
│   └── typescript-config/ Shared TypeScript configuration
├── docs/                  Strategy, content briefs, design rules, QA checklists
├── scripts/               Turbo launcher (cross-platform pnpm shim)
├── Dockerfile             Multi-stage build → nginx
├── compose.yaml           Docker Compose for local dev
└── turbo.json             Turborepo task configuration
```

## Commands

```powershell
corepack pnpm install
corepack pnpm dev          # Main on :3000, Premium Travel on :3001
corepack pnpm build        # Static export to apps/*/out/
corepack pnpm lint
corepack pnpm typecheck
```

## Docker

```powershell
docker compose up --build --detach
docker compose ps
docker compose down
```

Main on `http://localhost:3000`, Premium Travel on `http://localhost:3001`.

## Deployment

Static export (`output: "export"`). Each app builds to an `out/` folder containing HTML, CSS, JS and images ready to serve from any static host (cPanel, nginx, Vercel, etc.).

## Tech stack

- Next.js 16, React 19, TypeScript 6 (strict)
- pnpm 11 + Turborepo
- CSS global (no framework)
- Static export — no server required
