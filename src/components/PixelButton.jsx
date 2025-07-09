const PixelButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'font-pixel border-2 shadow-pixel transition-all duration-100 active:shadow-none active:translate-x-1 active:translate-y-1 focus:outline-none'
  
  const variants = {
    primary: 'bg-pixel-orange border-pixel-dark-blue text-pixel-dark-blue hover:bg-orange-600',
    secondary: 'bg-pixel-medium-blue border-pixel-dark-blue text-white hover:bg-blue-600',
    outlined: 'bg-white border-pixel-dark-blue text-pixel-dark-blue hover:bg-pixel-light-gray',
  }
  
  const sizes = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  }
  
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed shadow-none translate-x-1 translate-y-1' 
    : ''
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default PixelButton
