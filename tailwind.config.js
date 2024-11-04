/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "poppins" : ['poppins']
      },
      fontSize: {
        '18px': '18px'
      },
      colors : {
        "bgbiru" : '#2D76F9',
        "bgabu" : '#EEF4FF',
        "fontbiru" : '#2D76F9',
        "fontabu" : '#212121',
        "fontabu2" : '#747474'
      },
      borderWidth: {
        '1/2': '1.5px'
      },
      padding: {
        '100': '100px'
      }
    },
  },
  plugins: [],
}

