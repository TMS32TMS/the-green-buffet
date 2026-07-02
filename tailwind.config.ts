import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Our custom brand colors
        brand: {
          // Primary greens
          forest: '#2D5A27',     // Deep, trustworthy green
          leaf: '#4A7C3F',       // Fresh, vibrant green
          fresh: '#7CB342',      // Light, energetic green
          // Accent
          warm: '#E67E22',       // Warm orange for CTAs
          // Neutrals
          cream: '#FAFAF7',      // Warm white background
          dark: '#1A1A1A',       // Near-black text
        },
      },
      fontFamily: {
        // We'll configure custom fonts later
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      spacing: {
        // Common restaurant website spacings
        'section': '5rem',       // Large section padding
        'section-sm': '3rem',    // Mobile section padding
      },
    },
  },
  plugins: [],
};

export default config;