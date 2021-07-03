import bubbleAnimate from "../Animations/BubbleAnimate";
import selectionAnimate from "../Animations/SelectionAnimate";
import insertionAnimate from "../Animations/InsertionAnimate";
import mergeAnimate from "../Animations/MergeAnimate";
import quickAnimate from "../Animations/QuickAnimate";
import { bar, generateNewArray } from "../App";
import { useState } from "react";

// Given the speed selected by the user, return the proper multiplier.
const getSpeed = (speedStr: string) => {
  if (speedStr !== "ARRAY SIZE") {
    let temp: string = "";
    for (let i = 0; i < speedStr.length - 1; i++) {
      temp += speedStr[i];
    }
    if (temp === "4") {
      return 0.25;
    } else if (temp === "2") {
      return 0.5;
    } else if (temp === "1") {
      return 1;
    } else if (temp === "0.5") {
      return 2;
    } else {
      return 4;
    }
  } else {
    return 1;
  }
};

const Bars = ({
  algo,
  arrSize,
  speed,
  arr,
  setArr,
}: {
  algo: string;
  arrSize: string;
  speed: string;
  arr: bar[];
  setArr: (arr: bar[]) => void;
}) => {
  // Store whether or not the array is currently being sorted.
  const [isSorting, setIsSorting] = useState<boolean>(false);

  // If the array is not being sorted, display a new array.
  const handleNewArray = () => {
    if (isSorting === false) {
      setArr(generateNewArray(arrSize));
    }
  };

  // If the array is not currently being sorted, sort it.
  const handleSort = () => {
    if (isSorting === false) {
      // If an algorithm, array size, or speed is not set, alert the user.
      if (
        algo === "ALGORITHM" ||
        arrSize === "ARRAY SIZE" ||
        speed === "SPEED"
      ) {
        window.alert("Please select an algorithm, array size, and speed.");
      } else {
        // Sort the array with the proper algorithm and speed.
        setIsSorting(true);
        switch (algo) {
          case "BUBBLE SORT":
            bubbleAnimate(arr, setArr, setIsSorting, getSpeed(speed));
            break;
          case "SELECTION SORT":
            selectionAnimate(arr, setArr, setIsSorting, getSpeed(speed));
            break;
          case "INSERTION SORT":
            insertionAnimate(arr, setArr, setIsSorting, getSpeed(speed));
            break;
          case "MERGE SORT":
            mergeAnimate(arr, setArr, setIsSorting, getSpeed(speed));
            break;
          case "QUICK SORT":
            quickAnimate(arr, setArr, setIsSorting, getSpeed(speed));
            break;
          default:
            console.log("error");
        }
      }
    }
  };

  return (
    <div className="bars-container">
      <div className="bars-box-container">
        <div className="bars-button-container">
          <button className="bars-button new-arr" onClick={handleNewArray}>
            NEW ARRAY
          </button>
          <button className="bars-button" onClick={handleSort}>
            SORT ARRAY
          </button>
        </div>
        <div className="bars-bars-container">
          {arr.map((bar, idx) => (
            <div
              className="bar"
              key={idx}
              style={{
                height: `${bar.height}px`,
                backgroundColor: bar.color,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bars;
