export interface Experience {
    position: string;
    corporation: string;
    jobDesc: string[];
    tech: {
        name: string;
        icon: string;
    }[];
    time: {
        start: string;
        end?: string | undefined;
    };
}