import React, { Component } from "react";
const ListGroup = props => {
  const {
    item,
    textProperty,
    valueProperty,
    selecteditem,
    ongenreselect
  } = props;
  return (
    <ul className="list-group">
      {item.map(item => (
        <li
          key={item[valueProperty]}
          className={
            selecteditem === item ? "list-group-item active" : "list-group-item"
          }
          onClick={() => ongenreselect(item)}
          style={{ cursor: "pointer" }}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
