import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body className="break-keep bg-[#f8fafc] font-normal text-[#111827] selection:bg-[#2563eb] selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
