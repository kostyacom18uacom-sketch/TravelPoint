/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'sp-black':    '#121212',
        'sp-surface':  '#181818',
        'sp-mid':      '#1f1f1f',
        'sp-card':     '#252525',
        'sp-green':    '#1ed760',
        'sp-green-b':  '#1db954',
        'sp-silver':   '#b3b3b3',
        'sp-border':   '#4d4d4d',
        'sp-light-b':  '#7c7c7c',
      },
      fontFamily: {
        spotify: [
          'SpotifyMixUI',
          'CircularSp-Cyrl',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      borderRadius: {
        pill:   '500px',
        full:   '9999px',
      },
      boxShadow: {
        card:   'rgba(0,0,0,0.3) 0px 8px 8px',
        heavy:  'rgba(0,0,0,0.5) 0px 8px 24px',
      },
    },
  },
  plugins: [],
}
