import { FC } from "react"

type Props = {
    count: number
}

export const ProductAvailableCount: FC<Props> = ({ count }) => {
    return (
        <div className="product__available_count">
            В наличии: <span> в {count} магазинах</span>
        </div>
    )
}
