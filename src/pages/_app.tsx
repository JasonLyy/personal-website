import type { AppProps } from 'next/app';
import { AppProvider } from '@root/providers/app';
import GlobalStyle from '@root/components/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
