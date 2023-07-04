import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface LoginResponseData {
    message: string,
    token: string,
    user: {
        user_id: number,
        name: string,
        email: string
    }
}

export interface LoaderState {
    isAuth: boolean
    user_id: number | null
    token:string | null
}

const initialState: LoaderState = {
    isAuth: false,
    user_id: null,
    token:null
}

export const login = createAsyncThunk<LoginResponseData, { email: string, password: string }>(
    'api/login',
    async ({ email, password }, { rejectWithValue }) => {
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            body: JSON.stringify({
                email, password
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        })
        const data: LoginResponseData = await response.json()
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(data)
        }

        return data
    }
)
export const checkIsLogin = createAsyncThunk<LoginResponseData, string>(
    'api/checkIsLogin',
    async (_, { rejectWithValue }) => {
        const token = localStorage.getItem("token")

        if (!token) {

            return rejectWithValue(null)
        }

        const response = await fetch(`http://localhost:5000/api/auth/me`, {
            headers: {
                Authorization: "Bearer " + JSON.parse(token)
            }
        })
        const data: Omit<LoginResponseData, "token"> = await response.json()

        if (response.status < 200 || response.status >= 300) {

            return rejectWithValue(null)
        }

        return {
            ...data,
            message: data.message,
            token: JSON.parse(token),
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem("token")
            state.isAuth = false
            state.token = null
        },
    },
    extraReducers: {
        [checkIsLogin.fulfilled.type]: (state, action: PayloadAction<LoginResponseData>) => {
            localStorage.setItem("token", JSON.stringify(action.payload.token))
            state.user_id = action.payload.user.user_id
            state.isAuth = true
            state.token = action.payload.token
        },
        [checkIsLogin.rejected.type]: (state, action: PayloadAction<LoginResponseData>) => {
            localStorage.removeItem("token")
            state.isAuth = false
            state.user_id = null
            state.token = null
        },
        [login.fulfilled.type]: (state, action: PayloadAction<LoginResponseData>) => {
            localStorage.setItem("token", JSON.stringify(action.payload.token))
            state.user_id = action.payload.user.user_id
            state.isAuth = true
            state.token = action.payload.token
        },
        [login.rejected.type]: (state) => {
            localStorage.removeItem("token")
            state.isAuth = false
            state.user_id = null
            state.token = null
        },
        // [login.pending.type]: (state, action: PayloadAction<LoginResponseData>){
        //     state.isAuth = true
        // },
    }
})

export const { logout } = authSlice.actions

export default authSlice.reducer
