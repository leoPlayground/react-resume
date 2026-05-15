import SectionTitle from "../SectionTitle";
import SkillItem from "./SkillItem";

import { DataProps } from "@/types";

const Skill = ({ skill }: Pick<DataProps, "skill">) => {
  return (
    <div>
      <SectionTitle>Domain Expertise</SectionTitle>
      <div className="grid gap-4 md:grid-cols-2">
        {[...skill].map((skill) => (
          <SkillItem key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
