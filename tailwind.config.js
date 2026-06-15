/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand
        indigoInk: '#12183A',
        indigoInk2: '#1B2350',
        indigoInk3: '#2A3568',
        // Severity scale (choropleth)
        toofanRed: '#E4453A',
        toofanAmber: '#F2A33A',
        toofanGrey: '#9AA1B4',
        // Parent theme
        parentGreen: '#1E7A52',
        parentGreenSoft: '#E8F4EC',
        // Neutral surfaces / lines
        canvas: '#F6F7FB',
        surface: '#FFFFFF',
        line: '#E8EAF1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        ml: ['"Noto Sans Malayalam"', 'system-ui', 'sans-serif'],
        hi: ['"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        sheet: '0 -8px 30px rgba(18, 24, 58, 0.18)',
        card: '0 1px 2px rgba(18, 24, 58, 0.06), 0 1px 3px rgba(18, 24, 58, 0.10)',
        float: '0 8px 30px rgba(18, 24, 58, 0.12)',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
