import Navbar from "@/components/layout/Navbar";
import Providers from "@/providers/Providers";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import LocalFont from "next/font/local";
const fontName = LocalFont({
  src: "../../public/assets/fonts/Vazirmatn-Regular.woff2",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <main className={fontName.className}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </Providers>
  );
}
