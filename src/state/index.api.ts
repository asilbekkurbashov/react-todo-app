import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../config/url.config";
import { I_Todo } from "./todosSlice/Todos";

export const rtkAPI = createApi({
  reducerPath: "rtkAPI",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query<I_Todo[], void>({
      query: () => ({
        url: "todos",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = rtkAPI;
