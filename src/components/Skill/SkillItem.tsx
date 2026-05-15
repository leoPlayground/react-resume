import { SkillProps } from "@/types";

const SkillItem = ({ name, description }: SkillProps) => {
  return (
    <div className="interactive-card rounded-lg border border-GRAY_EXTRAHEAVY bg-[#12161b] p-4">
      <h3 className="pb-2 text-xl text-white">{name}</h3>
      <span className="whitespace-pre-wrap text-sm leading-7 text-GRAY_LIGHT">{`${description}`}</span>
    </div>
  );
};

export default SkillItem;
