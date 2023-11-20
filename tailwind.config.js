/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
}