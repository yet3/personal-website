exports.HEADER_NAV_ITEM_IN_DURATION = 250;
exports.HEADER_IN_DURATION = 300;
exports.BEFORE_WINDOW_DELAY = 100;
exports.WINDOW_IN_DURATION = 500;
exports.WINDOW_CONTENT_DELAY =
  exports.BEFORE_WINDOW_DELAY + exports.WINDOW_IN_DURATION + exports.HEADER_IN_DURATION;

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...module.exports,
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animationDuration: {
        400: "400ms",
        "window-in": this.WINDOW_IN_DURATION + "ms",
        "header-in": this.HEADER_IN_DURATION + "ms",
        "header-nav-item-in": this.HEADER_NAV_ITEM_IN_DURATION + "ms",
      },
      animationDelay: {
        50: "50ms",
        150: "150ms",
        "before-window": this.BEFORE_WINDOW_DELAY + "ms",
        "window-content": this.WINDOW_CONTENT_DELAY + "ms",
      },
      animationTimingFunction: {
        base: "ease",
      },
      colors: {
        white: "#ffffff",
        whitish: "#EFE5E5",
        accent: {
          DEFAULT: "#EB7D78",
          50: "#FADDDC",
          100: "#F8D3D1",
          200: "#F5BDBB",
          300: "#F2A8A4",
          400: "#EE928E",
          500: "#EB7D78",
          600: "#E44E47",
          700: "#D3271F",
          800: "#A31E18",
          900: "#721511",
        },
        gray: "#CFA6A5",
        dark: "#413534",
        "dark-text": "#584746",
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out 2",
        "fade-in-top-s": "fade-in-top-s 500ms ease forwards",
        "fade-in-top-m": "fade-in-top-m 500ms ease forwards",
        "fade-in-top-full": "fade-in-top-full 500ms ease forwards",

        "fade-in-bottom-s": "fade-in-bottom-s 500ms ease forwards",
        "fade-in-bottom-m": "fade-in-bottom-m 500ms ease forwards",
        "fade-in-bottom-full": "fade-in-bottom-full 500ms ease forwards",

        "fade-in-left-s": "fade-in-left-s 500ms ease forwards",
        "fade-in-left-m": "fade-in-left-m 500ms ease forwards",

        "fade-in-right-s": "fade-in-right-s 500ms ease forwards",
        "fade-in-right-m": "fade-in-right-m 500ms ease forwards",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },

        "fade-in-top-s": {
          "0%": { opacity: 0, transform: "translateY(-25%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },
        "fade-in-top-m": {
          "0%": { opacity: 0, transform: "translateY(-50%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },
        "fade-in-top-full": {
          "0%": { opacity: 0, transform: "translateY(-100%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },

        "fade-in-bottom-s": {
          "0%": { opacity: 0, transform: "translateY(25%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },
        "fade-in-bottom-m": {
          "0%": { opacity: 0, transform: "translateY(50%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },
        "fade-in-bottom-full": {
          "0%": { opacity: 0, transform: "translateY(100%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },

        "fade-in-left-s": {
          "0%": { opacity: 0, transform: "translateX(-25%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },
        "fade-in-left-m": {
          "0%": { opacity: 0, transform: "translateX(-50%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },

        "fade-in-right-s": {
          "0%": { opacity: 0, transform: "translateX(25%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },
        "fade-in-right-m": {
          "0%": { opacity: 0, transform: "translateX(50%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },
      },
    },
    screens: {
      "mob-m": "360px",
      "mob-l": "425px",
      sm: "640px",
      md: "868px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  varinats: {},
  plugins: [
    require("@yet3/tailwindcss-fluid-text")({
      screenMin: 375,
      screenMax: 1024,
    }),
    require("tailwindcss-animate"),
  ],
};
