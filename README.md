# Walter Timilay Bananga Portfolio

## Run locally

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Backend:

```bash
cd backend
npm install
node server.js
```

## Deploy

- Frontend: Vercel using the included `frontend/vercel.json`
- Backend: Render using `backend/Render.yaml`
- After deploying the backend, set this Vercel environment variable:

  `VITE_API_URL=https://your-render-backend-url.onrender.com/api`
