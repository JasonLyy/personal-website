import { createGlobalStyle } from 'styled-components';
import { fontFamily } from './theme';

const GlobalStyle = createGlobalStyle`
  html
  body {
    margin: 0;
    padding: 0;
    font-family: ${fontFamily};
  }
`;

export default GlobalStyle;
