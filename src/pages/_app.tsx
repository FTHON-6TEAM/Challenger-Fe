import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactElement, ReactNode, Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';
import { NextPage } from 'next';
import Layout from '@/components/common/Layout';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { ConfigProvider } from 'antd';
import koKR from 'antd/lib/locale/ko_KR';
import { AuthProvider } from '@/context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const DefaultLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? DefaultLayout;
  dayjs.locale('ko');

  return (
    <ConfigProvider locale={koKR}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<div>Loading...</div>}>
              {getLayout(<Component {...pageProps} />)}
            </Suspense>
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>
    </ConfigProvider>
  );
}
