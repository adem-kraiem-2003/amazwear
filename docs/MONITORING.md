# Monitoring Architecture — amez&wear

## Health endpoint (implemented)

`GET /api/health` returns `{"status": "ok"}` from the Next.js API route at `app/api/health/route.ts`.

## Recommended stack (wire when deploy target is chosen)

| Layer | Tool | What it covers |
|-------|------|----------------|
| Error tracking | Sentry (`@sentry/nextjs`) | Client + server exceptions, release tracking |
| Uptime | UptimeRobot / BetterStack | Polls `/api/health` every 1 min |
| Core Web Vitals | Vercel Analytics or `web-vitals` package | LCP, INP, CLS in production |
| Real User Monitoring | Vercel Speed Insights | P75/P95 latency by route |

## Integrating Sentry

```bash
npx @sentry/wizard@latest -i nextjs
```

Add `SENTRY_DSN` to GitHub Secrets and `.env.local`.

## Key metrics to monitor

- LCP < 2.5s (catalogue page hero load)
- INP < 200ms (cart interactions, filter changes)
- API error rate from `lib/api.ts` — consider wrapping `apiFetch` with error reporting

## When the Django API is down

`lib/api.ts` already returns empty arrays / graceful fallbacks on API failure (`.catch(() => [])`). Monitor the backend independently via its own `/api/health/` endpoint.
