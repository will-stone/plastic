import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

import { palette } from './src/palette'

export default {
  content: ['./website/**/*.astro'],
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        body: {
          backgroundColor: palette.shark,
          color: palette.cadetBlue,
        },
        h1: {
          color: palette.sunglo,
          fontFamily: theme('fontFamily.comfortaa'),
          fontSize: theme('fontSize.5xl'),
          letterSpacing: theme('letterSpacing.widest'),
          textAlign: 'center',
        },
        h2: {
          color: palette.ghost,
          fontFamily: theme('fontFamily.comfortaa'),
          fontSize: theme('fontSize.4xl'),
        },
        h3: {
          fontFamily: theme('fontFamily.comfortaa'),
          fontSize: theme('fontSize.3xl'),
          textAlign: 'center',
        },
        hr: {
          borderColor: palette.bunker,
        },
      })
    }),
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: { ...palette },
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      comfortaa: ['Comfortaa', ...defaultTheme.fontFamily.sans],
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      lg: '1024px',
      md: '768px',
      sm: '640px',
    },
  },
}
