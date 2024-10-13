namespace REGISTER {
  type PostRequestUserRegistration = {
    email: string;
    username: string;
    password: string;
    password_confirm: string;
    birth_date: string;
    phone_number: string;
    first_name: string;
    last_name: string;
  };

  type PostResponceUserRegistration = {
    user: {
      email: string;
      username: string;
      token: string;
    };
  };
}
