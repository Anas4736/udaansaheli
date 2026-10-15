/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        marigold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        nature: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        earth: {
          50: '#faf8f5',
          100: '#f5efe6',
          200: '#eadecf',
          300: '#dbc8b1',
          400: '#c7ab8e',
          500: '#b69071',
          600: '#9f785a',
          700: '#836048',
          800: '#6c4f3d',
          900: '#584134',
        }
      },
      fontFamily: {
        sans: ['Noto Sans', 'Segoe UI', 'Roboto', 'system-ui', 'sans-serif'],
        hindi: ['Noto Sans Devanagari', 'Mangal', 'Segoe UI', 'sans-serif']
      }
    },
  },
  plugins: [],
}
