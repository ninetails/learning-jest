import sum from '../sum.js';

test('adds 0 + 0 to equal 0', () => expect(sum(0, 0)).toBe(0));
test('adds 0 + 1 to equal 1', () => expect(sum(0, 1)).toBe(1));
