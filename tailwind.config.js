/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black20: "#525252",
        black40: "#303030",
        black60: "#1C1C1C",
        gray20: "#EBEBEB",
        gray100: "#8C8C8C",
        darkBg: "#323437",
        darkText: "#F3F4F6",
        darkPText: "#E5E7EB",
        darkTag: "#334155",
        darkInputBg: "#4a5260",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: { color: "text-red-500", marginBottom: 0 },
          },
        },
      },
      aspectRatio: {
        thumbnail: "344 / 250",
        contents: "1080 / 617",
      },
      keyframes: {
        drawerOpen: {
          "0%": { opacity: 0, transform: "translateX(-50%)" },
          "100%": { opacity: 1, transform: "translateX(0%)" },
        },
        drawerClose: {
          "0%": { opacity: 1, transform: "translateX(0%)" },
          "100%": { opacity: 0, transform: "translateX(-50%)" },
        },
      },
      animation: {
        drawerOpen: "drawerOpen 500ms ease-in-out forwards",
        drawerClose: "drawerClose 500ms ease-in-out forwards",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
