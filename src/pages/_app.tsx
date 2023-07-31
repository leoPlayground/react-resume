import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import {ResumeProvider} from "@/components/context/context";
import {prefix} from "@/config/config";

const DEFAULT_SEO = {
  title: "Leo Park | Front-End Dev",
  description: "안녕하세요, 개발잡부. 프론트엔드 개발자 박성민입니다.",
  canonical: "https://leoplayground.github.io/react-resume/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://leoplayground.github.io/react-resume/",
    title: "Leo Park | Front-End Dev",
    site_name: "Leo Park | Front-End Dev",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "Leo Park | Front-End Dev",
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
      content: "Leo Park | Front-End Dev",
    },
    {
      name: "Leo Park's Resume",
      content: "Leo Park | Front-End Dev",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ResumeProvider value={{prefix}}>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </ResumeProvider>
  );
};

export default App;
