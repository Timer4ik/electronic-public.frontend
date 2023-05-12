import React, { FC } from "react";
import Image from "next/image"

type Props = {
    children?: React.ReactElement | React.ReactElement[]
}

const CartButtonStyles: React.CSSProperties = {
    width: "35px",
    height: "35px",

    backgroundColor: "#F6F6F6",
    borderRadius: "8px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

export const CartButton: FC<Props> = ({ children }) => {

    return (
        <div className="cart-buton" style={CartButtonStyles}>
            <Image src="/images/icons/cart-blue.svg" alt="me" width="20" height="20" />
        </div>
    )
}

