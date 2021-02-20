const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'media',
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Newsreader', ...fontFamily.sans]
      },
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        'accent-gray': '#2b2d42',
        'accent-redwood': '#D62828',
        'accent-orange': '#F77F00',
        'accent-caramel': '#FCBF49',
        'accent-lemon': '#EAE2B7',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
