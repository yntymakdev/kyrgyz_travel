import React from "react";
import s from "./RegionsDetail.module.scss";
import Image from "next/image";
import img from "./img/Rectangle 146.png";
const RegionsDetail = () => {
  return (
    <div>
      <div className={s.detail}>
        <div className="container">
          <div className={s.block_detail}>
            <div className={s.img}>
              <Image
                src={img} // Фоновое изображение, которое остается неизменным
                alt="Background Image"
                quality={70}
                width={590}
                height={423}
              />
            </div>
            <div className={s.d_text}>
              <h1>Cholpon-Ata </h1>
              <p>
                Cholpon-Ata is the most famous resort town on the shore of Lake
                Issyk-Kul. Once upon a time, caravans of the Great Silk Road
                passed through Cholpon-Ata. Today, tens of thousands of tourists
                from all over the CIS come to Cholpon-Ata. The city is famous
                for its clean sandy beaches and transparent lake. The best time
                to visit Cholpon-Ata is from mid–June to September.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionsDetail;
