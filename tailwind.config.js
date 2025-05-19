/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Mono', 'JetBrains Mono', 'Source Code Pro', 'Menlo', 'monospace'],
      },
      colors: {
        navy: {
          900: '#0a192f',
          800: '#112240',
          700: '#233554',
        },
        blue: {
          500: '#3ec6ff',
          400: '#5ee2ff',
        },
        gray: {
          100: '#f5f7fa',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
        },
        white: '#ffffff',
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        code: {
          green: '#39ff14',
          cyan: '#00eaff',
          purple: '#a259f7',
          yellow: '#ffe066',
          bg: '#181c23',
          accent: '#23272e',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};