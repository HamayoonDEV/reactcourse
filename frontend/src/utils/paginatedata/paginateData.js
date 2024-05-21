import lodash from "lodash";

const paginateData = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;

  return lodash(items).slice(startIndex).take(pageSize).value();
};
export default paginateData;
