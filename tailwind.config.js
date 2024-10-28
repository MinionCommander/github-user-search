/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        primary: '#0079FF',
        lightGray: '#697C9A',
        mediumGray: '#4B6A9B',
        darkGray: '#2B3442',
        lightBlue: '#F6F8FF',
        white: '#FEFEFE',

        // Dark Mode Colors
        darkBlue: '#141D2F',
        mediumBlue: '#1E2A47',
        darkModePrimary: '#0079FF',
        darkWhite: '#FFFFFF',
      },
    },
    fontFamily: {
      mono: ['Space Mono', 'monospace'],
    },
    fontSize: {
      // Typography from design system
      h1: ['26px', '38px'],
      h2: ['22px', '33px'],
      h3: ['16px', '24px'],
      h4: ['13px', '20px'],
      body: ['15px', '25px'],
    },
  },
  plugins: [],
};
