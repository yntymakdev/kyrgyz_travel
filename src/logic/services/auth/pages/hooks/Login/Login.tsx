import React from "react";
import s from "./Login.module.scss";
import Link from "next/link";
const Login = () => {
  return (
    <div>
      <div className={s.signUp}>
        <div className="container">
          <div className={s.sign_image}>
            <div className={s.block_sign}>
              <div className={s.box}>
                <div className={s.block_text}>
                  <h1>Log in</h1>
                </div>
                <br />
                <div className={s.welcome}>
                  <p>Welcome!</p>
                </div>
                <div className={s.wel}>
                  <p>Log in to your account</p>
                </div>
                <br />
                <br />
                <div className={s.input_signUp}>
                  <input type="email" placeholder="Your E-mail" />
                  <input type="password" placeholder="Password" />
                  <input type="password" placeholder="Confirm password" />
                </div>
                <br />
                <br />
                <div className={s.reme}>
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
                  <div className={s.forgot}>
                    <Link href={"/auth/forgot "}>
                      <p>Forgot password</p>
                    </Link>
                  </div>
                </div>
                <br />
                <br />
                <div className={s.up}>
                  <div className={s.btn}>
                    <button>Login</button>
                  </div>
                  <br />
                  <div className={s.log}>
                    <div className={s.already}>
                      <h6>Already have an account ?</h6>
                    </div>
                    <div className={s.login}>
                      <Link href={"/auth/sign-up"}>
                        <p>Sign Up</p>
                      </Link>
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

export default Login;
