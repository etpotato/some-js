const findWater = require('./index');

const singlePeakIsland = [3, 1, 4, 3, 5, 1, 1, 3, 1];
const doublePeakIsland = [3, 1, 5, 1, 5, 1, 1, 3, 1];

describe('find water', () => {
  test('one peak', () => expect(findWater(singlePeakIsland)).toBe(7));
  test('two peaks', () => expect(findWater(doublePeakIsland)).toBe(10));
});
