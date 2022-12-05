const partition = (arr, left, right) => {
  // разобраться
  const pivot = arr[Math.round(0.5*(right - left) + left)];

  while (left < right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return left;
};

const quickSort = (arr, left, right) => {
  left = left ?? 0;
  right = right ?? arr.length - 1;

  if (right - left < 1) return arr;

  const pivotIndex = partition(arr, left, right);

  quickSort(arr, left, pivotIndex - 1);

  quickSort(arr, pivotIndex, right);

  return arr;
};

module.exports = quickSort;
