/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        black: "#000000",
        blue: "#0066FF",
        orange: {
          300: "#FFBF68",
          400: "#FF9F1C",
          600: "#EA7120",
        },
        gray: {
          25: "#FBFBFB",
          50: "#F7F7F7",
          100: "#EEEEEE",
          200: "#E2E2E2",
          400: "#ABABAB",
          500: "#8A8A8A",
          600: "#636363",
          700: "#505050",
          800: "#323232",
        },
      },
      backgroundImage: {
        "orange-gradation-level":
          "linear-gradient(180deg, #FFBF68 0%, #FF9F1C 100%)",
        "orange-gradation-mission":
          "linear-gradient(0deg, var(--Primary-300, #FFBF68) 0%, var(--Primary-300, #FFBF68) 100%), linear-gradient(110deg, #FFE16E 0%, #FFBF68 53.83%)",
      },
      fontSize: {
        t1: ["1.5rem", { lineHeight: "2.25rem" }], //24px
        t2: ["1.25rem", { lineHeight: "1.75rem" }], //20px
        st: ["1.125rem", { lineHeight: "1.5rem" }], //18px
        b1: ["1rem", { lineHeight: "1.5rem" }], //16px
        b2: ["0.875rem", { lineHeight: "1.5rem" }], //14px
        btn1: ["1.125rem", { lineHeight: "1.5rem" }],
        btn2: ["1rem", { lineHeight: "1.25rem" }],
        btn3: ["0.875rem", { lineHeight: "1.25rem" }],
        btn4: ["0.75rem", { lineHeight: "1rem" }],
        c1: ["0.75rem", { lineHeight: "1rem" }],
        c2: ["0.6875rem", { lineHeight: "0.8125rem" }],
      },
      fontWeight: {
        semibold: 600,
        regular: 400,
      },
    },
  },
  plugins: [],
};
