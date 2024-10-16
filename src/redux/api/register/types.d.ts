// Тип данных, который возвращается с сервера после регистрации
export interface PostResponseUserRegistration {
  user: {
    user: RegistrationFormData;
    id: string;
    email: string;
    token: string;
    // другие поля, которые возвращает API
  };
}

// Тип данных для отправки запроса на регистрацию
export type PostRequestUserRegistration = {
  user: {
    email: string;
    username: string;
    password: string;
    password_confirm: string;
    birth_date: string;
    phone_number: string;
    first_name: string;
    last_name: string;
  };
};
