import { bar } from "../App";
import quickSort, { quickAnimation } from "../Algorithms/QuickSort";

const quickAnimate = (
  arr: bar[],
  setArr: (arr: bar[]) => void,
  setIsSorting: (value: boolean) => void,
  speed: number
) => {
  // Get the animations for sorting the array via quick sort.
  const animation: quickAnimation[] = quickSort(arr);
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
        if (animation[i - 1].swap === true) {
          if (animation[i - 1].sorted === false) {
            arr[animation[i - 1].idx1].color = "#d1d1d1";
            arr[animation[i - 1].idx2].color = "#d1d1d1";
          }
        } else {
          arr[animation[i - 1].idx1].color = "#d1d1d1";
          arr[animation[i - 1].idx2].color = "#d1d1d1";
        }
        setArr([...arr]);
      }
    }, i * 20 * speed);
    // Color the appropriate bars for this iteration.
    setTimeout(() => {
      arr[animation[i].idx1].color = "#d1d366";
      arr[animation[i].idx2].color = "#d1d366";
      arr[animation[i].pivot].color = "#8caad1";
      setArr([...arr]);
    }, i * 20 * speed);
    // Swap values/execute the animation for this iteration.
    setTimeout(() => {
      if (animation[i].swap === true) {
        [arr[animation[i].idx1], arr[animation[i].idx2]] = [
          arr[animation[i].idx2],
          arr[animation[i].idx1],
        ];
        if (animation[i].sorted === true) {
          arr[animation[i].idx1].color = "#d1d1d1";
          arr[animation[i].idx2].color = "rgb(176, 201, 169)";
        }
        setArr([...arr]);
      }
    }, i * 20 * speed);
    // If the animation is finished, set isSorting to false.
    if (i === animation.length - 1) {
      setTimeout(() => {
        setIsSorting(false);
      }, i * 20 * speed);
    }
  }
};

export default quickAnimate;
