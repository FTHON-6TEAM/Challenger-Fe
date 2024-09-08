import { Html, Head, Main, NextScript } from 'next/document';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ResetCSS from '@/styles/ResetCSS';
import React from 'react';

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

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
