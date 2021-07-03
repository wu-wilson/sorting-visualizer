import { bar } from "../App";

export type quickAnimation = {
  // Store pivot, idx1, and idx2, the indexes of the pivot and values being compared.
  pivot: number;
  idx1: number;
  idx2: number;
  // Store swap and sorted, which tells us whether values were swapped and if a bar is sorted.
  swap: boolean;
  sorted: boolean;
};

const partition = (
  arr: bar[],
  lo: number,
  hi: number,
  animation: quickAnimation[]
) => {
  let i = hi;
  let j = i;
  let pivot = arr[lo].height;
  while (i > lo) {
    animation.push({
      pivot: lo,
      idx1: i,
      idx2: j,
      swap: false,
      sorted: false,
    });
    if (pivot < arr[i].height) {
      animation.push({
        pivot: lo,
        idx1: i,
        idx2: j,
        swap: true,
        sorted: false,
      });
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j--;
    }
    i--;
  }
  animation.push({
    pivot: lo,
    idx1: i,
    idx2: j,
    swap: true,
    sorted: true,
  });
  [arr[j], arr[lo]] = [arr[lo], arr[j]];
  return j;
};

const sort = (
  arr: bar[],
  lo: number,
  hi: number,
  animation: quickAnimation[]
) => {
  if (lo < hi) {
    const index = partition(arr, lo, hi, animation);
    sort(arr, lo, index - 1, animation);
    sort(arr, index + 1, hi, animation);
  } else {
    if (lo === hi) {
      animation.push({
        pivot: lo,
        idx1: lo,
        idx2: lo,
        swap: true,
        sorted: true,
      });
    }
  }
};

const quickSort = (arr: bar[]) => {
  const arrCopy: bar[] = [...arr];
  const animation: quickAnimation[] = [];
  sort(arrCopy, 0, arrCopy.length - 1, animation);
  return animation;
};

export default quickSort;
