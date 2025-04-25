import { Colors } from "./src/constants/Colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: {
          primary: Colors.light.primary,
          secondary: Colors.light.secondary,
          tertiary: Colors.light.tertiary,
          background: Colors.light.background,
          text: Colors.light.text,
        },
        dark: {
          primary: Colors.dark.primary,
          secondary: Colors.dark.secondary,
          tertiary: Colors.dark.tertiary,
          background: Colors.dark.background,
          text: Colors.dark.text,
        },
      },
    },
  },
  plugins: [],
};
