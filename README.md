# Overview

This Bun.js boilerplate provides a foundation for building robust web applications with Bun and Elysia. It includes essential components like routing, middleware, configuration, database integration, and more.

## Features

- **Elysia Framework**: Fast and lightweight web framework designed for Bun.
- **Database Integration**: Pre-configured for PostgreSQL.
- **Environment Configuration**: Centralized environment variable management.
- **Authentication & Authorization**: Basic JWT-based authentication setup.
- **Testing**: Unit and integration tests included.
- **Docker Support**: Ready-to-use Dockerfile and docker-compose setup.

## Prerequisites

- **Bun.js**: v1.0.0 or Later
- **Docker**: For containerized development and deployment
- **Docker Compose**: For running the application with Docker
- **PostgreSQL**: If using the default database setup
- **Prisma**: For database schema management

# Getting Started

## First Installation

### Install App with Docker Compose
To get started with this boilerplate, follow the steps below:
```bash
docker compose up
```

### Run Migration && Seed
Run migration to create the database schema:
```bash
docker exec -it web_service bash
bun run db:migrate
bun run db:seed
```

## Stop the Application
To stop the application, run the following command:
```bash
docker compose down
```

## Stop and Remove Volumes
To stop the application and remove the volumes, run the following command:
```bash
docker compose down -v
```

# Project Structure
Here's the recommended file structure for Elysia if you don't strictly prefer a specific convention:
```
prisma/             # Prisma configuration and schema files
src/                # Development files for the Elysia server
  ├── controllers/  # Instances encapsulating multiple endpoints
  ├── libs/         # Utility functions
  ├── models/       # Data Type Objects (DTOs) for Elysia instance
  ├── routes/       # Route configurations for the Elysia server
  ├── types/        # Shared TypeScript types
  ├── index.ts      # Entry point for the Elysia server, ideal for setting global plugins
  └── setup.ts      # Composed of various plugins to be used as a Service Locator
test/               # Test files for the Elysia server
```
