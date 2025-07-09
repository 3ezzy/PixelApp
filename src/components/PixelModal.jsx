import { useEffect } from 'react'
import PixelButton from './PixelButton'

const PixelModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = "Confirm Action", 
  message = "Are you sure?",
  confirmText = "Yes",
  cancelText = "No",
  icon = "⚠️"
}) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative mx-4 w-full max-w-md">
        {/* Modal Content */}
        <div className="relative bg-white border-2 border-pixel-dark-blue shadow-pixel transform transition-all duration-300 animate-bounce-in">
          {/* Paper texture background */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 24px,
                #D7D7D7 24px,
                #D7D7D7 25px
              )`
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{icon}</span>
              <h2 className="font-pixel text-lg text-pixel-dark-blue">
                {title}
              </h2>
            </div>
            
            {/* Message */}
            <div className="mb-6">
              <p className="font-pixel text-sm text-pixel-dark-blue leading-relaxed">
                {message}
              </p>
            </div>
            
            {/* Actions */}
            <div className="flex gap-3 justify-end">
              <PixelButton
                onClick={onClose}
                variant="outlined"
                size="small"
                className="min-w-[80px]"
              >
                {cancelText}
              </PixelButton>
              <PixelButton
                onClick={onConfirm}
                variant="primary"
                size="small"
                className="min-w-[80px] bg-red-500 hover:bg-red-600 border-red-700 text-white"
              >
                {confirmText}
              </PixelButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PixelModal