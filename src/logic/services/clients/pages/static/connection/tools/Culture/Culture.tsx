import React from "react";
import s from "./Culture.module.scss";
import secImg from "./image/image 976.png";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from "next/link";
const Culture = () => {
  return (
    <div>
      <div className={s.culture_parents}>
        <div className="container">
          <div className={s.cul}>
            <div className={s.cul_box}>
              <div className={s.box_text}>
                <h1>Culture</h1>
                <p>
                  The culture of Kyrgyzstan was formed under the strong
                  influence of nomadic life. In addition, it was influenced by
                  the cultures of Russia, Persia and Turkey, and yet it remained
                  quite original and unique. The connection of Kyrgyz culture
                  with nature can be traced everywhere: from design to music.
                  One of the most famous examples of Kyrgyz culture is the Manas
                  epic, an incredibly long poem that was passed down orally from
                  one generation to the next.
                </p>
              </div>
              <br />
              <br />
              <div className={s.block_text}>
                <div className={s.block_icon}>
                  <p>Games</p>
                  <Link href={"/culture/game"}>
                    <MoveRight className={s.right} />
                  </Link>
                </div>
                <div className={s.block_icon}>
                  <Link href={"/culture/national"}>
                    <p>National clothes</p>
                  </Link>
                  <MoveRight className={s.right} />
                </div>
                <div className={s.block_icon}>
                  <p>Hand crafts</p>
                  <MoveRight className={s.right} />
                </div>
                <div className={s.block_icon}>
                  <p>Currency</p>
                  <MoveRight className={s.right} />
                </div>
                <div className={s.block_icon}>
                  <p>National instruments</p>
                  <MoveRight className={s.right} />
                </div>
                <div className={s.block_icon}>
                  <p>Kitchen</p>
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

export default Culture;
