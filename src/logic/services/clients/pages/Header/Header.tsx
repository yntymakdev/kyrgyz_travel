"use client";
import React, { useState } from "react";
import s from "./Header.module.scss";
import { ArrowUpRight, ChevronDown, LinkIcon, Search } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  return (
    <div>
      <div className={s.header}>
        <div className="container">
          <div className={s.head_home}>
            <div className={s.head}>
              <Link href={"/"}>
                <h1>Home</h1>
              </Link>
              <div
                className={s.gall}
                onMouseEnter={() => setShowDrop(true)}
                onMouseLeave={() => setShowDrop(false)}
              >
                <Link href={"/regions"}>
                  <h1>Region</h1>
                </Link>
                {showDrop && (
                  <div className={s.drop}>
                    <Link href={"/regions/batken"}>
                      <p>Batken</p>
                    </Link>
                    <Link href={"/regions/jalalabad"}>
                      <p>Jalal-Abad</p>
                    </Link>
                    <Link href={"/regions/issykol"}>
                      <p>Issyk_kul</p>
                    </Link>
                    <Link href={"/regions/naryn"}>
                      <p>Naryn</p>
                    </Link>
                    <Link href={"/regions/osh"}>
                      <p>Osh</p>
                    </Link>
                    <Link href={"/regions/talas"}>
                      <p>Talas</p>
                    </Link>
                    <Link href={"/regions/chuy"}>
                      <p>Chuy</p>
                    </Link>
                  </div>
                )}
              </div>
              <div
                className={s.gallery}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <Link href={"/culture"}>
                  <h1>Culture</h1>
                </Link>
                {showDropdown && (
                  <div className={s.dropdown}>
                    <p>Games</p>
                    <p>National clothes</p>
                    <p>Hand crafts</p>
                    <p>Currency</p>
                    <p>National instruments</p>
                    <p>Kitchen</p>
                  </div>
                )}
              </div>
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
