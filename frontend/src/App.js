import Pagination from "./components/pagination/Pagination";
import items from "./utils/items/items";
import { useState } from "react";
import paginateData from "./utils/paginatedata/paginateData";

function App() {
  const [currentPageChange, setCurrentPageChange] = useState(0);
  const pageSize = 4;
  const handlePageChange = (page) => {
    setCurrentPageChange(page);
  };
  const itemsArry = paginateData(items, currentPageChange, pageSize);

  return (
    <div className="App">
      {itemsArry.map((item, index) => (
        <div key={index}>
          <h1>{item?.name}</h1>
          <span>{item?.age}</span>
        </div>
      ))}
      <Pagination
        itemCount={items.length}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPageChange}
      />
    </div>
  );
}

export default App;
