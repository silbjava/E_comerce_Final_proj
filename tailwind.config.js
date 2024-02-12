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
        px12: '0.75rem',
        px16: '1rem',
        px18: '1.125rem',
        xl: '1.25rem',
      },
      lineHeight: {
        '14.5': '0.9075rem',
        '24.2': '1.5125rem',
        '21.7': '1.36125rem',
        '19.36': '1.21rem'
      },
      boxShadow: {
        'card': '0 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}