# Deployment Guide — amez&wear

## Deploy with Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Link and deploy
vercel --prod
# Set NEXT_PUBLIC_API_URL when prompted
```

Or via GitHub integration:
1. Import repo at vercel.com/new
2. Set `NEXT_PUBLIC_API_URL` environment variable to your Django API URL
3. Deploy

## Deploy with Docker (VPS)

```bash
# Build (bakes NEXT_PUBLIC_API_URL into the image at build time)
docker build \
  --build-arg NEXT_PUBLIC_API_URL=https://api.yourdomain.com \
  -t amazwear-frontend:latest .

# Run
docker run -d \
  --name amazwear-frontend \
  -p 3000:3000 \
  -e NODE_ENV=production \
  amazwear-frontend:latest
```

Or from workspace root with Compose:
```bash
docker compose up -d frontend
```

## Production checklist

- [ ] `NEXT_PUBLIC_API_URL` points to the production Django API
- [ ] Django API has `ALLOWED_HOSTS` set to allow the frontend's origin
- [ ] CORS on Django allows the production frontend domain
- [ ] `output: "standalone"` is set in `next.config.ts` (already done)
- [ ] `AuthStore` hardcoded credentials replaced before going public

## Health check

```bash
curl https://yourdomain.com/api/health
# Expected: {"status": "ok"}
```
