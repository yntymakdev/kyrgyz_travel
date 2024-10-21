"use client";
import React from "react";
import s from "./SignUp.module.scss";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePost_registerMutation } from "@/redux/api/register";

type RegistrationFormData = {
  email: string;
  username: string;
  password: string;
  password_confirm: string;
  birth_date: string;
  phone_number: string;
  first_name: string;
  last_name: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegistrationFormData>();

  const password = watch("password");

  const [registerUser, { isLoading, error }] = usePost_registerMutation();

  const onSubmit: SubmitHandler<RegistrationFormData> = async (formData) => {
    const requestData = {
      user: {
        email: formData.email,
        username: formData.username,
        password: formData.password,
        password_confirm: formData.password_confirm,
        birth_date: formData.birth_date,
        phone_number: formData.phone_number,
        first_name: formData.first_name,
        last_name: formData.last_name,
      },
    };

    try {
      const response = await registerUser(requestData).unwrap();
      console.log("Ответ от сервера:", response);
    } catch (err) {
      console.error("Ошибка при регистрации:", err);
      if ("data" in err) {
        console.error("Ответ сервера с ошибкой:", err.data);
      }
    }
  };

  return (
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
                  type="text"
                  placeholder="Username"
                  {...register("username", {
                    required: "Имя пользователя обязательно",
                  })}
                />
                {errors.username && <p>{errors.username.message}</p>}

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
                />
                {errors.password && <p>{errors.password.message}</p>}
                <input
                  type="password"
                  placeholder="Confirm password"
                  {...register("password_confirm", {
                    required: "Подтверждение пароля обязательно",
                    validate: (value) => value === password || "Пароли не совпадают",
                  })}
                />
                {errors.password_confirm && <p>{errors.password_confirm.message}</p>}
              </div>

              <div className={s.wel}>
                <div className={s.welIn}>
                  <div className={s.welcome_signUp}>
                    <p>
                      Name <span>*</span>
                    </p>
                    <input
                      type="text"
                      {...register("first_name", { required: true, maxLength: 20 })}
                      placeholder="First Name"
                    />
                    {errors.first_name && <p>Имя обязательно</p>}
                  </div>
                  <div className={s.welcome_signUp}>
                    <p>
                      Surname <span>*</span>
                    </p>
                    <input
                      type="text"
                      {...register("last_name", { required: true, pattern: /^[A-Za-z]+$/i })}
                      placeholder="Last Name"
                    />
                    {errors.last_name && <p>Фамилия обязательна</p>}
                  </div>
                </div>

                <div className={s.welOt}>
                  <div className={s.welcome_signUp}>
                    <p>
                      Phone number <span>*</span>
                    </p>
                    <input
                      type="text"
                      {...register("phone_number", { required: true, minLength: 10, maxLength: 15 })}
                      placeholder="Phone Number"
                    />
                    {errors.phone_number && <p>Номер телефона обязателен</p>}
                  </div>
                  <div className={s.welcome_signUp}>
                    <p>
                      Birth date <span>*</span>
                    </p>

                    <input type="date" {...register("birth_date", { required: "Дата рождения обязательна" })} />
                    {errors.birth_date && <p>Дата рождения обязательна</p>}
                  </div>
                </div>
              </div>

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

              <div className={s.up}>
                <div className={s.btn}>
                  <button type="submit" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Sign Up"}
                  </button>
                  {error && <p>Произошла ошибка: {error?.data?.message || "Неизвестная ошибка"}</p>}
                </div>

                <div className={s.log}>
                  <div className={s.already}>
                    <h6>Already have an account?</h6>
                  </div>
                  <div className={s.login}>
                    <Link href={"/auth/login"}>Login</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
