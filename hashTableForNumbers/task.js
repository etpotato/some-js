/*
Дана последовательность положительных чисел длиной N и число X.
Нужно найти два различный числа A и B из последовательности,
таких что A + B = X или вернуть пару 0, 0, если такой пары чисел нет.
Решение должно быть быстрее, чем O(n(2))
*/

const HashTable = require('./index');


const findSummandsOfNumber = (summands, sum) => {
  const set = new HashTable();

  for (const summand of summands) {
    if (set.find(sum - summand)) {
      return [sum - summand, summand];
    }
    set.add(summand);
  }

  return [0, 0];
};

module.exports = findSummandsOfNumber;
