import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
    padding?: 1 | 2 | 3 | 4 | 5
    backgroundColor?: "standard" | "danger" | "green" | "primary"
}

export const Header: FC<Props> = ({ children, padding, backgroundColor }) => {

    const paddingStyle = padding ? " header-padding-" + padding : ""
    const backgroundColorStyle = backgroundColor ? " header-bg-" + backgroundColor : ""

    return (
        <header className={'header' + paddingStyle + backgroundColorStyle}>
            {children}
        </header>
    )
}
