# Farmers website (Pixel Studio)

Static site: no build step and no tracking. Upload the whole folder to any static host (the same host as santaslegacy.ro, Netlify, Cloudflare Pages, GitHub Pages).

- `index.html` is the game page (hero, trailer, loop, features, jobs, fair, catalogue, screenshots, FAQ, studio)
- `press.html` is the press kit: fact sheet, description, trailer, PNG screenshots, logos and a ZIP
- `privacy.html` says no cookies and no analytics

## Before going live
1. **Steam page:** replace every `data-steam` link (`href="#studio"`, "Coming to Steam") with the store URL and change the label to "Wishlist on Steam". There are 3 in `index.html`.
2. **Domain:** set `og:image` to an absolute URL (e.g. `https://farmers.example/assets/img/og-image.jpg`) so link previews work.
3. The contact address is the one from santaslegacy.ro; change it in all three pages if Farmers gets its own.

## Assets
- `assets/img/screens/`: 17 in-game 1080p shots (JPG), taken from the v2 trailer's 1080p captures (`Captures/Trailer/*/final1.mp4`); `thumbs/` holds the 640px versions
- `press/`: the same shots as lossless 1920×1080 PNG, plus `farmers-presskit.zip`
- `assets/img/brand/`: logo (transparent), wordmark, 1920×1080 logo card (all rendered from the trailer's Remotion `Logo`), icon and favicon
- `assets/img/catalogue/`: all 48 in-game catalogue renders (transparent PNG); `items/` holds the cropped ones the page uses
- `assets/video/`: the trailer (v2, re-encoded to 1080p30, 27 MB) and the 15 s silent hero loop
- `assets/fonts/`: Nunito Black/Bold, the game's font
