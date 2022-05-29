import { fetchBaseQuery, buildCreateApi, coreModule, reactHooksModule, } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

const createApi = buildCreateApi(
    coreModule(),
    reactHooksModule({
        unstable__sideEffectsInRender: true,
    })
);

type EpisodesParams = {
    page?: number;
    count?: number;
}

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
        getCharacterById: builder.query({
            query: (id: string): string => `/character/${id}`,
        }),
        getAllEpisodes: builder.query({
            query: ({
                count = 20,
                page = 1
            }: EpisodesParams): string => `/episode?page=${page}&count=${count}`,
        }),
        getEpisodeById: builder.query({
            query: (id: string): string => `/episode/${id}`,
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCharactersQuery, useGetAllEpisodesQuery, useGetEpisodeByIdQuery } = API