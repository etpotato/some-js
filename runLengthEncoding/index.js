const encode = (string) => {
  if (string.length < 2) return string;

  let result = '';
  let currentLetter = string[0];
  let currentCount = 1;
  let i = 1;

  while (i < string.length) {
    while(currentLetter === string[i]) {
      currentCount++;
      i++;
    }

    result = result.concat(currentLetter);

    if (currentCount > 1) result = result.concat(currentCount);

    currentLetter = string[i];
    currentCount = 0;
  }

  return result;
};

module.exports = encode;
