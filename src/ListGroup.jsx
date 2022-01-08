import React from "react";
const ListGroup = props => {
  const {
    item,
    selecteditem,
    ongenreselect,
    textProperty,
    valueProperty
  } = props;
  return (
    <ul className="list-group">
      {item.map(item => (
        <li
          key={item[valueProperty] + item[textProperty]}
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
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
