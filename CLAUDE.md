# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

This is a Next.js 15 personal website/blog built with TypeScript, featuring:

### App Structure
- Uses Next.js App Router with route groups: `app/(website)/` contains the main website pages
- Root layout (`app/layout.tsx`) provides global providers, analytics, and theme handling
- Website layout (`app/(website)/layout.tsx`) adds navigation and footer wrapper

### Key Components
- **Blog System**: MDX-based blog with frontmatter parsing via gray-matter
  - Posts stored in `content/blog/` as `.mdx` files
  - Blog utilities in `lib/blog/index.ts` handle post retrieval and filtering
  - Supports draft/published/coming-soon status filtering
- **UI Components**: Shadcn/ui components in `components/ui/` with custom styling
- **Theme System**: Dark/light mode with custom CSS variables and theme provider
- **Sidebar**: Persistent navigation component rendered in root layout

### Styling
- Tailwind CSS with custom color variables defined in CSS
- Custom color system using CSS variables (e.g., `--app-bg`, `--high-contrast-text`)
- Typography plugin for MDX content styling
- Responsive design with mobile-first approach

### Analytics & SEO
- Vercel Analytics and Plausible integration
- Comprehensive SEO metadata in root layout
- Open Graph and Twitter card support

### Content Management
- Blog posts use gray-matter for frontmatter parsing
- Post type definition in `types/blog.ts` includes status, tags, reading time
- Posts filtered by status (development shows all, production shows published/coming-soon)

## File Structure Notes
- `app/` - Next.js app router pages and layouts
- `components/` - Reusable UI components (Shadcn/ui based)
- `content/blog/` - MDX blog post files
- `lib/` - Utility functions and shared code
- `types/` - TypeScript type definitions
- `hooks/` - Custom React hooks
- `public/` - Static assets including images and tech icons