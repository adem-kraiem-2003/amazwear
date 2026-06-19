# Rollback Procedure — amez&wear

## Vercel rollback

In the Vercel dashboard:
1. **Deployments** tab → find the last known-good deployment
2. Click **⋯ → Promote to Production**

Or via CLI:
```bash
vercel rollback [deployment-url]
```

## Docker rollback (VPS)

```bash
# List previous images
docker images amazwear-frontend

# Stop current
docker stop amazwear-frontend && docker rm amazwear-frontend

# Start previous image
docker run -d \
  --name amazwear-frontend \
  -p 3000:3000 \
  amazwear-frontend:<previous-tag>
```

## Git-level rollback

```bash
# Revert a bad merge on main
git revert -m 1 <merge-commit-sha>
git push origin main
# CI runs; CD re-deploys the reverted build.
```

## Note on NEXT_PUBLIC_API_URL

`NEXT_PUBLIC_*` values are baked into the JavaScript bundle at build time. If you roll back the frontend to a build that pointed to a different API URL, you may need to rebuild with the correct value rather than simply restarting the container.
