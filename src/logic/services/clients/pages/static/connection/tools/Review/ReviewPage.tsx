import React from "react";
import s from "./Review.module.scss";
import sa from "../../tools/RegionsDetail/RegionsDetail.module.scss";
import saa from "../../../home/Welcome/Welcome.module.scss";
import { Search } from "@mui/icons-material";
import image from "../Review/image/Ellipse 15.png";
import Image from "next/image";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
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
              <div className={s.clas}>
                <div className={s.btn}>
                  <button className={s.bt}> Write review</button>{" "}
                  <button className={s.bt}> Upload a photo</button>{" "}
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
                        <div className={s.circleFull_one}></div>
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
              <div className={s.review_profile}>
                <div className={s.inp}>
                  <div className={s.blp}>
                    <div className={s.ik}>
                      <input
                        className={s.input}
                        type="text"
                        placeholder="Search"
                      />
                      <Search className={s.searchIcon} />
                    </div>
                    <div className={s.filter}>
                      <button className={sa.bt}> Filter</button>{" "}
                    </div>
                  </div>
                  <div className={s.review}>
                    <div className={s.li}>
                      <div className={s.zan}>
                        <div className={s.ann}>
                          <Image
                            src={image}
                            alt="img"
                            quality={70}
                            width={38}
                            height={38}
                          />
                          <div className={s.review_te}>
                            <h1>Anna Petrove</h1>
                            <p>Moscos Rissia</p>
                          </div>
                        </div>
                        <div className={s.cir}>
                          <div className={s.cirLike}>
                            <div className={s.circleFull}></div>
                            <div className={s.circleFull}></div>
                            <div className={s.circleFull}></div>
                            <div className={s.circleFull}></div>
                            <div className={s.circle}></div>
                          </div>
                        </div>
                        <div className={s.paragr}>
                          <p>July 10, 2023</p>
                        </div>
                      </div>
                      <div className={s.like}>
                        <ThumbUpOffAltIcon />
                        <div className={s.lik}>
                          <p>0</p>
                        </div>
                      </div>
                    </div>
                    <div className={s.comment}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut, dignissimos. Quod expedita repellat officia quis
                        veniam iste odio, mollitia eos vel corporis ea pariatur,
                        saepe at, rerum optio? Perferendis in sit non error,
                        iure dolorum rem quos nam natus cum vitae, enim nisi?
                        Non libero laudantium molestias blanditiis quae
                        veritatis amet vero? Qui, placeat nemo corporis eum
                        harum quaerat facere quo reprehenderit dolorem ipsam
                        earum, quae fugiat sint explicabo enim sed quod omnis
                        dolore nostrum repellat quidem praesentium error, at
                        dolores? Facilis dolor dignissimos sed similique soluta
                        beatae, distinctio aspernatur tenetur vel aperiam sequi
                        non maxime sapiente. Accusantium, nihil doloremque!
                      </p>
                    </div>
                  </div>
                  <br />
                  <br />
                  <hr />
                  <div className={s.review}>
                    <div className={s.li}>
                      <div className={s.zan}>
                        <div className={s.ann}>
                          <Image
                            src={image}
                            alt="img"
                            quality={70}
                            width={38}
                            height={38}
                          />
                          <div className={s.review_te}>
                            <h1>Anna Petrove</h1>
                            <p>Moscos Rissia</p>
                          </div>
                        </div>
                        <div className={s.cir}>
                          <div className={s.cirLike}>
                            <div className={s.circleFull}></div>
                            <div className={s.circleFull}></div>
                            <div className={s.circleFull}></div>
                            <div className={s.circleFull}></div>
                            <div className={s.circle}></div>
                          </div>
                        </div>
                        <div className={s.paragr}>
                          <p>July 10, 2023</p>
                        </div>
                      </div>
                      <div className={s.like}>
                        <ThumbUpOffAltIcon />
                        <div className={s.lik}>
                          <p>0</p>
                        </div>
                      </div>
                    </div>

                    <div className={s.comment}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut, dignissimos. Quod expedita repellat officia quis
                        veniam iste odio, mollitia eos vel corporis ea pariatur,
                        saepe at, rerum optio? Perferendis in sit non error,
                        iure dolorum rem quos nam natus cum vitae, enim nisi?
                        Non libero laudantium molestias blanditiis quae
                        veritatis amet vero? Qui, placeat nemo corporis eum
                        harum quaerat facere quo reprehenderit dolorem ipsam
                        earum, quae fugiat sint explicabo enim sed quod omnis
                        dolore nostrum repellat quidem praesentium error, at
                        dolores? Facilis dolor dignissimos sed similique soluta
                        beatae, distinctio aspernatur tenetur vel aperiam sequi
                        non maxime sapiente. Accusantium, nihil doloremque!
                      </p>
                    </div>
                  </div>
                  <br />
                  <br />
                  <hr />
                  <div className={s.review}>
                    <div className={s.li}>
                      <div className={s.zan}>
                        <div className={s.ann}>
                          <Image
                            src={image}
                            alt="img"
                            quality={70}
                            width={38}
                            height={38}
                          />
                          <div className={s.review_te}>
                            <h1>Anna Petrove</h1>
                            <p>Moscos Rissia</p>
                          </div>
                        </div>
                        <div className={s.cir}>
                          <div className={s.cirLike}>
                            <div className={s.circleFull}></div>
                            <div className={s.circleFull}></div>
                            <div className={s.circleFull}></div>
                            <div className={s.circleFull}></div>
                            <div className={s.circle}></div>
                          </div>
                        </div>
                        <div className={s.paragr}>
                          <p>July 10, 2023</p>
                        </div>
                      </div>
                      <div className={s.like}>
                        <ThumbUpOffAltIcon />
                        <div className={s.lik}>
                          <p>0</p>
                        </div>
                      </div>
                    </div>
                    <div className={s.comment}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut, dignissimos. Quod expedita repellat officia quis
                        veniam iste odio, mollitia eos vel corporis ea pariatur,
                        saepe at, rerum optio? Perferendis in sit non error,
                        iure dolorum rem quos nam natus cum vitae, enim nisi?
                        Non libero laudantium molestias blanditiis quae
                        veritatis amet vero? Qui, placeat nemo corporis eum
                        harum quaerat facere quo reprehenderit dolorem ipsam
                        earum, quae fugiat sint explicabo enim sed quod omnis
                        dolore nostrum repellat quidem praesentium error, at
                        dolores? Facilis dolor dignissimos sed similique soluta
                        beatae, distinctio aspernatur tenetur vel aperiam sequi
                        non maxime sapiente. Accusantium, nihil doloremque!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
