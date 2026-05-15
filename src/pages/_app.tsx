import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { ResumeProvider } from "@/components/context/context";
import { prefix } from "@/config/config";

const DEFAULT_SEO = {
  title: "박성민 | AI 헬스케어 기술 창업자",
  description:
    "메디밋을 운영하며 AI 건강 분석과 안전 필터링 그리고 지식그래프 기반 추천 시스템을 설계하는 풀스택 아키텍트입니다.",
  canonical: "https://leoplayground.github.io/react-resume/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://leoplayground.github.io/react-resume/",
    title: "박성민 | AI 헬스케어 기술 창업자",
    site_name: "박성민 | AI 헬스케어 기술 창업자",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "박성민 | AI 헬스케어 기술 창업자",
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
      content: "AI Healthcare Founder & Full-stack Architect",
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
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ResumeProvider>
  );
};

export default App;
