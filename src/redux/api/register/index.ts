import { api as index } from "..";
import { PostRequestUserRegistration, PostResponseUserRegistration } from "./types";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    Post_register: build.mutation<PostResponseUserRegistration, PostRequestUserRegistration>({
      query: (data) => ({
        url: "/register/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["register"],
    }),
  }),
});

export const { usePost_registerMutation } = api;
