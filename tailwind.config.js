/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode colors
        dark: {
          bg: '#0f0f0f',
          card: '#1a1a1a',
          border: '#2a2a2a',
        },
        // Light mode colors
        light: {
          bg: '#e8e8f5',
          card: '#ffffff',
          border: '#d0d0e0',
        },
        primary: {
          DEFAULT: '#7c3aed',
          light: '#a78bfa',
        },
        accent: {
          yellow: '#fbbf24',
          cyan: '#22d3ee',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
