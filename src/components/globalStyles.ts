import { createGlobalStyle } from 'styled-components';
import { fontFamily } from './theme';

const GlobalStyle = createGlobalStyle`
  html
  body {
    margin: 0;
    padding: 0;
    font-family: ${fontFamily};
  }

  ::-webkit-scrollbar {
  width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(p) => p.theme.colors.background};
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(p) => p.theme.colors.primary};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(p) => p.theme.colors.primaryVariant};
    border-radius: 10px;
  }
`;

export default GlobalStyle;
