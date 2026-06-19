# CI/CD Pipeline — amez&wear

## Pipeline overview

```mermaid
flowchart TD
    PR[Pull Request / Push] --> CI[CI Workflow]
    CI --> tc[TypeScript check]
    CI --> lint[ESLint]
    CI --> build[Next.js build]
    CI --> audit[npm audit advisory]

    tc & lint & build --> gate{All pass?}
    gate -->|No| block[❌ Merge blocked]
    gate -->|Yes| ok[✅ Merge allowed]

    ok --> develop[Push to develop]
    develop --> staging[Deploy → Staging\n(when DEPLOY_ENABLED=true)]
    staging --> smokeS[Smoke test /api/health]

    ok --> main[Push to main]
    main --> approval[Manual approval\nGitHub Environment: production]
    approval --> prod[Deploy → Production\n(when DEPLOY_ENABLED=true)]
    prod --> smokeP[Smoke test /api/health]
    prod --> rollback[Rollback on failure]
```

## Workflows

| File | Trigger | Purpose |
|------|---------|---------|
| `.github/workflows/ci.yml` | PR + push to `main`/`develop` | Quality gate — blocks merge on failure |
| `.github/workflows/deploy.yml` | Push to `develop`/`main` | CD — scaffolded, activated via `DEPLOY_ENABLED` |

## CI jobs (all blocking)

1. **TypeScript** — `npm run typecheck`
2. **Lint** — `npm run lint`
3. **Build** — `npm run build` (with a dummy `NEXT_PUBLIC_API_URL`)
4. **Dependency audit** — `npm audit --audit-level=high` (advisory)

## Local quality hooks

Husky runs on every commit:
- **pre-commit**: `lint-staged` → ESLint `--fix` on staged `.ts`/`.tsx` files
- **commit-msg**: `commitlint` enforces Conventional Commits format

Install hooks after cloning:
```bash
npm ci   # runs `prepare` script which calls `husky`
```

## Activating CD

1. Wire the deploy steps in `.github/workflows/deploy.yml`
2. Add GitHub Secrets / Variables (see `docs/SECRETS.md`)
3. Set `DEPLOY_ENABLED = true` in **Repository → Settings → Variables**
