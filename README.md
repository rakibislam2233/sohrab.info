# Sohrab Hossan — Personal Portfolio

This repository is a Next.js 16 App Router TypeScript project for Sohrab Hossan — Journalist, Traveller, and Scout. It uses Tailwind CSS v4, Prisma 7, PostgreSQL, NextAuth v5, Cloudinary for image uploads, and Tiptap for rich text editing.

## Quick start

1. Install dependencies (pnpm)

```bash
pnpm install
```

2. Create `.env` from `.env.example` and set your values

3. Setup database and run migrations

```bash
pnpm prisma:migrate
pnpm prisma:generate
pnpm run seed
```

4. Run development server

```bash
pnpm dev
```

## Project structure

See the /app routes and /components for layout and UI.

## Notes

- Admin login seeded as `admin@sohrab.info` with password `ChangeMe123!` (change immediately)
- This scaffold contains components and pages to match the design reference. Continue implementing admin CRUD components and Tiptap editor integration as needed.
