import { selectionItem } from "./Navbar";
import { bar, generateNewArray } from "../../App";

const DDMenu = ({
  open,
  setOpen,
  width,
  items,
  setItems,
  selection,
  setSelection,
  setArr,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  width: number;
  items: selectionItem[];
  setItems: (items: selectionItem[]) => void;
  selection: string;
  setSelection: (selection: string) => void;
  setArr: (bars: bar[]) => void;
}) => {
  // Return the proper arrow when a dropdown menu is closed/opened.
  const getArrow = () => {
    if (open) {
      return "ᐱ";
    } else {
      return "ᐯ";
    }
  };

  // Set "open" to the proper value when a menu is opened or closed.
  const handleClick = () => {
    setOpen(!open);
  };

  // If an item is selected, close the menu and change its color in the menu.
  const itemSelected = (selectedItem: selectionItem) => {
    setOpen(false);
    // If an array size is selected, change the array displayed to the proper size.
    if (items[0].option === "20") {
      setArr(generateNewArray(selectedItem.option));
    }
    setSelection(selectedItem.option);
    for (let i = 0; i < items.length; i++) {
      if (items[i].option === selectedItem.option) {
        items[i].selected = true;
      } else {
        items[i].selected = false;
      }
    }
  };

  return (
    <div className="dd-container">
      <div className="dd-select-box" style={{ width: `${width}px` }}>
        {selection}
        <button className="dd-button" onClick={handleClick}>
          {getArrow()}
        </button>
      </div>
      <div className={`dd-menu ${open ? null : "dd-menu-closed"}`}>
        {items.map((item) => (
          <div
            className={`dd-menu-option ${
              item.selected ? "dd-option-selected" : null
            }`}
            key={item.id}
            onClick={() => itemSelected(item)}
          >
            {item.option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DDMenu;
