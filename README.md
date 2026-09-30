# AI-driven Hotel Management

Current course checkpoint: Session 7.
Next checkpoint: Session 8.

## Backend

1. Open a terminal in `Back-end`.
2. Run `npm ci`.
3. If `.env` does not exist, create it using `.env.example`.
4. Set `MONGODB_URL` to your MongoDB connection string.
5. Run `npm run dev`.

The backend listens on port 8000 after MongoDB connects.
Startup exits with an error if database configuration or connection fails.

## Frontend

1. Open another terminal in `Front-end/aidf-fe`.
2. Run `npm ci`.
3. Run `npm run dev`.
4. Open the URL printed by Vite.

Validation commands: `npm run lint` and `npm run build`.