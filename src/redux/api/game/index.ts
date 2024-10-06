import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPosts_game: build.query<GAMES.GetGamesResponse, GAMES.GetGamesRequest>({
      query: () => ({
        url: "/games",
        method: "GET",
      }),
      providesTags: ["games"],
    }),
  }),
});

export const { useGetPosts_gameQuery } = api;
