import { api as index } from "..";
import { REGION } from "./types";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPost_region_all: build.query<REGION.RegionsResponseAll, void>({
      query: () => ({
        url: "/region",
        method: "GET",
      }),
      providesTags: ["region"],
    }),
    getPost_region: build.query<REGION.RegionsResponse, string>({
      query: (id) => ({
        url: `/region/${id}/`,
        method: "GET",
      }),
      providesTags: ["region"],
    }),
  }),
});

export const { useGetPost_regionQuery, useGetPost_region_allQuery } = api;
