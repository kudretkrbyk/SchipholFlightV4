/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fly: "fly 4s ease-in forwards, reset 0.5s linear 4.5s", // animasyon süresi, geri dönüş 4.5 saniyede başlayacak
      },
      keyframes: {
        fly: {
          "0%": { transform: "translate(0, 0)" }, // Başlangıç noktası
          "25%": { transform: "translateX(40px) translateY(-20px)" }, // Yarı yukarı hareket
          "50%": { transform: "translateX(80px) translateY(-40px)" }, // Tepe noktası
          "75%": { transform: "translateX(120px) translateY(-20px)" }, // Yarı aşağı iniş
          "90%": { transform: "translateX(160px) translateY(0)" }, // Bitirilen nokta
        },
        reset: {
          "100%": { transform: "translateX(0) translateY(0)" }, // Başlangıç noktasına hızlıca dön
        },
      },
    },
  },
  plugins: [],
};
