/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')  

export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      xl: '1440px'
    }, 
    extend: {
      colors: {
        lightCyan : 'hsl(193, 38%, 86%)', 
        neonGreen : 'hsl(150, 100%, 66%)',
        grayishBlue : 'hsl(217, 19%, 38%)', 
        darkGrayishBlue : 'hsl(217, 19%, 24%)',
        darkBlue : 'hsl(218, 23%, 16%)'

      },
      fontFamily: {
        'sans': ['"Manrope"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

