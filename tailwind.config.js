/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'raisonne': ['raisonne', 'raisonnef'], // Use your first custom font name here
        'twenteith': ['twenteith', 'twenteith']
      },
      colors :{
        yellow : '#FCE373',
        pink : '#CCA69A',
        pinkk : '#F8B5B8',
        orange : '#F37449',
        lightOrange : '#F9A04E',
        purple : '#A385BD',
        bblack : '#231F20'
      }
    },
  },
  plugins: [],
}

