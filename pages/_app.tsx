import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script";
import * as gtag from "../lib/gtag";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={"https://www.googletagmanager.com/gtag/js?id=G-DZYT5QV00Z"}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                 window.dataLayer = window.dataLayer || [];
                 function gtag(){dataLayer.push(arguments);}
                 gtag('js', new Date());
       
                 gtag('config', 'G-DZYT5QV00Z');
                 `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
