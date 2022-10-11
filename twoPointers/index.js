/*
  Дан массив сортированный по возрастанию чисел длиной N и число K.
  Требуется найти количество пар чисел A, B, таких что B - A > K.
  Решение за O(n)
*/

const countSubtructionPairs = (numbers, limit) => {
  let count = 0;
  let right = 0;

  for (let left = 0; left < numbers.length; left++) {
    while (numbers[right] - numbers[left] <= limit) {
      right++;
    }

    if (right > numbers.length) return count;

    count += numbers.length - right;
  }

  return count;
};

module.exports = countSubtructionPairs;
