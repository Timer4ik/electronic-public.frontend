import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ICartItem {
    id: number
    amount: number
}

const getJsonCart = () =>
    localStorage.getItem("cart")

const setJsonCart = (cart: ICartItem[]) =>
    localStorage.setItem("cart", JSON.stringify(cart))


const getCartItems = (): ICartItem[] => {
    let cart: ICartItem[] = []

    let jsonCart = getJsonCart()
    if (jsonCart) {
        cart = JSON.parse(jsonCart)
    }
    else {
        localStorage.setItem("cart", JSON.stringify([]))
    }

    return cart
}

const initialState: {
    cartItems?: ICartItem[]
} = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        initCart: (state) => {
            state.cartItems = getCartItems()
        },
        clearCart: (state) => {
            state.cartItems = []
            setJsonCart([])
        },
        addItemToCart: (state, action: PayloadAction<number>) => {
            let cart: ICartItem[] = []

            let jsonCart = getJsonCart()
            if (jsonCart) {
                cart = JSON.parse(jsonCart)
            }

            cart.push({
                id: action.payload,
                amount: 0
            })
            setJsonCart(cart)

            state.cartItems = cart
        },
        deleteItemFromCart: (state, action: PayloadAction<number>) => {
            let cart = getCartItems().filter(cartItem => {
                return cartItem.id !== action.payload
            })
            setJsonCart(cart)

            state.cartItems = cart
        },
        decrementCartItemAmount: (state, action: PayloadAction<{
            id: number,
            amount: number
        }>) => {
            let cart = getCartItems().map(cartItem => {
                if (cartItem.id == action.payload.id) {
                    cartItem.amount--
                }
                return cartItem
            })
            setJsonCart(cart)
            state.cartItems = cart
        },
        incrementCartItemAmount: (state, action: PayloadAction<{
            id: number,
            amount: number
        }>) => {
            let cart = getCartItems().map(cartItem => {
                if (cartItem.id == action.payload.id) {
                    cartItem.amount++
                }
                return cartItem
            })
            setJsonCart(cart)
            state.cartItems = cart
        },
    },
})

export const { addItemToCart, initCart, clearCart, decrementCartItemAmount, deleteItemFromCart, incrementCartItemAmount } = cartSlice.actions

export default cartSlice.reducer
