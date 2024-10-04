import React from "react";
import s from "./Review.module.scss";
import sa from "../../tools/RegionsDetail/RegionsDetail.module.scss";
import saa from "../../../home/Welcome/Welcome.module.scss";
import { Search } from "@mui/icons-material";
import image from "../Review/image/Ellipse 15.png";
import Image from "next/image";
const ReviewPage = () => {
  return (
    <div>
      <div className={s.review}>
        <div className={s.review_btn}>
          <div className={s.review_dip}>
            <div className={s.text}>
              <h1>Reviews</h1>
            </div>
            <br />
            <div className={s.revew}>
              <div className={s.btn}>
                <button className={sa.bt}> Write review</button>{" "}
                <button className={sa.bt}> Upload a photo</button>{" "}
              </div>
              <div className={s.review_s}>
                <div className={saa.cir}>
                  <p>4.5</p>
                  <div className={saa.cirLike}>
                    <div className={saa.circleFull}></div>
                    <div className={saa.circleFull}></div>
                    <div className={saa.circleFull}></div>
                    <div className={saa.circleFull}></div>
                    <div className={saa.circle}></div>
                  </div>
                  23 764 reviews
                </div>
              </div>

              <div className={s.block_review}>
                <div className={s.box_op}>
                  <div className={s.text_op}>
                    <h1>excellent</h1>
                    <div className={s.block_op}>
                      <div className={s.circleFull}></div>
                      <div className={s.why}>
                        <p>18 764</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.box_op_two}>
                  <div className={s.text_op_two}>
                    <h1>Good</h1>
                    <div className={s.block_op}>
                      <div className={s.circleFull_two}></div>
                      <div className={s.why}>
                        <p>18 764</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.box_op_three}>
                  <div className={s.text_op_three}>
                    <h1>Not bad</h1>
                    <div className={s.block_op}>
                      <div className={s.circleFull_three}></div>
                      <div className={s.why}>
                        <p>18 764</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.box_op_four}>
                  <div className={s.text_op_four}>
                    <h1>Bad</h1>
                    <div className={s.block_op}>
                      <div className={s.circleFull_four}></div>
                      <div className={s.why}>
                        <p>18 764</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.box_op}>
                  <div className={s.text_op_five}>
                    <h1>terribly</h1>
                    <div className={s.block_op}>
                      <div className={s.circleFull_five}></div>
                      <div className={s.why}>
                        <p>18 764</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.inp}>
            <div className={s.blp}>
              <input className={s.input} type="text" placeholder="Search" />
              <Search className={s.searchIcon} />
              <div className={s.review_profile}>
                <Image
                  src={image}
                  alt="img"
                  quality={70}
                  width={38}
                  height={38}
                />
              </div>
            </div>
            <div className={s.filter}>
              <button className={sa.bt}> Filter</button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
