"use client";
import React from "react";
import s from "./National.module.scss";
import img from "./image/Rectangle 19400.png";
import culture_image from "./image/культура 1.png";
import Image from "next/image";
import { useGetPosts_gameQuery } from "@/redux/api/game";
const National = () => {
  //   const { data: games, isLoading, error, isError } = useGetPosts_gameQuery();
  //   console.log(games);

  return (
    <div>
      <div className={s.game}>
        <div className="container">
          <div className={s.game_hero}>
            <div className={s.game_text}>
              <div className={s.games}>
                <h1>Games</h1>
              </div>
              <div className={s.since}>
                <p>
                  Since ancient times, the Kyrgyz have given a great place to
                  folk games and <br /> entertainment, not a single folk
                  festival took place without them. <br /> Traditional
                  equestrian games remain the most beloved and revered.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className={s.game_public}>
            {/* {games?.map((el) => (
              <div key={el.game_name} className={s.seni}>
                {" "}
                <div className={s.image}>
                  <Image
                    src={el.image}
                    alt={`Image of ${el.game_name}`}
                    quality={70}
                    width={574}
                    height={392}
                  />
                </div>
                <div className={s.game_nati}>
                  <h1>{el.game_name}</h1>
                  <br />
                  <p>{el.description}</p>
                </div>
              </div>
            ))} */}

            <div className={s.seni}>
              <div className={s.image}>
                <Image
                  src={culture_image}
                  alt="img"
                  quality={70}
                  width={574}
                  height={392}
                />
              </div>
              <div className={s.game_nati}>
                <h1>Ulak-tartysh</h1>
                <br />
                <p>
                  Ulak-tartysh, which means "grey wolf". They say that the game
                  originated in those distant times, when herds of animals
                  grazed in the deserted steppes of Kyrgyzstan, so wolves often
                  attacked livestock, which was a great disaster for people.
                  Since there were no firearms then, courageous horsemen pursued
                  the victim, driving her half to death. The game involves two
                  teams, each of which has 6-10 people. The goal of each team is
                  to throw the carcass of the animal into the opponent's goal.
                  It is very difficult to do this, since throwing a 20-kilogram
                  carcass requires a lot of effort.
                </p>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default National;
