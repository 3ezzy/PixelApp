const ProgressBar = ({ progress = 0, className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-pixel text-pixel-dark-blue">
          Daily Progress
        </span>
        <span className="text-sm font-pixel text-pixel-dark-blue">
          {progress}%
        </span>
      </div>
      <div className="w-full h-6 bg-pixel-light-gray border-2 border-pixel-dark-blue shadow-pixel-inset">
        <div 
          className="h-full bg-pixel-medium-blue transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        >
          {/* Pixel pattern overlay */}
          <div className="w-full h-full opacity-20 bg-repeat bg-contain" 
               style={{
                 backgroundImage: `repeating-linear-gradient(
                   90deg,
                   transparent,
                   transparent 2px,
                   rgba(255,255,255,0.3) 2px,
                   rgba(255,255,255,0.3) 4px
                 )`
               }}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
