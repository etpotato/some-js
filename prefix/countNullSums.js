/*
  Дан массив чисел длиной N.
  В ответе возвращать количество отрезков которые в сумме дают 0.
  Решение за O(n)
*/

// получить количество возможных отрезков из количества точек на прямой = n x (n - 1) / 2

const countNullSums = (sourceArray) => {
  const getPrefixSumDictionary = (source) => {
    const prefixPartsDictionary = new Map();
    prefixPartsDictionary.set(0, 1);
    let sum = 0;

    for (const item of source) {
      sum += item;

      if (!prefixPartsDictionary.has(sum)) {
        prefixPartsDictionary.set(sum, 0);
      }

      prefixPartsDictionary.set(sum, prefixPartsDictionary.get(sum) + 1);
    }

    return prefixPartsDictionary;
  };

  const prefixSumDictionary = getPrefixSumDictionary(sourceArray);

  let count = 0;

  for (const sumCount of prefixSumDictionary.values()) {
    count += sumCount * (sumCount - 1) / 2;
  }

  return count;
};

module.exports = countNullSums;
