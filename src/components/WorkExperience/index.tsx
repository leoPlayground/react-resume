import SectionTitle from "../SectionTitle";
import WorkExperienceItem from "./WorkExperienceItem";

import { DataProps } from "@/types";

const WorkExperience = ({
  workExperience,
}: Pick<DataProps, "workExperience">) => {
  return (
    <div>
      <SectionTitle>Career Path</SectionTitle>
      
      <div className="mb-16 border-l-2 border-[#18a689] pl-6">
        <p className="text-xl leading-relaxed text-[#17332d] font-medium">
          서비스 구현 경험은 운영 시스템과 헬스케어 제품으로 이어졌고<br />
          지금은 메디밋을 만들며 문제 정의와 실행을 함께 맡고 있습니다.
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
