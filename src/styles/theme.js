export const theme = Object.freeze({
  colors: {
    accent: '#2196F3',
    blue: '#42aaff',
    white: '#ffffff',
    gray: '#7a7a7a',

    light: '#f2f2f2',
    dark: '#212121',
    red: '#F43E02',
    mainBackground: ['linear-gradient(to bottom, #DDEEFC,  #f2f2f2)'],
    tagBackground: ['linear-gradient(to bottom, #FFD194, #D1913C)'],
  },

  shadows: {
    small: '0 3px 5px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
    custom:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },

  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
  },

  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },

  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },

  spacing: value => `${value * 4}px`,
});
