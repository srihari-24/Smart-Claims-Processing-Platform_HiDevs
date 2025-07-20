export interface Claim {
    id: string;
    policyId: string;
    claimantName: string;
    claimAmount: number;
    claimDate: Date;
    status: 'pending' | 'approved' | 'rejected';
    description: string;
    documents: string[]; // Array of document IDs associated with the claim
}