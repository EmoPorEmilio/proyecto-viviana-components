const mainTheme = {
  extend: {
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(0deg)' },
        '25': { transform: 'rotate(3deg)' },
        '50%': { transform: 'rotate(0deg)' },
        '75': { transform: 'rotate(-3deg)' },
      },
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
    },
    fontFamily: {
      jost: ['Jost', 'sans-serif'],
      sen: ['Sen', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      'bg-100': '#3B5260',
      'bg-200': '#293E4B',
      'bg-300': '#24313a',
      'bg-400': '#1D272E',
      'accent-200': '#FFB2D7',
      'accent-300': '#FF88C0',
      'accent-500': '#DF5C9A',
      white: '#FFFFFF',
      'gray-100': '#C0C6CA',
      'gray-200': '#A2AEB4',
      'primary-100': '#D9F2FF',
      'primary-200': '#D0E9F5',
      'primary-300': '#ADCCDC',
      'primary-500': '#75ABC7',
      'primary-600': '#58748B',
      'primary-700': '#4F6D85',
      'primary-800': '#4C6477',
      'success-100': '#E5FFF3',
      'success-400': '#C2FFC8',
      'success-600': '#559D87',
      'danger-100': '#FFE5E5',
      'danger-400': '#FF8787',
      'danger-600': '#9D5555',
    },
    dropShadow: {
      logo: '2px 1px #DF5C9A',
      'title-primary': '0 4px #58748B',
      'title-card': '0px 2px #4C6477',
    },
    boxShadow: {
      'primary-chip': '0px 1px #75ABC7',
      card: '0px 2px 20px -10px #DF5C9A',
    },
  },
}

export { mainTheme };