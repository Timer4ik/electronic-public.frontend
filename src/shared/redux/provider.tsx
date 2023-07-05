'use client'
import React, { ReactNode } from 'react'
import { Provider } from "react-redux"
import { store } from "./store"
import { SliceInit } from './sliceInit'

const Providers = ({
    children
}: {
    children: ReactNode
}) => {

    return (
        <Provider store={store}>
            <SliceInit>
                {children}
            </SliceInit>
        </Provider>
    )
}

export default Providers