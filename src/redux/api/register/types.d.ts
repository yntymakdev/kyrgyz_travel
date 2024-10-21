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

export interface PostResponseUserRegistration {
  user: {
    id: string; // ID пользователя
    email: string; // Электронная почта
    username: string; // Имя пользователя
    token: string; // Токен авторизации
    // другие поля, которые возвращает API
  };
}
