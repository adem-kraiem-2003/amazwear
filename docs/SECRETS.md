# Secrets Management — amez&wear

## Required GitHub Secrets

Go to **Repository → Settings → Secrets and variables → Actions → New repository secret**:

| Secret name | Value | Used in |
|-------------|-------|---------|
| `NEXT_PUBLIC_API_URL` | `https://api.yourdomain.com` | `lib/api.ts` via env |

> `NEXT_PUBLIC_*` values are baked into the Next.js build at build time — they are not runtime secrets. Add them as **Variables** (not Secrets) for non-sensitive staging/prod URLs, or as Secrets if you prefer.

## Secrets added when you wire CD

| Secret name | Value |
|-------------|-------|
| `VERCEL_TOKEN` | Vercel personal access token (if deploying to Vercel) |
| `DEPLOY_TOKEN` | Token for your chosen deploy target |

## Local development

Create `amez&wear/.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

The file is already in `.gitignore` — never commit it.
