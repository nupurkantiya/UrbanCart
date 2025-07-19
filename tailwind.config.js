// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   darkMode: "class",
//   theme: {
//     extend: {
//       colors: {
//         primary: "#4263eb",
//         secondary: "#63e6be",
//       },
//       container: {
//         center: true,
//         padding: {
//           DEFAULT: "1rem",
//           sm: "3rem",
//         },
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // ✅ Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        // 🌗 Custom color palette (feel free to change)
        primary: "#9c2452ff",      // Indigo-800
        secondary: "#10b972ff",    // Emerald-500
        light: "#fbfcfdff",        // Gray-100
        dark: "#111827",         // Gray-900
        accent: "#f59e0b",       // Amber-500
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
};



