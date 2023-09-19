import type { Config } from 'tailwindcss';
// import tailwindDebugScreen from "tailwindcss-debug-screens";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      grey:'#D9D9D9',
      yellow:'#FFCB45',
      gray2:'#E3E3E3',
      navy: {
        100: '#D8F1FF',
        200: '#017AFF',
        300: '#0179FF',
        400: '#3050B8',
        500: '#10276C',
        600: '#1A2F7B',
        700: '#A7DFFF',
        800: '#F1F8FE',
      },
    },
    fontFamily: {
      switzer: ['Switzer', 'cursive'],
      itim: ['Itim', 'cursive'],
    },
  },
  plugins: [],
};
export default config;
