import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDF8EF',
          100: '#F5F0E6',
          200: '#F5D78E',
          300: '#FFD700',
          400: '#E6C200',
          500: '#D4AF37',
          600: '#C6A96C',
          700: '#B8960C',
          800: '#9A7D0A',
          900: '#7D6608',
        },
        cream: {
          50: '#FDFAF5',
          100: '#FDF8EF',
          200: '#F5F0E6',
        },
        dark: {
          900: '#1A1A1A',
          800: '#2A2A2A',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 3s linear infinite',
        'gradient': 'gradient-shift 8s ease infinite',
        'spin-slow': 'spin 60s linear infinite',
        'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-gold': {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
          },
          '50%': { 
            opacity: '0.8',
            boxShadow: '0 0 40px rgba(212, 175, 55, 0.8)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))',
          },
          '50%': { 
            filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.8))',
          },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
        '400%': '400% 400%',
      },
    },
  },
  plugins: [],
};

export default config;
