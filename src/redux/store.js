import { configureStore,applyMiddleware } from "@reduxjs/toolkit"
import cartReducer from "./cart/cartSlice"
import thunk from "redux-thunk"
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})
// console.log(cartReducer)
