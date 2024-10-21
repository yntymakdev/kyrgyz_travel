"use client";
import React from "react";
import s from "./Welcome.module.scss";
import Image from "next/image";
import secImg from "../img/Rectangle 19398.png";
import imgCard from "./img/Rectangle 141.png";
import { Heart, MoveRight } from "lucide-react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useGetPosts_attractionsQuery } from "@/redux/api/posts";
const Welcome = () => {
  const { data, isLoading, error, isError } = useGetPosts_attractionsQuery();
  console.log("isLoading:", isLoading);
  console.log("isError:", isError);
  console.log("data:", data);
  console.log("error:", error);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log("Error details:", error); // Выводим ошибку в консоль для анализа
  }
  return (
    <div>
      <div className={s.section}>
        <div className="container">
          <div className={s.img}>
            <Image src={secImg} alt="img" quality={70} width={384} height={304} />
            <div className={s.text}>
              <h1>Bishkek</h1>
              <br />
              <p>
                This is the capital of a picturesque mountainous <br /> country - Kyrgyzstan, from where tourists make
                trips to the world-famous, crystal-clear Issyk-Kul and other natural attractions of the Tien Shan.
                Framed by mountains, the city is rich in beautiful views, monumental monuments, parks and museum
                antiquities.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />

          <div className={s.sec}>
            <div className={s.head}>
              <h1>Attractions</h1>
            </div>

            <br />
            <div className={s.carta}>
              {data?.map((attraction, index) => (
                <div key={index} className={s.headBox}>
                  {attraction.attraction_photos?.length > 0 && ( // Используем опциональную цепочку
                    <Image
                      className={s.image_place}
                      src={attraction.attraction_photos[0].image} // Предполагаем, что это URL
                      alt={attraction.at_name}
                      width={340}
                      height={270}
                      quality={70}
                    />
                  )}

                  <div className={s.block}>
                    <div className={s.heartContainer}>
                      <FavoriteBorderIcon className={s.heartMask} />
                    </div>
                    <div className={s.par}>
                      <p>{attraction.at_name}</p>
                    </div>
                    <div className={s.cir}>
                      <p> {attraction.average_rating}</p>
                      <div className={s.cirLike}>
                        <div className={s.circleFull}></div>
                        <div className={s.circleFull}></div>
                        <div className={s.circleFull}></div>
                        <div className={s.circleFull}></div>
                        <div className={s.circle}></div>
                      </div>
                      23 764 reviews
                    </div>
                    <div className={s.pa}>
                      {(() => {
                        const words = attraction.description.split(/\s+/);
                        const charCount = attraction.description.length;
                        return words.length > 50 || charCount > 200
                          ? words.slice(0, 50).join(" ")
                          : attraction.description;
                      })()}
                      <MoveRight className={s.right} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <br />
          <br />
          <div className={s.cu}>
            <h1>Culture</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
