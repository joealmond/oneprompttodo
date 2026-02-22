# One Prompt Todo

A full-stack todo app built with **NestJS** (backend) and **Angular** (frontend), styled with **Tailwind CSS**.

![Todo App Screenshot](https://github.com/user-attachments/assets/2e393f3f-6f5f-493b-a5d4-b161edd6db91)

## Tech Stack

| Layer    | Technology                                     |
| -------- | ---------------------------------------------- |
| Backend  | NestJS 11, Node.js 24                          |
| Frontend | Angular 21, Tailwind CSS v4                    |
| Storage  | JSON file mock (swap-ready for any database)   |

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
    └── src/app/todos/
        ├── todo.model.ts
        ├── todo.service.ts
        └── todos.component.ts
```

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
