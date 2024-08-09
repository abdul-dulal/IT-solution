/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#686EE2",
        secondary: "#081845",
        base: "#191919",
      },
      screens: {
        xs: "620px",
        sm: "768px",
        md: "880px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1536px",
      },
      transitionProperty: {
        height: "height",
      },
      transitionTimingFunction: {
        "custom-ease": "cubic-bezier(0.25, 0.8, 0.25, 1)",
      },
      transitionDuration: {
        400: "400ms",
      },
      transitionDelay: {
        0: "0s",
      },
    },
  },
  plugins: [],
};
