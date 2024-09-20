/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fly: "fly 2s ease-in-out infinite",
      },
      keyframes: {
        fly: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" }, // Başlangıç noktası
          "50%": { transform: "translate(50px, -50px) " }, // Yarım daire yukarı hareket
          "100%": { transform: "translate(0, 0) rotate(180deg)" }, // Aşağı iniş noktası
        },
      },
    },
  },
  plugins: [],
};
