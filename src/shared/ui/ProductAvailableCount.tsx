import { FC } from "react"

type Props = {
    count: number
}

const ProductAvailableCount: FC<Props> = ({ count }) => {
    return (
        <div className="product__available_count">
            В наличии: <span> в {count} магазинах</span>
        </div>
    )
}

export default ProductAvailableCount