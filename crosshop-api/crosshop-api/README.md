# CrossHop API (Backend)
Minimal Express server.

## Scripts
- `npm run dev` - run in watch mode
- `npm start` - start server

The server exposes:
- `GET /health` → `{ ok: true, service: 'crosshop-api' }`
- `GET /api/example` → `{ message: 'CrossHop API is alive' }`