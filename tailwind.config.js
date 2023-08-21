/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Cyan: 'hsl(180, 66%, 49%)',
        Dark_Violet:"hsl(257, 27%, 26%)",
        Red:"hsl(0, 87%, 67%)",
        Gray:"hsl(0, 0%, 75%)",
        Grayish_Violet:"hsl(257, 7%, 63%)",
        Very_Dark_Blue:"hsl(255, 11%, 22%)",
        Very_Dark_Violet:"hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
}