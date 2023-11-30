import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./page_structure/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      nunitoSans: ["Nunito Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      robotoMono: ["Roboto Mono", "monospace"],
      roboto: ["Roboto", "sans-serif"],
      mont: ["Montserrat", "sans-serief"],
      openSans: ["Open Sans", "sans-serief"],
      ubuntu: ["Ubuntu", "sans-serief"],
    },

    extend: {
      screens: {
        sm: "300px",
        md: "600px",
        lg: "1023px",
      },
      colors: {
        lightGray: "#6c757d",
        black: "#000000",
        yellow: "#ffd60a",
        darkOrange: "#fb5607",
        darkBlue: "#03045e",
        blueShade: "#caf0f8",
        white: "#ffffff",
        redPink: "#ff0054",
        pinkShade: "#ffeef2",
        darkPurple: "#3c096c",
        purple: "#7b2cbf",
        green: "#007200",
        chickenColor: "#ffe0e9",
        fishColor:'#c9e3ff'
      },
    },
  },
  plugins: [],
};
export default config;
