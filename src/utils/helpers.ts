export function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
}

export function generateUniqueId(): string {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}

export function isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}