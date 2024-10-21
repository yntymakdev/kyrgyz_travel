import React from "react";
import s from "./Cart.module.scss";
import Image from "next/image";
import carta from "./img/kyrgyzstan 1.png";
const Cart = () => {
  return (
    <div>
      <div className={s.cart}>
        <div className="container">
          <div className={s.card}>
            <p>• Where to go</p>
          </div>
          <br />
          <div className={s.inpCl}>
            <input type="text" placeholder="From where ?" />
            <input type="text" placeholder=" where ?" />
            <button>Go</button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className={s.imgCard}>
            <Image className={s.carta} src={carta} alt="Foreground Image" quality={70} width={1200} height={590} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
