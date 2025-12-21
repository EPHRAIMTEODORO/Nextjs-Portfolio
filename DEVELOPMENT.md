# Development Guide

## Project Overview

This is a modern Next.js 14 portfolio website using the App Router, TypeScript, and Tailwind CSS. The site is fully responsive and includes all standard portfolio sections.

## Available Scripts

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Development Workflow

1. **Start the dev server**: `npm run dev`
2. **Edit components**: All components are in `/components` folder
3. **Hot reload**: Changes automatically reflect in the browser
4. **TypeScript**: Type errors will show in the terminal and editor

## Component Architecture

### Server vs Client Components

- **Server Components** (default): Hero, About, Projects, Skills, Blog, Footer
- **Client Components** (`"use client"`): Navbar, Contact (need interactivity/state)

### File Organization

```
/app                    # Next.js App Router
  ├── layout.tsx       # Root layout (metadata, global styles)
  ├── page.tsx         # Home page (imports all components)
  └── globals.css      # Global Tailwind styles

/components            # Reusable components
  ├── Navbar.tsx       # Navigation with mobile menu
  ├── Hero.tsx         # Hero section
  ├── About.tsx        # About section
  ├── Projects.tsx     # Project cards
  ├── Skills.tsx       # Skills lists
  ├── Blog.tsx         # Blog posts
  ├── Contact.tsx      # Contact form
  └── Footer.tsx       # Footer

/types                 # TypeScript definitions
  └── index.ts         # Shared interfaces
```

## Styling Guide

### Tailwind CSS

All styling uses Tailwind utility classes. Key patterns:

```tsx
// Responsive design
className="text-base md:text-lg lg:text-xl"

// Dark mode
className="bg-white dark:bg-gray-900"

// Hover effects
className="hover:bg-gray-50 transition-colors duration-200"

// Layout
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
```

### Color Scheme

- **Light mode**: White, gray-50, gray-900
- **Dark mode**: Gray-900, gray-800, white
- **Accents**: Gray-900 for buttons/emphasis

### Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## Adding New Features

### Add a New Section

1. Create component in `/components/NewSection.tsx`
2. Import and add to `/app/page.tsx`
3. Add navigation link to Navbar
4. Update types if needed

### Add Images

1. Create `/public/images` folder
2. Add images to folder
3. Use Next.js Image component:

```tsx
import Image from 'next/image'

<Image
  src="/images/photo.jpg"
  alt="Description"
  width={500}
  height={300}
  className="rounded-lg"
/>
```

### Add New Page

1. Create `/app/newpage/page.tsx`
2. Create `/app/newpage/layout.tsx` (optional)
3. Page will be available at `/newpage`

## TypeScript

### Adding Types

Edit `/types/index.ts`:

```typescript
export interface NewType {
  id: number;
  name: string;
  // ...
}
```

Use in components:

```tsx
import type { NewType } from "@/types";

const items: NewType[] = [...];
```

## Common Tasks

### Update Placeholder Content

1. Search for `[` in all component files
2. Replace bracketed placeholders with real content
3. See `CUSTOMIZATION.md` for detailed list

### Customize Colors

Edit `/tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#yourcolor',
      secondary: '#yourcolor',
    },
  },
},
```

### Add Google Fonts

Edit `/app/layout.tsx`:

```tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Apply to <body>:
<body className={inter.className}>
```

### Connect Contact Form

In `/components/Contact.tsx`, replace the `handleSubmit` function:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Example with FormSubmit.co
  const response = await fetch('https://formsubmit.co/your@email.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  // Handle response...
};
```

## Performance Tips

1. **Use Next.js Image**: Automatically optimizes images
2. **Code splitting**: Happens automatically with App Router
3. **Dynamic imports**: For heavy components

```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'))
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on vercel.com
3. Deploy automatically

### Other Platforms

```bash
npm run build  # Creates .next folder
npm start      # Runs production server
```

## Troubleshooting

### Port already in use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### TypeScript errors

```bash
# Check all errors
npx tsc --noEmit
```

### Tailwind not working

1. Check `tailwind.config.ts` paths include your files
2. Verify `@tailwind` directives in `globals.css`
3. Restart dev server

### Dark mode not working

Ensure CSS variables are set in `globals.css` and HTML has `lang` attribute in `layout.tsx`.

## Best Practices

1. ✅ Use TypeScript for all components
2. ✅ Keep components small and focused
3. ✅ Use semantic HTML (`<section>`, `<nav>`, `<footer>`)
4. ✅ Ensure accessibility (ARIA labels, alt text)
5. ✅ Test responsive design at all breakpoints
6. ✅ Optimize images before adding
7. ✅ Use meaningful git commits
8. ✅ Keep dependencies updated

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)

## Support

For issues or questions about this portfolio template, check:
1. README.md for setup instructions
2. CUSTOMIZATION.md for content updates
3. This guide for development help
