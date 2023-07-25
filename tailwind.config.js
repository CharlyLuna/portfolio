/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': 'var(--primary-red)',
        'primary-red-200': 'var(--primary-red-200)',
        'light-red': 'var(--secondary-red)'
      }
    }
  },
  plugins: []
}
