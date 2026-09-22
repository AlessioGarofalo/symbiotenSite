# Symbioten

A dark, minimal company website about human–machine symbiosis and expanding human capability. Includes the company vision, expandable sections for intelligence, agentic systems, robotics and education, and a Sentinel product feature linking to https://sentinel.info.

## Files

- `dist/index.html` — page structure and copy
- `dist/styles.css` — responsive styles and motion
- `dist/site.js` — mobile navigation and footer year
- `dist/symbiosis.webp` — original generated hero artwork

## Run locally

No build step or package installation is required. From the repository root:

```sh
python3 -m http.server 8080 --directory dist
```

Open http://localhost:8080.

## Deploy

Publish the `dist` folder to any static web host. Set the publish/output directory to `dist`; no build command is needed. This repository does not automatically enable GitHub Pages or deploy on push.

## Notes

- Fonts load from Google Fonts, with system fallbacks.
- Robotics and education are presented as future directions; no enrolment or contact backend is included.
- Supports reduced motion, keyboard navigation and mobile layouts.
- The original private prototype remains hosted separately. This repository is a source export; changes here do not automatically update that preview.
