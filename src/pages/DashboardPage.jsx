import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTask } from '../context/TaskContext'
import MiniCalendar from '../components/MiniCalendar'
import ProgressBar from '../components/ProgressBar'
import PixelInput from '../components/PixelInput'
import PixelButton from '../components/PixelButton'

const DashboardPage = () => {
  const navigate = useNavigate()
  const { addTask, getCompletionProgress, getTodaysTasks } = useTask()
  const [taskInput, setTaskInput] = useState('')
  
  const progress = getCompletionProgress()
  const todaysTasks = getTodaysTasks()
  
  const handleAddTask = () => {
    if (taskInput.trim()) {
      addTask(taskInput.trim())
      setTaskInput('')
    }
  }
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleAddTask()
    }
  }
  
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-pixel text-pixel-dark-blue text-3xl font-bold mb-2">
            TODAY'S MISSION
          </h1>
          <p className="font-pixel text-pixel-medium-blue text-sm">
            Plan your day and track your progress
          </p>
        </div>
        
        {/* Top section with calendar and progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Mini Calendar */}
          <MiniCalendar currentDate={new Date()} />
          
          {/* Progress Bar */}
          <div className="bg-white border-2 border-pixel-dark-blue shadow-pixel p-4">
            <ProgressBar progress={progress} />
            <div className="mt-4 text-center">
              <span className="font-pixel text-pixel-dark-blue text-sm">
                {todaysTasks.length} tasks planned
              </span>
            </div>
          </div>
        </div>
        
        {/* Task Input Section */}
        <div className="bg-white border-2 border-pixel-dark-blue shadow-pixel p-6 mb-8">
          <h2 className="font-pixel text-pixel-dark-blue text-xl font-bold mb-4 text-center">
            ADD NEW TASK
          </h2>
          
          <div className="flex gap-2">
            <PixelInput
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What needs to be done today?"
              className="flex-1"
              autoFocus
            />
            <PixelButton
              onClick={handleAddTask}
              variant="primary"
              className="px-6"
              disabled={!taskInput.trim()}
            >
              +
            </PixelButton>
          </div>
          
          {/* Quick add suggestions */}
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {['Check emails', 'Exercise', 'Read for 30 min', 'Call mom'].map((suggestion) => (
              <PixelButton
                key={suggestion}
                onClick={() => setTaskInput(suggestion)}
                variant="outlined"
                size="small"
                className="text-xs"
              >
                {suggestion}
              </PixelButton>
            ))}
          </div>
        </div>
        
        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border-2 border-pixel-dark-blue shadow-pixel p-4 text-center">
            <div className="font-pixel text-pixel-orange text-2xl font-bold">
              {todaysTasks.length}
            </div>
            <div className="font-pixel text-pixel-dark-blue text-xs">
              TOTAL TASKS
            </div>
          </div>
          
          <div className="bg-white border-2 border-pixel-dark-blue shadow-pixel p-4 text-center">
            <div className="font-pixel text-pixel-medium-blue text-2xl font-bold">
              {todaysTasks.filter(t => t.completed).length}
            </div>
            <div className="font-pixel text-pixel-dark-blue text-xs">
              COMPLETED
            </div>
          </div>
          
          <div className="bg-white border-2 border-pixel-dark-blue shadow-pixel p-4 text-center">
            <div className="font-pixel text-pixel-orange text-2xl font-bold">
              {todaysTasks.filter(t => !t.completed).length}
            </div>
            <div className="font-pixel text-pixel-dark-blue text-xs">
              REMAINING
            </div>
          </div>
          
          <div className="bg-white border-2 border-pixel-dark-blue shadow-pixel p-4 text-center">
            <div className="font-pixel text-pixel-medium-blue text-2xl font-bold">
              {progress}%
            </div>
            <div className="font-pixel text-pixel-dark-blue text-xs">
              PROGRESS
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="text-center space-y-4">
          <PixelButton
            onClick={() => navigate('/tasks')}
            variant="secondary"
            size="large"
            className="px-8"
          >
            VIEW TASKS
          </PixelButton>
          
          <div>
            <PixelButton
              onClick={() => navigate('/')}
              variant="outlined"
              size="small"
            >
              ← BACK TO WELCOME
            </PixelButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
