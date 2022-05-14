export enum Spacing {
  xs = '0.25rem',
  sm = '0.5rem',
  md = '1rem',
  lg = '2rem',
  xl = '3rem',
}

export const colors = {
  pink: {
    1000: '#ff0070',
    900: '#ff1a7e',
    800: '#ff338d',
    700: '#ff4d9b',
    600: '#ff66a9',
    500: '#ff80b8',
    400: '#ff99c6',
    300: '#ffb3d4',
    200: '#ffcce2',
    100: '#ffe6f1',
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
  green: {
    1000: '#00ff8f',
    900: '#1aff9a',
    800: '#33ffa5',
    700: '#4dffb1',
    600: '#66ffbc',
    500: '#80ffc7',
    400: '#99ffd2',
    300: '#b3ffdd',
    200: '#ccffe9',
    100: '#e6fff4',
  },
  blue: {
    1000: '#0f00ff',
    900: '#271aff',
    800: '#3f33ff',
    700: '#574dff',
    600: '#6f66ff',
    500: '#8780ff',
    400: '#9f99ff',
    300: '#b7b3ff',
    200: '#cfccff',
    100: '#e7e6ff',
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
  white: '#ffffff',
  black: '#000000',
};

export const fontFamily = '"Open Sans", "Droid Sans", Arial, sans-serif';
export const fonts = {
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
