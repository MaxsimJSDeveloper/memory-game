# 🧠 Memory Game

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

A Match-Two game for training memory and attention. The project is developed with a focus on clean architecture, custom hooks for managing complex state, and smooth UI animations.

🔗 **[Live Demo (Vercel)](https://memory-game-three-hazel.vercel.app/)**

---

## ✨ Key Features

- **🤖 Attract Mode:** While the game hasn't started, the board doesn't sit empty. An interactive attract mode runs, automatically flipping demo cards to simulate gameplay.
- **⚙️ Flexible Settings:** - Selectable board sizes (2x2, 4x4, 6x6).
  - Adjustable preview time (the delay before cards flip face down at the start of the game).
- **🎨 Smooth Animations:** Realistic 3D card flipping implemented using `@react-spring/web`.
- **🌐 API Integration:** Game cards (emojis) are dynamically fetched from an external source at the start of a session.
- **♿ Accessibility (a11y):** Keyboard navigation support, semantic markup, ARIA labels, and focus isolation (`FocusTrap`) inside modals.

## 🛠 Tech Stack

- **Core:** React 18, TypeScript, Vite
- **Styling:** CSS Modules (isolated component styles)
- **Animations:** `@react-spring/web`
- **Utils & Helpers:** `react-toastify` (notifications), `focus-trap-react` (modal accessibility), `react-helmet-async` (SEO/meta tags)
- **Architecture:** Feature-Sliced Design concepts (separation into UI, components, modules, hooks, API).

## 🚀 Architectural Decisions

- **Custom Hooks:** Game logic is completely decoupled from the UI via `useGameCards` and `useAttractMode`.
- **Timeout Management:** A custom `useTimeoutManager` hook safely handles asynchronous delays (opening/closing cards) and prevents memory leaks.
- **Cards Manager:** Centralized business logic for managing card states (match/open/reset), reused across both the main game and attract mode.

## 📦 Local Installation & Setup

1. Clone the repository:
   ```bash
   git clone [https://github.com/MaxsimJSDeveloper/memory-game.git](https://github.com/MaxsimJSDeveloper/memory-game.git)
   ```
