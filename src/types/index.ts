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
    imageSrc?: string;
  };
  oneLine: string;
  about: {
    title: string;
    paragraphs: string[];
  };
  proofPoints?: {
    id: number;
    label: string;
    title: string;
    description: string;
  }[];
  proofOfWork?: {
    title: string;
    description: string;
    affiliations?: string[];
    items: {
      id: number;
      label: string;
      period: string;
      title: string;
      description: string;
      imageSrc?: string;
      items: string[];
    }[];
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
  riskGraph?: {
    title: string;
    description: string;
    nodes: {
      id: string;
      label: string;
      type: string;
      description: string;
      signal: string;
    }[];
    edges: {
      from: string;
      to: string;
      label: string;
      severity: string;
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
  trajectory?: {
    title: string;
    description: string;
    stages: {
      id: number;
      period: string;
      label: string;
      title: string;
      description: string;
      proof: string;
      systems: string[];
      accent: string;
    }[];
  };
  architectureViews?: {
    id: string;
    label: string;
    title: string;
    description: string;
    items: string[];
  }[];
  architectureIntro?: {
    title: string;
    description: string;
  };
  architectureVisual?: {
    imageSrc: string;
  };
  technicalProof?: {
    title: string;
    description: string;
    groups: {
      id: number;
      title: string;
      description?: string;
      items: string[];
    }[];
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
  logoSrc?: string;
  role?: string;
  repoUrl?: string;
  webUrl?: string;
  isTeam?: boolean;
  isFeatured?: boolean;
  period: string[];
  stack: string[];
  techStack?: string[];
  evidence?: string[];
  markdown?: string;
  imgSrc?: string;
  caseStudy?: {
    problem: string;
    approach: string;
    result: string;
    system?: string;
    proof?: string;
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
