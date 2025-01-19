const themes = {
  dark: {
    primary: {
      500: '#D81E5B',  // your current primary color
    },
    background: {
      DEFAULT: '#101018', // your current background
      secondary: '#1A1A2E',
    },
    text: {
      DEFAULT: '#FFFFFF',
      secondary: '#94A3B8',
    },
    border: {
      DEFAULT: '#2D2D3B',
      hover: '#D81E5B',
    }
  },
  light: {
    primary: {
      500: '#D81E5B',
    },
    background: {
      DEFAULT: '#FFFFFF',
      secondary: '#F1F5F9',
    },
    text: {
      DEFAULT: '#1E293B',
      secondary: '#64748B',
    },
    border: {
      DEFAULT: '#E2E8F0',
      hover: '#D81E5B',
    }
  }
};

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
          colors: themes.dark // default theme
        }
      },
    plugins: [],
  }