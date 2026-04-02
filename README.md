# Personal Portfolio 🪴

> Demo: [huytrn.vercel.app](https://huytrn.vercel.app)

A modern, responsive portfolio website featuring a design inspired by Spotify.

This website is powered by [Next.js 15](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Aceternity UI](https://ui.aceternity.com/).

## Credits

This project is based on the **Spotify-inspired portfolio template** originally created by [Luan Nguyen](https://github.com/LuaanNguyen).  
Original repository: [github.com/LuaanNguyen/portfolio](https://github.com/LuaanNguyen/portfolio)  
Licensed under the [MIT License](LICENSE).

## Run locally

```bash
git clone https://github.com/itsnothuy/spotify-portfolio.git
cd spotify-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

Update your content in:

| File | Purpose |
|------|--------|
| `src/config/site.ts` | Name, bio, social links, SEO, widgets |
| `data/experience.ts` | Work experience entries |
| `data/projects.ts` | Project cards |
| `src/content/blog/` | Markdown blog posts |
| `public/` | Images and assets |

## Docker

```bash
docker build -t spotify-portfolio .
docker run --rm -p 3000:3000 spotify-portfolio
```

For hot reload:

```bash
docker compose -f docker-compose.dev.yml up
```

---

Made with ❤️ by [Huy Tran](https://github.com/itsnothuy) • Template by [Luan Nguyen](https://github.com/LuaanNguyen)
