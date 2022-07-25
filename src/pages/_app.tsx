import type { AppProps } from 'next/app';
import { AppProvider } from '@root/providers/app';
import GlobalStyle from '@root/components/globalStyles';
import Head from 'next/head';
import Icon from '@root/public/favicon.ico';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <GlobalStyle />
      <Head>
        <title>Jason Ly</title>
        <link rel="shortcut icon" href={Icon} />
        <meta
          name="description"
          content="Jason Ly - Melbourne based Software Engineer specialising in backend development."
        />
        <meta httpEquiv="Content-Security-Policy" content="" />
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
