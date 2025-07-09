import { useState } from 'react'
import { useTask } from '../context/TaskContext'
import PixelButton from './PixelButton'
import PixelConfirmModal from './PixelConfirmModal'

const TaskItem = ({ task, className = '' }) => {
  const { toggleTask, deleteTask } = useTask()
  const [isAnimating, setIsAnimating] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  
  const handleToggle = () => {
    setIsAnimating(true)
    setTimeout(() => {
      toggleTask(task.id)
      setIsAnimating(false)
    }, 150)
  }
  
  const handleDeleteClick = () => {
    setShowDeleteModal(true)
  }
  
  const handleConfirmDelete = () => {
    deleteTask(task.id)
    setShowDeleteModal(false)
  }
  
  const handleCancelDelete = () => {
    setShowDeleteModal(false)
  }
  
  return (
    <>
      <div className={`flex items-center gap-3 p-2 transition-all duration-200 ${
        isAnimating ? 'scale-105' : ''
      } ${task.completed ? 'opacity-75' : ''} ${className}`}>
        {/* Custom pixel checkbox */}
        <button
          onClick={handleToggle}
          className={`flex-shrink-0 w-6 h-6 border-2 border-pixel-dark-blue bg-white shadow-pixel-inset focus:outline-none focus:ring-2 focus:ring-pixel-orange transition-all duration-150 hover:scale-110 ${
            task.completed ? 'bg-pixel-orange' : ''
          }`}
        >
          {task.completed && (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white text-xs font-bold animate-pulse">✓</span>
            </div>
          )}
        </button>
        
        {/* Task text */}
        <span 
          className={`flex-1 font-pixel text-pixel-dark-blue transition-all duration-300 ${
            task.completed ? 'line-through opacity-60 text-pixel-medium-blue' : ''
          }`}
        >
          {task.text}
        </span>
        
        {/* Delete button */}
        <PixelButton
          onClick={handleDeleteClick}
          variant="outlined"
          size="small"
          className="text-red-600 hover:bg-red-50 opacity-70 hover:opacity-100"
        >
          ✕
        </PixelButton>
      </div>
      
      {/* Delete confirmation modal */}
      <PixelConfirmModal
        isOpen={showDeleteModal}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        title="DELETE TASK"
        message={`Are you sure you want to delete "${task.text}"? This action cannot be undone!`}
        confirmText="DELETE"
        cancelText="CANCEL"
      />
    </>
  )
}

export default TaskItem
