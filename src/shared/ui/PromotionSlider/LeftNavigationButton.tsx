import React, { FC } from "react"

type Props = {
    children?: React.ReactElement | React.ReactElement[]
}

const LeftNavigationButton: FC<Props> = ({ children }) => {

    return (
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="22.6471" cy="22.645" rx="22.6471" ry="22.645" fill="white" />
            <path d="M14.6464 22.6464C14.4512 22.8417 14.4512 23.1583 14.6464 23.3536L17.8284 26.5355C18.0237 26.7308 18.3403 26.7308 18.5355 26.5355C18.7308 26.3403 18.7308 26.0237 18.5355 25.8284L15.7071 23L18.5355 20.1716C18.7308 19.9763 18.7308 19.6597 18.5355 19.4645C18.3403 19.2692 18.0237 19.2692 17.8284 19.4645L14.6464 22.6464ZM30 23.5C30.2761 23.5 30.5 23.2761 30.5 23C30.5 22.7239 30.2761 22.5 30 22.5V23.5ZM15 23.5H30V22.5H15V23.5Z" fill="black" />
        </svg>
    )
}

export default LeftNavigationButton