# Sameer & Sabina Banu — Wedding Invitation

A static, mobile-first wedding invitation website inspired by the provided reference:
https://maaz787.github.io/maaz/

## Files
- `index.html` — page structure/content
- `style.css` — responsive styling, animations, colors
- `script.js` — preloader, scroll reveal, countdown, RSVP interaction
- `.nojekyll` — keeps GitHub Pages from applying Jekyll processing
- `.github/workflows/deploy.yml` — optional automatic GitHub Pages deployment

## Deploy
1. Create a GitHub repository.
2. Upload all files/folders from this ZIP to the repository root.
3. For the simplest setup, open **Settings → Pages** and select **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
4. Or use the included GitHub Actions workflow and select **GitHub Actions** as the Pages source.

The website uses Google Fonts from the Google Fonts CDN. Everything else is self-contained.

## Optional music
Put a file named `music.mp3` in the root and uncomment the `<source>` line in `index.html`.

## Background music
The music button is configured for the supplied YouTube video (video ID: BMn17DrSFuc). The visitor may need to tap the music button because browsers commonly block autoplay with sound.
