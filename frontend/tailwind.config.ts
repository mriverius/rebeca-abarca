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
        // Renacer del Alma Brand Palette
        champagne: {
          DEFAULT: '#F3EFE0', // Champagne Silk - Main Canvas
          light: '#FDFAF5',
        },
        rosegold: {
          DEFAULT: '#B76E79', // Rose Gold Dust - CTAs & Links
          light: '#C98892',
          dark: '#A65968',
        },
        sand: {
          DEFAULT: '#D7C49E', // Warm Sand - Structure & Dividers
          light: '#E5D8B8',
          dark: '#C9B688',
        },
        ebony: {
          DEFAULT: '#3D3D3D', // Ebony Mist - Primary Text
          light: '#5A5A5A',
          dark: '#2A2A2A',
        },
        cloud: {
          DEFAULT: '#FFFFFF', // Cloud White - Highlights
        },
        // Legacy support (can be removed after full migration)
        gold: {
          500: '#B76E79',
          600: '#A65968',
        },
        cream: {
          100: '#F3EFE0',
        },
        dark: {
          900: '#3D3D3D',
          800: '#5A5A5A',
        }
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'], // H1, H2
        tenor: ['var(--font-tenor)', 'sans-serif'], // H3, Accents
        lato: ['var(--font-lato)', 'sans-serif'], // Body, Nav
        sans: ['var(--font-lato)', 'sans-serif'], // Default
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
      backdropBlur: {
        xs: '2px',
      },
      letterSpacing: {
        widest: '0.3em',
      },
    },
  },
  plugins: [],
};

export default config;
