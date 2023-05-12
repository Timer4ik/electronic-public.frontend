import { FC } from 'react'

type Props = {
    amount: number
}

export const ProductItemAmoutPrice: FC<Props> = ({
    amount
}) => {
    return (
        <strong>Итого: {amount} рублей</strong>
    );
}