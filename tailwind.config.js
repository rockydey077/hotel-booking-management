/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      color1: "#2ECA7F",
      color2: "#FFBA00",
      color3: "#111111",
      color4: "#ffffff",
      color5: "#212121",
      color6: "#757575",
      color7: "#E0E0E0",
      color8: "#BDBDBD",
      color9: "#F3F3F3",
      color10: "#c62828",
      color11: "#FFBA00",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
