const MiniCalendar = ({ currentDate, className = '' }) => {
  const today = new Date()
  const monthNames = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ]
  
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  
  return (
    <div className={`bg-white border-2 border-pixel-dark-blue shadow-pixel p-4 ${className}`}>
      <div className="text-center">
        <div className="font-pixel text-pixel-dark-blue text-lg font-bold mb-2">
          {monthNames[today.getMonth()]} {today.getFullYear()}
        </div>
        <div className="font-pixel text-pixel-orange text-2xl font-bold mb-1">
          {today.getDate()}
        </div>
        <div className="font-pixel text-pixel-medium-blue text-sm">
          {dayNames[today.getDay()]}
        </div>
      </div>
      
      {/* Decorative pixel border */}
      <div className="mt-3 border-t-2 border-pixel-light-gray pt-2">
        <div className="flex justify-center">
          <div className="w-4 h-4 bg-pixel-orange border border-pixel-dark-blue"></div>
        </div>
      </div>
    </div>
  )
}

export default MiniCalendar
