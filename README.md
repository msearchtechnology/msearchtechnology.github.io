# iFriend — social app starter

A responsive black/white/grey social app prototype with:
- Welcome screen → login/create account
- Text posts, photo posts, and article-style posts with titles
- Like, comment, and copy/share-text controls
- Chat interface, discover-by-username screen, profile screen
- PWA manifest, service worker, and install prompt
- Optional GunDB connection field

## Run it

PWA/service workers generally require `localhost` or HTTPS. Do not open `index.html` directly with `file://`.

Quick local server (Python installed):
```bash
cd ifriend_app
python -m http.server 8080
```
Then open `http://localhost:8080` in a browser.

To install on a phone, deploy the folder to an HTTPS host you control, open it in the browser, then use the install prompt or browser menu → **Add to Home screen**.

## Important security and data limitations

This is a **front-end prototype**, not a production-ready secure social network:
- Demo accounts and passwords are stored in browser `localStorage` as plain text. Do not use a real password.
- Local mode is browser/device-local. It does not sync to other devices.
- The GunDB wiring is a starter integration, not a complete authenticated or encrypted architecture. Set a Gun peer URL you control in Profile. All devices need compatible peer configuration for syncing.
- A peer/relay can receive and replicate data. GunDB/P2P does **not** automatically mean data never touches a server, nor does it guarantee end-to-end confidentiality.
- Posts, images, and chat messages are **not end-to-end encrypted** in this demo. Never use sensitive/private content.
- Photo data is stored in local browser storage and is size-limited. Large media needs a proper encrypted blob/storage strategy.
- The demo chat is a basic UI and local message history. It is not a verified private messaging implementation.

## Before real-world launch

Use a reviewed authentication flow (never store raw passwords), SEA/GunDB identity properly, end-to-end encryption with verified keys, strict access controls, abuse/reporting tools, rate limits, safer media storage, dependency pinning, CSP/security headers, backups and a threat-model/security review. Test peer authorization and data visibility with separate accounts/devices before inviting users.

## Files

- `index.html` — app structure
- `styles.css` — monochrome responsive design
- `app.js` — UI and prototype data logic
- `manifest.json`, `sw.js`, `icon.svg` — PWA support
