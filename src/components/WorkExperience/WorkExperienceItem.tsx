import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { WorkExperienceProps } from "@/types";

const WorkExperienceItem = ({
  name,
  position,
  markdown,
}: WorkExperienceProps) => {
  return (
    <article className="group mt-8 flex flex-col gap-6 border-t border-[#d8e2dc] pt-8 first:mt-0 first:border-t-0 first:pt-0 md:grid md:grid-cols-[220px_1fr] md:gap-10">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-medium text-[#17332d]">{name}</h3>
        <span className="text-sm font-semibold text-[#0d6f62]">{position}</span>
      </div>
      
      <div className="markdown prose max-w-none text-base prose-headings:text-[#17332d] prose-p:text-[#30403b] prose-p:leading-relaxed prose-li:text-[#30403b] prose-li:leading-relaxed prose-strong:text-[#17332d] prose-strong:font-semibold">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdown ?? ""}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default WorkExperienceItem;
