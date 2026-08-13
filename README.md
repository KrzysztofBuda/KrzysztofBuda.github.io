# Krzysztof Buda — Portfolio

Personal developer portfolio built with Next.js, TypeScript and Tailwind CSS.

The website presents selected software projects, technical skills and professional experience, with a focus on backend development, Android applications, APIs, databases, embedded systems and hardware integrations.

## Live website

https://krzysztofbuda.github.io/

## Tech stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- GitHub Pages
- GitHub Actions

## Features

- responsive layout for desktop, tablet and mobile
- Polish and English language versions
- persistent language selection
- animated developer-oriented hero section
- project showcase
- dedicated project detail pages
- skills grouped by technical area
- professional timeline
- contact section
- keyboard navigation support
- reduced-motion support
- static site generation
- automatic deployment to GitHub Pages

## Project structure

```text
app/
├── globals.css
├── layout.tsx
├── page.tsx
└── projects/
    ├── layout.tsx
    └── [slug]/
        └── page.tsx

components/
├── about/
├── contact/
├── footer/
├── hero/
├── language/
├── motion/
├── navbar/
├── projects/
└── skills/

data/
└── projects.ts
```

## Projects

### Mobile Waiter

Android application designed to work with the SOGA restaurant system.

The project includes mobile waiter workflows, communication with the backend API and synchronization of restaurant data.

Technologies:

- Kotlin
- Android
- REST API
- SQL
- SOGA

### Garage Management System

IoT system for controlling and monitoring a garage.

The system combines an Android application, HTTP backend, Raspberry Pi, electronics and a MySQL database.

Technologies:

- Kotlin
- Python
- Flask
- Raspberry Pi
- MySQL

Additional smaller projects are also presented directly on the portfolio homepage.

## Languages

The website is available in:

- Polish
- English

Polish is used as the default language. The selected language is stored locally in the browser.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application is available locally at:

```text
http://localhost:3000
```

## Production build

Create a production build:

```bash
npm run build
```

The project uses static export, so the generated website is placed in:

```text
out/
```

## Deployment

Deployment is handled automatically by GitHub Actions.

Every push to the `main` branch triggers:

```text
build
  ↓
static export
  ↓
GitHub Pages artifact
  ↓
deploy
```

Workflow configuration:

```text
.github/workflows/deploy.yml
```

## Author

**Krzysztof Buda**

GitHub:
https://github.com/krzysztofbuda

LinkedIn:
https://www.linkedin.com/in/krzysztofbuda/

Email:
buda.krzysztof00@gmail.com

---

Built with Next.js and TypeScript.