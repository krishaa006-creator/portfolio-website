# Portfolio Website - Krishaa Ravishankar

## Overview
A UX/Service Designer portfolio website for Krishaa Ravishankar built with React + CRACO + Tailwind CSS (frontend) and a FastAPI + MongoDB backend.

## Architecture

### Frontend (`/frontend`)
- **Framework**: React 19 with Create React App + CRACO
- **Styling**: Tailwind CSS v3 + shadcn/ui components
- **Routing**: React Router DOM v7
- **Data**: All content is in `frontend/src/mock.js` (frontend-only)
- **Port**: 5000

### Backend (`/backend`)
- **Framework**: FastAPI
- **Database**: MongoDB (via Motor async driver)
- **Port**: 8000
- **Entry point**: `backend/server.py`

## Running the App

### Frontend (Main Workflow)
The workflow `Start application` runs:
```
cd frontend && PORT=5000 HOST=0.0.0.0 BROWSER=none node /home/runner/workspace/node_modules/@craco/craco/dist/scripts/start.js
```

**Important**: Node packages are installed at the root level (`/node_modules`), not inside `/frontend/node_modules`. The CRACO binary is used from root but run with `cwd` set to `/frontend` so it finds `frontend/package.json` and `frontend/src/`.

### Backend (optional, not running by default)
```
cd backend && uvicorn server:app --host localhost --port 8000
```
Requires `MONGO_URL` and `DB_NAME` environment variables set.

## Key Files
- `frontend/src/mock.js` - All portfolio data (personal info, projects, experience, etc.)
- `frontend/src/pages/Portfolio.jsx` - Main portfolio page
- `frontend/craco.config.js` - CRACO config with devServer on port 5000, host 0.0.0.0, allowedHosts: all
- `backend/server.py` - FastAPI backend with status check endpoints
- `backend/requirements.txt` - Python dependencies

## Environment Variables
- `MONGO_URL` - MongoDB connection string (default: mongodb://localhost:27017)
- `DB_NAME` - Database name (default: portfolio_db)
- `CORS_ORIGINS` - CORS origins (default: *)

## Deployment
- Target: Static site
- Build: `cd frontend && ... craco build`
- Public dir: `frontend/build`
