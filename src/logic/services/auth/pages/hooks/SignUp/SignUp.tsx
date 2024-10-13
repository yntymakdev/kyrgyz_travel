"use client";
import React from "react";
import s from "./SignUp.module.scss";
import Link from "next/link";
import { useGetPost_registerMutation } from "@/redux/api/register";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/navigation";

type RegistrationFormData = {
  email: string;
  username: string;
  password: string;
  password_confirm: string;
  birth_date: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  user: {
    email: string;
    username: string;
    token: string;
  };
};

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegistrationFormData>();
  const password = watch("password");
  const [registerUser, { isLoading, isError, error }] = useGetPost_registerMutation();

  const onSubmit = async (data: RegistrationFormData) => {
    console.log("DataBase succes", data);
    try {
      const response = await registerUser(data).unwrap();
      console.log("Регистрация успешна", response);
      router.push("/");
    } catch (err) {
      console.error("Ошибка регистрации", err);
    }
  };

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.input_signUp}>
                  <input
                    type="email"
                    placeholder="Your E-mail"
                    {...register("email", {
                      required: "Email обязателен",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Неверный формат email",
                      },
                    })}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "Пароль обязателен",
                      minLength: {
                        value: 6,
                        message: "Пароль должен содержать минимум 6 символов",
                      },
                    })}
                    autoComplete="new-password"
                  />
                  {errors.password && <p>{errors.password.message}</p>}
                  <input
                    type="password"
                    placeholder="Confirm password"
                    {...register("password_confirm", {
                      required: "Подтверждение пароля обязательно",
                      validate: (value) => value === password || "Пароли не совпадают",
                    })}
                    autoComplete="new-password"
                  />
                  {errors.password_confirm && <p>{errors.password_confirm.message}</p>}
                </div>
                <br />
                <br />
                <div className={s.wel}>
                  <div className={s.welIn}>
                    <div className={s.welcome_signUp}>
                      <p>
                        Name <span>*</span>
                      </p>
                      <input
                        type="text"
                        {...register("first_name", {
                          required: true,
                          maxLength: 20,
                        })}
                      />
                    </div>
                    <div className={s.welcome_signUp}>
                      <p>
                        Surname <span>*</span>
                      </p>
                      <input type="text" {...register("last_name", { pattern: /^[A-Za-z]+$/i })} />
                    </div>
                  </div>
                  <br />
                  <div className={s.welOt}>
                    <div className={s.welcome_signUp}>
                      <p>
                        Phone number <span>*</span>
                      </p>
                      <input type="number" {...register("phone_number", { min: 18, max: 99 })} />
                    </div>
                    <div className={s.welcome_signUp}>
                      <p>
                        Birth date <span>*</span>
                      </p>
                      <input
                        type="date"
                        {...register("birth_date", {
                          required: "Дата рождения обязательна",
                        })}
                      />
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
                    <button type="submit">Sign Up</button>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
