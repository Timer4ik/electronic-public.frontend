import React, { FC, ReactNode } from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    fontSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
    fontWeight?: "bold" | "regular" | "light" | "medium"
    color?: "blue" | "black" | "white" | "gray" | "primary"
    textWrap?: "no-wrap"
    textAlign?: "right" | "left"
}

export const Typography: FC<Props> = ({ children, fontSize, textAlign, fontWeight, textWrap, color, ...props }) => {

    const fontSizeStyle = fontSize ? " typography-size-" + fontSize : " typography-size-4"
    const fontWeightStyle = fontWeight ? " typography-weight-" + fontWeight : " typography-weight-4"
    const colorStyle = color ? " typography-color-" + color : " "
    const textWrapStyle = textWrap ? " typography-text-wrap-" + textWrap : " "
    const textAlignStyle = textAlign ? " typography-text-align-" + textAlign : " "
    return (
        <div className={"typography" + fontSizeStyle + textWrapStyle + textAlignStyle + fontWeightStyle + colorStyle} {...props}>{children}</div>
    )
}
