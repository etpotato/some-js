const getDigitList = (number) => {
  const result = new Array(10).fill(0);
  let currentNum = number;

  while (currentNum > 0) {
    const reminder = currentNum % 10;
    result[reminder]++;
    currentNum = ~~(currentNum/10);
  }

  return result;
};

const isDigitPermutation = (x, y) => {
  const xList = getDigitList(x);
  const yList = getDigitList(y);

  for (let i = 0; i < xList.length; i++) {
    if (xList[i] !== yList[i]) return false;
  }

  return true;
};

module.exports = isDigitPermutation;
