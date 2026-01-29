# Jean Gabriel Mpuhwezimana - Professional Portfolio

A modern, responsive portfolio website showcasing academic and industry experience in Machine Learning, Electronics Engineering, and Software Development.

## Features

- **Fully Static**: No backend required, easy to deploy anywhere
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Professional Design System**: Dark theme with custom color palette
- **Easy Content Management**: All content editable from a single TypeScript file
- **Smooth Navigation**: Sticky navbar with smooth scrolling
- **PDF Support**: Downloadable CV and research papers
- **Production Ready**: Built with React, TypeScript, and Tailwind CSS

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 16+ and npm installed on your machine

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## Editing Content

All website content is managed through a single file: `src/content/profile.ts`

### Updating Personal Information

Edit the `profileData` object in `src/content/profile.ts`:

```typescript
personal: {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio description...",
  avatar: "/avatar.png",
}
```

### Adding/Editing Projects

```typescript
projects: [
  {
    title: "Project Name",
    description: "Project description...",
    techStack: "React.js, Node.js, PostgreSQL",
    tags: ["Web App", "Full Stack"],
    github: "https://github.com/yourusername/project"
  },
  // Add more projects...
]
```

### Adding/Editing Research

```typescript
research: [
  {
    title: "Research Title",
    period: "Month Year – Month Year",
    highlights: [
      "First key finding or achievement",
      "Second key finding or achievement",
    ],
    pdfPath: "/files/your-research-paper.pdf",
  },
]
```

### Updating Skills

```typescript
skills: [
  {
    category: "Category Name",
    items: ["Skill 1", "Skill 2", "Skill 3"],
  },
]
```

### Changing Contact Information

```typescript
contact: {
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/yourprofile/",
  github: "https://github.com/yourusername",
}
```

## Adding Files

### Profile Picture

1. Add your profile picture to the `public/` folder
2. Name it `avatar.png` (or update the path in `profile.ts`)
3. Recommended size: 512x512px or larger, square aspect ratio

### CV and Research PDFs

1. Create a `public/files/` folder if it doesn't exist
2. Add your PDF files to this folder
3. Update the paths in `profile.ts`:

```typescript
cv: {
  filename: "Your_Name_CV.pdf",
  path: "/files/Your_Name_CV.pdf",
}
```

## Building for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` folder, ready for deployment.

## Deployment

This is a static website and can be deployed to any static hosting service:

### GitHub Pages

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite configuration
4. Deploy!

## Design System

The portfolio uses a consistent dark theme:

- **Background**: `#0B1020`
- **Card Background**: `#121A2F`
- **Primary Accent**: `#7C5CFF` (Purple)
- **Secondary Accent**: `#2EE59D` (Green)
- **Text Primary**: `#EAF0FF`
- **Text Secondary**: `#A9B4D0`

All colors can be customized in the Tailwind classes throughout the components.

## Project Structure

```
├── public/
│   ├── files/               # PDFs (CV, research papers)
│   └── avatar.png           # Profile picture
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Navbar.tsx
│   │   ├── Section.tsx
│   │   └── Tag.tsx
│   ├── content/
│   │   └── profile.ts       # ALL CONTENT HERE
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Research.tsx
│   │   ├── Education.tsx
│   │   ├── Leadership.tsx
│   │   └── Contact.tsx
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
└── package.json
```

## Customization Tips

1. **Change Colors**: Search for color values (e.g., `#7C5CFF`) in component files and replace with your preferred colors

2. **Add Sections**: Create a new component in `src/sections/`, import it in `App.tsx`, and add it to the navigation

3. **Modify Layout**: Adjust grid columns and spacing in section components

4. **Update Fonts**: Modify the font-family in `src/index.css`

## Troubleshooting

**Images not showing?**
- Ensure files are in the `public/` folder
- Use paths starting with `/` (e.g., `/avatar.png`)

**Build errors?**
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run typecheck`

**Styling issues?**
- Clear browser cache
- Rebuild: `npm run build`

## License

This portfolio template is free to use for personal and commercial projects.

## Contact

For questions or support, contact: placeholder@example.com
