const isDigitPermutation = require('./index');

describe('is digit permutation', () => {
  test('basic1', () => expect(isDigitPermutation(2121, 1122)).toBe(true));
  test('basic2', () => expect(isDigitPermutation(123456, 654321)).toBe(true));
  test('different length', () => expect(isDigitPermutation(123, 1233)).toBe(false));
  test('different symbols', () => expect(isDigitPermutation(1234, 456)).toBe(false));
});
