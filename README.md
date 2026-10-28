# Animal Sounds / Les sons des animaux

A small kids' web app: tap a cartoon animal, hear its sound. English and French, plus a "guess the sound" game.
Everything is self-contained (no internet needed, no external libraries, no tracking).

## Run it

Deployed as a Portainer stack from this repo. The container has no published port: it joins
Nginx Proxy Manager's `reverse-proxy_default` network and NPM forwards the HTTPS hostname to `http://animal-sounds:80`.

Standalone test with a port instead:

```bash
docker build -t animal-sounds .
docker run -d --name animal-sounds -p 8080:80 --restart unless-stopped animal-sounds
```

## What's inside

| File | Purpose |
|------|---------|
| `public/animals.js` | The 10 animals: EN/FR names, sound words, cartoon drawn as SVG |
| `public/sounds.js` | Sound engine: sounds are synthesized in the browser; real `.mp3` files override them |
| `public/app.js` | Screens, language switch, quiz, optional spoken names |
| `public/sw.js`, `manifest.json` | Offline cache and "install as app" support |
| `Dockerfile`, `nginx.conf` | Tiny nginx:alpine image serving the static files |

## Features

- EN / FR toggle (remembers the choice; defaults to the browser language)
- Animal screen with big picture, name, sound word ("Meow!" / "Miaou!"), listen again, previous/next, arrow keys
- "Guess the sound" quiz with stars
- Optional "say the names" using the device's built-in voice (quality depends on the device's installed voices)

## Using real recordings

Put `dog.mp3`, `cow.mp3`, etc. in `public/sounds/` (see the README there) and rebuild, or mount the folder as a volume
(commented out in `docker-compose.yml`). Missing files fall back to the built-in sounds.

## Adding an animal

1. Add an entry to `public/animals.js` (id, names, colour, SVG).
2. Add a recipe with the same id in `public/sounds.js`, or just drop `<id>.mp3` in `public/sounds/`.

## Installing it like an app

On a phone or tablet, open the page and use "Add to Home Screen" / "Install app". Full offline caching and install
need HTTPS (or `localhost`); plain `http://192.168.x.x` still works as a normal web page, but the offline cache won't
register. Put it behind an HTTPS reverse proxy or a Cloudflare Tunnel if you want that.
