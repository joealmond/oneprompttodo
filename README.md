# One Prompt Todo

A full-stack todo app and **portfolio blog** built with **NestJS** (backend), **Angular** (frontend), and **Tailwind CSS**. The blog is **server-side generated (SSG)** — all pages are pre-rendered at build time for blazing-fast loading.

![Portfolio Home](https://github.com/user-attachments/assets/b305279d-4957-46b8-932d-1a849b223a97)

## Tech Stack

| Layer     | Technology                                     |
| --------- | ---------------------------------------------- |
| Backend   | NestJS 11, Node.js 24                          |
| Frontend  | Angular 21, Tailwind CSS v4, Angular SSR/SSG   |
| Storage   | JSON file mock (swap-ready for any database)   |

## Project Structure

```
oneprompttodo/
├── backend/           # NestJS API (port 3000)
│   ├── data/
│   │   └── todos.json          # Mock data store
│   └── src/
│       └── todos/
│           ├── todo.interface.ts
│           ├── todo.repository.ts      # Abstract repository interface
│           ├── json-todo.repository.ts # JSON-file implementation
│           ├── todos.service.ts
│           └── todos.controller.ts
└── frontend/          # Angular app (port 4200)
    └── src/app/
        ├── layout/             # Responsive nav (desktop + mobile)
        ├── home/               # Portfolio landing page
        ├── blog/               # Blog listing + individual posts (SSG)
        ├── projects/           # App showcase
        └── todos/              # Todo app (client-rendered)
```

## Pages

| Route         | Description                       | Render Mode |
| ------------- | --------------------------------- | ----------- |
| `/`           | Portfolio home (hero, about, blog teasers) | Prerender (SSG) |
| `/blog`       | Blog post listing                 | Prerender (SSG) |
| `/blog/:slug` | Individual blog posts             | Prerender (SSG) |
| `/projects`   | App showcase                      | Prerender (SSG) |
| `/todo`       | Todo app (needs backend)          | Client-side |

## Prerequisites

- **Node.js** 18+
- **npm** 9+

## Installation

```bash
# Install all dependencies (backend + frontend)
npm run install:all
```

## Start (single command)

```bash
# Starts both backend and frontend concurrently
npm start
```

- **Backend API**: http://localhost:3000/api/todos
- **Frontend**: http://localhost:4200

To start individually:

```bash
npm run start:backend   # NestJS dev server (watch mode)
npm run start:frontend  # Angular dev server
```

## API Endpoints

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| GET    | /api/todos         | List all todos    |
| GET    | /api/todos/:id     | Get a single todo |
| POST   | /api/todos         | Create a todo     |
| PATCH  | /api/todos/:id     | Update a todo     |
| DELETE | /api/todos/:id     | Delete a todo     |

### Example — Create a todo

```bash
curl -X POST http://localhost:3000/api/todos \
  -H 'Content-Type: application/json' \
  -d '{"title": "Walk the dog"}'
```

## Connecting a Real Database

The backend uses an abstract `TodoRepository` class. To connect any database:

1. Create a new class that extends `TodoRepository` (e.g., `MongoTodoRepository`)
2. In `backend/src/todos/todos.module.ts`, swap the provider:

```ts
{ provide: TodoRepository, useClass: MongoTodoRepository }
```

No other code changes are needed — the service and controller remain untouched.

## Build for Production

```bash
npm run build
```

The frontend build produces prerendered static HTML in `frontend/dist/frontend/browser/`.

## Hosting

### GitHub Pages (Blog / Portfolio only)

The SSG pages (home, blog, projects) can be deployed to GitHub Pages as static files.
The todo app route will still render client-side but needs a backend API to function.

#### Option A: GitHub Actions (recommended)

Create `.github/workflows/deploy-pages.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci --prefix frontend
      - run: npx ng build --project frontend
        working-directory: frontend
      - uses: actions/upload-pages-artifact@v3
        with:
          path: frontend/dist/frontend/browser
      - uses: actions/deploy-pages@v4
```

Then in your repository **Settings → Pages**, set the source to **GitHub Actions**.

#### Option B: Manual deploy

```bash
cd frontend
npx ng build
# Copy dist/frontend/browser/ contents to your hosting provider
```

### Full App (Blog + Todo with Backend)

To run the complete app (including the todo functionality), you need a Node.js server:

1. **Build** both frontend and backend: `npm run build`
2. **Deploy the backend** to any Node.js host (Railway, Render, Fly.io, etc.)
3. **Deploy the frontend** (`frontend/dist/frontend/browser/`) to any static host
4. **Update** `frontend/src/app/todos/todo.service.ts` API URL to point to your deployed backend
