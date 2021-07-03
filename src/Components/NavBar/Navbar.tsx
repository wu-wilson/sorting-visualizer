import { useState } from "react";
import DDMenu from "./DDMenu";
import "../../styles.css";
import { bar } from "../../App";

export type selectionItem = {
  id: number;
  option: string;
  selected: boolean;
};

const Navbar = ({
  algoSelection,
  setAlgoSelection,
  arrSelection,
  setArrSelection,
  speedSelection,
  setSpeedSelection,
  setArr,
}: {
  algoSelection: string;
  setAlgoSelection: (selection: string) => void;
  arrSelection: string;
  setArrSelection: (selection: string) => void;
  speedSelection: string;
  setSpeedSelection: (selection: string) => void;
  setArr: (bars: bar[]) => void;
}) => {
  // Store whther the algorithm dropdown menu is opened or closed.
  const [algoOpen, setAlgoOpen] = useState<boolean>(false);
  // Store the selected algorithm.
  const [algos, setAlgos] = useState<selectionItem[]>([
    { id: 0, option: "MERGE SORT", selected: false },
    { id: 1, option: "QUICK SORT", selected: false },
    { id: 2, option: "INSERTION SORT", selected: false },
    { id: 3, option: "SELECTION SORT", selected: false },
    { id: 4, option: "BUBBLE SORT", selected: false },
  ]);

  // Store whther the array size dropdown menu is opened or closed.
  const [arrSizeOpen, setArrSizeOpen] = useState<boolean>(false);
  // Store the selected array size.
  const [arrSize, setArrSize] = useState<selectionItem[]>([
    { id: 0, option: "20", selected: false },
    { id: 1, option: "40", selected: false },
    { id: 2, option: "60", selected: false },
    { id: 3, option: "80", selected: false },
    { id: 4, option: "100", selected: false },
  ]);

  // Store whether the speed dropdown menu is opened or closed.
  const [speedOpen, setSpeedOpen] = useState<boolean>(false);
  // Store the selected speed.
  const [speed, setSpeed] = useState<selectionItem[]>([
    { id: 0, option: "0.25x", selected: false },
    { id: 1, option: "0.5x", selected: false },
    { id: 2, option: "1x", selected: false },
    { id: 3, option: "2x", selected: false },
    { id: 4, option: "4x", selected: false },
  ]);

  // Store whether the hamburger menu is opened or closed.
  const [hbOpen, setHbOpen] = useState<boolean>(false);
  // Set "hbopen" to the proper value when the menu is closed/opened.
  const handleHbClick = () => {
    setHbOpen(!hbOpen);
  };

  return (
    <div className="nb-container">
      <div className="nb-bar">sorting visualizer</div>
      <div className="nb-menus-container">
        <DDMenu
          open={algoOpen}
          setOpen={setAlgoOpen}
          width={150}
          items={algos}
          setItems={setAlgos}
          selection={algoSelection}
          setSelection={setAlgoSelection}
          setArr={setArr}
        />
        <DDMenu
          open={arrSizeOpen}
          setOpen={setArrSizeOpen}
          width={120}
          items={arrSize}
          setItems={setArrSize}
          selection={arrSelection}
          setSelection={setArrSelection}
          setArr={setArr}
        />
        <DDMenu
          open={speedOpen}
          setOpen={setSpeedOpen}
          width={80}
          items={speed}
          setItems={setSpeed}
          selection={speedSelection}
          setSelection={setSpeedSelection}
          setArr={setArr}
        />
      </div>
      <div className="hb-container">
        <div className="hb-select-container" onClick={handleHbClick}>
          <div
            className={`hb-line-container ${hbOpen ? "hb-line-closed" : null}`}
          >
            <div className="hb-line" />
            <div className="hb-line" />
            <div className="hb-line" />
          </div>
          <div className={`hb-x ${hbOpen ? "hb-x-open" : null}`}>✕</div>
        </div>
        <div className={`hb-menu ${hbOpen ? "hb-menu-open" : null}`}>
          <DDMenu
            open={algoOpen}
            setOpen={setAlgoOpen}
            width={150}
            items={algos}
            setItems={setAlgos}
            selection={algoSelection}
            setSelection={setAlgoSelection}
            setArr={setArr}
          />
          <DDMenu
            open={arrSizeOpen}
            setOpen={setArrSizeOpen}
            width={150}
            items={arrSize}
            setItems={setArrSize}
            selection={arrSelection}
            setSelection={setArrSelection}
            setArr={setArr}
          />
          <DDMenu
            open={speedOpen}
            setOpen={setSpeedOpen}
            width={150}
            items={speed}
            setItems={setSpeed}
            selection={speedSelection}
            setSelection={setSpeedSelection}
            setArr={setArr}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
