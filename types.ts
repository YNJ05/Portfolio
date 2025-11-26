export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'education' | 'work';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'languages';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
