---
name: security-review
description: Run a comprehensive security review of the current code changes or specified file/module. Covers secrets, input validation, auth/authz, XSS, CSRF, rate limiting, data exposure, and dependency vulnerabilities.
allowed_tools: ["Bash", "Read", "Grep", "Glob"]
---

# /security-review

Perform a thorough security analysis of the selected code, current branch changes, or target file/module.

## Steps

1. Identify the scope: current diff (`git diff`), a specific file, or a module path passed as argument.
2. Run `npm audit` (or `npx prisma migrate status`) where applicable to surface dependency issues.
3. Apply every check in the Security Checklist below.
4. Output findings in the structured format at the bottom.

## Security Checklist

### Secrets & Configuration
- [ ] No hardcoded API keys, tokens, passwords, or private keys in source
- [ ] All secrets loaded from environment variables
- [ ] `.env` / `.env.local` excluded from version control
- [ ] Required env vars validated at startup (fail-fast)

### Input Validation & Injection
- [ ] All user inputs validated and sanitized (use Zod or class-validator)
- [ ] Parameterized queries for every database operation — no string interpolation
- [ ] HTML output escaped or sanitized (XSS prevention)
- [ ] File path inputs sanitized (path traversal prevention)
- [ ] Uploaded files validated for size, MIME type, and extension

### Authentication & Authorization
- [ ] Auth checks enforced server-side — never trust client-supplied user IDs or roles
- [ ] Tokens stored in `httpOnly` cookies, never `localStorage`
- [ ] Sensitive operations protected by authz checks, not just authn
- [ ] CSRF protection enabled for state-changing endpoints (`@UseGuards` / SameSite cookies)

### Data Exposure
- [ ] Error responses scrubbed of stack traces, internal paths, and sensitive data
- [ ] Logs do not contain PII, tokens, or passwords
- [ ] Sensitive fields excluded from API responses (no over-fetching)
- [ ] Appropriate HTTP security headers configured

### Dependencies
- [ ] No known vulnerable packages (`npm audit`)
- [ ] Lock files committed (`package-lock.json`)
- [ ] No unused dependencies that increase attack surface

### Infrastructure
- [ ] Rate limiting on all public endpoints (backend: 3-tier throttler already in place)
- [ ] HTTPS enforced; no HTTP fallback in production
- [ ] CORS configured to allow only `ALLOWED_ORIGINS` from `.env`

## Output Format

```
## Security Review Findings

**[CRITICAL|HIGH|MEDIUM|LOW|INFO]** — [category]
Location: [file:line]
Issue: [what is wrong and why it is dangerous]
Fix: [concrete remediation]

---

## Summary
- Critical: N
- High: N
- Medium: N
- Low: N
- Safe to ship: yes / no / conditional
```

## Response Protocol

If a **CRITICAL** finding is discovered:
1. Stop and report immediately — do not continue the review.
2. Do not ship until the issue is fixed.
3. Rotate any exposed secrets.
4. Scan the rest of the codebase for the same pattern.
