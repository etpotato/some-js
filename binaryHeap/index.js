class BinaryMaxHeap {
  constructor() {
    this._heap = [];
  }

  push(item) {
    this._heap.push(item);
    let index = this._heap.length - 1;
    const newItem = item;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this._heap[parentIndex];

      if (parent < newItem) {
        this._heap[parentIndex] = newItem;
        this._heap[index] = parent;
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  pop() {
    if (this._heap.length < 2) {
      return this._heap.pop() ?? null;
    }

    const result = this._heap[0];
    const lastItem = this._heap.pop();
    this._heap[0] = lastItem;
    let index = 0;

    while (true) {
      const leftChildIndex = (index * 2) + 1;
      const leftChild = this._heap[leftChildIndex];
      const rightChildIndex = leftChildIndex + 1;
      const rightChild = this._heap[rightChildIndex];

      if ((!leftChild || rightChild > leftChild) && rightChild > lastItem) {
        this._heap[index] = rightChild;
        this._heap[rightChildIndex] = lastItem;
        index = rightChildIndex;
        continue;
      }

      if (leftChild && leftChild > lastItem) {
        this._heap[index] = leftChild;
        this._heap[leftChildIndex] = lastItem;
        index = leftChildIndex;
        continue;
      }

      break;
    }

    return result;
  }
}

module.exports = BinaryMaxHeap;
