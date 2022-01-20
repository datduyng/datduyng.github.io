import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="max-w-lg mx-auto h-full">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
