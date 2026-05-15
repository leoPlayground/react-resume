import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { WorkExperienceProps } from "@/types";

const WorkExperienceItem = ({
  name,
  position,
  period,
  markdown,
  imgSrc,
}: WorkExperienceProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-0">
      <div className="mr-4 flex items-center gap-5 md:flex-col md:items-start">
        {imgSrc && (
          <Image
            src={imgSrc}
            width="200"
            height="200"
            alt={name}
            className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT border-solid w-24 h-24"
          />
        )}
        <div className="w-48">
          <h3>{name}</h3>
          <div className="flex flex-col">
            <span className="m-0">{position}</span>
            <span className="period">{`${period[0]} - ${period[1]}`}</span>
          </div>
        </div>
      </div>
      <div className="interactive-line markdown w-full md:border-l-[1px] md:border-solid md:border-GRAY_EXTRAHEAVY md:pl-4">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdown ?? ""}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
