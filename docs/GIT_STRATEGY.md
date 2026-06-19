# Git Strategy — amez&wear

## Branch Model

| Branch | Purpose | Deploy target |
|--------|---------|--------------|
| `main` | Production-ready code | Production |
| `develop` | Integration branch | Staging |
| `feature/<name>` | New features | — |
| `hotfix/<name>` | Urgent production fixes | — |

## Rules

- **No direct push** to `main` or `develop`. Always via Pull Request.
- **Squash merge** into `develop`; **merge commit** into `main`.
- Every PR must pass the CI pipeline (`ci.yml`) before merging.
- When adding UI: both `Mobile*` and `Desktop*` variants required.

## Commit format — Conventional Commits

```
<type>(<scope>): <description>
```

Types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`, `ci`

Examples:
```
feat(catalogue): add color filter to desktop catalogue
fix(cart): fix quantity not updating when same item re-added
chore: upgrade Next.js to 16.2.9
```

## Initial setup

```bash
# First push (repo currently has 0 commits)
git add .
git commit -m "chore: initial CI/CD setup"
git push -u origin main

# Create develop
git checkout -b develop
git push -u origin develop
```

## GitHub Branch Protection (UI steps)

Do this for both `main` and `develop`:

1. **Repository → Settings → Branches → Add branch protection rule**
2. Pattern: `main` (repeat for `develop`)
3. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require approvals: **1**
   - ✅ Require status checks to pass — select `Typecheck · Lint · Build`
   - ✅ Require branches to be up to date before merging
   - ✅ Do not allow bypassing the above settings
