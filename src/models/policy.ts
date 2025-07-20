export interface Policy {
    id: string;
    name: string;
    description: string;
    coverageAmount: number;
    premium: number;
    exclusions: string[];
    createdAt: Date;
    updatedAt: Date;
}