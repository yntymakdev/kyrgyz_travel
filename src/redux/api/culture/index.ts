import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPosts_culture: build.query<
      CULTURE.GetCultureResponse,
      CULTURE.GetCultureRequest
    >({
      query: () => ({
        url: "/culture",
        method: "GET",
      }),
      providesTags: ["culture"],
    }),
  }),
});

export const { useGetPosts_cultureQuery } = api;
