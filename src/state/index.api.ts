import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../shared/api/url.config";
import { I_Todo } from "./todosSlice/Todos";

export const rtkAPI = createApi({
  reducerPath: "rtkAPI",
  tagTypes: ['Todos'],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    default: builder.query<I_Todo[], void>({
      query: () => ({
        url: "todos",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Todos' as const, id })),
              { type: 'Todos', id: 'LIST' },
            ]
          : [{ type: 'Todos', id: 'LIST' }],
    }),
  }),
});

export const { useDefaultQuery } = rtkAPI;
