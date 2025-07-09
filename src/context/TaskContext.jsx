import { createContext, useContext, useState, useEffect } from 'react'

const TaskContext = createContext()

export const useTask = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTask must be used within a TaskProvider')
  }
  return context
}

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [currentDate, setCurrentDate] = useState(new Date())

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('pixel-todo-tasks')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('pixel-todo-tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now().toString(),
      text: taskText,
      completed: false,
      createdAt: new Date().toISOString(),
    }
    setTasks(prev => [...prev, newTask])
  }

  const toggleTask = (taskId) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === taskId 
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const deleteTask = (taskId) => {
    setTasks(prev => prev.filter(task => task.id !== taskId))
  }

  const getTodaysTasks = () => {
    const today = new Date().toDateString()
    return tasks.filter(task => 
      new Date(task.createdAt).toDateString() === today
    )
  }

  const getCompletionProgress = () => {
    const todaysTasks = getTodaysTasks()
    if (todaysTasks.length === 0) return 0
    const completedTasks = todaysTasks.filter(task => task.completed)
    return Math.round((completedTasks.length / todaysTasks.length) * 100)
  }

  const clearTodaysTasks = () => {
    const today = new Date().toDateString()
    setTasks(prev => prev.filter(task => 
      new Date(task.createdAt).toDateString() !== today
    ))
  }

  const value = {
    tasks,
    currentDate,
    addTask,
    toggleTask,
    deleteTask,
    getTodaysTasks,
    getCompletionProgress,
    clearTodaysTasks,
  }

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  )
}
