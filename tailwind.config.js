module.exports = {
  purge: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"]
    },
    extend: {
      colors: {
        'uno-red-regular': '#FF5555',
        'uno-red-dark': '#E54C4C',
        
        red: {
          regular: '#FF5555',
          dark: '#E54C4C'
        },
        yellow: {
          regular: '#FFAA00',
          dark: '#E59900'
        },
        green: {
          regular: '#55AA55',
          dark: '#4C994C'
        },
        purple: {
          regular: '#5555FD',
          dark: '#4C4CE5'
        },
        gray: {
          light: '#FAFAFA',
          regular: '#D1D3D4',
          dark: '#BCBDBE' 
        }
      },
    }
  },
  variants: {},
  plugins: [],
}
