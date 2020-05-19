import React from "react";
import MenuItem from "./MenuItem";
import "./Menu.css";

const MENU_ITEMS = [
  { id: 0, title: "Drip" },
  { id: 1, title: "Espresso" },
  { id: 2, title: "Latte" },
  { id: 3, title: "Mocha" },
  { id: 4, title: "Flavored Latte" },
];

const Menu = () => {
  return (
    <div className="menu">
      {MENU_ITEMS &&
        MENU_ITEMS.map((item) => <MenuItem key={item.id} item={item} />)}
      <hr />
    </div>
  );
};

export default Menu;
