import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPost_region: build.query<REGION.RegionsResponse, REGION.RegionRequest>({
      query: (arg) => ({
        url: "/region/{region_name}",
        method: "GET",
      }),
      providesTags: ["region"],
    }),
  }),
});

export const { useGetPost_regionQuery } = api;
