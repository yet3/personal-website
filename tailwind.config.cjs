/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--color-accent)",
        "pinkish-brown": "var(--pinkish-brown)",
        shark: {
          DEFAULT: "var(--color-shark-700)",
          50: "var(--color-shark-50)",
          100: "var(--color-shark-100)",
          200: "var(--color-shark-200)",
          300: "var(--color-shark-300)",
          400: "var(--color-shark-400)",
          500: "var(--color-shark-500)",
          600: "var(--color-shark-600)",
          700: "var(--color-shark-700)",
          800: "var(--color-shark-800)",
          900: "var(--color-shark-900)",
        },
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@yet3/tailwindcss-fluid-text")({
      screenMin: 360,
      screenMax: 1200,
    }),
  ],
};
