import React from "react";
import lodash from "lodash";

const Pagination = (props) => {
  const { itemCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 1) return null;
  const pages = lodash.range(1, pageCount + 1);

  return (
    <div>
      <ul>
        {pages.map((page, index) => (
          <li
            key={index}
            style={{
              color: currentPage === page ? "red" : "black",
              cursor: "pointer",
            }}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
