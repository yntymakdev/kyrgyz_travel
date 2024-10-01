import React from "react";
import s from "./Regions.module.scss";
import Image from "next/image";
import img from "./img/Rectangle 142.png";
import carta from "./KG-T.png";
import carta_two from "./img/KG-C.png";
import carta_three from "./img/KG-Y.png";
import carta_four from "./img/KG-J.png";
import carta_five from "./img/KG-N.png";
import carta_six from "./img/KG-O.png";
import carta_seven from "./img/KG-B.png";
const Regions = () => {
  return (
    <div>
      <div className={s.regions}>
        <div className="container">
          <div className={s.block}>
            <div className={s.img}>
              <Image
                src={img} // Фоновое изображение, которое остается неизменным
                alt="Background Image"
                quality={70}
                width={590}
                height={423}
              />
            </div>
            <div className={s.para}>
              <h1>Issyk-Kul</h1>
              <p>
                Issyk-Kul is an endorheic lake (i.e., without outflow) in the
                Northern Tian Shan mountains in Eastern Kyrgyzstan. It is the
                seventh-deepest lake in the world, the tenth-largest lake in the
                world by volume and the second-largest saline lake after the
                Caspian Sea. Issyk-Kul means "warm lake" in the Kyrgyz language;
                although it is located at a lofty elevation of 1,607 metres and
                subject to severe cold during winter, it rarely freezes, due to
                the salinity.
              </p>
            </div>
          </div>
          <div className={s.carta}>
            <Image
              src={carta} // Фоновое изображение, которое остается неизменным
              alt="Background Image"
              quality={70}
              width={117}
              height={64}
            />
            <Image
              src={carta_two} // Фоновое изображение, которое остается неизменным
              alt="Background Image"
              quality={70}
              width={117}
              height={64}
            />
            <Image
              src={carta_three} // Фоновое изображение, которое остается неизменным
              alt="Background Image"
              quality={70}
              width={117}
              height={64}
            />
            <Image
              src={carta_four} // Фоновое изображение, которое остается неизменным
              alt="Background Image"
              quality={70}
              width={117}
              height={64}
            />
            <Image
              src={carta_five} // Фоновое изображение, которое остается неизменным
              alt="Background Image"
              quality={70}
              width={117}
              height={64}
            />
            <Image
              src={carta_six} // Фоновое изображение, которое остается неизменным
              alt="Background Image"
              quality={70}
              width={117}
              height={64}
            />
            <Image
              src={carta_seven} // Фоновое изображение, которое остается неизменным
              alt="Background Image"
              quality={70}
              width={117}
              height={64}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regions;
