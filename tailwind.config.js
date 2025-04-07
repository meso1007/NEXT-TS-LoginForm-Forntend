/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ori_orange: '#FF6B35', 
        ori_blue: '#1E3A8A',
      },
    },
  },
  plugins: [],
}
