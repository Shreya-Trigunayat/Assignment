module.exports = {
  theme: {
    extend: {
      animation: {
        scaleIn: 'scaleIn 1s ease-in-out infinite',
      },
      keyframes: {
        scaleIn: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
};


