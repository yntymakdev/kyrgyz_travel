import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<POSTS.GetPostResponce, POSTS.GetPostsRequest>({
      query: () => ({
        url: "",
        method: "",
      }),
      providesTags: ["posts"],
    }),
  }),
});

export const {} = api;
