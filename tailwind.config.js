/** @type {import("tailwindcss").Config} */
module.exports = {
  // 다크모드를 위해
  darkMode : "class",
  //pages와 src 하위 파일에 대해서 tailwindCSS를 사용할 수 있게 해준다. 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pt : ["PT Serif", "serif"],
        sans: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}