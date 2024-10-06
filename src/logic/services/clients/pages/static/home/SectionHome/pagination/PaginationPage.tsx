import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";

const PaginationPage: React.FC = () => {
  const itemsPerPage = 5;
  const allItems = Array.from(
    { length: 50 },
    (_, index) => `Item ${index + 1}`
  );

  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentItems, setCurrentItems] = useState<string[]>([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const newItems = allItems.slice(startIndex, startIndex + itemsPerPage);
    setCurrentItems(newItems);
  }, [currentPage, allItems]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h2>Items List</h2>
      {currentItems.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
      />
    </div>
  );
};

export default PaginationPage;
