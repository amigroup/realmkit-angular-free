# RealmKit for Angular — Free Tier

A minimal, **current** (Angular 22 / keycloak-angular 22 / keycloak-js 26) Keycloak setup for Angular that gets the fundamentals right:

- App-init Keycloak bootstrap with `check-sso` and **PKCE (S256)** — the correct SPA flow, no client secret in the browser.
- `checkLoginIframe: false` — the session iframe breaks under modern third-party-cookie blocking; this template doesn't pretend otherwise.
- A **functional route guard** (`createAuthGuard`) with roles declared as route data and a `/forbidden` page.
- Lazy-loaded feature modules.

## Quick start

You need a running Keycloak with a public client (standard flow + PKCE, your app origin in redirect URIs *and* web origins).

```bash
# 1. point src/environments/environment.ts at your Keycloak (url, realm, clientId)
# 2.
npm ci
npm start        # http://localhost:4200
```

Log in from the home page; `/user` is a guarded route that shows your token's identity and realm roles.

## Want the complete, production-grade kit?

**[RealmKit for Angular](https://realmkit.dev/angular/)** — the full Keycloak SPA kit — adds everything this free tier leaves out:

- **`docker compose up` → working login on first run**: Keycloak 26 with a pre-wired realm auto-imported — clients, roles, demo users, and the API audience mapper everyone forgets. Zero Keycloak setup.
- **The 401 refresh queue interceptor**: one token refresh for N concurrent 401s — no refresh stampedes.
- **Silent SSO** properly configured (`silent-check-sso.html`) — no full-page redirect round trip on every load.
- The full lazy-loaded app shell (admin, logout, unauthorized, forbidden, error pages), multi-env build configs, a scripted PKCE login e2e + CI workflow, and docs that explain *why* each piece is the way it is (architecture, auth flows, realm guide, production checklist, troubleshooting).

Building the API side too? **[RealmKit for Node.js](https://realmkit.dev/nodejs/)** is the matching JWKS-verified Express kit — every RealmKit ships the same realm, so they compose out of the box. Both kits together are discounted.

One-time purchase, use in unlimited projects. Launch pricing.

Build notes: [Keycloak + Angular + Node in 2026 — the complete setup, and the five places everyone gets it wrong](https://realmkit.dev/blog/keycloak-angular-node-2026/).

## License

MIT — see [LICENSE.md](./LICENSE.md).
