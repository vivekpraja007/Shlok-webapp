/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ea580c", // orange-600
        "primary-hover": "#c2410c", // orange-700
        secondary: "#9a3412", // orange-800
      },
      spacing: {
        section: "2rem",
        container: "1rem",
      },
      borderRadius: {
        container: "0.75rem",
      },
      fontFamily: {
        sans: [
          "Inter Variable",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
