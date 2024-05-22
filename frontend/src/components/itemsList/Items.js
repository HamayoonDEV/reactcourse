import React from "react";

const Items = (props) => {
  const { itemsArry, onSort } = props;
  return (
    <div>
      <table>
        <th onClick={() => onSort("title")}>Title</th>
        <th onClick={() => onSort("name")}>genre</th>
      </table>{" "}
      {itemsArry.map((item, index) => (
        <div key={index}>
          <h1>{item?.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Items;
