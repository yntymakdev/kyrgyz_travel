import { api as index } from "..";
import { FoodRequest, FoodResponse } from "./types";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPost_regionFood: build.query<FoodResponse, FoodRequest>({
      query: () => ({
        url: "/region_food",
        method: "GET",
      }),
      providesTags: ["region_food"],
    }),
  }),
});

export const { useGetPost_regionFoodQuery } = api;
