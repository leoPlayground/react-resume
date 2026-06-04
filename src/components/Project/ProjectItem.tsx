import { ProjectProps } from "@/types";

const ProjectItem = ({
  name,
  description,
  logoSrc,
  role,
  period,
  stack,
  techStack,
  evidence,
  webUrl,
  caseStudy,
}: ProjectProps) => {
  return (
    <article className="grid gap-8 border-t border-[#d8e2dc] py-8 md:grid-cols-[220px_1fr] md:gap-10">
      <div className="flex flex-col gap-5">
        {logoSrc && (
          <div className="flex h-14 w-fit max-w-[200px] items-center rounded-md border border-[#d8e2dc] bg-[#fafffb] px-4">
            <img
              src={logoSrc}
              alt={name}
              className="max-h-9 max-w-[160px] object-contain"
            />
          </div>
        )}

        <div>
          <h3 className="pb-2 text-2xl font-medium leading-snug text-[#17332d]">
            {name}
          </h3>
          {role && (
            <p className="pb-2 text-sm font-semibold text-[#0d6f62]">
              {role}
            </p>
          )}
          <p className="text-sm text-[#6b7772]">
            {period[0]}
            {period[1] ? ` - ${period[1]}` : ""}
          </p>
        </div>

        {webUrl && (
          <a
            href={webUrl}
            target="_blank"
            rel="noreferrer"
            className="interactive-button w-fit rounded border border-[#12382f]/20 bg-[#12382f] px-3 py-1.5 text-sm text-[#f7faf6]"
          >
            서비스 보기
          </a>
        )}
      </div>

      <div className="grid gap-8">
        <p className="text-lg leading-relaxed text-[#30403b]">
          {description}
        </p>

        {caseStudy ? (
          <div className="grid gap-5">
            <CaseBlock label="Problem" body={caseStudy.problem} />
            <CaseBlock label="Approach" body={caseStudy.approach} />
            <CaseBlock label="Outcome" body={caseStudy.result} emphasis />
            {caseStudy.system && (
              <CaseBlock label="Structure" body={caseStudy.system} />
            )}
            {caseStudy.proof && (
              <CaseBlock label="Evidence" body={caseStudy.proof} />
            )}
          </div>
        ) : (
          evidence && (
            <div className="grid gap-3">
              {evidence.map((item) => (
                <p
                  key={item}
                  className="border-l-2 border-[#cbd9d3] pl-4 text-base leading-relaxed text-[#4a5a55]"
                >
                  {item}
                </p>
              ))}
            </div>
          )
        )}

        {evidence && caseStudy && (
          <div className="grid gap-3">
            {evidence.map((item) => (
              <p
                key={item}
                className="border-l-2 border-[#cbd9d3] pl-4 text-base leading-relaxed text-[#4a5a55]"
              >
                {item}
              </p>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {[...(stack ?? []), ...(techStack ?? [])].map((item) => (
            <span
              key={item}
              className="rounded border border-[#d8e2dc] bg-[#fafffb]/85 px-2.5 py-1 text-sm text-[#30403b]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const CaseBlock = ({
  label,
  body,
  emphasis = false,
}: {
  label: string;
  body: string;
  emphasis?: boolean;
}) => {
  return (
    <div
      className={`border-l-2 pl-4 ${
        emphasis ? "border-[#e7b15c]" : "border-[#18a689]"
      }`}
    >
      <span
        className={`mb-2 block text-sm font-semibold ${
          emphasis ? "text-[#9a641a]" : "text-[#0d6f62]"
        }`}
      >
        {label}
      </span>
      <p
        className={`text-base leading-relaxed ${
          emphasis ? "font-medium text-[#17332d]" : "text-[#4a5a55]"
        }`}
      >
        {body}
      </p>
    </div>
  );
};

export default ProjectItem;
