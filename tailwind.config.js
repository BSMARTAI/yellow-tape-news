export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-tape': {
          500: '#FFD700',
          600: '#D4AF37',
        },
        'crime-red': {
          600: '#DC2626',
        },
        'memorial-purple': {
          500: '#8B5CF6',
        }
      }
    },
  },
  plugins: [],
}
