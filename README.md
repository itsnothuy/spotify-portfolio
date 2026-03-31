# Spotify Portfolio Template 🪴

> The template behind [luannguyen.net](https://www.luannguyen.net)

<img src="public/portfolio_highres.png" width="700" alt="Portfolio template preview">

A Spotify-inspired portfolio template built with Next.js 15, Tailwind CSS, and TypeScript.

## Run locally

```bash
git clone https://github.com/LuaanNguyen/spotify-portfolio.git
cd spotify-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

Update your content in:

## Docker

```bash
docker build -t spotify-portfolio .
docker run --rm -p 3000:3000 spotify-portfolio
```

For hot reload:

```bash
docker compose -f docker-compose.dev.yml up
```
