// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        boska: ['Boska', 'sans-serif'],
        overused: ['Overused', 'sans-serif'],
        jetbrain: ['JettBrain', 'sans-serif'],
      },
      colors: {
        primary: '#03122B',
        importantcolor: '#51D2B9',
        // secblue: '#51D2B9"',
        importanttextcolor: '#DEE9F7',
        textcolor: '#8993B0',
      },
    },
  },
  plugins: [],
};
