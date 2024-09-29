"use client";
import React, { useState } from "react";
import s from "./SectionHome.module.scss";
import secImg from "./img/image 954.png"; // Фоновое изображение
import sec from "./img/image 950.png"; // Изображение для первой страницы
import cul from "./img/image 949.png"; // Изображение для второй страницы
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Pagination } from "@mui/material";

const SectionHome = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 2; // Общее количество страниц
  const itemsPerPage = 2;

  const items = Array.from({ length: 4 }, (_, index) => `Item ${index + 1}`); // Измените на ваши данные

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    console.log("Current Page:", page);
  };

  // Расчет текущих элементов для отображения на странице
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className={s.cont}>
        <div className="container">
          <div className={s.section}>
            <div className={s.secText}>
              <Image
                src={secImg} // Фоновое изображение, которое остается неизменным
                alt="Background Image"
                quality={70}
                width={1579}
                height={794}
              />
              <div className={s.overlay}></div>

              <div className={s.secImg}>
                <div className={s.border}>
                  {/* Условный рендеринг для изменения изображения в зависимости от страницы */}
                  <Image
                    src={currentPage === 1 ? sec : cul} // Меняем изображение по номеру страницы
                    alt="Foreground Image"
                    quality={70}
                    width={805}
                    height={546}
                  />
                </div>

                <div className={s.box}>
                  <div className={s.nat}>
                    <h1>National Kyrgyz Musical Instruments</h1>
                  </div>
                  <br />
                  <br />

                  {/* Условный рендеринг контента на основе текущей страницы */}
                  {currentPage === 1 && (
                    <div className={s.pa}>
                      <p>
                        The Kyrgyz began to use felt for the manufacture of
                        carpets and other household items in antiquity...
                      </p>
                      {currentItems.map((item, index) => (
                        <div key={index} className={s.item}>
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                  {currentPage === 2 && (
                    <div className={s.pa}>
                      <p>
                        This is the second page content. Here you can add more
                        information or different content...
                      </p>
                      {currentItems.map((item, index) => (
                        <div key={index} className={s.item}>
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className={s.btn}>
                    <button>
                      More <MoveRight className={s.right} />
                    </button>
                  </div>
                  <div className={s.pag}>
                    <Pagination
                      count={totalPages}
                      page={currentPage}
                      onChange={handlePageChange}
                      color="primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHome;
