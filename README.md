This is a template project I set up from scratch to make future development quicker.

Features:
- Frontend - React-style frontend pages in NextJs framework
- Backend - Typescript backend files which can be deployed as serverless functions
- Database - PostgreSQL interfaced with Prisma
- CICD - CI pipeline runs ESlint and Prettier on whole repo. AUTomatic deployment to Vercel on merge/push to master.

## Stack

| Tech | Use |
|------------------|------------------|
| NextJs | Web Framework  |
| NextJs - API routes | Backend API routing + serverless functions |
| Typescript | Backend |
| Prisma | ORM |
| PostgreSQL | Relational Database |
| ESLint | Linting |
| Prettier | Formatting |
| Github Actions | CI Pipeline |

## Deployment

Not yet deployed as this is a template. 

## To Clone and Run

1. First clone the repo following Github's instructions.
2. Then navigate to the root of the repo and run `npm i` to install dependencies on your machine.
3. Then run the development server with `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the frontend.  
Backend routes can be accessed by appending /api (e.g. [http://localhost:3000/api/hello](http://localhost:3000/api/hello)).
