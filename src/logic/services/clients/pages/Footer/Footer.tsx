import React from "react";
import s from "./Footer.module.scss";
import footerCarta from "./img/Rectangle 18.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className="container">
        <div className={s.fotImg}>
          <Image
            src={footerCarta}
            alt="Foreground Image"
            quality={70}
            width={1579}
            height={368}
          />
          <div className={s.overlayContent}>
            <div className={s.fot}>
              <p>logo</p>
            </div>
            <div className={s.fotLike}>
              <div className={s.fut}>
                <h1>Home</h1>
                <p>Attractions</p>
                <p>Map</p>
              </div>
              <div className={s.fut}>
                <h1>Regions</h1>
                <p>Batken</p>
                <p>Jalal-Abad</p>
                <p>Issyk_kul</p>
                <p>Naryn</p>
                <p>Osh</p>
                <p>Talas</p>
                <p>Chyi</p>
              </div>
              <div className={s.fut}>
                <h1>Culture</h1>
                <p>Games</p>
                <p>National instruments</p>
                <p>National clothes</p>
                <p>Hand crafts</p>
                <p>Currency</p>
                <p>Kitchen</p>
              </div>
              <div className={s.fut}>
                <h1>Gallery</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
