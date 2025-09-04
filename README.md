# Adepoju Portfolio

A modern, full-stack portfolio website built with React, Express.js, and TypeScript.

## 🚀 Deployment on Vercel

This project is configured for deployment on Vercel with the following setup:

- **Frontend**: React + Vite (static build)
- **Backend**: Express.js API (serverless functions)
- **Database**: Neon PostgreSQL with Drizzle ORM

## 📋 Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Neon Database**: Set up a Neon PostgreSQL database
3. **Environment Variables**: Configure your database connection

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with:

```env
DATABASE_URL=your_neon_database_connection_string
SESSION_SECRET=your_session_secret_key
NODE_ENV=production
```

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI**:

   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:

   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. **Connect Repository**:

   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub/GitLab repository

2. **Configure Build Settings**:

   - **Framework Preset**: Other
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

3. **Environment Variables**:

   - Add your environment variables in the Vercel dashboard

4. **Deploy**:
   - Click "Deploy"

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

## 🔄 Development

### Local Development

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Start Development Server**:

   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 📝 Notes

- The frontend is built as a static site and served by Vercel's CDN
- The backend runs as serverless functions in the `/api` route
- Database connections are optimized for serverless environments
- Session storage is configured for serverless deployment

## 🐛 Troubleshooting

### Common Issues

1. **Build Failures**: Ensure all dependencies are properly installed
2. **API Errors**: Check environment variables and database connectivity
3. **Static File Issues**: Verify the build output directory

### Support

For deployment issues, check:

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

## 📄 License

MIT License - see LICENSE file for details.
