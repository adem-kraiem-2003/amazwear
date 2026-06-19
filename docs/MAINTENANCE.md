# Maintenance Guide — amez&wear

## Dependency updates

```bash
npm outdated
npm update
npm audit fix

# After updating: verify nothing broke
npm run typecheck && npm run lint && npm run build
```

## Adding a new page

1. Create `app/<route>/page.tsx`
2. Add both `Mobile<Page>` and `Desktop<Page>` components under `components/<feature>/`
3. Wrap heavy content in `<DelayedRender fallback={<XxxSkeleton />}>`
4. Import page-specific CSS at the top of the page file (not in root layout)

## Adding a new API call

1. Add the function to `lib/api.ts` using `apiFetch<T>()`
2. Add the TypeScript type to `lib/types.ts`
3. Use `next: { revalidate: N }` for ISR; add a `.catch(() => fallback)` for resilience

## Running hooks manually

```bash
# Lint all staged files
npx lint-staged

# Type-check
npm run typecheck

# Validate a commit message
echo "feat: my feature" | npx commitlint
```

## Keeping the knowledge graph current

After editing TypeScript/component files:
```bash
cd ..
graphify update .
```
