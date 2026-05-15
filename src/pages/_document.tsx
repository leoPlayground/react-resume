import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body className="break-keep bg-BLACK font-normal text-white selection:bg-PRIMARY_LIGHT selection:text-BLACK">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
