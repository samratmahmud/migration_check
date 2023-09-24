import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "50": "#ffffff",
          "100": "#FCFCFD",
          "400": "#B1B5C3",
          "700": "#353945",
          "800": "#0A1436",
          "900": "#151620",
          "950": "#000E3E",
        },
        neutral: {"500": "#777E90", "400": "#F4F5F6", "600": "#353945"},
        amber: {"300": "#FFC75F", "200": "#FFDBE4"},
        pink: {
          "200": "#FF8C81",
          "400": "#FF6F91",
          "300": "#FFF1F4",
        },
        orange: {"500": "#FFAB70"},
        primary: {"400": "#FFF5F7"},
      },
      fontFamily: {
        inter: ["'Inter'", ...fontFamily.sans],
        "ibm-plex-sans": ["'IBM Plex Sans'", ...fontFamily.sans],
      },
    },
    fontSize: {
      xs: ["12px", {lineHeight: "12px"}],
      sm: ["14px", {lineHeight: "15px"}],
      md: ["16px", {lineHeight: "24px"}],
      base: ["20px", {lineHeight: "24px"}],
      lg: ["24px", {lineHeight: "36px"}],
      xl: ["32px", {lineHeight: "45px"}],
      "3xl": ["48px", {lineHeight: "58px"}],
      "4xl": ["64px", {lineHeight: "77px"}],
    },
    boxShadow: {
      sm: "0px 30px 60px rgba(31.52, 55.83, 85, 0.10)",
      md: "0px 8px 32px rgba(0, 0, 0, 0.04)",
      lg: "0px 16px 48px rgba(253.94, 153.43, 169.69, 0.15)",
      xl: "0px 12px 48px 0px rgba(0, 0, 0, 0.08)",
      "2xl": "0px 20px 40px rgba(63.61, 63.61, 113.51, 0.04)",
    },
    backgroundImage: {
      100: "linear-gradient(225deg, rgb(255 199 95) 0%, rgb(255 111 145) 100%)",
      200: "linear-gradient(225deg, rgb(255 199 95 / 10%) 0%, rgb(255 111 145 / 10%) 100%)",
      300: "linear-gradient(225deg, rgb(255 199 95 / 10%) 0%, rgb(255 111 145 / 10%) 100%)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
      },
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1150px",
    },
  },
  plugins: [],
};
export default config;
