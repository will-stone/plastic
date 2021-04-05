const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

const palette = require('../palette')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      comfortaa: ['Comfortaa', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: { ...palette },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        body: {
          backgroundColor: palette.shark,
          color: palette.cadetBlue,
        },
        h1: {
          fontFamily: theme('fontFamily.comfortaa'),
        },
        h2: {
          fontFamily: theme('fontFamily.comfortaa'),
        },
        h3: { fontFamily: theme('fontFamily.comfortaa') },
        hr: {
          borderColor: palette.bunker,
        },
      })
    }),
  ],
}
