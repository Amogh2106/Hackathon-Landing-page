# BLOCK//24

Refactored and upgraded version of the supplied BLOCK//24 hackathon landing page.

## Structure

- `index.html` — semantic page shell and sections
- `css/styles.css` — original visual system/styles preserved from the supplied page
- `css/responsive.css` — intentional tablet/mobile behavior
- `css/animations.css` — motion, reduced-motion and countdown effects
- `js/main.js` — application entry point
- `js/content.js` — dynamic timeline, judges and FAQ rendering
- `js/countdown.js` — event countdown
- `js/navigation.js` — desktop/mobile navigation behavior
- `js/animations.js` — GSAP/ScrollTrigger, parallax and Lenis setup
- `js/data.js` — event data and registration URL

## Run

Use VS Code Live Server (or another local HTTP server). Because the project uses JavaScript modules, opening `index.html` directly with `file://` may be blocked by the browser.

## Customize

Edit `js/data.js` for timeline, judges, FAQ and registration URL. Replace placeholder sponsor/contact/social links in `index.html` with the real event information.
