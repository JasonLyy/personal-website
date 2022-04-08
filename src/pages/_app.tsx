import type { AppProps } from 'next/app';
import { AppProvider } from '../providers/app';
import GlobalStyle from '../globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
