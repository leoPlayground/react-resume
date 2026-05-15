import SectionTitle from "../SectionTitle";
import WorkExperienceItem from "./WorkExperienceItem";

import { DataProps } from "@/types";

const WorkExperience = ({
  workExperience,
}: Pick<DataProps, "workExperience">) => {
  return (
    <div>
      <SectionTitle>Experience</SectionTitle>
      <div className="flex flex-col gap-16">
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
