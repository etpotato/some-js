// const isEven = (number) => number % 2 === 0;

// const findDifferentIndex = (string) => {
//   const numbers = string.split(' ').map((item => parseInt(item, 10)));

//   for (let i = 0; i < numbers.length; i++) {
//     const current = isEven(numbers[i]);
//     const prev = i === 0 ? isEven(numbers[i + 2]) : isEven(numbers[i - 1]);
//     const next = i === numbers.length - 1 ? isEven(numbers[i - 2]) : isEven(numbers[i + 1]);

//     if (prev === next && current !== prev) {
//       return i + 1;
//     }
//   }

//   return null;
// };

const findDifferentIndex = (string) => {
  const reminders = string.split(' ').map(number => parseInt(number, 10) % 2);
  const sum = reminders.reduce((a, b) => a + b);
  const target = sum > 1 ? 0 : 1;
  return reminders.indexOf(target) + 1;
};

module.exports = findDifferentIndex;
