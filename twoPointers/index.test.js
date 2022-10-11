const countSubtructionPairs = require('./index');

describe('count subtruction pairs', () => {
  test('basic', () => expect(countSubtructionPairs([0, 3, 4], 3)).toBe(1));
  test('basic', () => expect(countSubtructionPairs([0, 3, 4, 5, 6, 6], 2)).toBe(7));
});
