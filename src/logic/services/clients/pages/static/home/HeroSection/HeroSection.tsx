import { ArrowUpRight, Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import secImg from "@/logic/services/clients/pages/static/home/img/image 989.png";
import a from "../Welcome/img/instagram.png";
import b from "../Welcome/img/f_logo_RGB-Blue_512 1 (2).png";
import c from "../Welcome/img/VK Logo _ Main (1).png";
import d from "../Welcome/img/Mail _ undefined (2).png";
import s from "./HeroSection.module.scss";
const HeroSection = () => {
  return (
    <div>
      <div className={s.secImg}>
        <Image src={secImg} alt="img" quality={70} width={1579} height={1034} />
        <div className={s.imageText}>
          <div className={s.box}>
            <div className={s.secInp}>
              <h1>Welcome to the amazing Kyrgyzstan!</h1>
              <br />
              <br />
              <br />
              <br />
              <div className={s.search}>
                <Search className={s.searchIcon} />
                <input placeholder="Where to go?" />
                <div className={s.btn_inp}>
                  <ArrowUpRight className={s.downo} />
                  <button>ㅤㅤㅤㅤㅤㅤ</button>
                </div>
              </div>
              <br />
              <br />
              <p>
                Are you ready to embark on an exciting journey through the{" "}
                <br />
                stunning country of Central Asia? We are ready to help you plan{" "}
                <br /> the perfect trip to Kyrgyzstan.
              </p>

              <div className={s.block}></div>
            </div>
          </div>
          <div className={s.icon}>
            <Image src={a} alt="img" quality={70} width={24} height={24} />
            <Image src={b} alt="img" quality={70} width={24} height={24} />
            <Image src={c} alt="img" quality={70} width={24} height={24} />
            <Image src={d} alt="img" quality={70} width={24} height={24} />
          </div>
        </div>
        <div className={s.contai}>
          <div className={s.kg}>
            <h1>Kyrgyzstan</h1>
          </div>
          <div className={s.p}>
            <p>
              Kyrgyz Republic is a landlocked country located in the heart of{" "}
              Central Asia. The capital is Bishkek. The mountainous region of
              the Tian Shan covers over 80% of the country. Kyrgyzstan is
              occasionally referred to as "the Switzerland of Central Asia". The
              country is divided into seven provinces, which are Batken, Chuy,
              Jalal-Abad, Issyk-Kul, Naryn, Osh and Talas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
