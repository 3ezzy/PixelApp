import { useNavigate } from 'react-router-dom'
import PixelButton from '../components/PixelButton'

const WelcomePage = () => {
  const navigate = useNavigate()
  
  const inspirationalQuotes = [
    "Every great journey begins with a single step! 🚀",
    "Today is the perfect day to make progress! ⭐",
    "Small tasks, big dreams, endless possibilities! 💫",
    "Your future self will thank you for starting today! 🌟",
    "Transform your dreams into daily actions! ✨"
  ]
  
  const randomQuote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)]
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* Pixel art background pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-conic-gradient(
              from 0deg at 50% 50%,
              #FE7743 0deg 45deg,
              transparent 45deg 90deg,
              #447D9B 90deg 135deg,
              transparent 135deg 180deg
            )`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Main content */}
        <div className="relative z-10">
          {/* Notebook illustration */}
          <div className="mb-8">
            <div className="relative mx-auto w-48 h-64 bg-white border-4 border-pixel-dark-blue shadow-pixel transform rotate-3">
              {/* Notebook cover */}
              <div className="absolute inset-2 bg-pixel-orange border-2 border-pixel-dark-blue">
                {/* Title area */}
                <div className="p-4 text-center">
                  <div className="font-pixel text-pixel-dark-blue text-lg font-bold mb-2">
                    PIXEL
                  </div>
                  <div className="font-pixel text-pixel-dark-blue text-lg font-bold">
                    TODO
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between">
                    <div className="w-4 h-4 bg-pixel-dark-blue"></div>
                    <div className="w-4 h-4 bg-pixel-dark-blue"></div>
                    <div className="w-4 h-4 bg-pixel-dark-blue"></div>
                  </div>
                </div>
              </div>
              
              {/* Spiral binding */}
              <div className="absolute -left-1 top-4 bottom-4 w-2 flex flex-col justify-around">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-pixel-medium-blue border border-pixel-dark-blue rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Inspirational quote */}
          <div className="mb-8 p-6 bg-white border-2 border-pixel-dark-blue shadow-pixel">
            <p className="font-pixel text-pixel-dark-blue text-lg leading-relaxed">
              {randomQuote}
            </p>
          </div>
          
          {/* Start button */}
          <PixelButton
            onClick={() => navigate('/dashboard')}
            variant="primary"
            size="large"
            className="text-xl px-8 py-4"
          >
            START JOURNEY
          </PixelButton>
          
          {/* Welcome text */}
          <div className="mt-6">
            <h1 className="font-pixel text-pixel-dark-blue text-2xl font-bold mb-2">
              PIXEL TODO
            </h1>
            <p className="font-pixel text-pixel-medium-blue text-sm">
              Your retro productivity companion
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
