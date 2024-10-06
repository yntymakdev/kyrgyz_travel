"use client";
import React, { useState } from "react";
import s from "./SectionHome.module.scss";
import secImg from "./img/image 954.png"; // Фоновое изображение
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Pagination } from "@mui/material";
import { useGetPosts_cultureQuery } from "@/redux/api/culture";

const SectionHome = () => {
  const { data = [], isError, isLoading } = useGetPosts_cultureQuery();
  console.log(data);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 1; // Изменено на 1 элемент на странице
  const totalPages = Math.ceil(data.length / itemsPerPage); // Общее количество страниц

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    console.log("Current Page:", page);
  };

  const currentItem = data.slice(
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
                  {/* Динамическое изображение на основе данных */}
                  {currentItem.length > 0 && (
                    <Image
                      src={currentItem[0].image} // Изображение из текущего элемента
                      alt={currentItem[0].culture_name}
                      quality={70}
                      width={805}
                      height={546}
                    />
                  )}
                </div>

                <div className={s.box}>
                  <div className={s.nat}>
                    <h1>{currentItem[0]?.culture_name}</h1>
                  </div>
                  <br />
                  <br />

                  <div className={s.pa}>
                    <p>{currentItem[0]?.description}</p>
                  </div>
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
