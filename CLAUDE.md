# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Angular 15. The application is a single-page app showcasing personal information, education, skills, projects, work experience, and contact details.

## Development Commands

### Development Server
```bash
ng serve
# or
npm start
```
Runs dev server at http://localhost:4200/ with hot reload.

### Build
```bash
ng build
```
Production build outputs to `docs/` directory (configured for GitHub Pages deployment).

Development build with watch mode:
```bash
ng build --watch --configuration development
# or
npm run watch
```

### Testing
```bash
ng test
# or
npm test
```
Runs unit tests via Karma.

### Deployment
```bash
ng deploy
```
Deploys to GitHub Pages using `angular-cli-ghpages`.

### Code Generation
```bash
ng generate component component-name
ng generate directive|pipe|service|class|guard|interface|enum|module
```

## Architecture

### Application Structure

The app uses a **single-page, component-based architecture** with all sections rendered on one page via `app.component.html`. There is no routing configured - the entire portfolio is displayed as a vertical stack of components.

**Component Layout** (in order of appearance):
1. `NavMenuComponent` - Navigation menu
2. `BannerComponent` - Hero/banner section
3. `PersonalInfoComponent` - Personal information
4. `EducationComponent` - Education history
5. `SkillsComponent` - Technical skills
6. `ProjectsComponent` - Project showcase
7. `WorkExpComponent` - Work experience
8. `ContactComponent` - Contact information

All components are declared in `app.module.ts` and composed in `app.component.html`.

### Responsive Design System

The app implements a **custom responsive directive** (`ResponsiveDirective`) that uses Angular CDK's BreakpointObserver:

- Applied to all main components via `appResponsive` attribute
- Observes two breakpoints: `HandsetPortrait` and `WebLandscape`
- Dynamically adds/removes `pc` CSS class based on viewport
- Allows components to style differently for mobile vs desktop

When modifying components, ensure responsive behavior is preserved by:
- Keeping the `appResponsive` directive on all main components
- Using the `pc` class for desktop-specific styles
- Testing on both mobile and desktop viewports

### Key Technologies

- **Angular 15.1** with TypeScript 4.9
- **Angular CDK 15.1** for layout utilities (BreakpointObserver)
- **Boxicons** for iconography
- **Strict TypeScript** mode enabled
- **Karma + Jasmine** for testing

### Build Configuration

- **Output directory**: `docs/` (GitHub Pages compatible)
- **Production budgets**:
  - Initial bundle: 500kb warning, 1mb error
  - Component styles: 2kb warning, 4kb error
- **Development mode**: Includes source maps, no optimization
