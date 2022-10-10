const findSummandsOfNumber = require('./task');

describe('Summands of X', () => {
  test('no summands', () => expect(findSummandsOfNumber([1, 4, 5, 8, 7], 10)).toEqual([0, 0]));
  test('basic', () => expect(findSummandsOfNumber([1, 4, 5], 6)).toEqual([1, 5]));
  test('basic2', () => expect(findSummandsOfNumber([10, 1, 4, 5, 11], 11)).toEqual([10, 1]));
  test('basic3', () => expect(findSummandsOfNumber([2, 0, 1, 4, 5, 2], 7)).toEqual([2, 5]));
});
