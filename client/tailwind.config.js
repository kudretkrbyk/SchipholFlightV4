/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fly: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translateX(40px) translateY(-20px)" },
          "50%": { transform: "translateX(80px) translateY(-40px)" },
          "75%": { transform: "translateX(120px) translateY(-20px)" },
          "90%": { transform: "translateX(160px) translateY(0)" },
        },
        reset: {
          "100%": { transform: "translateX(0) translateY(0)" },
        },
        toast: {
          "0%, 100%": { opacity: "0", transform: "translateX(100%)" },
          "10%, 90%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fly: "fly 4s ease-in forwards, reset 0.5s linear 4.5s",
        toast: "toast  ease-in-out",
      },
    },
  },
  plugins: [],
};
