import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTask } from '../context/TaskContext'
import NotebookPage from '../components/NotebookPage'
import TaskItem from '../components/TaskItem'
import PixelButton from '../components/PixelButton'
import PixelConfirmModal from '../components/PixelConfirmModal'

const TaskListPage = () => {
  const navigate = useNavigate()
  const { getTodaysTasks, getCompletionProgress, clearTodaysTasks } = useTask()
  const [showCongrats, setShowCongrats] = useState(false)
  const [showFinishModal, setShowFinishModal] = useState(false)
  
  const todaysTasks = getTodaysTasks()
  const progress = getCompletionProgress()
  const allTasksCompleted = todaysTasks.length > 0 && progress === 100
  
  const handleFinishDay = () => {
    if (allTasksCompleted) {
      setShowCongrats(true)
      setTimeout(() => {
        clearTodaysTasks()
        navigate('/dashboard')
      }, 3000)
    } else {
      setShowFinishModal(true)
    }
  }
  
  const handleConfirmFinish = () => {
    setShowFinishModal(false)
    navigate('/dashboard')
  }
  
  const handleCancelFinish = () => {
    setShowFinishModal(false)
  }
  
  if (showCongrats) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-pixel-light-gray to-white">
        <div className="text-center max-w-md pixel-fade-in">
          <div className="bg-white border-2 border-pixel-dark-blue shadow-pixel p-8 relative overflow-hidden">
            {/* Confetti effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-pixel-orange animate-bounce`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random()}s`
                  }}
                ></div>
              ))}
            </div>
            
            <div className="relative z-10">
              <div className="text-6xl mb-4 pixel-pulse">🎉</div>
              <h1 className="font-pixel text-pixel-orange text-2xl font-bold mb-4">
                MISSION COMPLETE!
              </h1>
              <p className="font-pixel text-pixel-dark-blue mb-4 text-sm leading-relaxed">
                Outstanding work! You've conquered all your tasks for today!
              </p>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-pixel-orange border-2 border-pixel-dark-blue pixel-pulse">
                  <div className="w-full h-full flex items-center justify-center text-white font-pixel text-2xl">
                    ⭐
                  </div>
                </div>
              </div>
              <p className="font-pixel text-pixel-medium-blue text-xs">
                Redirecting you to a fresh start...
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="font-pixel text-pixel-dark-blue text-3xl font-bold mb-2">
            TODAY'S TASKS
          </h1>
          <p className="font-pixel text-pixel-medium-blue text-sm">
            Complete your daily mission
          </p>
        </div>
        
        {/* Progress indicator */}
        <div className="mb-6 text-center">
          <div className="bg-white border-2 border-pixel-dark-blue shadow-pixel p-4 inline-block">
            <span className="font-pixel text-pixel-dark-blue text-lg">
              {todaysTasks.filter(t => t.completed).length} / {todaysTasks.length} completed
            </span>
            <div className="mt-2">
              <div className="w-32 h-2 bg-pixel-light-gray border border-pixel-dark-blue mx-auto">
                <div 
                  className="h-full bg-pixel-medium-blue transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Task list in notebook page */}
        <NotebookPage className="mb-6 min-h-96">
          <div className="mb-4">
            <h2 className="font-pixel text-pixel-dark-blue text-xl font-bold mb-4">
              📝 Today's Tasks
            </h2>
            
            {todaysTasks.length === 0 ? (
              <div className="text-center py-8">
                <p className="font-pixel text-pixel-medium-blue mb-4">
                  No tasks for today yet!
                </p>
                <PixelButton
                  onClick={() => navigate('/dashboard')}
                  variant="primary"
                >
                  ADD SOME TASKS
                </PixelButton>
              </div>
            ) : (
              <div className="space-y-2">
                {todaysTasks.map((task) => (
                  <TaskItem 
                    key={task.id} 
                    task={task}
                    className="py-2 border-b border-pixel-light-gray last:border-b-0"
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Task stats */}
          {todaysTasks.length > 0 && (
            <div className="mt-8 pt-4 border-t-2 border-pixel-light-gray">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-pixel text-pixel-orange text-lg font-bold">
                    {todaysTasks.length}
                  </div>
                  <div className="font-pixel text-pixel-dark-blue text-xs">
                    TOTAL
                  </div>
                </div>
                <div>
                  <div className="font-pixel text-pixel-medium-blue text-lg font-bold">
                    {todaysTasks.filter(t => t.completed).length}
                  </div>
                  <div className="font-pixel text-pixel-dark-blue text-xs">
                    DONE
                  </div>
                </div>
                <div>
                  <div className="font-pixel text-pixel-orange text-lg font-bold">
                    {todaysTasks.filter(t => !t.completed).length}
                  </div>
                  <div className="font-pixel text-pixel-dark-blue text-xs">
                    LEFT
                  </div>
                </div>
              </div>
            </div>
          )}
        </NotebookPage>
        
        {/* Action buttons */}
        <div className="text-center space-y-4">
          {todaysTasks.length > 0 && (
            <PixelButton
              onClick={handleFinishDay}
              variant={allTasksCompleted ? "primary" : "secondary"}
              size="large"
              className="px-8"
            >
              {allTasksCompleted ? "🎉 FINISH DAY" : "FINISH DAY"}
            </PixelButton>
          )}
          
          <div className="flex justify-center gap-4">
            <PixelButton
              onClick={() => navigate('/dashboard')}
              variant="outlined"
              size="small"
            >
              ← DASHBOARD
            </PixelButton>
            
            <PixelButton
              onClick={() => navigate('/')}
              variant="outlined"
              size="small"
            >
              HOME
            </PixelButton>
          </div>
        </div>
        
        {/* Finish day confirmation modal */}
        <PixelConfirmModal
          isOpen={showFinishModal}
          onConfirm={handleConfirmFinish}
          onCancel={handleCancelFinish}
          title="FINISH DAY"
          message={`You still have ${todaysTasks.filter(t => !t.completed).length} uncompleted tasks. Are you sure you want to finish the day?`}
          confirmText="FINISH"
          cancelText="CONTINUE"
        />
      </div>
    </div>
  )
}

export default TaskListPage
