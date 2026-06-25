/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        academic: {
          abyss: '#0b0a09',
          parchment: '#f5f2eb',
          muted: '#dcd7ca',
          ink: '#2c2520'
        }
      },
      fontFamily: {
        serifDisplay: ['Cinzel', 'serif'],
        serifBody: ['Playfair Display', 'serif'],
        sansCore: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}