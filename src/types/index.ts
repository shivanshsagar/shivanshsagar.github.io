export interface Profile {
  name: string;
  initials: string;
  tagline: string;
  titles: string[];
  hero_typing: string[];
  stats: Stats;
  about: About;
  social: Social;
  resume_url: string;
  calendly_url: string;
  location: string;
  availability: string;
}

export interface Stats {
  experience: number;
  experience_label: string;
  projects: number;
  projects_label: string;
  sops: number;
  sops_label: string;
  uptime: string;
  uptime_label: string;
  customers: number;
  customers_label: string;
  cloud_platforms: number;
  cloud_platforms_label: string;
  aws_services: number;
  aws_services_label: string;
}

export interface About {
  summary: string;
  creative_edge: string;
  mission: string;
  philosophy: string;
  currently_learning: string[];
  hobbies: string[];
}

export interface Social {
  github: string;
  linkedin: string;
  email: string;
  x: string;
  medium: string;
  hashnode: string;
  devto: string;
  youtube: string;
  stackoverflow: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  type: string;
  current: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  featured: boolean;
  category: string[];
  thumbnail: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  awsServices: string[];
  challenges: string[];
  results: string[];
  lessonsLearned: string[];
  githubUrl: string | null;
  docsUrl: string | null;
  screenshots: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  years: number;
}

export interface AWSService {
  name: string;
  category: string;
  rating: number;
  projects: number;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerShort: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  color: string;
  status: string;
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string | null;
  text: string;
  linkedinUrl: string;
  type: 'manager' | 'customer' | 'colleague';
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  readingTime: number;
  coverImage?: string;
  content?: string;
}
