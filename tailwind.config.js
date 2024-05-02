/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgc: "var(--bgc)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        success: "var(--success)",
        textDark: "var(--textDark)",
        textLight: "var(--textLight)",
        shadow: "var(--shadow)",
      },
    },
  },
  plugins: [],
}

