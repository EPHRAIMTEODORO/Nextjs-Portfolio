# Developer Portfolio

A clean, modern developer portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Responsive Design** (Mobile-first)

## Features

- ✅ Fully responsive navigation with mobile menu
- ✅ Hero section with CTA buttons
- ✅ About section with focus areas
- ✅ Projects showcase with tech stack tags
- ✅ Skills section categorized by type
- ✅ Blog section placeholder
- ✅ Contact form UI (no backend)
- ✅ Footer with social links
- ✅ Smooth scroll navigation
- ✅ Dark mode support
- ✅ Semantic HTML

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles with Tailwind
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Skills & technologies
│   ├── Blog.tsx            # Blog section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer component
├── types/
│   └── index.ts            # TypeScript interfaces
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Customization

### Update Placeholder Content

All placeholder content is marked with brackets `[...]`. Search for these in the components to replace with your actual information:

- **Navbar**: Update name/logo
- **Hero**: Add your name, title, and intro
- **About**: Write your bio and focus areas
- **Projects**: Add your real projects
- **Skills**: List your actual skills
- **Blog**: Add blog posts (or remove section)
- **Contact**: Update email and social links
- **Footer**: Update name and year

### Styling

The portfolio uses a minimalist gray/black/white color palette. To customize:

1. Edit colors in [tailwind.config.ts](tailwind.config.ts)
2. Modify CSS variables in [app/globals.css](app/globals.css)
3. Update component styles using Tailwind utilities

## Sections

1. **Navbar** - Fixed navigation with smooth scroll links
2. **Hero** - Introduction with CTA buttons
3. **About** - Bio and focus areas
4. **Projects** - Grid of project cards with tech stacks
5. **Skills** - Categorized skill lists
6. **Blog** - Placeholder for future posts
7. **Contact** - Contact info and form UI
8. **Footer** - Copyright and social links

## License

MIT

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
