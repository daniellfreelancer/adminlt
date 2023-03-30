import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import loginAPI from "./features/loginAPI";
import userReducer from './features/userAPI'


export const store = configureStore({
    reducer:{
        [loginAPI.reducerPath]: loginAPI.reducer,
        auth: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginAPI.middleware),
})


setupListeners(store.dispatch)
export default store