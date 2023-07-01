'use client'
import React, { FC, ReactNode, useEffect } from 'react'
import { useAppDispatch } from './hooks'
import { initCart } from './slices/cartSlice'
import { initFavourite } from './slices/favouriteSlice'

export const SliceInit: FC<{ children: ReactNode }> = ({ children }) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initCart())
        dispatch(initFavourite())
    },[])

    return <>{children}</>
}
