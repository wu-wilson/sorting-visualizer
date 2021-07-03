import { bar } from "../App";
import mergeSort, { mergeAnimation } from "../Algorithms/MergeSort";

const mergeAnimate = (
  arr: bar[],
  setArr: (arr: bar[]) => void,
  setIsSorting: (value: boolean) => void,
  speed: number
) => {
  // Get the animations for sorting the array via merge sort.
  const animation: mergeAnimation[] = mergeSort(arr);
  // Set the array to its initial color.
  for (let i = 0; i < arr.length; i++) {
    arr[i].color = "#d1d1d1";
  }
  setArr([...arr]);
  // Iterate through the animation array, animating the algorithm.
  for (let i = 0; i < animation.length; i++) {
    // Uncolor the appropriate bars from the previous iteration.
    setTimeout(() => {
      if (i !== 0) {
        arr[animation[i - 1].idx1].color = "#d1d1d1";
        arr[animation[i - 1].idx2].color = "#d1d1d1";
        arr[animation[i - 1].overwriteIdx].color = "#d1d1d1";
        setArr([...arr]);
      }
    }, i * 20 * speed);
    // Color the appropriate bars for this iteration.
    setTimeout(() => {
      arr[animation[i].idx1].color = "#d1d366";
      arr[animation[i].idx2].color = "#d1d366";
      arr[animation[i].overwriteIdx].color = "#8caad1";
      setArr([...arr]);
    }, i * 20 * speed);
    // Overwrite values/execute the animation for this iteration.
    setTimeout(() => {
      arr[animation[i].overwriteIdx].height = animation[i].newHeight;
      setArr([...arr]);
    }, i * 20 * speed);
    // If the animation is finished, set isSorting to false and color the array green.
    if (i === animation.length - 1) {
      setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
          arr[i].color = "rgb(176, 201, 169)";
        }
        setIsSorting(false);
        setArr([...arr]);
      }, i * 20 * speed);
    }
  }
};

export default mergeAnimate;
