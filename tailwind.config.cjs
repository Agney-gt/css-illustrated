/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  safelist: [
    // Ensure common bg color shades are generated for interactive use
    // Matches e.g. bg-red-100 .. bg-red-900 for the listed color names
    {
      pattern: /bg-(red|orange|yellow|green|teal|blue|indigo|purple|pink|gray)-(?:100|200|300|400|500|600|700|800|900)$/,
    },
    // Explicitly include problematic shades that were rendering as black
    'bg-red-200', 'bg-red-700', 'bg-red-800',
    'bg-orange-100', 'bg-orange-200', 'bg-orange-700', 'bg-orange-800', 'bg-orange-900',
    'bg-yellow-300', 'bg-yellow-600', 'bg-yellow-700', 'bg-yellow-800', 'bg-yellow-900',
    'bg-green-200',
    'bg-teal-100', 'bg-teal-200', 'bg-teal-300', 'bg-teal-400', 'bg-teal-600', 'bg-teal-700', 'bg-teal-800', 'bg-teal-900',
    'bg-indigo-100', 'bg-indigo-200',
    'bg-purple-200', 'bg-purple-700', 'bg-purple-800', 'bg-purple-900',
    'bg-pink-100', 'bg-pink-200', 'bg-pink-700', 'bg-pink-800', 'bg-pink-900',
    'bg-gray-400', 'bg-gray-700', 'bg-gray-800', 'bg-gray-900',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};