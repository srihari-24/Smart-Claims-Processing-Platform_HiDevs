export interface Document {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    status: 'uploaded' | 'processed' | 'archived';
}