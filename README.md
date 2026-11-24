# Custom Homepage

A full-stack bookmark manager for creating a personalized browser start page.

**Live applications:** [Frontend](https://bookmarks.ezwezz.com) · [Backend API](https://api1.ezwezz.com)

## Overview

Custom Homepage lets users sign in and organize links across four groups. Users can add, edit, delete, reorder, and search their bookmarks through a responsive Next.js interface backed by an Express and PostgreSQL API.

## Features

- Email and password authentication with Better Auth
- User-scoped bookmark storage
- Four configurable link groups
- Add, edit, delete, search, and reorder bookmarks
- Data loading with React Query caching and local-storage placeholders
- Responsive desktop and mobile navigation
- Toast notifications and form validation
- PostgreSQL schema migrations with Drizzle ORM
- Containerized frontend and backend deployments
- Automated integration and browser tests in GitHub Actions

## Tech Stack

### Frontend

- Next.js / React
- TypeScript
- Tailwind CSS
- TanStack React Query
- React Hook Form
- Better Auth client
- Playwright

### Backend

- Node.js
- Express
- TypeScript
- PostgreSQL
- Drizzle ORM
- Better Auth
- Zod
- Vitest and Supertest

### Infrastructure

- Docker and Docker Compose
- GitHub Actions
- GitHub Container Registry
- Automated production deployment

The frontend and backend are maintained as npm workspaces. Bookmark operations use REST endpoints, while authentication is handled by Better Auth on the backend.

## Enviroment Variables

### Backend Variables

DATABASE_URL=postgresql://user:password@localhost:5432/bookmarks_db
PORT=8080
BETTER_AUTH_SECRET=replace-with-a-long-random-secret
BETTER_AUTH_URL=http://localhost:8080
FRONTEND_URL=http://localhost:3000

### Frontend Variables

NEXT_PUBLIC_BACKEND_URL=http://localhost:8080

## API

`POST` | `/auth/sign-up/email` | Create an account |
`POST` | `/auth/sign-in/email` | Sign in |
`GET` | `/links/:userId` | Retrieve a user's bookmarks |
`POST` | `/links` | Create a bookmark |
`PUT` | `/links` | Update a bookmark or its display order |
`DELETE` | `/links/:id` | Delete a bookmark |

## Next Improvements

- Add link metadata previews and favicon fetching
- Introduce account settings and password recovery
