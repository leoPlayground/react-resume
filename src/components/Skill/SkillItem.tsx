import { SkillProps } from "@/types";

const SkillItem = ({ name, description }: SkillProps) => {
  return (
    <div className="border-t border-[#d8e2dc] pt-5">
      <h3 className="pb-2 text-xl font-medium text-[#17332d]">{name}</h3>
      <span className="whitespace-pre-wrap text-sm leading-7 text-[#4a5a55]">
        {`${description}`}
      </span>
    </div>
  );
};

export default SkillItem;
