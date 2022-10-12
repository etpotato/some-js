const quickSort = require('./quickSort');

describe('quick sort', () => {
  test('one element', () => expect(quickSort([1])).toEqual([1]));
  test('two elements', () => expect(quickSort([2, 0])).toEqual([0, 2]));
  test('many duplacates', () => expect(
    quickSort([2, 1, 3, 3, 3, 1, 1, 1, 1, 1])
  ).toEqual([1, 1, 1, 1, 1, 1, 2, 3, 3, 3]));
  test('basic', () => expect(
    quickSort([2, 244, 244, 0, -2, 16, 16, 9])
  ).toEqual([-2, 0, 2, 9, 16, 16, 244, 244]));
});
