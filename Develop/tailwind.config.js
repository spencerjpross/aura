/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/layouts/**/*.{js,html,handlbars}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-section': "url('./public/imgs/background.png')",
      }
    },
  },
  plugins: [],
}
