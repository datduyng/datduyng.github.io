import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header></header>
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
