# Carlos Henrique's Portfolio Website
A responsive and performant portfolio website showcasing my work as a Full Stack Web Developer.

## Project Overview 📦
This project leverages the Astro framework for blazing-fast builds, with static-site generation, and server-side rendering capabilities, all while following development best practices like Clean Code, TDD, and i18n.

## Getting Started 🚀
### Prerequisites
* Node.js >= 14.0.0
* NPM or Yarn (install globally or use nvm)

### Setup
```bash
git clone [your-github-repo-url]
cd portfolio-website
npm install
```

### Development
```bash
npm run dev
```
This command will set up a local development server and open the website in your browser at the default port specified in the configuration file (astro.config.mjs).

### Building for Production
```bash
npm run build
```
A production-ready build will be generated in the ./dist folder.

### Previewing the Build
```bash
npm run preview
```
This will start a local server with the production build for testing.

### Usage ⚙️
**Local Development**: Use `npm run dev` to start the development server.
- Live Reloading: Changes to the source code will be reflected immediately in the browser.
- Type Checking: TypeScript with strict mode ensures type safety.

**Deploying:**
- GitHub Pages: Automate deployments to GitHub Pages using the provided CI/CD pipeline.
- Vercel: Deploying to Vercel is easy due to Astro's compatibility with Vercel's serverless functions.

### Features 🎨
**i18n**: Full internationalization support with URL-based language switching.
**SEO Optimized**: Astro's out-of-the-box SEO features ensure all pages index well with search engines.
**Performance**: Few client-side JavaScript, lazy-loading images, and server-rendered content for optimal user experience.
**Animated Sections**: Scroll animations for an engaging user experience.
**Responsive Design**: Built with Tailwind CSS for a seamless responsive design.

### Technical Details 🛠️
**Frontend**
- Framework: Astro v5.1.1 - A meta-framework for modern web development
- Styling: Tailwind CSS for utility-first styling
- TypeScript: For type-safe JavaScript development

**Development Tools**
- Linting and Formatting: ESLint with TypeScript plugin and Prettier

**CI/CD**
- GitHub Actions: Automates build and deployment to GitHub Pages

### Best Practices 📚
- Clean Code: Following Clean Code principles for readability and maintainability
- Internationalization: Deeply integrated i18n support for a multilingual website
- Accessibility: Semantic HTML, ARIA attributes, and color contrast ratios are considered
- Performance: Optimized image handling, CSS/JS minification, and appropriate HTTP caching

### Contributing 🔧
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-branch-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-branch-name`)
5. Open a pull request
Please adhere to the coding standards defined in this repository and follow the Structure and Organization guidelines.

### License 📜
This project is licensed under the MIT License - see the LICENSE.md file for details.
