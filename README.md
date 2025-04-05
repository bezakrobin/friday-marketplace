# Friday Marketplace (Frontend)

[![React](https://img.shields.io/badge/React-18+-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-^5.2-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-^5-blue?logo=vite)](https://vitejs.dev/)
[![MUI](https://img.shields.io/badge/MUI-v5-blue?logo=mui)](https://mui.com/)
[![React Router](https://img.shields.io/badge/React_Router-v6-blue?logo=reactrouter)](https://reactrouter.com/)

This project is currently **in development** and this repository contains the **frontend** code for the planned **full-stack Friday Marketplace application**, built using modern web technologies. The final application aims to be **Docker-ready**.

## ✨ Key Features

* **Modern Tech Stack:** Built with Vite, React 18+, and TypeScript for a fast and type-safe development experience.
* **Component Library:** Utilizes Material UI (MUI) v5 for a comprehensive set of pre-built and themeable components.
* **Routing:** Client-side routing handled by React Router DOM v6, featuring lazy loading for pages using `React.Suspense`.
* **Theming:** Supports dynamic **Light & Dark mode** switching, persisting user preference in `localStorage` and respecting system preference as a fallback. Centralized theme configuration using MUI's `createTheme`.
* **Core Component System:** Includes reusable core UI components (`Button`, `NavLink`) built on top of MUI for consistent application styling.
* **Modular Navigation:** Features a reusable `MainNav` component for the application's header/navigation bar.
* **Structured Code:** Organized codebase with dedicated folders for core components, feature/module components, pages, layouts, routing, contexts, and theme.
* **Loading States:** Implements a centered circular loader (`CircleLoader`) for Suspense fallbacks during page loading.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development purposes.

### Prerequisites

* Node.js (v18 or later recommended)
* Docker (Optional, if/when Docker setup is added)
* npm, yarn, or pnpm package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/bezakrobin/friday-marketplace.git
    ```
2.  **Navigate into the frontend project directory:**
    ```bash
    cd friday-marketplace/fe
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```

## ⚙️ Running the Development Server

Once the dependencies are installed, you can start the Vite development server:

```bash
npm run dev
# or yarn dev
# or pnpm dev
```

This command will start the development server, usually at ```http://localhost:5173``` (the exact port might vary). The application will automatically reload if you make changes to the code.