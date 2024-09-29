import React from "react";
import s from "./Header.module.scss";
import { ChevronDown } from "lucide-react";
const Header = () => {
  return (
    <div>
      <div className={s.header}>
        <div className="container">
          <div className={s.head_home}>
            <div className={s.head}>
              <h1>Home</h1>
              <h1>Regions</h1>
              <h1>Gallery</h1>
              <h1>Routes</h1>
              <h1>Culture</h1>
            </div>
            <div className={s.btn_home}>
              <select className={s.header_btn}>
                <option>Eng</option>
                <option>Рус</option>
                <option>Кыр</option>
              </select>
              <button className={s.header_btn_two}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
