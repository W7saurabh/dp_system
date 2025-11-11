import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Red - Power & Innovation
        primary: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',    // DEFAULT
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          DEFAULT: '#DC2626',
        },
        // Secondary Black - Sophistication & Depth
        secondary: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
          DEFAULT: '#000000',
        },
        // Accent Grey - Balance & Neutrality
        accent: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',    // DEFAULT
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          DEFAULT: '#6B7280',
        },
        // Semantic colors
        success: {
          light: '#D1FAE5',
          DEFAULT: '#10B981',
          dark: '#047857',
        },
        warning: {
          light: '#FEF3C7',
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
        error: {
          light: '#FEE2E2',
          DEFAULT: '#EF4444',
          dark: '#DC2626',
        },
        info: {
          light: '#DBEAFE',
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
        },
      },
      fontFamily: {
        primary: ['var(--font-inter)', 'sans-serif'],
        secondary: ['var(--font-poppins)', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',   // 72px for logo sizing
        '22': '5.5rem',   // 88px for logo sizing
      },
      animation: {
        // Fade animations
        'fadeIn': 'fadeIn 0.6s ease-out',
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'fadeInDown': 'fadeInDown 0.6s ease-out',
        'fadeInLeft': 'fadeInLeft 0.6s ease-out',
        'fadeInRight': 'fadeInRight 0.6s ease-out',
        // Scale animations
        'scaleIn': 'scaleIn 0.5s ease-out',
        'scaleUp': 'scaleUp 0.3s ease-out',
        // Rotate animations
        'spin-slow': 'spin 3s linear infinite',
        // Bounce animations
        'bounce-slow': 'bounce 2s infinite',
        // Pulse animations
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        // Slide animations
        'slideInLeft': 'slideInLeft 0.6s ease-out',
        'slideInRight': 'slideInRight 0.6s ease-out',
        // Floating animation
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'primary': '0 10px 15px -3px rgba(220, 38, 38, 0.25)',
        'secondary': '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
        'red': '0 10px 15px -3px rgba(220, 38, 38, 0.25)',
        'black': '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;

