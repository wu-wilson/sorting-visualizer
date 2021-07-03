import { bar } from "../App";

export type insertionAnimation = {
  // Store idx1 and idx2, the indexes we are comparing.
  idx1: number;
  idx2: number;
};

const insertionSort = (arr: bar[]) => {
  const arrCopy: bar[] = [...arr];
  const animation: insertionAnimation[] = [];
  for (let i = 1; i < arrCopy.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arrCopy[j].height < arrCopy[j - 1].height) {
        animation.push({ idx1: j, idx2: j - 1 });
        [arrCopy[j], arrCopy[j - 1]] = [arrCopy[j - 1], arrCopy[j]];
      } else {
        break;
      }
    }
  }
  return animation;
};

export default insertionSort;
