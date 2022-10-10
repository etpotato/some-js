const LENGTH = 10;

class HashTable {
  constructor() {
    this.hashTable = new Array(LENGTH).fill(null).map(() => []);
  }

  hash(number) {
    return number % 10;
  }

  add(number) {
    if (!this.find(number)) {
      const hash = this.hash(number);
      this.hashTable[hash].push(number);
    }
  }

  find(number) {
    const hash = this.hash(number);
    return this.hashTable[hash].indexOf(number) > -1;
  }

  delete(number) {
    const hash = this.hash(number);
    const list = this.hashTable[hash];
    const index = list.indexOf(number);
    if (index > -1) {
      list[index] = list[list.length - 1];
      list.pop();
    }
  }
}

module.exports = HashTable;
