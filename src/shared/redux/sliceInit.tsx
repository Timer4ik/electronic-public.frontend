'use client'
import React, { FC, ReactNode, useEffect } from 'react'
import { useAppDispatch } from './hooks'
import { initCart } from './slices/cartSlice'
import { initFavourite } from './slices/favouriteSlice'
import { checkIsLogin } from './slices/authSlice'

export const SliceInit: FC<{ children: ReactNode }> = ({ children }) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(checkIsLogin(""))
        dispatch(initCart())
        dispatch(initFavourite())
    },[])

    return <>{children}</>
}
