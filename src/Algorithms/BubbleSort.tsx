import { bar } from "../App";

export type bubbleAnimation = {
  // Store idx1 and idx2, the indexes we are comparing.
  idx1: number;
  idx2: number;
  // Store swap and sorted, which tells us whether values were swapped and if a bar is sorted.
  swap: boolean;
  sorted: boolean;
};

const bubbleSort = (arr: bar[]) => {
  const arrCopy: bar[] = [...arr];
  const animation: bubbleAnimation[] = [];
  for (let i = 0; i < arrCopy.length; i++) {
    for (let j = 0; j < arrCopy.length - i - 1; j++) {
      if (arrCopy[j].height > arrCopy[j + 1].height) {
        animation.push({ idx1: j, idx2: j + 1, swap: true, sorted: false });
        [arrCopy[j], arrCopy[j + 1]] = [arrCopy[j + 1], arrCopy[j]];
      } else {
        animation.push({ idx1: j, idx2: j + 1, swap: false, sorted: false });
      }
      if (animation[animation.length - 1].idx1 === arrCopy.length - i - 2) {
        animation[animation.length - 1].sorted = true;
      }
    }
  }
  return animation;
};

export default bubbleSort;
