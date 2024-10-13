import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_SWAGGER_API_URL}`,
  // prepareHeaders: (headers) => {
  // 	let token = null;
  // 	const localStorageData = JSON.parse(localStorage.getItem('tokens')!);
  // 	if (localStorageData) {
  // 		const { accessToken } = localStorageData;
  // 		token = accessToken;
  // 	}
  // 	if (token) {
  // 		headers.set('Authorization', `Bearer ${token}`);
  // 	}
  // 	return headers;
  // }
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnReconnect: true,
  refetchOnFocus: false,
  tagTypes: [
    "attractions",
    "games",
    "culture",
    "region",
    "region_food",
    "register",
  ],
  endpoints: () => ({}),
});
