# Overview

This is a modern full-stack web portfolio application built with React, Express.js, TypeScript, and PostgreSQL. The application serves as a personal portfolio website for a web developer, featuring sections for services, work showcase, client testimonials, an about section, and a contact form. The architecture follows a monorepo structure with a shared schema layer, implementing a clean separation between frontend and backend concerns.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **Routing**: Uses Wouter for client-side routing with a simple home page and 404 fallback
- **UI Components**: Implements shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: TailwindCSS with custom CSS variables for theming and dark mode support
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Form Handling**: React Hook Form with Zod validation for type-safe form submissions

## Backend Architecture
- **Server Framework**: Express.js with TypeScript running on Node.js
- **Database Layer**: Drizzle ORM configured for PostgreSQL with schema-first approach
- **API Design**: RESTful API endpoints for contact form submission and data retrieval
- **Development Setup**: Custom Vite integration for seamless development experience
- **Error Handling**: Centralized error handling middleware with structured error responses

## Data Storage
- **Database**: PostgreSQL with Neon serverless driver for cloud deployment
- **ORM**: Drizzle ORM with schema definitions in shared directory for type safety
- **Schema Management**: Database migrations managed through Drizzle Kit
- **Development Fallback**: In-memory storage implementation for development without database

## Component Architecture
- **Layout Structure**: Modular component design with separate sections (Hero, Services, Work, Process, Testimonials, About, Contact, Footer)
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Animation System**: Custom scroll-based animations using Intersection Observer API
- **Theme System**: CSS custom properties with light/dark mode support

## Development Workflow
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Development Server**: Hot module replacement with Vite middleware integration
- **Path Aliases**: Configured import aliases for clean code organization

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, TanStack Query for state management
- **Backend Framework**: Express.js with TypeScript support
- **Database**: Neon PostgreSQL serverless driver, Drizzle ORM, connect-pg-simple for sessions

## UI and Styling
- **Component Library**: Radix UI primitives for accessibility-compliant components
- **Styling Framework**: TailwindCSS with PostCSS for processing
- **Design System**: shadcn/ui components with class-variance-authority for variant management
- **Icons**: Lucide React for consistent iconography

## Development Tools
- **Build Tools**: Vite for frontend bundling, esbuild for backend compilation
- **Type System**: TypeScript with strict configuration, Zod for runtime validation
- **Routing**: Wouter for lightweight client-side routing
- **Development Enhancement**: Replit-specific plugins for cloud development environment

## Form and Validation
- **Form Management**: React Hook Form with Hookform Resolvers
- **Schema Validation**: Zod for type-safe validation, Drizzle-Zod for database schema validation
- **Date Handling**: date-fns for date manipulation and formatting

## Additional Utilities
- **Class Management**: clsx and tailwind-merge for conditional CSS classes
- **Command Interface**: cmdk for command palette functionality
- **Carousel Components**: Embla Carousel React for interactive content display