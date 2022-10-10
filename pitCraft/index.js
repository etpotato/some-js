// По ландшафту определите, сколько столбиков воды осталось после дождя в низинах на острове

/*
          []
      []~~[]
  []~~[][][]~~~~[]
  [][][][][][][][][]
  4 воды


          []~~[]
      []~~[]~~[]
  []~~[][][][][]~~~~[]
  [][][][][][][][][][][]
  6 воды
*/

const findWater = (arr) => {
  let water = 0;
  let maxPeak = 0;
  let maxPeakIndex = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxPeak) {
          maxPeak = arr[i];
          maxPeakIndex = i;
      }
  }

  let prevLeftHeight = arr[0];

  for (let i = 1; i < maxPeakIndex; i++) {
      const capacity = prevLeftHeight - arr[i];
      if (capacity > 0) {
          water += capacity;
      } else {
          prevLeftHeight = arr[i];
      }
  }

  let prevRightHeight = arr[arr.length - 1];

  for (let i = arr.length - 2; i > maxPeakIndex; i--) {
      const capacity = prevRightHeight - arr[i];
      if (capacity > 0) {
          water += capacity;
      } else {
          prevRightHeight = arr[i];
      }
  }

  return water;
};

module.exports = findWater;
