---
title: "Personal Portfolio"
description: "Development of a personal website using Astro, TypeScript, and TailwindCSS, focusing on performance, SEO, and internationalization."
cover: "../images/portfolio-cover.jpeg"
tags:
  [
    "Astro",
    "TypeScript",
    "TailwindCSS",
    "i18n",
    "ESLint",
    "GitHub Actions",
  ]
github: "https://github.com/carloshdrp/portfolio-novo"
demo: "https://carloshdrp.com.br"
featured: true
pubDate: 2024-01-23
---

## Project Goals
- Create a platform to showcase my work professionally;
- Demonstrate proficiency in modern market technologies;
- Implement development best practices and architecture;
- Ensure performance and accessibility;
- Enable complete content internationalization;

## Technology Stack
### Framework and Tools
- Astro as the main framework
- TypeScript for static typing
- TailwindCSS for styling
- ESLint and Prettier for code quality
- Git for version control
- GitHub Actions for CI/CD

### Performance and SEO
The project implements several optimizations, including:
- Static site generation with Astro;
- Image lazy loading;
- Production code minification;
- Automatic sitemap, robots.txt, and web manifest;

### Internationalization
The site features full support for both Portuguese and English in the interface and posts, with automatic language detection based on visitor browser preferences and URL routing.

### Interface and Experience
- Responsive design
- Light/dark theme
- Smooth animations

## Directory Structure:
```
└── /./                
    ├── public/
    │   └── fonts/            
    ├── .github/            
    │   └── workflows/         # CI/CD Workflows
    └── src/
        ├── types/             # TypeScript type definitions
        ├── content/           # Portfolio projects in Markdown
        │   └── projects/  
        │       ├── images/
        │       ├── pt-br/
        │       └── en/
        ├── utils/             # Utility functions
        ├── styles/            # Global CSS styles
        ├── components/        # Reusable Astro components
        ├── layouts/           # Base page layouts
        ├── i18n/              # Translation files and helper methods
        ├── assets/            # Static resources
        │   └── images/        # Site images
        └── pages/             # Application routes
            └── [lang]/ 
                └── projects/ 
                    └── [...slug].astro 
```

## Screenshots
Homepage
![](../images/portfolio-cover.jpeg)

Project page
![](../images/portfolio-project.jpeg)

The complete source code is available on GitHub as a reference for other developers.