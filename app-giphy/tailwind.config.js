/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0D1B2A',
        mint: '#3DDC97',
        light: '#E0E1DD',
        darkText: '#E0E1DD'
      }
    }
  },  
  plugins: [],
  extend: {
    colors: {
      navy: '#0D1B2A',
      darker: '#1B263B',
      mint: '#3DDC97',
      light: '#E0E1DD'
    }
  }  
}
