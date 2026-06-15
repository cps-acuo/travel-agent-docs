import './global.css';
import { Provider } from '@/components/provider';
import type { ReactNode } from 'react';
import { Suspense } from 'react';
import Script from 'next/script';
import Analytics from '@/components/analytics';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DVNXWVQH7L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DVNXWVQH7L');
          `}
        </Script>
      </head>

      <body className="flex flex-col min-h-screen">
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
