import loaderReducer from "./slices/loaderSlice"
import authReducer from './slices/authSlice'
import cartReducer from './slices/cartSlice'
import favouriteReducer from './slices/favouriteSlice'
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    auth: authReducer,
    cart: cartReducer,
    favourite: favouriteReducer,
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware()
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch