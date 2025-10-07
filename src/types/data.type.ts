export type DataProject = {
    project_name: string;
    path: string;
    thumbnail_description: string;
    description: string[];
    technology: string;
    year: number;
    link: {
        project?: string,
        github?: {
            fe?: string;
            be?: string;
        }
    }
}