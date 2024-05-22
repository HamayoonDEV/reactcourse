import React from "react";

const ListItems = (props) => {
  const { items, currentItem, onSelectedItem } = props;
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => onSelectedItem(item.name)}
            style={{
              color: item.name === currentItem ? "red" : "black",
              cursor: "pointer",
            }}
          >
            <h3>{item.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
