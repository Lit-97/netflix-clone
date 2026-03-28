# Netflix Clone — Next.js 14 + Redux + SASS

A faithful CRA → Next.js conversion of the Lit-97 Netflix Clone, using the **App Router**, **Redux Thunk**, **Swiper**, **Bootstrap 5**, and the original **SASS** styles completely unchanged.

---

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Add your TMDB API key
```bash
cp .env.local.example .env.local
```
Edit `.env.local`:
```
NEXT_PUBLIC_TMDB_API_KEY=your_key_here
```
Get a free key at https://www.themoviedb.org/settings/api

### 3. Run locally
```bash
npm run dev
```
Open http://localhost:3000

---

## Deploy to Vercel
1. Push to GitHub
2. Import repo at https://vercel.com/new
3. Add environment variable: `NEXT_PUBLIC_TMDB_API_KEY`
4. Deploy

---

## Routes

| Path | Page |
|------|------|
| `/` | Home — hero slider + trending + popular + now playing + top rated |
| `/movies` | Popular movies |
| `/movies/now_playing` | Now playing movies |
| `/movies/top_rated` | Top rated movies |
| `/movies/upcoming` | Upcoming movies |
| `/series` | Popular series |
| `/series/airing_today` | Airing today |
| `/series/top_rated` | Top rated series |
| `/series/on_tv` | On TV |
| `/movie/[id]` | Movie detail page |
| `/serie/[id]` | Series detail page |
| `/serie/[id]/season/[number]` | Season detail + episodes |
| `/people` | Popular people |
| `/person/[id]` | Person detail |
| `/search` | Search (multi: movies, TV, people) |
| `/watch/movie/[id]` | Watch movie (embedded player) |
| `/watch/serie/[id]/season/[s]/episode/[ep]` | Watch episode |
