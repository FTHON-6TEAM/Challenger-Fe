import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Challenger',
  description: 'Everyone can create and challenge challengers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
