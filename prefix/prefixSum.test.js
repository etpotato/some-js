const prefixSum = require('./prefixSum');

describe('Prefix sum', () => {
  test('basic', () => {
    const getSum = prefixSum([0, 20, 40, 4, 18]);
    expect(getSum(0, 1)).toBe(0);
    expect(getSum(0, 2)).toBe(20);
    expect(getSum(2, 4)).toBe(44);
  });
});
