const HashTable = require('./index');

describe('Hash Table', () => {
  test('exists', () => expect(new HashTable()).toBeDefined());

  test('can add items', () => {
    const hashTable = new HashTable();
    hashTable.add(22);
    expect(hashTable.find(22)).toBe(true);
  });

  test('does not duplicate items', () => {
    const hashTable = new HashTable();
    hashTable.add(42);
    hashTable.add(42);
    expect(hashTable.find(42)).toBe(true);
    hashTable.delete(42);
    expect(hashTable.find(42)).toBe(false);
  });

  test('can delete items', () => {
    const hashTable = new HashTable();
    hashTable.add(18);
    expect(hashTable.find(18)).toBe(true);
    hashTable.delete(18);
    expect(hashTable.find(18)).toBe(false);
  });
});
