/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F0',
        peach: '#FDEBD0',
        blush: '#E8A0A0'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
