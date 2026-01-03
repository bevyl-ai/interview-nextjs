# NYC Restaurants Dashboard

A NYC restaurants directory dashboard built with Next.js and TypeScript.

## Getting Started

### Prerequisites
- Node.js 18+ (or Bun)
- pnpm, npm, or bun

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
# or
npm install
# or
pnpm install
```

3. Start the development server:
```bash
bun dev
# or
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## What's Built

This starter includes a working NYC restaurants dashboard with:

- **Data**: 20 hardcoded NYC restaurants with realistic properties (name, cuisine, price range, neighborhood, rating)
- **Search**: Real-time search by restaurant name
- **Filtering**: Dropdown to filter restaurants by cuisine
- **Pagination**: 5 restaurants per page with navigation controls
- **Stats**: Dashboard showing total restaurants, average rating, and current page
- **Loading States**: Simulated API latency (200-500ms) with loading indicators
- **TypeScript**: Fully typed with proper interfaces
- **TanStack Query**: For data fetching and caching
- **Tailwind CSS**: Clean, responsive styling

## Tech Stack

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **TanStack Query** for data fetching
- **Tailwind CSS** for styling
- **React** for UI components

## Project Structure

```
src/
├── api/restaurants.ts    # Mock API with simulated latency
├── data/restaurants.ts   # Hardcoded restaurant data
├── hooks/use-restaurants.ts # TanStack Query hook
├── lib/query-client.ts   # Query client configuration
├── providers/            # React Query provider
├── types/                # TypeScript interfaces
app/
├── page.tsx             # Main dashboard page
├── layout.tsx           # Root layout with providers
└── globals.css          # Tailwind styles
```

## Features Overview

### Search & Filter
- Search input filters restaurants by name (case-insensitive)
- Cuisine dropdown filters by available cuisines
- Both reset pagination to page 1

### Pagination
- 5 restaurants per page
- Previous/Next buttons
- Individual page number buttons
- Disabled states for boundary pages

### Stats Dashboard
- Total restaurants count (respects current filters)
- Average rating across filtered restaurants
- Current page indicator

### Mock API
- Simulated 200-500ms latency
- Filters restaurants by search term and cuisine
- Returns paginated results with metadata

## Available Scripts

```bash
bun dev        # Start development server
bun build      # Build for production
bun start      # Start production server
bun lint       # Run ESLint
```

