import SectionTitle from "../SectionTitle";
import SkillItem from "./SkillItem";

import { DataProps } from "@/types";

const Skill = ({ skill }: Pick<DataProps, "skill">) => {
  return (
    <div>
      <SectionTitle>Skills</SectionTitle>
      <div className="flex flex-col gap-24">
        {[...skill].map((skill) => (
          <SkillItem key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
