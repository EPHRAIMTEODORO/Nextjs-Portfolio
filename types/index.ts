export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  readTime: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
