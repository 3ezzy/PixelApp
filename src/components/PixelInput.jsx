const PixelInput = ({ 
  value, 
  onChange, 
  onKeyDown,
  placeholder = '', 
  className = '',
  autoFocus = false,
  ...props 
}) => {
  const handleKeyDown = (e) => {
    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      autoFocus={autoFocus}
      className={`
        font-pixel
        w-full
        px-4
        py-2
        border-2
        border-pixel-dark-blue
        bg-white
        text-pixel-dark-blue
        placeholder-pixel-medium-blue
        shadow-pixel-inset
        focus:outline-none
        focus:ring-2
        focus:ring-pixel-orange
        focus:ring-offset-2
        transition-all
        duration-200
        ${className}
      `}
      {...props}
    />
  )
}

export default PixelInput
