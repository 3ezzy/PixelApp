import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import DashboardPage from './pages/DashboardPage'
import TaskListPage from './pages/TaskListPage'
import { TaskProvider } from './context/TaskContext'
import './App.css'

function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="min-h-screen bg-pixel-light-gray font-pixel">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/tasks" element={<TaskListPage />} />
          </Routes>
        </div>
      </Router>
    </TaskProvider>
  )
}

export default App
