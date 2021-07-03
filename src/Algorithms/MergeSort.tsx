import { bar } from "../App";

export type mergeAnimation = {
  // Store overwriteIdx, the index being overwritten.
  overwriteIdx: number;
  // Store newHeight, the new height of the overwritten index.
  newHeight: number;
  // Store idx1 and idx2, the indexes we are comparing.
  idx1: number;
  idx2: number;
};

const merge = (
  arr: bar[],
  aux: bar[],
  lo: number,
  mid: number,
  hi: number,
  animation: mergeAnimation[]
) => {
  aux = [...arr];
  let i = lo;
  let j = mid + 1;
  for (let k = lo; k < hi + 1; k++) {
    if (i > mid) {
      animation.push({
        overwriteIdx: k,
        newHeight: aux[j].height,
        idx1: i - 1,
        idx2: j,
      });
      arr[k] = aux[j];
      j += 1;
    } else if (j > hi) {
      animation.push({
        overwriteIdx: k,
        newHeight: aux[i].height,
        idx1: j - 1,
        idx2: i,
      });
      arr[k] = aux[i];
      i += 1;
    } else if (aux[j].height < aux[i].height) {
      animation.push({
        overwriteIdx: k,
        newHeight: aux[j].height,
        idx1: i,
        idx2: j,
      });
      arr[k] = aux[j];
      j += 1;
    } else {
      animation.push({
        overwriteIdx: k,
        newHeight: aux[i].height,
        idx1: i,
        idx2: j,
      });
      arr[k] = aux[i];
      i += 1;
    }
  }
};

const sort = (
  arr: bar[],
  aux: bar[],
  lo: number,
  hi: number,
  animation: mergeAnimation[]
) => {
  if (hi <= lo) {
    return;
  }
  const mid = lo + Math.floor((hi - lo) / 2);
  sort(arr, aux, lo, mid, animation);
  sort(arr, aux, mid + 1, hi, animation);
  merge(arr, aux, lo, mid, hi, animation);
};

const mergeSort = (arr: bar[]) => {
  const arrCopy: bar[] = [...arr];
  const aux: bar[] = [...arr];
  const animation: mergeAnimation[] = [];
  sort(arrCopy, aux, 0, arrCopy.length - 1, animation);
  return animation;
};

export default mergeSort;
