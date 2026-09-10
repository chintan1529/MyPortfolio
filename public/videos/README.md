# Hero Video Assets Directory

Drop your cinematic video assets here:

- `hero.mp4` — Desktop version (H.264 / WebM, 1080p–1440p, optimized bitrate, muted loop)
- `hero-mobile.mp4` — Mobile-optimized version (smaller resolution/bitrate)
- `hero-poster.webp` — Poster fallback image

### Behavior
- If `hero.mp4` is present, the hero will automatically play it in a continuous loop with dark overlay.
- If `hero.mp4` is absent or encounters a loading error, the hero seamlessly falls back to the hardware-accelerated Three.js `NeuralCanvas` computational particle field.
