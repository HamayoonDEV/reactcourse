import Pagination from "./components/pagination/Pagination";
import items from "./utils/items/items";
import { useState } from "react";
import paginateData from "./utils/paginatedata/paginateData";
import ListItems from "./components/pagination/listItems/ListItems";
import genraItems from "./utils/genra/genraItem";
import Items from "./components/itemsList/Items";
import lodash from "lodash";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [sortColum, setSortColum] = useState({});
  const [currentPageChange, setCurrentPageChange] = useState(0);
  const [currentItem, setCurrentItem] = useState(undefined);
  const pageSize = 4;
  const handlePageChange = (page) => {
    setCurrentPageChange(page);
  };
  const filterdData = currentItem
    ? items.filter((item) => item.name === currentItem)
    : items;
  const sorted = lodash.orderBy(
    filterdData,
    [sortColum.path],
    [sortColum.order]
  );
  const itemsArry = paginateData(sorted, currentPageChange, pageSize);
  const handleSelectedItem = (item) => {
    setCurrentItem(item);
  };
  const handleSort = (path) => {
    setSortColum({ path, order: "asc" });
    toast("this is testing toast!");
  };
  return (
    <div className="App">
      <ToastContainer />
      <ListItems
        items={genraItems}
        onSelectedItem={handleSelectedItem}
        currentItem={currentItem}
      />
      <Items itemsArry={itemsArry} onSort={handleSort} />

      <Pagination
        itemCount={filterdData.length}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPageChange}
      />
    </div>
  );
}

export default App;
