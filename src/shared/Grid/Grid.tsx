import React, { FC, useEffect, useState } from 'react'

interface Props extends Pick<React.HTMLAttributes<HTMLDivElement>, "style"> {
    className?: string
    children: React.ReactNode
    gap?: 1 | 2 | 3 | 4 | 5
    marginY?: 1 | 2 | 3 | 4 | 5
    marginX?: 1 | 2 | 3 | 4 | 5
    marginTop?: 1 | 2 | 3 | 4 | 5
    marginBottom?: 1 | 2 | 3 | 4 | 5
    padding?: 1 | 2 | 3 | 4 | 5
    paddingY?: 1 | 2 | 3 | 4 | 5
    paddingX?: 1 | 2 | 3 | 4 | 5
    backgroundColor?: "standard" | "danger" | "green" | "primary"
    columns?: "1-1" | "1-3" | "2-3" | "1-4" | "3-4" | "1-5" | "2-5" | "3-5" | "4-5" | "1-6" | "1-7" | "2-7" | "3-7" | "4-7" | "5-7" | "2-9" | "3" | "4"
}

export const Grid: FC<Props> = ({ children, className, columns, style, paddingX, padding, paddingY, backgroundColor, gap, marginX, marginY, marginBottom, marginTop }) => {

    const gapStyle = gap ? " grid-gap-" + gap : ""
    const marginXStyle = marginX ? " grid-marginX-" + marginX : ""
    const marginYStyle = marginY ? " grid-marginY-" + marginY : ""
    const marginTopStyle = marginTop ? " grid-marginTop-" + marginTop : ""
    const marginBottomStyle = marginBottom ? " grid-marginBottom-" + marginBottom : ""

    const paddingStyle = padding ? " grid-padding-" + padding : ""
    const paddingYStyle = paddingY ? " grid-paddingY-" + paddingY : ""
    const paddingXStyle = paddingX ? " grid-paddingX-" + paddingX : ""
    const backgroundColorStyle = backgroundColor ? " grid-bg-" + backgroundColor : ""
    const columnsStyle = columns ? " grid-columns-" + columns : ""

    return (
        <div style={style} className={(className || "") + columnsStyle + ' grid' + paddingYStyle + paddingXStyle + backgroundColorStyle + paddingStyle + gapStyle + marginXStyle + marginYStyle + marginBottomStyle + marginTopStyle}>
            {children}
        </div>
    )
}