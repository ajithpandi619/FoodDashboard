import React, { useState } from "react";
import { RiHome6Line } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import { AiOutlineDollarCircle, AiOutlinePieChart } from "react-icons/ai";
import { LuShoppingBag } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { MdTableRestaurant } from "react-icons/md";
import "./Navbar.css";

function Navbar() {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const getIconClass = (iconName) => {
    return activeIcon === iconName ? "active" : "";
  };

  return (
    <div>
      <div className="nav_bar">
        <div
          className={`nav_icons mt-3 ${getIconClass("home")}`}
          onClick={() => handleIconClick("home")}
        >
          <RiHome6Line className="ic" />
          <br />
          Home
        </div>
        <div
          className={`nav_icons ${getIconClass("customers")}`}
          onClick={() => handleIconClick("customers")}
        >
          <BsFillPersonFill className="ic" />
          <br />
          Customers
        </div>
        <div
          className={`nav_icons ${getIconClass("tables")}`}
          onClick={() => handleIconClick("tables")}
        >
          <MdTableRestaurant className="ic" />
          <br />
          Tables
        </div>
        <div
          className={`nav_icons ${getIconClass("cashier")}`}
          onClick={() => handleIconClick("cashier")}
        >
          <AiOutlineDollarCircle className="ic" />
          <br />
          Cashier
        </div>
        <div
          className={`nav_icons ${getIconClass("orders")}`}
          onClick={() => handleIconClick("orders")}
        >
          <LuShoppingBag className="ic" />
          <br />
          Orders
        </div>
        <div
          className={`nav_icons ${getIconClass("reports")}`}
          onClick={() => handleIconClick("reports")}
        >
          <AiOutlinePieChart className="ic" />
          <br />
          Reports
        </div>
        <div
          className={`nav_icons ${getIconClass("settings")}`}
          onClick={() => handleIconClick("settings")}
        >
          <FiSettings className="ic" />
          <br />
          Settings
        </div>
        <div
          className={`nav_icons lc_icon ${getIconClass("logout")}`}
          onClick={() => handleIconClick("logout")}
        >
          <BiLogOutCircle className="ic" />
          <br />
          Logout
        </div>
      </div>
    </div>
  );
}

export default Navbar;
