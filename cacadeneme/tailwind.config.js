/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center:true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }},
    extend: {
      colors:{
        "header-color":"#0E46A3",
        "find-color":"#202528",
      },
      backgroundImage: {
        //  'main-image':"url('./public/img/header-img.jpg')",
      }
    },
  },
  plugins: [],
}


