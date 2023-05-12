import React, { FC } from "react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    padding?: string
    children?: React.ReactElement | React.ReactElement[] | string
}

export const Button: FC<Props> = ({ children, padding = "", ...props }) => {

    return (
        <button className="button" {...props} style={{ padding: padding }}>
            {children}
        </button >
    )
}

