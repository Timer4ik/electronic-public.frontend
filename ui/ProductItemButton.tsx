import { FC } from "react"
import Image from "next/image"

type Props = {
    type: 'cart' | 'like'
}

export const ProductItemButton: FC<Props> = ({ type }) => {
    let icon = '';

    switch (type) {
        case 'cart':
            icon = '/images/icons/cart-blue.svg';
            break;
        case 'like':
            icon = '/images/icons/like-blue.svg';
            break;
    }

    return (
        <button className="product-item__button">
            <Image src={icon} alt={type} width="16" height="16" />
        </button>
    )
}
