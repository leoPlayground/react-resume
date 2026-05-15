import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { ResumeProvider } from "@/components/context/context";
import { prefix } from "@/config/config";

const DEFAULT_SEO = {
  title: "Leo Park | 의료 AI 시스템을 고민하는 Founder",
  description:
    "고령 만성질환자의 복약 안전 문제를 출발점으로 의료 데이터를 관계와 맥락 중심으로 해석하는 AI 헬스케어 Founder입니다.",
  canonical: "https://leoplayground.github.io/react-resume/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://leoplayground.github.io/react-resume/",
    title: "Leo Park | 의료 AI 시스템을 고민하는 Founder",
    site_name: "Leo Park | 의료 AI 시스템을 고민하는 Founder",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "Leo Park | 의료 AI 시스템을 고민하는 Founder",
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
      content: "Healthcare AI Founder and Systems Thinker",
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
