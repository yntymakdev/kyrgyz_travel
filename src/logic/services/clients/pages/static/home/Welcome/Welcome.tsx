import React from "react";
import s from "./Welcome.module.scss";
import Image from "next/image";
import secImg from "../img/Rectangle 19398.png";
import imgCard from "./img/Rectangle 141.png";
import { Heart, MoveRight } from "lucide-react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Welcome = () => {
  return (
    <div>
      <div className={s.section}>
        <div className="container">
          <div className={s.img}>
            <Image
              src={secImg}
              alt="img"
              quality={70}
              width={384}
              height={304}
            />
            <div className={s.text}>
              <h1>Bishkek</h1>
              <br />
              <p>
                This is the capital of a picturesque mountainous <br /> country
                - Kyrgyzstan, from where tourists make trips to the
                world-famous, crystal-clear Issyk-Kul and other natural
                attractions of the Tien Shan. Framed by mountains, the city is
                rich in beautiful views, monumental monuments, parks and museum
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
              <div className={s.headBox}>
                <Image
                  src={imgCard}
                  alt="img"
                  quality={70}
                  width={340}
                  height={270}
                />
                <div className={s.block}>
                  <div className={s.heartContainer}>
                    <FavoriteBorderIcon className={s.heartMask} />
                  </div>
                  <div className={s.par}>
                    <p>The Burana Tower</p>
                  </div>
                  <div className={s.cir}>
                    <p>4.5</p>
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
                    <p>
                      The Burana Tower is located in the Chuy region in northern
                      Kyrgyzstan, about 80 km (50 miles) east of the capital
                      Bishkek near the city Tokmok. This impressive ancient
                      minaret still survives today as one of the key historical
                      sites in Kyrgyzstan.{" "}
                    </p>
                    <MoveRight className={s.right} />
                  </div>
                </div>
              </div>
              <div className={s.headBox}>
                <Image
                  src={imgCard}
                  alt="img"
                  quality={70}
                  width={340}
                  height={270}
                />
                <div className={s.block}>
                  <div className={s.heartContainer}>
                    <FavoriteBorderIcon className={s.heartMask} />
                  </div>
                  <div className={s.par}>
                    <p>The Burana Tower</p>
                  </div>
                  <div className={s.cir}>
                    <p>4.5</p>
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
                    <p>
                      The Burana Tower is located in the Chuy region in northern
                      Kyrgyzstan , about 80 km (50 miles) east of the capital
                      Bishkek near the city Tokmok. This impressive ancient
                      minaret still survives today as one of the key historical
                      sites in Kyrgyzstan.{" "}
                    </p>
                    <MoveRight className={s.right} />
                  </div>
                </div>
              </div>
              <div className={s.headBox}>
                <Image
                  src={imgCard}
                  alt="img"
                  quality={70}
                  width={340}
                  height={270}
                />
                <div className={s.block}>
                  <div className={s.heartContainer}>
                    <FavoriteBorderIcon className={s.heartMask} />
                  </div>
                  <div className={s.par}>
                    <p>The Burana Tower</p>
                  </div>
                  <div className={s.cir}>
                    <p>4.5</p>
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
                    <p>
                      The Burana Tower is located in the Chuy region in northern
                      Kyrgyzstan, about 80 km (50 miles) east of the capital
                      Bishkek near the city Tokmok. This impressive ancient
                      minaret still survives today as one of the key historical
                      sites in Kyrgyzstan.{" "}
                    </p>
                    <MoveRight className={s.right} />
                  </div>
                </div>
              </div>
              <div className={s.headBox}>
                <Image
                  src={imgCard}
                  alt="img"
                  quality={70}
                  width={340}
                  height={270}
                />
                <div className={s.block}>
                  <div className={s.heartContainer}>
                    <FavoriteBorderIcon className={s.heartMask} />
                  </div>
                  <div className={s.par}>
                    <p>The Burana Tower</p>
                  </div>
                  <div className={s.cir}>
                    <p>4.5</p>
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
                    <p>
                      The Burana Tower is located in the Chuy region in northern
                      Kyrgyzstan, about 80 km (50 miles) east of the capital
                      Bishkek near the city Tokmok. This impressive ancient
                      minaret still survives today as one of the key historical
                      sites in Kyrgyzstan.{" "}
                    </p>
                    <MoveRight className={s.right} />
                  </div>
                </div>
              </div>
              <div className={s.headBox}>
                <Image
                  src={imgCard}
                  alt="img"
                  quality={70}
                  width={340}
                  height={270}
                />
                <div className={s.block}>
                  <div className={s.heartContainer}>
                    <FavoriteBorderIcon className={s.heartMask} />
                  </div>
                  <div className={s.par}>
                    <p>The Burana Tower</p>
                  </div>
                  <div className={s.cir}>
                    <p>4.5</p>
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
                    <p>
                      The Burana Tower is located in the Chuy region in northern
                      Kyrgyzstan, about 80 km (50 miles) east of the capital
                      Bishkek near the city Tokmok. This impressive ancient
                      minaret still survives today as one of the key historical
                      sites in Kyrgyzstan.{" "}
                    </p>
                    <MoveRight className={s.right} />
                  </div>
                </div>
              </div>
              <div className={s.headBox}>
                <Image
                  src={imgCard}
                  alt="img"
                  quality={70}
                  width={340}
                  height={270}
                />
                <div className={s.block}>
                  <div className={s.heartContainer}>
                    <FavoriteBorderIcon className={s.heartMask} />
                  </div>
                  <div className={s.par}>
                    <p>The Burana Tower</p>
                  </div>
                  <div className={s.cir}>
                    <p>4.5</p>
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
                    <p>
                      The Burana Tower is located in the Chuy region in northern
                      Kyrgyzstan, about 80 km (50 miles) east of the capital
                      Bishkek near the city Tokmok. This impressive ancient
                      minaret still survives today as one of the key historical
                      sites in Kyrgyzstan.{" "}
                    </p>
                    <MoveRight className={s.right} />
                  </div>
                </div>
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
    </div>
  );
};

export default Welcome;
