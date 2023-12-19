/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        // default value
        'card-md': '840px',
        'card-lg': '1068px',
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
}