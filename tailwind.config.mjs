/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  /* primitives - color */
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      orange: {
        950: "rgba(25, 9, 0, 1)",
        900: "rgba(51, 18, 0, 1)",
        800: "rgba(102, 36, 1, 1)",
        700: "rgba(154, 54, 0, 1)",
        600: "rgba(204, 71, 1, 1)",
        500: "rgba(255, 89, 0, 1)",
        400: "rgba(255, 121, 51, 1)",
        300: "rgba(255, 156, 102, 1)",
        200: "rgba(255, 189, 152, 1)",
        100: "rgba(255, 222, 204, 1)",
        50: "rgba(255, 238, 229, 1)",
      },
      beige: {
        950: "rgba(34, 19, 12, 1)",
        900: "rgba(68, 38, 25, 1)",
        800: "rgba(132, 73, 45, 1)",
        700: "rgba(193, 114, 77, 1)",
        600: "rgba(217, 168, 145, 1)",
        500: "rgba(240, 221, 212, 1)",
        400: "rgba(243, 227, 221, 1)",
        300: "rgba(246, 234, 229, 1)",
        200: "rgba(249, 240, 235, 1)",
        100: "rgba(251, 249, 247, 1)",
        50: "rgba(254, 252, 251, 1)",
      },
      lightbeige: "#FFEEE5",
      white: "#fff",
      black: "#000",
    },
    extend: {
      spacing: {
        xxs: "8px",
        xs: "18px",
        s: "24px",
        sm: "32px",
        m: "40px",
        ml: "48px",
        lg: "64px",
        xl: "80px",
        "2xl": "96px",
        "3xl": "112px",
        "4xl": "128px",
        "5xl": "142px",
        "6xl": "208px",
        "7xl": "232px",
        "8xl": "298px",
        "9xl": "340px",
        "10lx": "440px",
      },
      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        display: ["Courier", "monospace"] /* eksempel på ekstra font */,
      },

      /* Tilføj dit typografiske hierarki herunder */
      fontSize: {
        base: ["1rem", { lineHeight: "1.5rem" }],
        body: ["1.25rem", { lineHeight: "1.563rem" }],
        xsmall: ["0.5rem", { lineHeight: "0.75rem" }],
        small: ["0.75rem", { lineHeight: "1rem" }],
        medium: ["0.875rem", { lineHeight: "0.1.125rem" }],
        large: ["1.125rem", { lineHeight: "1.375rem" }],
        xlarge: ["1.5rem", { lineHeight: "1.75rem" }],
        "2xlarge": ["2rem", { lineHeight: "2.25rem" }],
        "3xlarge": ["2.5rem", { lineHeight: "2.75rem" }],
        "4xlarge": ["3rem", { lineHeight: "3.25rem" }],
        "5xlarge": ["3.625rem", { lineHeight: "3.875rem" }],
        "6xlarge": ["5.875rem", { lineHeight: "6.125rem" }],
      },
      // 6xlarge 94px - linehigh 98
      // 5xlarge: 58 px - linehigh 62px
      // 4xlarge: 48 px - linehigh 52px
      // 3xlarge: 40 px - linehigh 44px
      // 2xlarge: 32 px - linehigh 36px
      // Xlarge: 24 px - linehigh 28px
      // large: 18 px - linehigh 22px
      // medium: 14 px - linehigh 18px
      // small: 12 px - linehigh 16 px
      // xsmall: 8 px - linehigh 12 px
      // Body: 20px - linehigh 24px

      fontWeight: {
        regular: "400",
        Bold: "700",
      },
      borderWidth: {
        DEFAULT: "2px",
        0: "0px",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        10: "10px",
      },
      borderRadius: {
        DEFAULT: "24px",
        none: "0px",
        sm: "10px",
        md: "34px",
        lg: "44px",
        full: "9999px",
      },
      boxShadow: {
        drop25: "0px 4px 4px 0px rgba(76, 73, 65, 0.25)", //* x y blur spread farve / 25% opacity */,
        drop50: "4px 4px 4px 0px rgba(76, 73, 65, 0.50)", // * x y blur spread farve / 50% opacity */,
        inner25: "inset 0px 4px 4px 0px rgba(222, 220, 216, 0.25)", // * x y blur spread farve / 25% pacity */,
        inner50: "inset 0px 4px 4px 0px rgba(222, 220, 216, 0.50)", //* x y blur spread farve / 50% opacity */,
      },

      // ***** her skal de sidste to lukke knapper være *****//
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],

  keyframes: {
    bounce: {
      "0%, 100%": { transform: "translateY(-10px)", animationTimingFunction: "ease-in-out" },
      "50%": { transform: "translateY(0)", animationTimingFunction: "ease-in-out" },
    },
  },
  animation: {
    bounce: "bounce 1s infinite",
  },
};
