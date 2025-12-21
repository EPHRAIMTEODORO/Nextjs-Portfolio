# Placeholder Content Reference

This document lists all placeholder content that needs to be replaced with your actual information.

## Quick Find & Replace

Search for brackets `[...]` in your components to find all placeholders.

## Component-by-Component Guide

### Navbar.tsx
- `[Your Name]` - Replace with your actual name or logo text

### Hero.tsx
- `[Your Full Name]` - Your full name
- `[Your Title / Role - e.g., Full Stack Developer]` - Your professional title
- `[Short intro paragraph - Lorem ipsum...]` - Your personal introduction (2-3 sentences)

### About.tsx
- `[Bio paragraph - Lorem ipsum...]` - First paragraph about your background
- `[Another bio paragraph...]` - Second paragraph about your interests/approach
- Focus areas list - Update with your actual focus areas

### Projects.tsx
Replace all 4 project cards with your real projects:
- `[Project Name 1-4]` - Project titles
- `[Project description...]` - Project descriptions
- Tech stack arrays - Your actual technologies used
- GitHub URLs - Link to your repositories
- Live URLs - Link to deployed projects

### Skills.tsx
Update all skill categories with your actual skills:
- Languages - Programming languages you know
- Frameworks - Frameworks you work with
- Databases - Database systems you use
- Tools & DevOps - Development tools you're proficient in

### Blog.tsx
Replace 3 blog post cards (or remove if not blogging):
- `[Blog Post Title 1-3]` - Actual blog post titles
- `[Summary...]` - Blog post summaries
- Dates - Actual publication dates
- Read times - Estimated reading times

### Contact.tsx
- `your.email@example.com` - Your actual email address (appears twice)
- `github.com/yourusername` - Your GitHub profile URL
- `linkedin.com/in/yourusername` - Your LinkedIn profile URL
- Contact description text - Personalize the intro text

### Footer.tsx
- `[Your Name]` - Your name for copyright
- Social links - Same as Contact section (GitHub, LinkedIn)
- Current year updates automatically

## Images (Optional Enhancement)

Currently, no images are used. Consider adding:
- Profile photo in Hero section
- Project screenshots in Projects section
- Company logos or icons in About/Skills sections

To add images:
1. Create a `public/` folder in the root
2. Add images to `public/images/`
3. Import and use with Next.js Image component: `<Image src="/images/photo.jpg" ... />`

## Next Steps

1. Replace all placeholder text marked with brackets
2. Update all social media URLs
3. Add your real projects with links
4. Customize colors if desired (see README.md)
5. Add actual content to Blog section or remove it
6. Connect contact form to a backend service (optional)
7. Add Google Analytics or other tracking (optional)
8. Set up a custom domain
9. Deploy to Vercel, Netlify, or your preferred platform

## Tips

- Keep descriptions concise and impactful
- Use action verbs in project descriptions
- Ensure all external links open in new tabs
- Test responsiveness on multiple devices
- Run accessibility checks
- Optimize images before adding them
