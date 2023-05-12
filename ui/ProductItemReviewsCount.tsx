import { FC } from "react";

type Props = {
    count: number
}

export const ProductItemReviewsCount: FC<Props> = ({ count }) => {
    return (
        <div className="product-item__reviews-count">Отзывов: {count}</div>
    );
}
