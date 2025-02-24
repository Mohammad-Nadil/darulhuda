/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#F1C152",
        darkBg: "#1E2125"
      },
      fontFamily: {
        bangla: ["Noto Sans Bengali", "Hind Siliguri", "sans-serif"],
      },
    },
  },
  plugins: [],
};
