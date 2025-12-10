# BrightBanker Server (Next.js + MongoDB)

Minimal App Router API with JWT auth + Mongo models for Families, Kids, Transactions.

## Setup
1) Copy `.env.example` to `.env.local` and fill values.
2) `pnpm install` (or `npm install`)
3) `pnpm dev` (port 3000 by default)

## Endpoints (prefix /api)
- POST `/auth/register` { email, password, familyName? }
- POST `/auth/login` { email, password }
- GET  `/me`  (returns user + family)
- POST `/kid` { name, age }
- GET  `/kid`  (list kids)
- GET  `/family` (basic family info, balances by kid)
- POST `/transactions/deposit` { kidId, save, spend, share }
- POST `/transactions/spend`  { kidId, jar, amount, note? }
- GET  `/transactions?kidId=...`

Bearer JWT required for all except /auth/*.
