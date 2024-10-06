import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPosts_attractions: build.query<
      POSTS.GetPostResponse,
      POSTS.GetPostsRequest
    >({
      query: () => ({
        url: "/attractions",
        method: "GET",
      }),
      providesTags: ["attractions"],
    }),
  }),
});

export const { useGetPosts_attractionsQuery } = api;
