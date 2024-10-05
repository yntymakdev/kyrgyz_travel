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
                        <div className={s.why}>{/* <p>18 764</p> */}</div>
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
                    <input
                      className={s.input}
                      type="text"
                      placeholder="Search"
                    />
                    <Search className={s.searchIcon} />
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
                      <div className={s.comment}>
                        <h1>header</h1>
                        <p>
                          hqwqwwqkkkkkkkkkkkkkkkkkkkkkkkkk k k k Lorem ipsum,
                          dolor sit amet consectetur adipisicing elit.
                          Accusantium, rerum! Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit. Qui vitae culpa, quasi
                          error quos eum nemo laboriosam et. At quidem sit
                          blanditiis adipisci! Nisi architecto commodi laborum
                          non quisquam ad at nam vel porro ipsum accusantium
                          aperiam pariatur veniam minus, labore, similique
                          molestiae, aspernatur voluptas. Quod quibusdam iure
                          illo repellat placeat porro aliquid sint rem quisquam
                          autem ipsum corporis impedit, dolorem excepturi maxime
                          harum dolore, ipsa temporibus quidem, facilis
                          perspiciatis sunt! Possimus aut dignissimos iure
                          eligendi. Labore, repellendus accusantium incidunt
                          debitis, minima optio recusandae amet velit expedita
                          dolores enim, odio nobis a? Quae quaerat corrupti
                          dolor vero eveniet fuga! Impedit! Lorem ipsum dolor,
                          sit amet consectetur adipisicing elit. Est quas
                          eligendi esse corporis ipsum illo itaque voluptate
                          recusandae asperiores repellat? Iusto impedit delectus
                          provident inventore tenetur ad vel aspernatur.
                          Consequatur voluptatum facere ipsam velit nobis non
                          accusamus labore sunt repellat, accusantium illum
                          earum recusandae error quos, ab magnam! Nulla alias
                          adipisci autem distinctio ducimus sit quod doloribus
                          architecto harum quis expedita ullam, earum eum, velit
                          quibusdam voluptate repudiandae excepturi quae veniam!
                          Qui laudantium aspernatur repellendus voluptatum
                          assumenda a in ratione aliquid doloribus! Officiis
                          impedit cupiditate nesciunt ab? Similique, sunt totam
                          voluptates sapiente omnis eligendi reprehenderit nam
                          voluptatibus odio? Molestiae doloribus ad magnam et
                          earum blanditiis ipsa, quo placeat rem, quam,
                          voluptates reprehenderit eveniet. Similique tempora
                          esse hic maxime possimus nemo debitis, accusamus modi
                          quidem nihil nesciunt maiores, dolorem nobis quia!
                          Molestiae veritatis corporis aspernatur maxime
                          recusandae quos dolorem, explicabo, fugiat eaque quam
                          incidunt. Cumque, nihil! Maiores, dicta fugit
                          excepturi molestiae illo minus vitae voluptatibus modi
                          tempora nemo quaerat debitis cupiditate hic doloremque
                          quas! Consequatur assumenda nihil nam soluta expedita
                          fugit id tempore accusantium atque. Non reiciendis
                          dignissimos quam. Nulla expedita quasi vero
                          necessitatibus praesentium. Delectus voluptates rerum,
                          dolore iste amet impedit eligendi voluptatum sapiente
                          quis reprehenderit. Atque hic obcaecati numquam nulla?
                          Dolor error eligendi ipsa suscipit quae velit dolores,
                          cupiditate iste ratione ducimus nemo, optio illo ut
                          rerum cumque. Eos consectetur tempora repellat officia
                          ipsum libero vel rerum praesentium aperiam ducimus
                          alias illum, tenetur doloremque inventore reiciendis?
                          Beatae quae ducimus dolore odio magni non, sunt,
                          possimus doloremque impedit quis vel aliquid
                          accusamus. Laudantium atque fugit quisquam excepturi,
                          ex dolorem tempore hic, quam, aliquam voluptatibus
                          iure. Et nostrum illum nobis velit qui dolorum
                          quibusdam. Ratione quidem ad blanditiis consequatur
                          soluta excepturi, voluptas possimus exercitationem
                          velit, hic eius officia necessitatibus accusantium
                          quaerat pariatur accusamus iste temporibus tempora
                          alias laudantium quasi. Itaque, eveniet!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={s.filter}>
                    <button className={sa.bt}> Filter</button>{" "}
                    <div className={s.like}>
                      <ThumbUpOffAltIcon />
                      <div className={s.lik}>
                        <p>0</p>
                      </div>
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
