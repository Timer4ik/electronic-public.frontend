import React, { FC } from "react"

type Props = {
    children?: React.ReactElement | React.ReactElement[]
}

const Component: FC<Props> = ({ children }) => {

    return (
        <div>
            This is Component
        </div>
    )
}

export default Component
