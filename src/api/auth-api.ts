import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {AuthParamsType} from "./api-types";


export const authApi = createApi({
    reducerPath: 'authApi',
    tagTypes:['Auth'],
    baseQuery: fetchBaseQuery({baseUrl: `http://localhost:5000/api/auth`}),
    endpoints: builder => ({
        registration: builder.mutation({
            query: (body: AuthParamsType) => ({
                url: `/registration`,
                method: 'POST',
                body
            }),
            invalidatesTags:[{type: 'Auth'}]
        }),
        login: builder.mutation({
            query: (body: AuthParamsType) => ({
                url: `/login`,
                method: 'POST',
                body
            }),
            invalidatesTags:[{type: 'Auth'}]
        }),
    })
})

export const {
    useRegistrationMutation,
    useLoginMutation
} = authApi