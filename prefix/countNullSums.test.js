const countNullSums = require('./countNullSums');

describe('count null sums', () => {
  test('no answers', () => expect(countNullSums([1, 2, 3])).toBe(0));

  test('one', () => expect(countNullSums([2, 1, -1, 9, -10])).toBe(1));

  test('multiple', () => expect(countNullSums([0, 1, -1, 2, -2])).toBe(6));
});
