import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto w-full">
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
      <Footer />
    </div>
  );
}

export default MyApp;
