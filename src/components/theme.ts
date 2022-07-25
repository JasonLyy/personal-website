export enum Spacing {
  xs = '0.25rem',
  sm = '0.5rem',
  md = '1rem',
  lg = '2rem',
  xl = '3rem',
}

export const colors = {
  pink: {
    1000: '#401923',
    900: '#4d1e29',
    800: '#5a2330',
    700: '#662837',
    600: '#732d3e',
    500: '#803245',
    400: '#8d4758',
    300: '#995b6a',
    200: '#a6707d',
    100: '#b3848f',
  },
  green: {
    1000: '#194037',
    900: '#1e4d41',
    800: '#235a4c',
    700: '#286657',
    600: '#2d7362',
    500: '#32806d',
    400: '#478d7c',
    300: '#5b998a',
    200: '#70a699',
    100: '#84b3a7',
  },
  blue: {
    1000: '#050d18',
    900: '#060f1c',
    800: '#071221',
    700: '#081426',
    600: '#09172a',
    500: '#0a192f',
    400: '#223044',
    300: '#3b4759',
    200: '#545e6d',
    100: '#6c7582',
  },
  grey: {
    1000: '#333333',
    900: '#474747',
    800: '#5c5c5c',
    700: '#707070',
    600: '#858585',
    500: '#999999',
    400: '#adadad',
    300: '#c2c2c2',
    200: '#d6d6d6',
    100: '#ebebeb',
  },
  yellow: {
    1000: '#f0ff00',
    900: '#f2ff1a',
    800: '#f3ff33',
    700: '#f5ff4d',
    600: '#f6ff66',
    500: '#f8ff80',
    400: '#f9ff99',
    300: '#fbffb3',
    200: '#fcffcc',
    100: '#feffe6',
  },
  white: '#ffffff',
  black: '#000000',
};

export const fontFamily = '"Open Sans", "Droid Sans", Arial, sans-serif';
export const fonts = {
  heading0: {
    fontFamily: fontFamily,
    fontWeight: 700,
    fontSize: '4.5rem',
    lineHeight: '4rem',
    letterSpacing: '-0.03em',
  },
  heading1: {
    fontFamily: fontFamily,
    fontWeight: 700,
    fontSize: '2.25rem',
    lineHeight: '2.25rem',
    letterSpacing: '-0.03em',
  },
  heading2: {
    fontFamily: fontFamily,
    fontWeight: 700,
    fontSize: '1.875rem',
    lineHeight: '2.25rem',
    letterSpacing: '-0.03em',
  },
  heading3: {
    fontFamily: fontFamily,
    fontWeight: 700,
    fontSize: '1.375rem',
    lineHeight: '1.5rem',
    letterSpacing: '-0.03em',
  },
  heading4: {
    fontFamily: fontFamily,
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: '1.5rem',
    letterSpacing: 'normal',
  },
  heading5: {
    fontFamily: fontFamily,
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: '1.5rem',
    letterSpacing: 'normal',
  },
  heading6: {
    fontFamily: fontFamily,
    fontWeight: 700,
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    letterSpacing: 'normal',
  },
  paragraphLarge: {
    fontFamily: fontFamily,
    fontWeight: 400,
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    letterSpacing: '-0.03em',
  },
  paragraphBody: {
    fontFamily: fontFamily,
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '1.5rem',
    letterSpacing: 'normal',
  },
  paragraphSmall: {
    fontFamily: fontFamily,
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: '1.125rem',
    letterSpacing: 'normal',
  },
  paragraphExtraSmall: {
    fontFamily: fontFamily,
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: '1.125rem',
    letterSpacing: 'normal',
  },
};

export interface Theme {
  name: string;
  tokens: {
    spacing: typeof Spacing;
    colors: typeof colors;
    fonts: typeof fonts;
  };
  colors: {
    primary: string;
    primaryVariant: string;
    secondary: string;
    secondaryVariant: string;
    background: string;
    surface: string;
    error: string;
    onPrimary: string;
    onSecondary: string;
    onBackground: string;
    onSurface: string;
    onError: string;
  };
}
export const theme: Theme = {
  name: 'default',
  tokens: {
    spacing: Spacing,
    colors: colors,
    fonts: fonts,
  },
  colors: {
    primary: colors.green[500],
    primaryVariant: colors.green[700],
    secondary: colors.pink[500],
    secondaryVariant: colors.pink[700],
    background: colors.blue[800],
    surface: colors.blue[300],
    error: colors.yellow[700],
    onPrimary: colors.grey[1000],
    onSecondary: colors.grey[1000],
    onBackground: colors.grey[500],
    onSurface: colors.grey[300],
    onError: colors.black,
  },
};

export const darkTheme: Theme = {
  name: 'dark',
  tokens: {
    spacing: Spacing,
    colors: colors,
    fonts: fonts,
  },
  colors: {
    primary: colors.pink[700],
    primaryVariant: colors.pink[1000],
    secondary: colors.blue[700],
    secondaryVariant: colors.blue[1000],
    background: colors.white,
    surface: colors.white,
    error: colors.yellow[1000],
    onPrimary: colors.white,
    onSecondary: colors.black,
    onBackground: colors.white,
    onSurface: colors.black,
    onError: colors.black,
  },
};
