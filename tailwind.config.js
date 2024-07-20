/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
  
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
      'alex': ['Alex Brush', 'sans-serif'] ,
      'font3':['Tangerine','sans-serif'],
      'font4':['Playwrite SK','sans-serif'],
      'font5':['Lora','sans-serif'],
      'handwritten':['Cedarville Cursive','sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

