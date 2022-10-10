/*
  На шахматной доске N x N находятся М ладей
  (ладья бьет клетки по вертикали и горизонтали до ближайшей занятой).
  Ладьи задаются парой чисел [I, J], обозначающих координаты клетки.
  1 <= N <= 10*9, 0 <= M <= 2 x 10*5
  Определите сколько пар ладей бьют друг друга.
*/

const countRookPairs = (rooks) => {
  const addItem = (pairsDictionary, item) => {
    // количество пар в строке = кол-во фигур - 1. Поэтому первую не считаем.
    if (pairsDictionary[item] >= 0) {
      pairsDictionary[item]++;
    } else {
      pairsDictionary[item] = 0;
    }
  };

  const getPairsSum = (dictionary) => {
    let result = 0;

    for (const item in dictionary) {
      result += dictionary[item];
    }

    return result;
  };

  const xPairs = {};
  const yPairs = {};

  // записываем количество пар для каждой строки/столбца
  for (const [x, y] of rooks) {
    addItem(xPairs, x);
    addItem(yPairs, y);
  }

  // складываем полученные количества пар
  return getPairsSum(xPairs) + getPairsSum(yPairs);
};

module.exports = countRookPairs;
