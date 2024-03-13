import { createThemes } from 'tw-colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx,html}",],
  theme: {
    extend: {
      colors: {
        text: "var(--color-text)",
        background: "var(--color-background)",
        card: "var(--color-card)",
        border: "var(--color-border)",
        bgHover: "var(--color-bg-hover)",
      },
    },
  },
  plugins: [],
  /*
  plugins: [
    createThemes({
      dark: {
        'bg': '#161718',
        'text': '#bfbfbf',
        'border': '#111111',
      },
      light: {
        'bg': '#eeeeee',
        'text': '#080808',
        'border': '#cccccc',
      }
    })
  ],
  */
}

