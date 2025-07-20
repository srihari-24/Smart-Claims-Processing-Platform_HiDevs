export const config = {
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000/api',
    claimsProcessingTimeout: process.env.CLAIMS_PROCESSING_TIMEOUT || 5000,
    documentStoragePath: process.env.DOCUMENT_STORAGE_PATH || './documents',
    logLevel: process.env.LOG_LEVEL || 'info',
};