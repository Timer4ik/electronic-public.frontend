import Image from "next/image"
import React, { FC } from "react"
import CartButton from "../../../shared/ui/CartButton"
import Stars from "../../../shared/ui/Stars"

type Props = {
    title: string
    price: number
    availableCount: number
    feedbackCount: number
    filledCount: number
    children?: React.ReactElement | React.ReactElement[]
    actionButtons: React.ReactElement[] | React.ReactElement
}

export const ProductSmallCard: FC<Props> = ({
    children,
    price,
    feedbackCount,
    availableCount,
    filledCount,
    title,
    actionButtons
}) => {

    return (
        <div className="card-small">
            <div className="card__column">
                <div className="card__image">
                    <Image src="/images/product.png" alt="me" width="70" height="70" />
                </div>
            </div>
            <div className="card__column">
                <div className="card__row row-space-btw">
                    <div className="card__title">{title.slice(0, 50) + "..."}</div>
                    <div className="card__action">
                        {actionButtons}
                    </div>
                </div>
                <div className="card__row">
                    <div className="row__inner">
                        <div className="card__price">{price} ₽</div>
                        <Stars filledCount={filledCount} className="stars" />
                    </div>
                </div>
                <div className="card__row">
                    <div className="card__available">
                        В наличии: <span> в {availableCount} магазинах</span>
                    </div>
                    <div className="card__ratings">
                        Отзывов: {Math.round(feedbackCount / 1000).toLocaleString()} к.
                    </div>
                </div>
            </div>
        </div>
    )
}
