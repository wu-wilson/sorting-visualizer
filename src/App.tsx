import { useState } from "react";
import Navbar from "./Components/NavBar/Navbar";
import Bars from "./Components/Bars";

// Each bar will have a height and a color.
export type bar = {
  height: number;
  color: string;
};

// Generate a new array.
export const generateNewArray = (arrSelection: string) => {
  const newArr: bar[] = [];
  if (arrSelection !== "ARRAY SIZE") {
    for (let i = 0; i < parseInt(arrSelection); i++) {
      newArr.push({
        height: Math.floor(Math.random() * (500 - 10)) + 10,
        color: "#d1d1d1",
      });
    }
  } else {
    for (let i = 0; i < 40; i++) {
      newArr.push({
        height: Math.floor(Math.random() * (500 - 10)) + 10,
        color: "#d1d1d1",
      });
    }
  }
  return newArr;
};

const App = () => {
  // Store selected algorithm, array size, and speed.
  const [algoSelection, setAlgoSelection] = useState<string>("ALGORITHM");
  const [arrSelection, setArrSelection] = useState<string>("ARRAY SIZE");
  const [speedSelection, setSpeedSelection] = useState<string>("SPEED");
  // Store the main array which will be sorted.
  const [arr, setArr] = useState<bar[]>(generateNewArray(arrSelection));

  return (
    <div className="app-container">
      <Navbar
        algoSelection={algoSelection}
        setAlgoSelection={setAlgoSelection}
        arrSelection={arrSelection}
        setArrSelection={setArrSelection}
        speedSelection={speedSelection}
        setSpeedSelection={setSpeedSelection}
        setArr={setArr}
      />
      <Bars
        algo={algoSelection}
        arrSize={arrSelection}
        speed={speedSelection}
        arr={arr}
        setArr={setArr}
      />
    </div>
  );
};

export default App;
