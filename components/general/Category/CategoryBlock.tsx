import Image from "next/image"
import Link from "next/link"
import React, { FC } from "react"


type Props = {
    href: string
    title: string
    minPrice: number
    available: number
    photo: string

    children?: React.ReactElement | React.ReactElement[]
}

export const CategoryBlock: FC<Props> = ({ children, available, minPrice, title, photo, href }) => {

    return (
        <Link className="category__block" href={href}>
            <div className="category__img">
                <Image className="promotion-image" src={photo} width="290" height="290" alt="" />
            </div>
            <div className="category__content">
                <div className="category__title">{title}</div>
                <div className="category__bottom">
                    <div className="category__price">От {minPrice.toLocaleString()} ₽</div>
                    <div className="category__available">{available.toLocaleString()} товаров</div>
                </div>
            </div>
        </Link>
    )
}

