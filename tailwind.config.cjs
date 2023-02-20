const formsPlugin = require('@tailwindcss/forms')

/** @type {import('tailwindcss/types').Config} */
const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  experimental: {optimizeUniversalDefaults: true},
  plugins: [formsPlugin],
}
module.exports = config
