# 🎮 Pixel Art Todo List App

A retro-styled, pixel art todo list application built with React and Tailwind CSS. Features a notebook-inspired design with 8-bit gaming aesthetics.

## 🎨 Features

- **Pixel Art Design**: Retro gaming aesthetic with pixel-perfect styling
- **Three-Page Layout**: 
  - Welcome page with inspirational quotes
  - Dashboard for task planning and progress tracking
  - Task list page for task management
- **Local Storage**: Persistent task storage
- **Progress Tracking**: Visual progress bars and completion statistics
- **Responsive Design**: Works on desktop and mobile devices

## 🎯 Color Palette

- **Primary Orange**: `#FE7743` - Main accent color
- **Dark Blue**: `#273F4F` - Primary text and dark elements  
- **Medium Blue**: `#447D9B` - Secondary elements and progress bars
- **Light Gray**: `#D7D7D7` - Background and neutral elements

## 🚀 Getting Started

### Prerequisites
- Node.js (v20.19.0 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pixel-todoapp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **Press Start 2P** - Pixel-perfect Google Font

## 📱 Application Structure

### Page 1: Welcome Page (`/`)
- Central pixel art notebook illustration
- Rotating inspirational quotes
- "START JOURNEY" button to begin

### Page 2: Dashboard (`/dashboard`)
- Mini calendar showing current date
- Daily progress tracking
- Task input section with quick suggestions
- Statistics overview
- Navigation to task list

### Page 3: Task List (`/tasks`)
- Notebook-style task display
- Interactive checkboxes for task completion
- Task deletion functionality
- Progress tracking
- Day completion workflow

## 🎮 Key Components

- `PixelButton` - Reusable pixel art styled button
- `PixelInput` - Custom input field with pixel art borders
- `ProgressBar` - Animated progress indicator
- `TaskItem` - Individual task component with checkbox
- `MiniCalendar` - Calendar widget
- `NotebookPage` - Paper texture background component

## 💾 Data Persistence

Tasks are automatically saved to localStorage and persist between browser sessions. Each task includes:
- Unique ID
- Task text
- Completion status
- Creation timestamp

## 🎯 User Stories

✅ Start the day with inspiration on a beautiful welcome screen  
✅ See today's date and overall progress at a glance  
✅ Quickly add tasks using an intuitive input interface  
✅ Mark tasks as complete with satisfying pixel art interactions  
✅ Track progress throughout the day with visual progress bars  
✅ Complete the day with a sense of accomplishment  

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── PixelButton.jsx
│   ├── PixelInput.jsx
│   ├── ProgressBar.jsx
│   ├── MiniCalendar.jsx
│   ├── TaskItem.jsx
│   └── NotebookPage.jsx
├── context/            # React context for state management
│   └── TaskContext.jsx
├── pages/              # Main application pages
│   ├── WelcomePage.jsx
│   ├── DashboardPage.jsx
│   └── TaskListPage.jsx
├── App.jsx             # Main app component with routing
├── App.css             # Global styles
├── index.css           # Tailwind imports and utilities
└── main.jsx            # Application entry point
```

## 🎨 Design System

The application follows a consistent pixel art design system with:
- Monospace pixel fonts (Press Start 2P)
- Consistent border styles and shadows
- Retro color palette
- Crisp, pixelated visual elements
- Smooth but subtle animations

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Made with ❤️ and lots of pixels!+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
