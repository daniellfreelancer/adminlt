import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from '@reduxjs/toolkit/query'
import loginAPI from "./features/loginAPI";
import userReducer from './features/userAPI'
import postBlogAPI from './features/postBlog'
import reloadSlice from "./features/reloadSlice";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";

  const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, userReducer)



export const store = configureStore({
    reducer:{
        auth: persistedReducer,
        [loginAPI.reducerPath]: loginAPI.reducer,
        [postBlogAPI.reducerPath]: postBlogAPI.reducer ,
        reload: reloadSlice,
        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(loginAPI.middleware)
})


// setupListeners(store.dispatch)
// export default store
export const persistor = persistStore(store)