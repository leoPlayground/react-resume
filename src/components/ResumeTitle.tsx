import { DataProps } from "@/types";

const ResumeTitle = ({ resumeTitle }: Pick<DataProps, "resumeTitle">) => {
  return (
    <div className="sticky top-0 z-20 flex h-12 items-center justify-center border-b border-[#cbd9d3]/70 bg-[#fafffb]/90 px-6 backdrop-blur-xl md:h-16">
      <span className="hidden text-sm font-medium tracking-normal text-[#30403b] md:block">
        {resumeTitle.title}
      </span>
    </div>
  );
};

export default ResumeTitle;
