import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPost_register: build.mutation<
      REGISTER.PostRequestUserRegistration,
      REGISTER.PostResponceUserRegistration
    >({
      query: () => ({
        url: "/register",
        method: "POST",
      }),
      invalidatesTags: ["register"],
    }),
  }),
});

export const { useGetPost_registerMutation } = api;
