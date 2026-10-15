# EAK International School — Frontend Assignment

A responsive, frontend-only school website prototype created for the EakPustak “Modern School Website Redesign” assignment.

## Tech stack
- HTML5: semantic document structure, page metadata, accessible labels
- CSS3: responsive layouts, custom properties, grid/flexbox, media queries, focus states
- JavaScript (ES6): array filtering, form handling, toggles, and UI state
- React: reusable components and state-driven interfaces
- React Router: navigation between the seven pages
- Vite: local development and production build

## Pages
1. Home
2. About
3. Academics
4. Admissions
5. Facilities
6. Events & Notices
7. Contact

## Run locally
1. Install Node.js LTS.
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev` and open the local URL printed by Vite.
5. Before publishing, run `npm run build` to check for build errors.

## Project structure
```
src/
  components/
    Header.jsx       Shared responsive navigation
    Footer.jsx       Shared footer
    PageIntro.jsx    Reusable page heading
  pages/
    Home.jsx         Home page sections
    ContentPages.jsx About, Academics, Admissions, Facilities, Events, Contact
  data.js            Hard-coded sample content
  App.jsx             Page routes and shared layout
  main.jsx            React entry point
  styles.css          All visual styling and responsive rules
index.html            HTML5 document shell and metadata
```

## Important notes
- This is a frontend prototype. Forms show a local confirmation message only; no data is sent or stored.
- Dates, school address, phone number, email, and notices are fictional sample content. Update or clearly label them before demoing.
- Photos load from Unsplash URLs and require an internet connection. Replace them with properly licensed local assets if preferred.
- No template or copied school website was used as the source for the page copy and component structure. Always review, understand, and personalise the project before submitting it; no tool can guarantee a particular plagiarism-checker result.
- `styles.css` controls colors, typography, layout, mobile breakpoints, keyboard focus, and reduced-motion preferences.
- HTML5 semantic elements (`header`, `nav`, `main`, `section`, `article`, `footer`) make the structure clearer and more accessible.
