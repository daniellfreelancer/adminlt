import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


//let apiURL = "http://localhost:4000"
let apiURL = "https://exuberant-pink-angelfish.cyclic.app"

export const postBlogAPI = createApi({
    reducerPath: "postBlogAPI",


    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    tagTypes: ['Post', 'Put', 'Delete'],

    endpoints: (builder) => ({
        createPost: builder.mutation({
            query: (post)=>({
                url: '/news/create',
                method: 'POST',
                body: post,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
        }),
        updatePost: builder.mutation({
            query: ({id, ...post}) =>({
                url:`/news/post/update/${id}`,
                method: 'PUT',
                body: post
            })
        }),
        deletePost: builder.mutation({
            query: (idPost) => ({
                url: '/news/post/delete',
                method: 'DELETE',
                body: idPost
            })
        }),
        getPostById: builder.mutation({
            query: (id) => ({
                url: `/news/posts/${id}`,
                method: 'GET'
            })
        })
    })
})


export default postBlogAPI
export const { useCreatePostMutation,  useUpdatePostMutation, useDeletePostMutation, useGetPostByIdMutation  } = postBlogAPI