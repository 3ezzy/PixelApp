/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pixel-orange': '#FE7743',
        'pixel-dark-blue': '#273F4F',
        'pixel-medium-blue': '#447D9B',
        'pixel-light-gray': '#D7D7D7',
      },
      fontFamily: {
        'pixel': ['monospace', 'ui-monospace', 'SFMono-Regular'],
      },
      boxShadow: {
        'pixel': '4px 4px 0px 0px rgba(0, 0, 0, 0.3)',
        'pixel-inset': 'inset 2px 2px 0px 0px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

