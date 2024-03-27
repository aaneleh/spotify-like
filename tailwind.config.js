/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/index.js",
    "./components/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      'black': {
        50: '#ffffff',
        100:'#b3b3b3',
        500:'#282828',
        700:'#181818',
        800:'#121212',
        1000:'#000000',
      },
      'green': '#1ed760'
    }
  },
  plugins: [],
}

