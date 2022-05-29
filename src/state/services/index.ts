import { fetchBaseQuery, buildCreateApi, coreModule, reactHooksModule, } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

const createApi = buildCreateApi(
    coreModule(),
    reactHooksModule({ 
        unstable__sideEffectsInRender: true,
    })
);

// Define a service using a base URL and expected endpoints
export const API = createApi({
    reducerPath: "API",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        getAllCharacters: builder.query({
            query: (): string => "/character",
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCharactersQuery } = API