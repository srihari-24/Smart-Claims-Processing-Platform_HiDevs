Sure, here's the contents for the file /smart-claims-processor/smart-claims-processor/tests/unit/classifier.test.ts:

import { Classifier } from '../../src/core/claims/classifier';

describe('Classifier', () => {
    let classifier: Classifier;

    beforeEach(() => {
        classifier = new Classifier();
    });

    test('should classify claims as high priority', () => {
        const claim = { amount: 10000, type: 'accident' };
        const result = classifier.classify(claim);
        expect(result).toBe('high');
    });

    test('should classify claims as medium priority', () => {
        const claim = { amount: 5000, type: 'theft' };
        const result = classifier.classify(claim);
        expect(result).toBe('medium');
    });

    test('should classify claims as low priority', () => {
        const claim = { amount: 1000, type: 'minor' };
        const result = classifier.classify(claim);
        expect(result).toBe('low');
    });
});