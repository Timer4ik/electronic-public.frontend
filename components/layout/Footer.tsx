import React, { FC } from "react"

type Props = {
    children?: React.ReactElement | React.ReactElement[]
}

const Footer: FC<Props> = ({ children }) => {

    return (
        <footer className="footer">
            Футер
        </footer>
    )
}

export default Footer
