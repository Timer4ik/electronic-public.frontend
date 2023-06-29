import React, { FC, ReactNode } from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    fontSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
    fontWeight?: "bold" | "regular" | "light" | "medium"
    color?: "blue" | "black" | "white"
}

export const Typography: FC<Props> = ({ children, fontSize, fontWeight, color, ...props }) => {

    const fontSizeStyle = fontSize ? " typography-size-" + fontSize : " typography-size-4"
    const fontWeightStyle = fontWeight ? " typography-weight-" + fontWeight : " typography-weight-4"
    const colorStyle = color ? " typography-color-" + color : " "
    return (
        <div className={"typography" + fontSizeStyle + fontWeightStyle + colorStyle} {...props}>{children}</div>
    )
}
