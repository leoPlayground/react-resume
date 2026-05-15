import { ProjectProps } from "@/types";

const ProjectItem = ({
  name,
  description,
  caseStudy,
}: ProjectProps) => {
  return (
    <article className="group flex flex-col gap-6 md:grid md:grid-cols-[280px_1fr] md:gap-12 border-t border-GRAY_EXTRAHEAVY pt-12 mt-12 first:mt-0 first:border-0 first:pt-0">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-medium tracking-tight text-white">{name}</h3>
        {!caseStudy && description && (
          <p className="text-base leading-relaxed text-GRAY_LIGHT">{description}</p>
        )}
      </div>

      <div className="flex w-full flex-col">
        {caseStudy ? (
          <div className="grid gap-10">
            <div className="flex flex-col gap-3">
              <h5 className="text-xs font-bold tracking-[0.2em] text-PRIMARY_HEAVY uppercase">01. Problem</h5>
              <p className="text-lg leading-relaxed text-GRAY_LIGHT">{caseStudy.problem}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="text-xs font-bold tracking-[0.2em] text-PRIMARY_LIGHT uppercase">02. Approach</h5>
              <p className="text-lg leading-relaxed text-GRAY_LIGHT">{caseStudy.approach}</p>
            </div>
            <div className="flex flex-col gap-3 border-l-2 border-white pl-5">
              <h5 className="text-xs font-bold tracking-[0.2em] text-white uppercase">03. Result</h5>
              <p className="text-lg font-medium leading-relaxed text-white">{caseStudy.result}</p>
            </div>
          </div>
        ) : (
          <div className="text-lg leading-relaxed text-GRAY_LIGHT">
            {description}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectItem;
