"use client";
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
import image from "./image/image 955.png";
import imageFood from "./image/image 957.png";
import imageFood_two from "./image/image 958.png";
import { MoveRight } from "lucide-react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import sa from "../../../home/Welcome/Welcome.module.scss";
import { useGetPost_regionQuery } from "@/redux/api/region";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useGetPost_regionFoodQuery } from "@/redux/api/region_food";

const Regions = ({ regionId }: { regionId: number }) => {
  const params = useParams();
  const id = params.id;

  if (!id) return <div>Неверный ID региона</div>;

  const { data: region, isLoading: isRegionLoading, error: regionError } = useGetPost_regionQuery(id as string);
  const { data, isLoading, error } = useGetPost_regionFoodQuery(
    { region_id: regionId } // Передаем объект FoodRequest
  );
  if (isRegionLoading) return <div>Загрузка региона...</div>;
  if (regionError) {
    console.error("Ошибка при загрузке региона:", regionError);
    return <div>Ошибка: {regionError.message}</div>;
  }

  if (!region) return <div>Регион не найден</div>;
  return (
    <div>
      <div className={s.regions}>
        <div className="container">
          <div className={s.block}>
            <div className={s.img}>
              {/* <Image src={img} alt="Background Image" quality={70} width={590} height={423} /> */}
              {region.reg_photos.map((photo, index) => (
                <img key={index} src={photo.image} alt={`Фото ${index + 1}`} />
              ))}
            </div>

            <div className={s.para}>
              {/* <h1>Issyk-Kul</h1> */}
              <h1>{region.region_name}</h1>
              <p>{region.description}</p>
              {/* Issyk-Kul is an endorheic lake (i.e., without outflow) in the Northern Tian Shan mountains in Eastern
                Kyrgyzstan. It is the seventh-deepest lake in the world, the tenth-largest lake in the world by volume
                and the second-largest saline lake after the Caspian Sea. Issyk-Kul means "warm lake" in the Kyrgyz
                language; although it is located at a lofty elevation of 1,607 metres and subject to severe cold during
                winter, it rarely freezes, due to the salinity. */}
            </div>
          </div>
          <div className={s.block_carta}>
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
                width={174}
                height={79}
              />
              <Image
                src={carta_three} // Фоновое изображение, которое остается неизменным
                alt="Background Image"
                quality={70}
                width={194}
                height={100}
              />
              <Image
                src={carta_four} // Фоновое изображение, которое остается неизменным
                alt="Background Image"
                quality={70}
                width={191}
                height={79}
              />
              <Image
                src={carta_five} // Фоновое изображение, которое остается неизменным
                alt="Background Image"
                quality={70}
                width={188}
                height={120}
              />
              <Image
                src={carta_six} // Фоновое изображение, которое остается неизменным
                alt="Background Image"
                quality={70}
                width={142}
                height={107}
              />
              <Image
                src={carta_seven} // Фоновое изображение, которое остается неизменным
                alt="Background Image"
                quality={70}
                width={137}
                height={52}
              />
            </div>
          </div>
          <div className={s.cont_box}>
            <div className={s.block_two}>
              <div className={s.text_sec}>
                <h1>What to try in Issyk-Kul?</h1>
              </div>
            </div>
            <br />
            <div className={s.food}>
              <div className={s.box}>
                <h1>Ashlyan-fu</h1>
                <br />
                <p>
                  The name of the dish sounds and is spelled differently: ashlyanfu, ashlyamfu, and even ash-lyanfu.The
                  hallmark of Karakol is ashlyam-fu, a spicy Dungan soup served cold. The main ingredients of ashlam-fu
                  are two types of noodles: regular, wheat flour and starch. These noodles are seasoned with cold broth,
                  spicy laza and lots of herbs.
                </p>
              </div>
              <div className={s.image}>
                <div className={s.image_big}>
                  <Image
                    src={image} // Фоновое изображение, которое остается неизменным
                    alt="Background Image"
                    quality={70}
                    width={386}
                    height={219}
                  />
                </div>
                <div className={s.image_small}>
                  <Image
                    src={imageFood} // Фоновое изображение, которое остается неизменным
                    alt="Background Image"
                    quality={70}
                    width={123}
                    height={85}
                  />
                  <Image
                    src={imageFood_two} // Фоновое изображение, которое остается неизменным
                    alt="Background Image"
                    quality={70}
                    width={123}
                    height={85}
                  />
                  <Image
                    src={imageFood_two} // Фоновое изображение, которое остается неизменным
                    alt="Background Image"
                    quality={70}
                    width={123}
                    height={85}
                  />
                </div>
              </div>
              <div className={s.box}>
                <h1>Ashlyan-fu</h1>
                <br />
                <p>
                  The name of the dish sounds and is spelled differently: ashlyanfu, ashlyamfu, and even ash-lyanfu.The
                  hallmark of Karakol is ashlyam-fu, a spicy Dungan soup served cold. The main ingredients of ashlam-fu
                  are two types of noodles: regular, wheat flour and starch. These noodles are seasoned with cold broth,
                  spicy laza and lots of herbs.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className={s.places}>
            <h1>Popular Places</h1>
          </div>
          <br />
          <br />
          <div className={s.card}>
            <div className={s.headBox}>
              <Image
                src={img}
                alt="img"
                quality={70}
                width={340}
                height={271}
                style={{
                  borderRadius: "6px",
                }}
              />
              <div className={sa.block}>
                <div className={sa.heartContainer}>
                  <FavoriteBorderIcon className={sa.heartMask} />
                </div>
                <div className={s.par}>
                  <p>The Burana Tower</p>
                </div>
                <div className={s.cir}>
                  <p>4.5</p>
                  <div className={sa.cirLike}>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circle}></div>
                  </div>
                  23 764 reviews
                </div>
                <div className={sa.pa}>
                  <MoveRight className={s.right} />
                </div>
              </div>
            </div>
            <div className={s.headBox}>
              <Image
                src={img}
                alt="img"
                quality={70}
                width={340}
                height={271}
                style={{
                  borderRadius: "6px",
                }}
              />
              <div className={sa.block}>
                <div className={sa.heartContainer}>
                  <FavoriteBorderIcon className={sa.heartMask} />
                </div>
                <div className={s.par}>
                  <p>The Burana Tower</p>
                </div>
                <div className={s.cir}>
                  <p>4.5</p>
                  <div className={sa.cirLike}>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circle}></div>
                  </div>
                  23 764 reviews
                </div>
                <div className={sa.pa}>
                  <MoveRight className={s.right} />
                </div>
              </div>
            </div>
            <div className={s.headBox}>
              <Image
                src={img}
                alt="img"
                quality={70}
                width={340}
                height={271}
                style={{
                  borderRadius: "6px",
                }}
              />
              <div className={sa.block}>
                <div className={sa.heartContainer}>
                  <FavoriteBorderIcon className={sa.heartMask} />
                </div>
                <div className={s.par}>
                  <p>The Burana Tower</p>
                </div>
                <div className={s.cir}>
                  <p>4.5</p>
                  <div className={sa.cirLike}>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circle}></div>
                  </div>
                  23 764 reviews
                </div>
                <div className={sa.pa}>
                  <MoveRight className={s.right} />
                </div>
              </div>
            </div>
            <div className={s.headBox}>
              <Image
                src={img}
                alt="img"
                quality={70}
                width={340}
                height={271}
                style={{
                  borderRadius: "6px",
                }}
              />
              <div className={sa.block}>
                <div className={sa.heartContainer}>
                  <FavoriteBorderIcon className={sa.heartMask} />
                </div>
                <div className={s.par}>
                  <p>The Burana Tower</p>
                </div>
                <div className={s.cir}>
                  <p>4.5</p>
                  <div className={sa.cirLike}>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circle}></div>
                  </div>
                  23 764 reviews
                </div>
                <div className={sa.pa}>
                  <MoveRight className={s.right} />
                </div>
              </div>
            </div>
            <div className={s.headBox}>
              <Image
                src={img}
                alt="img"
                quality={70}
                width={340}
                height={271}
                style={{
                  borderRadius: "6px",
                }}
              />
              <div className={sa.block}>
                <div className={sa.heartContainer}>
                  <FavoriteBorderIcon className={sa.heartMask} />
                </div>
                <div className={s.par}>
                  <p>The Burana Tower</p>
                </div>
                <div className={s.cir}>
                  <p>4.5</p>
                  <div className={sa.cirLike}>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circle}></div>
                  </div>
                  23 764 reviews
                </div>
                <div className={sa.pa}>
                  <MoveRight className={s.right} />
                </div>
              </div>
            </div>
            <div className={s.headBox}>
              <Image
                src={img}
                alt="img"
                quality={70}
                width={340}
                height={271}
                style={{
                  borderRadius: "6px",
                }}
              />
              <div className={sa.block}>
                <div className={sa.heartContainer}>
                  <FavoriteBorderIcon className={sa.heartMask} />
                </div>
                <div className={s.par}>
                  <p>The Burana Tower</p>
                </div>
                <div className={s.cir}>
                  <p>4.5</p>
                  <div className={sa.cirLike}>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circle}></div>
                  </div>
                  23 764 reviews
                </div>
                <div className={sa.pa}>
                  <MoveRight className={s.right} />
                </div>
              </div>
            </div>
            <div className={s.headBox}>
              <Image
                src={img}
                alt="img"
                quality={70}
                width={340}
                height={271}
                style={{
                  borderRadius: "6px",
                }}
              />
              <div className={sa.block}>
                <div className={sa.heartContainer}>
                  <FavoriteBorderIcon className={sa.heartMask} />
                </div>
                <div className={s.par}>
                  <p>The Burana Tower</p>
                </div>
                <div className={s.cir}>
                  <p>4.5</p>
                  <div className={sa.cirLike}>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circle}></div>
                  </div>
                  23 764 reviews
                </div>
                <div className={sa.pa}>
                  <MoveRight className={s.right} />
                </div>
              </div>
            </div>
            <div className={s.headBox}>
              <Image
                src={img}
                alt="img"
                quality={70}
                width={340}
                height={271}
                style={{
                  borderRadius: "6px",
                }}
              />
              <div className={sa.block}>
                <div className={sa.heartContainer}>
                  <FavoriteBorderIcon className={sa.heartMask} />
                </div>
                <div className={s.par}>
                  <p>The Burana Tower</p>
                </div>
                <div className={s.cir}>
                  <p>4.5</p>
                  <div className={sa.cirLike}>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circle}></div>
                  </div>
                  23 764 reviews
                </div>
                <div className={sa.pa}>
                  <MoveRight className={s.right} />
                </div>
              </div>
            </div>
            <div className={s.headBox}>
              <Image
                src={img}
                alt="img"
                quality={70}
                width={340}
                height={271}
                style={{
                  borderRadius: "6px",
                }}
              />
              <div className={sa.block}>
                <div className={sa.heartContainer}>
                  <FavoriteBorderIcon className={sa.heartMask} />
                </div>
                <div className={s.par}>
                  <p>The Burana Tower</p>
                </div>
                <div className={s.cir}>
                  <p>4.5</p>
                  <div className={sa.cirLike}>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circleFull}></div>
                    <div className={sa.circle}></div>
                  </div>
                  23 764 reviews
                </div>
                <div className={sa.pa}>
                  <MoveRight className={s.right} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regions;
