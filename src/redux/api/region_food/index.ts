import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPost_regionFood: build.query({
      query: (regionName) => ({
        url: "/region_food",
        method: "GET",
      }),
      providesTags: ["region_food"],
    }),
  }),
});

export const { useGetPost_regionFoodQuery } = api;
