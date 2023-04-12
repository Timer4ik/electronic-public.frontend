import { FC } from 'react'

type Props = {
    amount: number
}

const ProductItemAmoutPrice: FC<Props> = ({
    amount
}) => {
    return (
        <strong>Итого: {amount} рублей</strong>
    );
}

export default ProductItemAmoutPrice;