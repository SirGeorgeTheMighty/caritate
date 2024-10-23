/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite-react/tailwind';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js', // Adaugă această linie pentru Flowbite
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#605678',
        secondary: '#8ABFA3',
        accent: '#FFBF61',
        lightAccent: '#FFE6A5',
      },
    },
  },
  plugins: [
    flowbite.plugin(), // Adaugă pluginul Flowbite
  ],
};
