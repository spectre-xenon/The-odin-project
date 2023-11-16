export default function mergeSort(Arr) {
  if (Arr.length === 1) return Arr;

  const halfArr = Arr.length / 2;
  const leftHalf = mergeSort(Arr.slice(0, halfArr));
  const rightHalf = mergeSort(Arr.slice(halfArr));

  const sortedArr = [];

  ((left, right) => {
    let lPointer = 0;
    let rPointer = 0;

    while (lPointer < left.length && rPointer < right.length) {
      if (left[lPointer] < right[rPointer]) {
        sortedArr.push(left[lPointer]);
        lPointer++;
      } else {
        sortedArr.push(right[rPointer]);
        rPointer++;
      }
    }

    while (lPointer < left.length) {
      sortedArr.push(left[lPointer]);
      lPointer++;
    }

    while (rPointer < right.length) {
      sortedArr.push(right[rPointer]);
      rPointer++;
    }
  })(leftHalf, rightHalf);
  return sortedArr;
}
