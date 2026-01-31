export interface GithubProject {
    text: string;
    link: string;
}

export interface ProjectDetail {
    type: string;  // "front-end" | "back-end" | "fullstack"
    tech: {
        front: string[];
        back: string[];
    };
    github: GithubProject[];
}

export interface Project {
    name: string;
    description: string;
    tech: string[];
    year: number;
    detail: ProjectDetail;
    type: string[];
    current: boolean;
    github: string[];
    link: string;
    image: string;
}