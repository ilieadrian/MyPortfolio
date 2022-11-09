/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen: {
      xs: '400px', 
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        bgPrimary: 'rgb(249, 251, 252)',
        bgSecondary: 'rgb(55, 72, 72)',
        textSecondary: 'rgb(44, 58, 58)'
      },
      fontFamily: {
        body:['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}
