import React from "react";
import s from "./RegionsDetail.module.scss";
import Image from "next/image";
import img from "./img/Rectangle 146.png";
import sa from "../../../home/Cart/Cart.module.scss";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import DirectionsWalkOutlinedIcon from "@mui/icons-material/DirectionsWalkOutlined";
import DirectionsBusFilledOutlinedIcon from "@mui/icons-material/DirectionsBusFilledOutlined";
import DirectionsRailwayFilledOutlinedIcon from "@mui/icons-material/DirectionsRailwayFilledOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import ReviewPage from "../Review/ReviewPage";
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
          <div className={s.hero_sec}>
            <div className={s.btn}>
              <button className={s.button}> Places</button>{" "}
              <button className={s.bt}> Hotels</button>{" "}
              <button className={s.bt}> kitchen</button>{" "}
              <button className={s.bt}> Event</button>{" "}
              <button className={s.bt}> Attractions</button>{" "}
            </div>
          </div>
          <br />
          <br />
          <div className={sa.card}>
            <p>• Where to go</p>
          </div>
          <br />
          <br />
          <div className={sa.inpCl}>
            <input type="text" placeholder="From where ?" />
            <input type="text" placeholder=" where ?" />
            <button>Go</button>
          </div>
          <br />
          <br />
          <br />
          <div className={s.icon_regions}>
            <div className={s.icon}>
              <RoomOutlinedIcon
                style={{
                  fontSize: "58px",
                }}
              />
              <h1>356 km</h1>
            </div>
            <div className={s.icon}>
              <DirectionsWalkOutlinedIcon
                style={{
                  fontSize: "58px",
                }}
              />

              <h1>356 km</h1>
            </div>
            <div className={s.icon}>
              <DirectionsBusFilledOutlinedIcon
                style={{
                  fontSize: "58px",
                }}
              />
              <h1>356 km</h1>
            </div>
            <div className={s.icon}>
              <DirectionsRailwayFilledOutlinedIcon
                style={{
                  fontSize: "58px",
                }}
              />
              <h1>356 km</h1>
            </div>
            <div className={s.icon}>
              <FlightTakeoffOutlinedIcon
                style={{
                  fontSize: "58px",
                }}
              />
              <h1>356 km</h1>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div
            className={sa.carta_region}
            style={{ width: "100%", height: "500px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5870.451123421338!2d77.05463754515517!3d42.63537790092462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3884f12ef1c7d0a3%3A0x3041b33c6d8708ec!2z0JjRgdGB0YvQui3QmtGD0LvRjA!5e0!3m2!1sru!2skg!4v1727810234835!5m2!1sru!2skg"
              width="1300"
              height="450"
            ></iframe>
          </div>
          <ReviewPage />
        </div>
      </div>
    </div>
  );
};

export default RegionsDetail;
