import React from "react";
import s from "./SignUp.module.scss";
import Link from "next/link";
const SignUp = () => {
  return (
    <div>
      <div className={s.signUp}>
        <div className="container">
          <div className={s.sign_image}>
            <div className={s.block_sign}>
              <div className={s.block_text}>
                <h1>Sign up</h1>
              </div>
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
                <div className={s.log}>
                  <div className={s.already}>
                    <h6>Already have an account ?</h6>
                  </div>
                  <div className={s.login}>
                    <Link href={"/auth/login"}>
                      <p>Login</p>
                    </Link>
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

export default SignUp;
