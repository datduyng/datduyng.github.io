import type { AppProps } from "next/app";
import "../styles/globals.css";

import "../styles/notion-page.css";
import 'prismjs/themes/prism-tomorrow.css'

// used for collection views (optional)
import "react-notion-x/build/third-party/collection.css";

// used for rendering equations (optional)
import "react-notion-x/build/third-party/equation.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
