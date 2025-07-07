# Home Page Layout Documentation

This document explains the layout structure of the home page and main components for the portfolio website.

## Overall Layout Structure

The home page follows a two-column desktop layout with responsive behavior:

```
┌─────────────────────────────────────────────────────────────┐
│                    Progress Bar (Top)                      │
├─────────────┬───────────────────────────────────────────────┤
│             │                Navigation                     │
│             ├───────────────────────────────────────────────┤
│   Sidebar   │                                               │
│             │              Main Content                     │
│             │                                               │
│             │                                               │
│             │                                               │
└─────────────┴───────────────────────────────────────────────┘
```

## Key Components

### 1. Layout Root (`apps/web/src/app/(home)/layout.tsx`)

**Purpose**: Provides the overall page structure and configuration for the home section

**Key Features**:

- Google Fonts integration (Roboto and Roboto Mono)
- Analytics integration (Google Analytics, Umami, Vercel Analytics)
- JSON-LD structured data for SEO
- Progress bar component
- Two-column layout with sidebar and main content

**Layout Structure**:

```html
<html>
  <body>
    <ProgressBar>
      <Hello />
      <main>
        <SideBar />
        <div className="main-content">
          <VercelNavBar />
          {children}
        </div>
      </main>
    </ProgressBar>
  </body>
</html>
```

### 2. Sidebar Component (`/components/layout/side-bar.tsx`)

**Purpose**: Personal information panel with avatar, contact details, and social links

**Structure**:

- **Primary Info Section** (`sidebar-info`):

  - Avatar image (responsive sizing)
  - Name display with gradient text effect
  - Status/title badge
  - Expandable "Show Contacts" button

- **Expandable Section** (`sidebar-info-more`):
  - Contact list with icons and links
  - Social media links with hover effects
  - Footer component

**Responsive Behavior**:

- Uses custom hook `useResponsiveImageSize` for avatar sizing
- Responsive grid layout for contacts (1 column mobile → 2 columns tablet → 1 column desktop)
- Smooth expand/collapse animations

### 3. Navigation Bar (`/components/layout/vercel-navbar.tsx`)

**Purpose**: Primary navigation with active state tracking and animations

**Key Features**:

- Dynamic navigation from `navigationLinks` prop
- Active state management based on current pathname
- Hover effects with Framer Motion animations
- Responsive positioning (bottom fixed on mobile, top-right on desktop)

**Navigation Logic**:

- Smart path matching for nested routes
- Supports patterns: `/blog`, `/portfolio`, `/project`, `/post`
- Active indicator with orange-yellow underline
- Glass-morphism effect (backdrop blur + semi-transparent background)

**Responsive Breakpoints**:

- **Mobile** (default): Fixed bottom navigation
- **580px+**: Increased border radius and spacing
- **768px+**: Larger font sizes
- **1024px+**: Top-right absolute positioning

### 4. Home Page Content (`apps/web/src/app/(home)/page.tsx`)

**Purpose**: Main about page with personal introduction and key sections

**Structure**:

- **About Section**: Page title and introduction (processed from Markdown)
- **GitHub Calendar**: Activity visualization with custom yellow theme
- **My Writings**: Recent blog posts preview (3 posts)
- **Talk To Hugo**: Contact form section

**Key Features**:

- Dynamic imports for performance optimization
- Markdown-to-HTML processing for introduction
- Animated sections with `BlurFade` effects
- Custom GitHub calendar theme

## Page Routes Structure

The home section uses Next.js App Router with the following structure:

```
(home)/
├── layout.tsx              # Main layout wrapper
├── page.tsx               # About page (home)
├── blog/                  # Blog listing and individual posts
│   ├── [slug]/
│   └── category/[category]/
├── project/               # Portfolio projects
│   ├── [slug]/
│   └── category/[category]/
├── contact/               # Contact page
├── cv/                    # CV page
├── resume/                # Resume page
├── gallery/               # Gallery page
├── code-of-conduct/       # Code of conduct page
└── terms/                 # Terms page
```

## Configuration

The layout uses a centralized configuration system:

```typescript
// Key config properties used in layout
const {
  about, // Personal information
  avatar, // Profile image
  status, // Current status/title
  navigationLinks, // Navigation items
  socialLinks, // Social media links
  contacts, // Contact information
  analytics, // Analytics configuration
} = config;
```

## Styling Approach

- **CSS Modules**: Component-specific styling with scoped CSS
- **Tailwind CSS**: Utility-first CSS framework with custom theme
- **Custom CSS Variables**: For theme consistency
- **Responsive Design**: Mobile-first approach with multiple breakpoints
- **Animations**: Framer Motion for smooth transitions

## Development Notes

- Uses TypeScript with strict typing
- Follows Next.js 15 App Router conventions
- Implements proper SEO with metadata and JSON-LD
- Includes comprehensive analytics tracking
- Supports dark/light theme switching (via theme components)
- Optimized for performance with dynamic imports and image optimization

## File References

- Layout: `apps/web/src/app/(home)/layout.tsx:60-100`
- Home Page: `apps/web/src/app/(home)/page.tsx:26-83`
- Sidebar: `apps/web/src/components/layout/side-bar.tsx`
- Navigation: `apps/web/src/components/layout/vercel-navbar.tsx`
- Styles: `apps/web/src/styles/nav-bar.css` and `apps/web/src/styles/side-bar.css`
