import { bar } from "../App";

export type selectionAnimation = {
  // Store pos, the index which min will be swapped with.
  pos: number;
  // Store min and idx2, the min index and index being compared to min.
  min: number;
  idx2: number;
  // Store swap, which tells us whether values were swapped.
  swap: boolean;
};

const selectionSort = (arr: bar[]) => {
  const arrCopy: bar[] = [...arr];
  const animation: selectionAnimation[] = [];
  for (let i = 0; i < arrCopy.length; i++) {
    let min = i;
    for (let j = i; j < arrCopy.length; j++) {
      if (arrCopy[j].height < arrCopy[min].height) {
        animation.push({ pos: i, min: min, idx2: j, swap: false });
        min = j;
      } else {
        animation.push({ pos: i, min: min, idx2: j, swap: false });
      }
    }
    animation.push({ pos: i, min: min, idx2: min, swap: true });
    [arrCopy[i], arrCopy[min]] = [arrCopy[min], arrCopy[i]];
  }
  return animation;
};

export default selectionSort;
