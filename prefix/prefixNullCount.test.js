const prefixNullCount = require('./prefixNullCount');

describe('Prefix null count', () => {
  test('basic', () => {
    const getSum = prefixNullCount([0, 2, 0, 0, 1]);
    expect(getSum(0, 1)).toBe(1);
    expect(getSum(0, 2)).toBe(1);
    expect(getSum(2, 4)).toBe(2);
    expect(getSum(0, 4)).toBe(3);
  });
});
