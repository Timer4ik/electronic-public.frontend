import loaderReducer from "./slices/loaderSlice"
import authReducer from './slices/authSlice'
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    auth: authReducer,
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware()
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch