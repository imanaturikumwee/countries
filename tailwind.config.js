/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue-elem': 'hsl(209, 23%, 22%)',
      'dark-blue-bg': 'hsl(207, 26%, 17%)',
      'dark-blue-text': 'hsl(200, 15%, 8%)',
      'light-gray-bg' : 'hsl(0, 0%, 98%)',
      'dark-gray-inp' :'hsl(0, 0%, 52%)',
       'white' : "hsl(0, 0%, 100%)"


    },
    extend: {},
  },
  plugins: [],
}

