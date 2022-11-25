import { useState } from "react";
import { useEffect } from "react";
import type { AppProps } from "next/app";

import { RecoilRoot } from "recoil";

import Header from "@components/common/Header";
import Footer from "@components/common/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div className={`mx-auto flex min-h-screen flex-col ${dark ? "dark" : ""}`}>
      <RecoilRoot>
        <div className="sticky top-0">
          <Header dark={dark} setDark={setDark} />
        </div>
        <div className="w-full">
          <Component {...pageProps} />
        </div>
      </RecoilRoot>
      <Footer />
    </div>
  );
}

export default MyApp;
