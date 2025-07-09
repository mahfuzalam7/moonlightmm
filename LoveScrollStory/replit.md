# Romantic Microsite - Replit Project Guide

## Overview

This is a romantic microsite application built as a love confession experience. The project is a full-stack web application with a React frontend and Express backend, designed to create an emotional, cinematic digital experience with scroll-based interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom romantic color palette (blush pinks, ivory, warm beige, gold)
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite with React plugin and runtime error overlay

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Connect-pg-simple for PostgreSQL session store
- **Development**: tsx for TypeScript execution

### Key Design Decisions
- **Monorepo Structure**: Shared code between client and server via `/shared` directory
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared schemas
- **Component Architecture**: Modular UI components with consistent design system
- **Mobile-First**: Responsive design optimized for mobile devices
- **Aesthetic Focus**: Romantic theme with soft animations and elegant typography

## Key Components

### Frontend Components
- **ParticleSystem**: Animated floating particles (hearts, sparkles, petals)
- **ScrollReveal**: Intersection Observer-based scroll animations
- **Custom UI Components**: Extended shadcn/ui components with romantic styling
- **Interactive Elements**: Love confession buttons with heart burst animations

### Backend Components
- **Storage Interface**: Abstract storage layer with in-memory implementation
- **User Management**: Basic user CRUD operations with Drizzle schema
- **Route System**: Modular Express route registration
- **Development Tools**: Vite integration for development mode

### Shared Components
- **Schema**: Drizzle ORM schema definitions with Zod validation
- **Type Definitions**: Shared TypeScript interfaces between client and server

## Data Flow

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Schema Validation**: Zod schemas for type-safe data validation
- **Migration System**: Drizzle migrations in `/migrations` directory

### API Architecture
- **RESTful Design**: All API routes prefixed with `/api`
- **Request/Response**: JSON-based communication with error handling
- **Authentication**: Session-based authentication (infrastructure ready)

### Frontend State Management
- **Query Client**: TanStack Query for server state caching
- **Local State**: React hooks for component-level state
- **Form Handling**: React Hook Form with Zod resolvers

## External Dependencies

### Major Dependencies
- **UI Framework**: Radix UI primitives for accessible components
- **Animation**: CSS animations with Tailwind utilities
- **Database**: Neon Database for PostgreSQL hosting
- **Fonts**: Google Fonts (Quicksand, Nunito, Dancing Script)
- **Icons**: Lucide React for consistent iconography

### Development Dependencies
- **Build**: Vite for frontend bundling, esbuild for backend
- **TypeScript**: Full type checking and compilation
- **Styling**: PostCSS with Tailwind CSS and autoprefixer
- **Development**: Runtime error overlay and cartographer plugins

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds to `/dist/public`
- **Backend**: esbuild bundles server to `/dist/index.js`
- **Assets**: Static assets served from build directory

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Development**: NODE_ENV=development for development mode
- **Production**: NODE_ENV=production for optimized builds

### Server Configuration
- **Static Serving**: Express serves built frontend in production
- **Development**: Vite middleware for hot module replacement
- **Database**: Drizzle configured for PostgreSQL with connection pooling

### Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm start`: Production server
- `npm run db:push`: Push database schema changes

## Implementation Notes

The application is designed as a romantic microsite with the following key features:
- Scroll-based storytelling with reveal animations
- Interactive love confession with animated responses
- Professional romantic aesthetic with subtle animations
- Mobile-first responsive design
- Elegant typography and sophisticated color scheme
- Featured poetry section with Rumi quotes

## Recent Changes (January 2025)
- Completely redesigned the microsite for a more professional appearance
- Removed excessive emojis and replaced with elegant Lucide React icons
- Updated color palette to more refined and subtle tones
- Improved typography with better spacing and hierarchy
- Added professional card layouts with clean shadows and subtle hover effects
- Created sophisticated gradient backgrounds
- Enhanced all animations to be more subtle and elegant
- Added dedicated featured poetry section highlighting beautiful Rumi quote
- Improved overall visual structure and flow for a premium romantic experience

The architecture supports future enhancements like user authentication, persistent love messages, and extended interactive features while maintaining the sophisticated romantic experience.