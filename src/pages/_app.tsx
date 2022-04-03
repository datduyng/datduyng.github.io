import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Script from "next/script";
import type { AppProps } from "next/app";
import { GA_TRACKING_ID, pageview } from '../lib/gtag.client';

import "../styles/globals.css";
import "../styles/notion-page.css";
import 'prismjs/themes/prism-tomorrow.css'
// used for collection views (optional)
import "react-notion-x/build/third-party/collection.css";
// used for rendering equations (optional)
import "react-notion-x/build/third-party/equation.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <main className="">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
