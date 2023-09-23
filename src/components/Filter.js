import "./Filter.css";
import React, { useState } from "react";
function Filter() {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const getIconClass = (iconName) => {
    return activeIcon === iconName ? "active" : "";
  };
  return (
    <div>
      <div className="filtered container w-50 bg-light p-2">
        <button
          className={`btn_s ${getIconClass("btn1")}`}
          onClick={() => handleIconClick("btn1")}
        >
          starters
        </button>
        <button
          className={`btn_s  ${getIconClass("btn2")}`}
          onClick={() => handleIconClick("btn2")}
        >
          Breakfast
        </button>
        <button
          className={`btn_s  ${getIconClass("btn3")}`}
          onClick={() => handleIconClick("btn3")}
        >
          Lunch
        </button>
        <button
          className={`btn_s  ${getIconClass("btn4")}`}
          onClick={() => handleIconClick("btn4")}
        >
          Supper
        </button>
        <button
          className={`btn_s  ${getIconClass("btn5")}`}
          onClick={() => handleIconClick("btn5")}
        >
          Deserts
        </button>
        <button
          className={`btn_s  ${getIconClass("btn6")}`}
          onClick={() => handleIconClick("btn6")}
        >
          Beverages
        </button>
      </div>
    </div>
  );
}

export default Filter;
