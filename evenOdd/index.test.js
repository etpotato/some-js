const findDifferentIndex = require('./index');

describe('findDifferentIndex', () => {
  test('exists', () => expect(findDifferentIndex).toBeDefined());

  test('in intermediate positions', () => {
    expect(findDifferentIndex('1 4 3 5')).toBe(2);
    expect(findDifferentIndex('2 4 12 9 8')).toBe(4);
  });
  test('in start/end positions', () => {
    expect(findDifferentIndex('1 2 2')).toBe(1);
    expect(findDifferentIndex('1 7 3 11 18')).toBe(5);
  });
});
