"use client";
import React, { useState } from "react";
import s from "./UserProfile.module.scss";
import Image from "next/image";
import user_bac from "./image/imagebac.png";
import user_icon from "./image/user.png";
import star from "./image/Group (4).png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import heard from "./image/Vector (6).png";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import pro from "./image/unsplash_3TLl_97HNJo@2x.png";
import bac from "./image/unsplash_fNycoMaiea0.png";
const UserProfile = () => {
  return (
    <div>
      <div className={s.user}>
        <div className={s.bacImage}>
          <div className="container">
            <div className={s.card}>
              <div className={s.user_card}>
                <div className={s.user_icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-user-round"
                  >
                    <circle cx="12" cy="8" r="5" />
                    <path d="M20 21a8 8 0 0 0-16 0" />
                  </svg>
                </div>

                <div className={s.user_text}>
                  <p>Profile</p>
                </div>
              </div>
              <div className={s.user_card}>
                <div className={s.user_icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div className={s.user_text}>
                  <p>Profile</p>
                </div>
              </div>
              <div className={s.user_card}>
                <div className={s.user_icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-heart"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div className={s.user_text}>
                  <p>Profile</p>
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
            <br />
            <br />
            <div className={s.log}>
              <div className={s.icon_log}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-log-out"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" x2="9" y1="12" y2="12" />
                </svg>
              </div>
              <div className={s.out}>
                <p>Log out</p>
              </div>
            </div>
          </div>
        </div>
        <div className={s.header}>
          <div className={s.head_inp}>
            <div className={s.input}>
              <div className={s.inp}>
                <input type="text" />
              </div>
              <div className={s.search}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-search"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
            <div className={s.parents_boot}>
              <div className={s.boot}>
                <div className={s.strelka}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-up-right"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={s.profile}>
              <div className={s.pri}>
                <p className={s.do}>Charles Deo</p>
                <p className={s.ros}>Moscow, Rossia</p>
              </div>

              <div className={s.pro}>
                <Image
                  alt="image"
                  src={pro}
                  quality={70}
                  width={42}
                  height={42}
                />
              </div>
            </div>
          </div>
          <div className={s.block}>
            <div className={s.box}>
              <Image
                className={s.image}
                src={bac}
                alt="image"
                width={990}
                height={199}
                quality={70}
              />
              <div className={s.profile_image}>
                <Image
                  className={s.image_p}
                  alt="image"
                  src={pro}
                  quality={70}
                  width={121}
                  height={121}
                />
                <div className={s.photo}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-camera"
                  >
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </div>
              </div>
              <div className={s.prid}>
                <p className={s.dod}>Charles Deo</p>
                <p className={s.rod}>Moscow, Rossia</p>
              </div>
              <div className={s.edit}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-pencil"
                >
                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                  <path d="m15 5 4 4" />
                </svg>
              </div>
            </div>
          </div>
          <div className={s.block_sign}>
            <div className={s.block_text}></div>
            <br />
            <div className={s.welcome}>
              <p>Create an account</p>
            </div>
            <br />
            <div className={s.input_signUp}>
              <input type="email" placeholder="Your E-mail" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm password" />
            </div>
            <br />
            <br />
            <div className={s.wel}>
              <div className={s.welIn}>
                <div className={s.welcome_signUp}>
                  <p>
                    Name <span>*</span>
                  </p>
                  <input type="text" />
                </div>
                <div className={s.welcome_signUp}>
                  <p>
                    Surname <span>*</span>
                  </p>
                  <input type="text" />
                </div>
              </div>
              <br />
              <div className={s.welOt}>
                <div className={s.welcome_signUp}>
                  <p>
                    Phone number <span>*</span>
                  </p>
                  <input type="text" />
                </div>
                <div className={s.welcome_signUp}>
                  <p>
                    Birth date <span>*</span>
                  </p>
                  <input type="text" />
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className={s.rem}>
              <label className={s.toggleswitch}>
                <input type="checkbox" />
                <div className={s.toggleswitchbackground}>
                  <div className={s.toggleswitchhandle}></div>
                </div>
              </label>
              <div className={s.remem}>
                <p>Remember me</p>
              </div>
            </div>
            <br />
            <br />
            <div className={s.up}>
              <div className={s.btn}>
                <button>Sign Up</button>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
