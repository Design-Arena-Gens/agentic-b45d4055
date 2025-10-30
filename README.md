## Ignition Motors · Premium Carsales Marketplace

Ignition Motors delivers a concierge carsales experience with curated inventory, advanced filtering, ownership journey highlights, and a conversion-focused lead form — built with modern Next.js 16, TypeScript, and Tailwind CSS v4.

### ✨ Features
- Hero landing section with live financing spotlight and performance stats
- Dynamic inventory filters (brand, body style, fuel type, budget, sorting, search)
- Rich vehicle cards with pricing, mileage, highlighted features, and call-to-action
- Experience highlights, client testimonials, and ownership timeline overview
- Concierge lead form with trade-in and financing intent capture

### 🧱 Tech Stack
- [Next.js 16 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) iconography

### 🚀 Getting Started

Install dependencies (already done if using the provided workspace):
```bash
npm install
```

Run the development server:
```bash
npm run dev
```
- App: http://localhost:3000

Lint the project:
```bash
npm run lint
```

Create an optimized production build:
```bash
npm run build
```

### 🌍 Deploying to Vercel
Use the preconfigured command (requires `VERCEL_TOKEN` to be set):
```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-b45d4055
```

After deployment completes, verify the production site:
```bash
curl https://agentic-b45d4055.vercel.app
```

### 📁 Project Structure
- `src/app/page.tsx` — marketing layout, filters, inventory grid, and lead form
- `src/app/layout.tsx` — global metadata and shared layout shell
- `src/app/globals.css` — Tailwind layers, utility helpers, and visual theme
- `next.config.ts` — remote image configuration for curated photography
