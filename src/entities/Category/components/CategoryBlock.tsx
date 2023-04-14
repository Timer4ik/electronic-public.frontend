import React, { FC } from "react"

type Props = {
    children?: React.ReactElement | React.ReactElement[]
}

const Category: FC<Props> = ({ children }) => {

    return (
        <div>
            This is Category
        </div>
    )
}

export default Category
