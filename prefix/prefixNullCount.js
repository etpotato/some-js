/*
  Дан массив чисел длиной N. Запрос формата [L, R).
  В ответе возвращать количество нулей в интервале от L включительно до R невключительно.
*/

const prefixNullCount = (sourceArray) => {
  const getPrefixSumArray = (source) => {
    const prefixSumArray = new Array(source.length + 1).fill(0);

    for (let i = 0; i < prefixSumArray.length; i++) {
      if (i === 0) continue;

      prefixSumArray[i] = source[i - 1] === 0 ? prefixSumArray[i - 1] + 1 : prefixSumArray[i - 1];
    }

    return prefixSumArray;
  };

  const prefixSumArray = getPrefixSumArray(sourceArray);

  return (left, right) => prefixSumArray[right] - prefixSumArray[left];
};

module.exports = prefixNullCount;
