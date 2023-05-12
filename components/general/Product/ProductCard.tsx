import { Stars } from "@/ui"
import Image from "next/image"
import React, { FC } from "react"

type Props = {
    title: string
    price: number
    availableCount: number
    feedbackCount: number
    filledCount: number
    children?: React.ReactElement | React.ReactElement[]
    actionButtons: React.ReactElement[] | React.ReactElement
}

export const ProductCard: FC<Props> = ({
    children,
    price,
    feedbackCount,
    availableCount,
    filledCount,
    title,
    actionButtons
}) => {

    return (
        <div className="card-standard">
            <div className="card__image">
                <Image src="/images/product.png" alt="me" width="112" height="130" />
            </div>
            <div className="card__title">{title}</div>
            <div className="card__row">
                <div className="card__price">{price} ₽</div>
                <div className="card__action">
                    {actionButtons}
                </div>
            </div>
            <div className="card__row">
                <Stars filledCount={filledCount} className="stars" />
                <div className="card__ratings">
                    Отзывов: {Math.round(feedbackCount / 1000).toLocaleString()} к.
                </div>
            </div>
            <div className="card__row">
                <div className="card__available">
                    В наличии: <span> в {availableCount} магазинах</span>
                </div>
            </div>
        </div>
    )
}