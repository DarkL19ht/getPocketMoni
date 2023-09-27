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
        'custom-image': "url('/public/var')",
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
      grey: '#D9D9D9',
      gray: '#F7F7F7',
      mob: '#F8FAFF',
      gray2: '#E3E3E3',
      grey2: '#3F3F3F',
      blade: '#232323',
      gold: '#DAA520',
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
      red: {
        50: '#ffebee',
        100: '#ffcdd2',
        200: '#ef9a9a',
        300: '#e57373',
        500: '#f44336',
      },
      yellow: {
        50: '#fffde7',
        100: '#fff9c4',
        200: '#ff59d',
        300: '#fff176',
        500: '#ffeb3b',
        600: '#fdd835',
      },
      green: {
        50: '#ecfdf5',
        200: '#a7f3d0',
        600: '#16a34a',
      },
    },
    fontFamily: {
      switzer: ['Switzer', 'cursive'],
      itim: ['Itim', 'cursive'],
      caveat: ['Caveat', 'cursive'],
    },
  },
  plugins: [],
};
export default config;
