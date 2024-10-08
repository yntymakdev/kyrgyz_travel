import React from "react";
import s from "./Forgot.module.scss";
import Link from "next/link";
const Forgot = () => {
  return (
    <div>
      <div className={s.signUp}>
        <div className="container">
          <div className={s.sign_image}>
            <div className={s.block_sign}>
              <div className={s.box}>
                <div className={s.box}>
                  <div className={s.block_text}>
                    <h1>Forgot password</h1>
                  </div>
                  <br />

                  <div className={s.wel}>
                    <p>
                      Enter your email for the verification process,
                      <br /> we will send code to your email
                    </p>
                  </div>
                  <br />
                  <br />
                  <div className={s.input_signUp}>
                    <input type="email" placeholder="Your E-mail" />
                  </div>
                  <br />
                  <div className={s.reme}>
                    <div className={s.forgot}>
                      <Link href={"/auth/login "}>
                        <p>Back to login</p>
                      </Link>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className={s.up}>
                    <div className={s.btn}>
                      <button>Continue</button>
                    </div>
                    <br />
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

export default Forgot;
