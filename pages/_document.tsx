import { Html, Main, Head, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head />
      <body className="bg-white dark:bg-darkBg">
        <div id="drawer"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
