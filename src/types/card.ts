import type { Project } from "./projects";

export type CardData = Project;

// export interface CardData {
//     image: string;
//     dataAlt: string;
//     name: string;
//     tech: string[];
//     description: string;
//     linkProject: string;
//     detail: ProjectDetail;
//     github: string[];
//     current: boolean;
// }

export interface CardProps {
    data: CardData;
}