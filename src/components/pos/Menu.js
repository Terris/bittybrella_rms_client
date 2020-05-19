import React from "react";
import "./Menu.css";

const MENU_ITEMS = [
  { id: 0, title: "Drip Coffee" },
  { id: 1, title: "Espresso" },
  { id: 2, title: "Latte" },
  { id: 3, title: "Mocha" },
  { id: 4, title: "Flavored Latte" },
];

const Menu = () => {
  return (
    <div className="menu">
      {MENU_ITEMS &&
        MENU_ITEMS.map((item) => (
          <div className="menu-item" key={item.id}>
            <h3 className="menu-item-title">{item.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default Menu;
