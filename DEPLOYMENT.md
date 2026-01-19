# REAP Odyssey - Deployment Guide

## Quick Start (Vercel)

The easiest way to deploy:

1. **Push to GitHub**
   ```bash
   cd /Users/sero/reap-odyssey-vercel
   git init
   git add .
   git commit -m "Initial commit: REAP Odyssey single-page app"
   # Create repo on GitHub first, then:
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"
   
   Vercel will automatically detect the Next.js configuration and deploy.

3. **Your site will be live at**
   - `https://your-project.vercel.app`

## Alternative: Manual Deploy

If you prefer to build locally first:

1. **Install dependencies** (when network is stable)
   ```bash
   npm install
   ```

2. **Build the project**
   ```bash
   npm run build
   ```
   This creates a static site in the `out/` directory.

3. **Deploy the `out/` folder** to any static hosting service:
   - Vercel (drag and drop the `out` folder)
   - Netlify
   - GitHub Pages
   - Cloudflare Pages

## Project Structure

```
reap-odyssey-vercel/
├── app/
│   ├── page.tsx          # Main REAP Odyssey component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── package.json          # Dependencies
├── next.config.mjs       # Next.js config (static export)
├── vercel.json           # Vercel deployment config
└── tsconfig.json         # TypeScript config
```

## Configuration Details

- **Framework**: Next.js 15.1.4 (with static export)
- **Output**: Static HTML/CSS/JS (no server required)
- **Styling**: Inline styles (no CSS framework needed)
- **TypeScript**: Enabled for type safety

## Local Development

Once dependencies are installed:

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build locally
npm install -g serve
npm run build
serve out
```

## Customization

To modify the content:
- Edit `app/page.tsx` to change tweets, phases, or styling
- All content is in the `phases` array within the component
- Changes are deployed automatically when pushed to GitHub (with Vercel)

## Notes

- The app uses `output: 'export'` for static site generation
- No API routes or server-side code
- All client-side React with hooks
- Fully responsive design
