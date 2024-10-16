import { api as index } from "..";
import { PostRequestUserRegistration, PostResponseUserRegistration } from "./types";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPost_register: build.mutation<PostResponseUserRegistration, PostRequestUserRegistration>({
      query: (data) => ({
        url: "/register/",
        method: "POST",
        body: { user: data }, // Убедитесь, что данные обернуты в объект user
      }),
      invalidatesTags: ["register"],
    }),
  }),
});

export const { useGetPost_registerMutation } = api;
