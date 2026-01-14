import { baseUrl } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as SecureStore from "expo-secure-store";

const customBaseQuery = async (args: any, api: any, extraOptions: any) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: async (headers, { getState, endpoint }) => {
      // Skip auth if explicitly requested (for public endpoints)
      if (extraOptions?.skipAuth) {
        return headers;
      }

      const token = await SecureStore.getItemAsync("bearerToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      if (endpoint === "login" || endpoint === "SSOLogin") {
        headers.set("x-client-type", "app");
      }
      return headers;
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);

  //   if (result?.error?.status === 401) {
  //     await SecureStore.deleteItemAsync("bearerToken");

  //     // Get the current Redux state and check if there's a logged-in user
  //     const state = api.getState();
  //     const currentUser = selectCurrentUser(state);

  //     // Only redirect to auth if there was a logged-in user (not for guests)
  //     if (currentUser) {
  //       // Dispatch purge action to clear redux state
  //       api.dispatch(purge());
  //       router.replace("/loginScreen");
  //     }
  //   }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: customBaseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});
