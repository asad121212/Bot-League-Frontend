# Bot League Frontend

A pixel-inspired frontend recreation of the **Bot League** landing page built using **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

The project focuses on building a clean, reusable, and scalable component architecture while keeping all application data static. No backend or external APIs are used.

---
## Live Demo

https://bot-league-frontend.vercel.app/
---

## Preview

<img width="1898" height="797" alt="image" src="https://github.com/user-attachments/assets/b4117f08-9aab-446e-b20e-52a1c3de939f" />

<img width="1890" height="677" alt="image" src="https://github.com/user-attachments/assets/d6cc4c49-f6fb-4aac-9c68-701ed15d9892" />



A responsive single-page landing page featuring:

- Hero section
- About section
- Competition categories
- Robot disciplines
- Community section
- Journey timeline
- Competition highlights
- Responsive navigation
- Footer

---

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/asad121212/Bot-League-Frontend
cd Bot-League-Frontend
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Open the URL shown in the terminal (typically):

```
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

# Project Structure

```
src/
│
├── assets/                 # Images, logos and static assets
│
├── components/
│   ├── about/              # About section
│   ├── categories/         # Competition category cards
│   ├── community/          # Community section
│   ├── competitions/       # Competition highlights
│   ├── disciplines/        # Robot disciplines
│   ├── hero/               # Hero section
│   ├── journey/            # Journey timeline
│   ├── layout/             # Navbar, Footer and layout components
│   └── ui/                 # Reusable UI components
│
├── data/
│   └── siteData.ts         # Centralized mock data
│
├── types/
│   └── index.ts            # Shared TypeScript interfaces
│
├── App.tsx                 # Main page composition
├── main.tsx                # React entry point
└── index.css               # Global styles
```

---

# Component Architecture

The project follows a **feature-based folder structure**, where every major section of the landing page has its own directory.

Each feature contains only the components related to that section, making the project easier to:

- maintain
- scale
- test
- extend

Reusable UI elements are placed inside the `ui` directory to avoid duplication.

---

# Data Management

All content is stored inside:

```
src/data/siteData.ts
```

This includes:

- Navigation links
- Hero content
- About section
- Competition categories
- Disciplines
- Community information
- Journey timeline
- Competition data
- Footer links
- Social media links

Keeping all content centralized allows UI updates without modifying component logic.

---

# Design Principles

- Modular component architecture
- Reusable UI components
- Responsive layout
- Strong TypeScript typing
- Centralized mock data
- Clean separation of UI and data
- Consistent spacing and typography
- Easy to extend with backend integration

---

# Features

- Responsive navigation
- Hero section with call-to-action
- About section
- Competition categories
- Robot disciplines showcase
- Community section
- Journey timeline
- Competition highlights
- Footer with quick links and social media
- Fully responsive layout

---

# Future Improvements

Potential enhancements include:

- Backend integration
- Authentication
- Dynamic content via REST API
- CMS support
- Dark mode
- Animations with Framer Motion
- Unit and integration testing

---

# Development Notes

- Built using reusable React functional components.
- TypeScript interfaces are shared across the application.
- All displayed data is currently mocked.
- The architecture is designed so the data layer can later be replaced by API responses with minimal changes to the UI.

---

# Author

**Mohd Asad Rahman**

Frontend Developer | React | TypeScript | Tailwind CSS
