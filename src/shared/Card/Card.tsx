import React, { FC, ReactElement, ReactNode } from 'react'
// import "./Card.scss"

type Props = {
    children: ReactNode
    noPadding?: boolean
    noPaddingY?: boolean
    padding?: 1 | 2 | 3 | 4 | 5
    style?: React.CSSProperties
}
export const BorderCard: FC<Props> = ({ noPadding, noPaddingY, children }) => {
    return (
        <div className='border-card'>
            <div className="border-card__body" style={
                {
                    ...noPadding ? { padding: 0 } : {},
                    ...noPaddingY ? { paddingTop: 0, paddingBottom: 0 } : {},
                }
            }>
                {children}
            </div>
        </div>
    )
}

export const Card: FC<Props> = ({ noPadding, noPaddingY, children, padding, style }) => {

    const paddingStyle = padding ? " card-padding-" + padding : ""

    return (
        <div className='card' style={style}>
            <div className={"card__body" + paddingStyle} style={
                {
                    height:"100%",
                    ...noPadding ? { padding: 0 } : {},
                    ...noPaddingY ? { paddingTop: 0, paddingBottom: 0 } : {},
                }
            }>
                {children}
            </div>
        </div>
    )
}
