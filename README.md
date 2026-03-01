# 📝 Todo Client

A modern, responsive Todo application built with React, TypeScript, and Tailwind CSS.

---

## 🗂️ Project Structure

```
Todo-client/
├── public/
└── src/
    ├── api/              # Axios instance and base API config
    ├── assets/           # Static assets (images, icons, etc.)
    ├── components/       # Reusable UI components
    │   ├── form/         # AddTodoForm
    │   ├── pagination/   # Pagination component
    │   ├── spinner/      # Custom loading spinner
    │   └── Todo/         # TodoItem, TodoList components
    ├── constants/        # App-wide constants (routes, limits, etc.)
    ├── DTO/              # Data Transfer Object interfaces
    ├── hooks/            # Custom React hooks (useToast, etc.)
    ├── lib/              # Utility libraries / shadcn setup
    ├── pages/            # Page-level components (TodoPage)
    ├── routes/           # React Router route definitions
    ├── services/         # API service functions (todo.service.ts)
    ├── types/            # TypeScript type definitions
    ├── utils/            # Helper utility functions
    ├── App.css
    ├── App.tsx
    ├── index.css
    └── main.tsx
```

---

## 🚀 Tech Stack

- **React 18** — UI library
- **TypeScript** — Type safety
- **Vite** — Build tool and dev server
- **Tailwind CSS** — Utility-first styling
- **shadcn/ui** — Accessible component library
- **Axios** — HTTP client
- **React Router** — Client-side routing

---

## ⚙️ Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sreeshanthh007/TODO-CLIENT.git

# Navigate to the project
cd Todo-client

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_BACKEND_URL=http://localhost:yourPortNumber/todo
```

### Running the App

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📡 API Integration

All API calls are handled through service functions in `src/services/todo.service.ts`.

| Service | Method | Description |
|---|---|---|
| `GetAllTodoService(page, limit)` | GET | Fetch paginated todos |
| `CreateTodoService(title)` | POST | Create a new todo |
| `EditTodoService(id, data)` | PATCH | Update title or status |
| `RemoveTodoService(id)` | DELETE | Delete a todo |

---

## ✨ Features

- Create, edit, and delete todos
- Change todo status — `pending`, `in-progress`, `completed`
- Paginated todo list (5 per page)
- Optimistic UI updates
- Custom loading spinner with 2s minimum display
- Toast notifications for all actions

---

## 📁 Key Files

| File | Purpose |
|---|---|
| `src/pages/TodoPage.tsx` | Main page with all state and handlers |
| `src/services/todo.service.ts` | API service layer |
| `src/components/Todo/TodoItem.tsx` | Individual todo item with edit/status |
| `src/components/pagination/Pagination.tsx` | Reusable pagination controls |
| `src/constants/` | API routes and app constants |