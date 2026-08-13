/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: '#6D4DE0',
        violet: '#8B5CF6',
        teal: '#1FC7C0',
        tealLight: '#3AD9C9',
        ink: '#141833',
        muted: '#5C6478',
        grayLight: '#8A90A3',
        bgTop: '#F4F2FF',
        bgMid: '#EEF2FF',
        bgBot: '#EAF9F7',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(100deg, #6D4DE0, #1FC7C0)',
      },
      boxShadow: {
        'card': '0 20px 50px -18px rgba(80, 60, 200, 0.25)',
        'btn-primary': '0 14px 30px -10px rgba(109, 77, 224, 0.55)',
        'btn-ghost': '0 4px 14px -6px rgba(20, 24, 51, 0.15)',
        'podium': '0 30px 60px -20px rgba(109, 77, 224, 0.45), inset 0 2px 0 #fff',
        'card-hover': '0 24px 44px -18px rgba(109, 77, 224, 0.35)',
        'glow-indigo': '0 0 40px rgba(109, 77, 224, 0.3)',
      }
    },
  },
  plugins: [],
}
