import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";

import { DataProps } from "@/types";

const Project = ({ project }: Pick<DataProps, "project">) => {
  return (
    <div>
      <SectionTitle>Representative Work</SectionTitle>
      <div className="flex flex-col">
        {[...project]
          .reverse()
          .filter((project) => project.isTeam && project.isFeatured)
          .map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
      </div>
    </div>
  );
};

export default Project;
