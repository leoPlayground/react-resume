import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { ResumeProvider } from "@/components/context/context";
import { prefix } from "@/config/config";

const DEFAULT_SEO = {
  title: "Leo Park | Founder of Medimeet",
  description:
    "직접 만들고 실행하는 창업자 Leo의 개인 소개 페이지입니다. 문제를 발견하고, 기술로 구현하고, 시장에서 검증하는 과정을 다룹니다.",
  canonical: "https://leoplayground.github.io/react-resume/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://leoplayground.github.io/react-resume/",
    title: "Leo Park | Founder of Medimeet",
    site_name: "Leo Park | Founder of Medimeet",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "Leo Park | Founder of Medimeet",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "Leo Park's Resume",
      content: "Founder of Medimeet",
    },
    {
      name: "Leo Park's Resume",
      content: "Medimeet Founder",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ResumeProvider value={{ prefix }}>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ResumeProvider>
  );
};

export default App;
