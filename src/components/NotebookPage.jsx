const NotebookPage = ({ children, className = '' }) => {
  return (
    <div className={`relative bg-white border-2 border-pixel-dark-blue shadow-pixel ${className}`}>
      {/* Paper texture background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 24px,
            #D7D7D7 24px,
            #D7D7D7 25px
          )`
        }}
      ></div>
      
      {/* Red margin line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-300 opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8 pl-12">
        {children}
      </div>
      
      {/* Notebook holes */}
      <div className="absolute left-2 top-8 flex flex-col gap-8">
        <div className="w-3 h-3 bg-pixel-light-gray border border-pixel-dark-blue rounded-full"></div>
        <div className="w-3 h-3 bg-pixel-light-gray border border-pixel-dark-blue rounded-full"></div>
        <div className="w-3 h-3 bg-pixel-light-gray border border-pixel-dark-blue rounded-full"></div>
      </div>
    </div>
  )
}

export default NotebookPage
