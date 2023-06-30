import React, { FC, ReactNode } from 'react'
import { Stack } from '../Stack/Stack'
import { Typography } from '../Typography/Typography'
import { cp } from 'fs'


interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    size?: 1 | 2 | 3 | 4 | 5
    fontWeight?: "bold" | "regular" | "light" | "medium"
    color?: "standard" | "primary" | "light-standard"
    padding?: 1 | 2 | 3 | 4 | 5
    paddingY?: 1 | 2 | 3 | 4 | 5
    paddingX?: 1 | 2 | 3 | 4 | 5 | 6
    gap?: 1 | 2 | 3 | 4 | 5
}

export const Button: FC<Props> = ({ padding, gap, paddingY, paddingX, children, fontWeight, size, color, ...props }) => {

    const gapStyle = gap ? " button-gap-" + gap : " button-gap-1"
    const sizeStyle = size ? " button-size-" + size : " button-size-1"
    const fontWeightStyle = fontWeight ? " button-weight-" + fontWeight : " button-weight-bold"
    const colorStyle = color ? " button-color-" + color : " button-color-standard"
    const paddingStyle = padding ? " button-padding-" + padding : ""
    const paddingYStyle = paddingY ? " button-paddingY-" + paddingY : ""
    const paddingXStyle = paddingX ? " button-paddingX-" + paddingX : ""

    return (
        <button type={props.type || "button"} className={'button' + paddingStyle + gapStyle + paddingXStyle + paddingYStyle + colorStyle + sizeStyle + fontWeightStyle}  {...props} >
            {children}
        </button>
    )
}
