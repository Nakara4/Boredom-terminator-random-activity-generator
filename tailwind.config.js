module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coral': '#FF6B6B',
        'teal': '#4ECDC4',
        'sunshine': '#FFE66D',
        'off-white': '#F7FFF7',
        'deep-gray': '#2D2D2D'
      },
      animation: {
        'dice-spin': 'spin 1s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    },
  },
  plugins: [],
}