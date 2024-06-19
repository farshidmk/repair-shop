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
        <nav className="bg-slate-400 h-12 text-cyan-300">testing nav</nav>
        <Component {...pageProps} />
      </main>
    </Providers>
  );
}
