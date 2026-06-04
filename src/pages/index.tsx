import fs from "fs/promises";
import path from "path";

import { NextPage } from "next";

import Branding from "@/components/Branding";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import ScrollProgress from "@/components/ScrollProgress";
import { DataProps, InformationProps } from "@/types";
// import Award from "@/components/Award";

type FounderPageProps = Pick<DataProps, "information" | "branding">;

const Home: NextPage<FounderPageProps> = ({ information, branding }) => {
  return (
    <>
      <ScrollProgress />
      <Layout>
        <Branding branding={branding} contact={information.contact} />
      </Layout>
      <Footer contact={information.contact} name={information.name} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const objectData = JSON.parse(jsonData);

  const informationWithData = getImgSrc(
    await getMd({ ...objectData.information })
  );

  return {
    props: {
      information: await informationWithData,
      branding: objectData.branding,
    },
  };
};

const getMd = async (item: InformationProps) => {
  try {
    const markdownModule = await import(
      "../../public/markdown/information/introduce.md"
    );
    return { ...item, markdown: markdownModule.default as string };
  } catch {
    console.log("no markdown");
    return item;
  }
};

const getImgSrc = async (item: InformationProps) => {
  const imgSrc = "/images/information/profile.png";
  const filePath = path.join(process.cwd(), "public", imgSrc);
  try {
    await fs.stat(filePath);
    return { ...item, imgSrc: imgSrc };
  } catch {
    // console.log("no img");
    return item;
  }
};
