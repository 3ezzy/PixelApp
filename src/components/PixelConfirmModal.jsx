import PixelButton from './PixelButton'

const PixelConfirmModal = ({ 
  isOpen, 
  onConfirm, 
  onCancel, 
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "YES",
  cancelText = "NO"
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-pixel-dark-blue bg-opacity-75"
        onClick={onCancel}
      ></div>
      
      {/* Modal */}
      <div className="relative z-10 bg-white border-4 border-pixel-dark-blue shadow-pixel max-w-sm w-full pixel-fade-in">
        {/* Header */}
        <div className="bg-pixel-orange border-b-2 border-pixel-dark-blue p-4">
          <h3 className="font-pixel text-pixel-dark-blue text-lg font-bold text-center">
            {title}
          </h3>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="font-pixel text-pixel-dark-blue text-sm leading-relaxed text-center mb-6">
            {message}
          </p>
          
          {/* Action buttons */}
          <div className="flex gap-3 justify-center">
            <PixelButton
              onClick={onCancel}
              variant="outlined"
              size="medium"
              className="px-6"
            >
              {cancelText}
            </PixelButton>
            <PixelButton
              onClick={onConfirm}
              variant="primary"
              size="medium"
              className="px-6 bg-red-500 border-red-700 text-white hover:bg-red-600"
            >
              {confirmText}
            </PixelButton>
          </div>
        </div>
        
        {/* Decorative pixel corners */}
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-pixel-dark-blue"></div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-pixel-dark-blue"></div>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pixel-dark-blue"></div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-pixel-dark-blue"></div>
      </div>
    </div>
  )
}

export default PixelConfirmModal
