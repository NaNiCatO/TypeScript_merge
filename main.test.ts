// merge.test.ts
import { merge } from './merge';

test('merge function merges two sorted arrays', () => {
    const collection1 = [1, 3, 5, 7];
    const collection2 = [2, 4, 6, 8];

    const result = merge(collection1, collection2);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test('merge function handles empty arrays', () => {
    const collection1: number[] = [];
    const collection2 = [2, 4, 6, 8];

    const result = merge(collection1, collection2);

    expect(result).toEqual([2, 4, 6, 8]);
});

