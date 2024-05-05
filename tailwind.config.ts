import tailwindForms from '@tailwindcss/forms'
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: (/*theme*/) => ({
        /* --------------------------------
          Brand Palette
          For where color is just design.
        -------------------------------- */
        primary: colors.indigo,
        secondary: colors.blue,
        tertiary: colors.green,
        quaternary: colors.yellow,

        /* --------------------------------
          Bootstrap-inspired colors
          For where color has meaning
        -------------------------------- */
        success: colors.green,
        danger: colors.red,
        warning: colors.amber,
        info: colors.cyan
      })
    }
  },
  plugins: [tailwindForms]
} satisfies Config
