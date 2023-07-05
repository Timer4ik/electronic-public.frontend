'use client'
import { useAppDispatch, useAppSelector } from '@/shared/redux/hooks'
import { addItemToCart, deleteItemFromCart } from '@/shared/redux/slices/cartSlice'
import { Button, Typography } from '@/shared/ui'
import { CartIcon } from '@/shared/ui/Icons/CartIcon'
import React, { FC } from 'react'

interface Props {
    product_id: number
}

export const ProductCardBuyButton: FC<Props> = ({ product_id }) => {

    const dispatch = useAppDispatch()
    const { cartItems } = useAppSelector(state => state.cart)

    return !cartItems?.find(item => item.id == product_id) ?
        <Button
            onClick={() => dispatch(addItemToCart(product_id))}
            color='light-standard' paddingX={1} size={1}>
            <div>Купить</div>
            <CartIcon width={15} height={15} />
        </Button> :
        <Button
            onClick={() => dispatch(deleteItemFromCart(product_id))}
            color='primary' paddingX={1} size={1}>
            <div>В корзине</div>
            <CartIcon width={15} height={15} />
        </Button>
}
