import type { ClassElement } from "typescript";

export interface IconsProps {
    icon: string;
    type?: 'random'| 'devicon';
    class?: string | ClassElement;
}