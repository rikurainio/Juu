/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx,html}",];
export const theme = {
  extend: {
    colors: {
      text: "var(--color-text)",
      background: "var(--color-background)",
      card: "var(--color-card)",
      border: "var(--color-border)",
      bgHover: "var(--color-bg-hover)",
    },
  },
};