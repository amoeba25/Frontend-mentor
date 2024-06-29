/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')  
export default {
  content: [
    "./index.html",
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
        strongCyan : 'hsl(172, 67%, 45%)',
        veryDarkCyan: 'hsl(183, 100%, 15%)',
        darkGrayishCyan: 'hsl(186, 14%, 43%)',
        grayishCyan : 'hsl(184, 14%, 56%)',
        lightGrayishCyan: 'hsl(185, 41%, 84%)',
        veryLightGrayishCyan : 'hsl(189, 41%, 97%)',
        white : 'hsl(0, 0%, 100%)'
      }
    },
    fontFamily: {
      'sans': ['"Space Mono"', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [],
}

