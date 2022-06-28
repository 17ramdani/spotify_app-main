// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          spotify_main: '#1ED760',
          dark_main: '#0E0E0E',
          spotify_card: '#2B2B2B',
          spotify_card_hover: '#383838',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }