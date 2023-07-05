'use client'
import React, { Children, FC, ReactNode, useEffect, useState } from 'react'

interface Props {
    children: ReactNode
    isShow?: boolean
    setIsShow: (isShow: boolean) => void
}

export const Modal: FC<Props> = ({ children, isShow, setIsShow }) => {

    useEffect(() => {
        if (isShow) {
            document.body.style.overflow = "hidden"
        }
        else {
            document.body.style.overflow = "auto"
        }
    }, [isShow])


    return (
        <div onClick={e => setIsShow(false)} className={'modal__wrapper' + (isShow ? " active" : "")}>
            <div onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
