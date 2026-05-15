export interface InformationProps {
  name: string;
  contact: { id: number; name: string; href: string; isEmail?: boolean }[];
  markdown?: string;
  imgSrc?: string;
}

export interface BrandingProps {
  hero: {
    eyebrow: string;
    title: string[];
    description: string;
    tags: string[];
  };
  oneLine: string;
  about: {
    title: string;
    paragraphs: string[];
  };
  problem: {
    title: string;
    description: string;
    flow: {
      id: number;
      title: string;
      description: string;
    }[];
  };
  thinkingModel: {
    title: string;
    description: string;
    layers: {
      id: number;
      title: string;
      description: string;
    }[];
    keywords: string[];
  };
  principles: {
    id: number;
    title: string;
    description: string;
  }[];
  quotes?: string[];
}

export interface WorkExperienceProps {
  id: number;
  name: string;
  description?: string;
  position: string;
  period: string[];
  isFeatured?: boolean;
  markdown?: string;
  imgSrc?: string;
}

export interface ProjectProps {
  id: number;
  name: string;
  description: string;
  repoUrl?: string;
  webUrl?: string;
  isTeam?: boolean;
  isFeatured?: boolean;
  period: string[];
  stack: string[];
  markdown?: string;
  imgSrc?: string;
  caseStudy?: {
    problem: string;
    approach: string;
    result: string;
  };
}

export interface OtherProps {
  id: number;
  name: string;
  description: string;
  repoUrl?: string;
  webUrl?: string;
}

export interface AwardProps {
  id: number;
  name: string;
  date: string;
  organizer: string;
  description: string;
}

export interface SkillProps {
  id: number;
  name: string;
  description: string;
}

export interface DataProps {
  resumeTitle: {
    title: string;
  };
  information: InformationProps;
  branding: BrandingProps;
  workExperience: WorkExperienceProps[];
  project: ProjectProps[];
  other: OtherProps[];
  activity: {
    id: number;
    name: string;
    description: string;
    period: string[];
  }[];
  education: {
    id: number;
    name: string;
    description: string;
    period: string[];
  }[];
  certificate: {
    id: number;
    name: string;
    date: string;
    organizer: string;
  }[];
  award: AwardProps[];
  skill: SkillProps[];
}
