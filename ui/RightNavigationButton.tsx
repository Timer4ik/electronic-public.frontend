import React, { FC } from "react"

type Props = {
    children?: React.ReactElement | React.ReactElement[]
}

export const RightNavigationButton: FC<Props> = ({ children }) => {

    return (
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="22.6471" cy="22.645" rx="22.6471" ry="22.645" transform="rotate(-180 22.6471 22.645)" fill="white" />
            <path d="M30.6477 22.6436C30.843 22.4483 30.843 22.1317 30.6477 21.9365L27.4658 18.7545C27.2705 18.5592 26.9539 18.5592 26.7587 18.7545C26.5634 18.9497 26.5634 19.2663 26.7587 19.4616L29.5871 22.29L26.7587 25.1184C26.5634 25.3137 26.5634 25.6303 26.7587 25.8255C26.9539 26.0208 27.2705 26.0208 27.4658 25.8255L30.6477 22.6436ZM15.2942 21.79C15.018 21.79 14.7942 22.0139 14.7942 22.29C14.7942 22.5661 15.018 22.79 15.2942 22.79L15.2942 21.79ZM30.2942 21.79L15.2942 21.79L15.2942 22.79L30.2942 22.79L30.2942 21.79Z" fill="black" />
        </svg>

    )
}
