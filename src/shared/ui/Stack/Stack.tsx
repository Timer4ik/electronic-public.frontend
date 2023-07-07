import React, { FC, useEffect, useState } from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    className?: string
    children: React.ReactNode
    flexDirection?: "column" | "row"
    gap?: 0 | 1 | 2 | 3 | 4 | 5
    marginY?: 1 | 2 | 3 | 4 | 5
    marginX?: 1 | 2 | 3 | 4 | 5
    marginTop?: 1 | 2 | 3 | 4 | 5
    marginBottom?: 1 | 2 | 3 | 4 | 5
    justifyContent?: "space-between" | "center" | "space-around"
    alignItems?: "center" | "flex-end"
    padding?: 1 | 2 | 3 | 4 | 5
    paddingY?: 1 | 2 | 3 | 4 | 5
    paddingX?: 1 | 2 | 3 | 4 | 5
    backgroundColor?: "standard" | "danger" | "green" | "primary"
    flex?: "same-all" | "stretch-all"
}

export const Stack: FC<Props> = ({ children, className, style, flex, alignItems, paddingX, padding, paddingY, backgroundColor, flexDirection, gap, marginX, marginY, marginBottom, justifyContent, marginTop,...props }) => {

    const flexStyle = flex !== undefined ? " stack-flex-" + flex : ""
    const gapStyle = gap !== undefined ? " stack-gap-" + gap : ""
    const flexDirectionStyle = flexDirection ? " stack-" + flexDirection : " stack-row"
    const marginXStyle = marginX ? " stack-marginX-" + marginX : ""
    const marginYStyle = marginY ? " stack-marginY-" + marginY : ""
    const marginTopStyle = marginTop ? " stack-marginTop-" + marginTop : ""
    const marginBottomStyle = marginBottom ? " stack-marginBottom-" + marginBottom : ""
    const justifyContentStyle = justifyContent ? " stack-" + justifyContent : ""
    const alignItemsStyle = alignItems ? " stack-align-items-" + alignItems : ""

    const paddingStyle = padding ? " stack-padding-" + padding : ""
    const paddingYStyle = paddingY ? " stack-paddingY-" + paddingY : ""
    const paddingXStyle = paddingX ? " stack-paddingX-" + paddingX : ""
    const backgroundColorStyle = backgroundColor ? " stack-bg-" + backgroundColor : ""

    return (
        <div style={style} className={(className || "") + ' stack' + flexStyle + paddingYStyle + paddingXStyle + backgroundColorStyle + paddingStyle + alignItemsStyle + justifyContentStyle + flexDirectionStyle + gapStyle + marginXStyle + marginYStyle + marginBottomStyle + marginTopStyle} {...props}>
            {children}
        </div>
    )
}