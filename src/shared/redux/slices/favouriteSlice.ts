import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IFavouriteItem {
    id: number
    amount: number
}

const getJsonFavourite = () =>
    localStorage.getItem("favourite")

const setJsonFavourite = (favourite: IFavouriteItem[]) =>
    localStorage.setItem("favourite", JSON.stringify(favourite))


const getFavouriteItems = (): IFavouriteItem[] => {
    let favourite: IFavouriteItem[] = []

    let jsonFavourite = getJsonFavourite()
    if (jsonFavourite) {
        favourite = JSON.parse(jsonFavourite)
    }
    else {
        localStorage.setItem("favourite", JSON.stringify([]))
    }

    return favourite
}

const initialState: {
    favouriteItems: IFavouriteItem[]
} = {
    favouriteItems: []
}

export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: initialState,
    reducers: {
        initFavourite:(state) => {
            state.favouriteItems = getFavouriteItems()
        },
        addItemToFavourite: (state, action: PayloadAction<number>) => {
            let favourite: IFavouriteItem[] = []

            let jsonFavourite = getJsonFavourite()
            if (jsonFavourite) {
                favourite = JSON.parse(jsonFavourite)
            }

            favourite.push({
                id: action.payload,
                amount: 0
            })
            setJsonFavourite(favourite)

            state.favouriteItems = favourite
        },
        deleteItemFromFavourite: (state, action: PayloadAction<number>) => {
            let favourite = getFavouriteItems().filter(favouriteItem => {
                return favouriteItem.id !== action.payload
            })
            setJsonFavourite(favourite)

            state.favouriteItems = favourite
        },
    },
})

export const { addItemToFavourite,initFavourite, deleteItemFromFavourite } = favouriteSlice.actions

export default favouriteSlice.reducer
