"use client";
import React, { useState, useEffect } from "react";
import s from "./SectionHome.module.scss";
import secImg from "./img/image 954.png";
import sec from "./img/image 950.png";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Pagination } from "@mui/material";

const SectionHome: React.FC = () => {
  // Состояние для текущей страницы
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 10; // Замените на общее количество страниц
  const itemsPerPage = 2; // Количество элементов на странице

  // Фейковые данные для примера
  const items = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

  // Функция для обработки изменения страницы
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
                src={secImg}
                alt="Background Image"
                quality={70}
                width={1579}
                height={794}
              />
              <div className={s.overlay}></div>
              <div className={s.secImg}>
                <div className={s.border}>
                  <Image
                    src={sec}
                    alt="Foreground Image"
                    quality={70}
                    width={805}
                    height={546}
                  />
                </div>
                <div className={s.box}>
                  <div className={s.nat}>
                    <h1>National kyrgyz musical instruments</h1>
                  </div>
                  <br />
                  <br />
                  <div className={s.pa}>
                    <p>
                      The Kyrgyz began to use felt for the manufacture of
                      carpets and other household items in antiquity. Various
                      factors influenced the development and improvement of each
                      type of Kyrgyz carpet art: living conditions, climate,
                      natural conditions and social factors. The most popular
                      type of felt carpet in Kyrgyzstan today is shyrdak. It is
                      made using mosaic technique, which is one of the most
                      difficult, while one of the most important qualities of
                      shirdak is durability.
                    </p>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  {/* Отображение текущих элементов на странице */}
                  <div className={s.items}>
                    {currentItems.map((item, index) => (
                      <div key={index} className={s.item}>
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className={s.btn}>
                    <button>
                      More <MoveRight className={s.right} />
                    </button>
                  </div>
                  <div className={s.pag}>
                    <Pagination
                      count={totalPages} // Общее количество страниц
                      page={currentPage} // Текущая страница
                      onChange={handlePageChange} // Обработчик изменения страницы
                      color="primary" // Вы можете изменить цвет
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
