import SectionTitle from "../SectionTitle";
import WorkExperienceItem from "./WorkExperienceItem";

import { DataProps } from "@/types";

const WorkExperience = ({
  workExperience,
}: Pick<DataProps, "workExperience">) => {
  return (
    <div>
      <SectionTitle>System Building</SectionTitle>
      
      <div className="mb-16 border-l-2 border-PRIMARY_HEAVY pl-6">
        <p className="text-xl leading-relaxed text-white font-medium">
          대규모 실시간 시스템과 물리적 현장의 운영 파이프라인을 다뤘던 경험은<br />
          이후 의료 AI의 구조를 현장에 맞게 설계하고 예방 시스템을 구축하는 든든한 기반이 되었습니다.
        </p>
      </div>

      <div className="flex flex-col">
        {[...workExperience]
          .reverse()
          .filter((experience) => experience.isFeatured !== false)
          .map((experience) => (
            <WorkExperienceItem key={experience.id} {...experience} />
          ))}
      </div>
    </div>
  );
};

export default WorkExperience;
