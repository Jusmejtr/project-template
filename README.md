# Next.js + tRPC + Prisma Template

This is a modern web application template built with:
- **Next.js 15** - React framework with App Router
- **tRPC** - End-to-end typesafe APIs
- **Prisma** - Database ORM with PostgreSQL
- **TypeScript** - Static type checking
- **Docker** - Development environment setup

## Quick Start

### 1. Clone and Install Dependencies

```bash
git clone <your-repo-url>
cd <your-project-name>
npm install
```

### 2. Setup Environment Variables

```bash
cp .env.example .env
```

Edit `.env` with your database credentials.

### 3. Start Database (Docker)

```bash
docker-compose up -d
```

### 4. Setup Database

```bash
# Generate Prisma client
npx prisma generate

# Run your first migration (after adding models)
npx prisma migrate dev --name init
```

### 5. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## Database Schema

The Prisma schema is currently empty. Add your models in `prisma/schema.prisma` and run:

```bash
npx prisma migrate dev --name your_migration_name
```
