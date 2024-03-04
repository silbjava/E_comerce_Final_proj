/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      fontSize: {
        px10: '0.625rem',
        px12: '0.75rem',
        px14: '0.875rem',
        px16: '1rem',
        px18: '1.125rem',
        xl: '1.25rem',
        px24: '1.5rem',
        px30: '1.875rem',
        px32: '2rem',
        px40: '2.5rem',
      },
      lineHeight: {
        '14.5': '0.9075rem',
        '16.94': '1.05875rem',
        '19.36': '1.21rem',
        '21.7': '1.36125rem',
        '24.2': '1.5125rem',
        '29.05': '1.815625rem',
        '36.3': '2.26875rem',
        '38.7': '2.41875rem',
        '48.4': '3.025625rem'      
      },
      boxShadow: {
        'card': '0 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      screens:{
        'sl': '321px'
      },
      borderWidth: {
        default: '1px'
      },

    },
    listStyleImage: {
      elipse: 'url("src/assets/Elipse.png")',
      elipseCol: 'url("src/assets/ElipseCol.png")'
    },
    listStyleType:{
      circle: 'circle',
    },
  },

}