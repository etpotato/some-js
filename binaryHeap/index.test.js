const BinaryMaxHeap = require('./index');

describe('binary heap', () => {
  test('exists', () => expect(new BinaryMaxHeap()).toBeDefined());
  test('retain max value', () => {
    const maxHeap = new BinaryMaxHeap();

    maxHeap.push(4);
    maxHeap.push(0);
    maxHeap.push(10);
    maxHeap.push(2);

    expect(maxHeap.pop()).toBe(10);
    expect(maxHeap.pop()).toBe(4);
    expect(maxHeap.pop()).toBe(2);
    expect(maxHeap.pop()).toBe(0);
    expect(maxHeap.pop()).toBe(null);
    expect(maxHeap.pop()).toBe(null);

    maxHeap.push(2);
    maxHeap.push(1);

    expect(maxHeap.pop()).toBe(2);
  });
});
