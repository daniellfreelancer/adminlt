import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiURL = "https://exuberant-pink-angelfish.cyclic.app";


export const loginAPI = createApi({
    reducerPath: "loginAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    tagTypes: ['Post'],

    endpoints: (builder) => ({
        signin: builder.mutation({
            query: (user) =>({
                url:'/blog/loginAdmin',
                method: 'POST',
                body: user,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),
        signout: builder.mutation({
            query: (user) =>({
                url:'/blog/singOutAdmin',
                method: 'POST',
                body: user,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),
        

    })
})

export default loginAPI;
export const {useSigninMutation, useSignoutMutation} = loginAPI;