# Project Rules — shivanshsagar.github.io

## Git Workflow (MANDATORY — Never skip)

### Branch Strategy
- `dev` = local development branch (default for all work)
- `main` = production branch (live site at shivanshsagar.github.io)

### Workflow for Every Change
1. Make all changes on the `dev` branch
2. After changes are ready, tell the user: **"Ready to test — run `npm run dev`"**
3. Wait for user to test locally and confirm everything looks good
4. Ask the user: **"All good — should I merge `dev` → `main` and deploy?"**
5. Only after explicit user approval → merge `dev` into `main` → push → CI deploys
6. **NEVER push to `main` without explicit user approval**
7. **NEVER auto-merge dev → main**

### Push Commands (always use SSH)
```bash
# Dev work
git checkout dev
# ... make changes ...
GIT_SSH_COMMAND="ssh -i ~/.ssh/id_ed25519_github" git push origin dev

# Production deploy (only with user approval)
git checkout main
git merge dev
GIT_SSH_COMMAND="ssh -i ~/.ssh/id_ed25519_github" git push origin main
git checkout dev
```

## Tech Stack
- React + Vite + TypeScript + Tailwind CSS + Framer Motion
- GitHub Pages via GitHub Actions (`actions/deploy-pages`)
- Node.js 24 in CI

## Repo
- GitHub: https://github.com/shivanshsagar/shivanshsagar.github.io
- Live: https://shivanshsagar.github.io
