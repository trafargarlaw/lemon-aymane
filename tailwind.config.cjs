/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      textColor: {
        paragraph: '#9197A0',
        title: '#1C2536',
      },
      backgroundImage: {
        'card-item':
          "url('https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg')",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-out': 'fadeOut 1s ease-in-out',
        'slide-left': 'slideLeft 1s ease-in-out',
        marquee: 'marquee 40s linear infinite',
        marquee2: 'marquee2 40s linear infinite',
        'marquee-reverse': 'marquee 40s linear reverse infinite',
        'marquee2-reverse': 'marquee2 40s linear reverse infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        marquee: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-100%,0,0)' },
        },
        marquee2: {
          '0%': { transform: 'translate3d(100%,0,0)' },
          '100%': { transform: 'translate3d(0%,0,0)' },
        },
      },
    },
  },
  plugins: [],
}
