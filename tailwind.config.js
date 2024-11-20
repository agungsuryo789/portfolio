/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
      },
      boxShadow: {
        gradient:
          "0 0 20px rgba(222, 106, 18, 0.5), 0 0 30px rgba(0, 204, 255, 0.5)",
      },
      animation: {
        typing: "typing 4s steps(40) 1s 1 normal both",
        blink: "blink 0.75s step-end infinite",
        dim: "dimLight 2s infinite",
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%": { borderColor: "transparent" },
          "50%": { borderColor: "black" },
          "100%": { borderColor: "transparent" },
        },
        dim: {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(222, 106, 18, 0.5), 0 0 30px rgba(0, 204, 255, 0.5)",
          },
          "50%": {
            boxShadow:
              "0 0 30px rgba(222, 106, 18, 0.8), 0 0 40px rgba(0, 204, 255, 0.8)",
          },
        },
      },
    },
  },
  plugins: [],
};
