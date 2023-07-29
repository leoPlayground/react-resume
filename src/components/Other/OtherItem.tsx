import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Links from "./Links";

import {OtherProps, ProjectProps} from "@/types";

const OtherItem = ({
  name,
  description,
  repoUrl,
  webUrl,
}: OtherProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex md:flex-col items-center md:items-start mr-4 gap-6">
          <div className="flex flex-col gap-2">
            <div className="w-48">
              <h3>{name}</h3>
            </div>
            <Links repoUrl={repoUrl} webUrl={webUrl} />
          </div>
        </div>
      </div>
      <div className="md:border-GRAY_LIGHT md:border-solid md:border-l-[1px] md:pl-4 markdown flex flex-col w-full gap-2">
        <div>
          <blockquote className="whitespace-pre-wrap">{`${description}`}</blockquote>
        </div>
      </div>
    </div>
  );
};

export default OtherItem;
