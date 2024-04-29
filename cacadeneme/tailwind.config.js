/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center: true,
    },
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


