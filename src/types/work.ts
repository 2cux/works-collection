export type WorkStatus = "completed" | "in-progress" | "planned";

export type WorkScreenshot = {
  title: string;
  image: string;
  description?: string;
};

export type WorkTechStackGroup = {
  category: string;
  items: string[];
};

export type Work = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  coverImage: string;
  screenshots: WorkScreenshot[];
  tags: string[];
  highlights: string[];
  techStack: WorkTechStackGroup[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  status?: WorkStatus;
};
