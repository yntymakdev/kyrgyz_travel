import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination"; // Обратите внимание на импорт Pagination

const ItemList: React.FC = () => {
  const itemsPerPage = 5; // Количество элементов на странице
  const allItems = Array.from(
    { length: 50 },
    (_, index) => `Item ${index + 1}`
  ); // Генерация массива данных

  const totalPages = Math.ceil(allItems.length / itemsPerPage); // Общее количество страниц

  const [currentPage, setCurrentPage] = useState<number>(1); // Текущая страница
  const [currentItems, setCurrentItems] = useState<string[]>([]); // Элементы для текущей страницы

  // Обновление текущих элементов при изменении страницы
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const newItems = allItems.slice(startIndex, startIndex + itemsPerPage);
    setCurrentItems(newItems);
  }, [currentPage, allItems]);

  // Функция для обработки изменения страницы
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

export default ItemList;
