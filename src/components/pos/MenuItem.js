import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item" key={item.id}>
      <h3 className="menu-item-title">{item.title}</h3>
    </div>
  );
};

export default MenuItem;
