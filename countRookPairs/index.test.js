const countRookPairs = require('./index');

describe('Count rook pairs', () => {
  test('no pairs', () => expect(
    countRookPairs([[1, 36], [36, 2], [2, 18], [3, 0]])
  ).toBe(0));

  test('with x-cross', () => expect(
    countRookPairs([[2, 36], [36, 2], [2, 18], [2, 0]])
  ).toBe(2));

  test('with y-cross', () => expect(
    countRookPairs([[2, 36], [36, 36], [1, 18], [3, 0]])
  ).toBe(1));

  test('with x and y cross', () => expect(
    countRookPairs([[3, 36], [2, 36], [1, 18], [3, 0], [3, 1]])
  ).toBe(3));
});
