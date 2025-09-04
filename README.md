# Adepoju Portfolio

A modern, full-stack portfolio website built with React, Express.js, and TypeScript.

## 🚀 Deployment on Vercel

This project is configured for deployment on Vercel with the following setup:

- **Frontend**: React + Vite (static build)
- **Backend**: Express.js API (serverless functions)
- **Database**: Neon PostgreSQL with Drizzle ORM


## 🏗️ Project Structure

```
├── client/                 # React frontend
│   ├── src/               # Source code
│   ├── package.json       # Frontend dependencies
│   └── vite.config.ts     # Vite configuration
├── server/                 # Express.js backend
│   ├── index.ts           # Server entry point
│   └── package.json       # Backend dependencies
├── shared/                 # Shared utilities
├── api/                    # Vercel API routes
├── vercel.json            # Vercel configuration
└── package.json           # Root package.json
```


## 📝 Notes

- The frontend is built as a static site and served by Vercel's CDN
- The backend runs as serverless functions in the `/api` route
- Database connections are optimized for serverless environments
- Session storage is configured for serverless deployment



## 📄 License

MIT License - see LICENSE file for details.
