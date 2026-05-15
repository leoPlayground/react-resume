import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { WorkExperienceProps } from "@/types";

const WorkExperienceItem = ({
  name,
  position,
  markdown,
}: WorkExperienceProps) => {
  return (
    <article className="group flex flex-col gap-6 md:grid md:grid-cols-[280px_1fr] md:gap-12 border-t border-GRAY_EXTRAHEAVY pt-12 mt-12 first:mt-0 first:border-0 first:pt-0">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-medium text-white">{name}</h3>
        <span className="text-sm font-semibold tracking-wide text-PRIMARY_LIGHT uppercase">{position}</span>
      </div>
      
      <div className="markdown prose prose-invert max-w-none prose-p:text-GRAY_LIGHT prose-p:leading-relaxed prose-li:text-GRAY_LIGHT prose-li:leading-relaxed prose-strong:text-white prose-strong:font-semibold text-base">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdown ?? ""}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default WorkExperienceItem;
