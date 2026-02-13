
export enum ProfessionalRole {
  WEB_DESIGNER = 'Web Designer',
  DATA_ANALYST = 'Data Analyst',
  MARKETING_PLANNER = 'Marketing Planner',
  SALES_ANALYST = 'Sales Analyst'
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export interface Profile {
  id: string;
  name: string;
  role: ProfessionalRole;
  tagline: string;
  bio: string;
  color: string;
  accentColor: string;
  skills: Skill[];
  projects: Project[];
  stats: { label: string; value: string }[];
}
