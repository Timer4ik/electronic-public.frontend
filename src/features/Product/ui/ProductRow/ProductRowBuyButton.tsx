'use client'
import { useAppDispatch, useAppSelector } from '@/shared/redux/hooks'
import { addItemToCart, deleteItemFromCart } from '@/shared/redux/slices/cartSlice'
import { Button, Typography } from '@/shared/ui'
import { CartIcon } from '@/shared/ui/Icons/CartIcon'
import React, { FC } from 'react'

interface Props {
    product_id: number
}

export const ProductRowBuyButton: FC<Props> = ({ product_id }) => {

    const dispatch = useAppDispatch()
    const { cartItems } = useAppSelector(state => state.cart)

    return !cartItems?.find(item => item.id == product_id) ?
        <Button onClick={() => dispatch(addItemToCart(product_id))} color='light-standard' size={1} padding={4} paddingY={1} fontWeight='medium'>
            <Typography fontSize={2} >Купить</Typography>
            <CartIcon width={16} height={16} />
        </Button>
        :
        <Button active onClick={() => dispatch(deleteItemFromCart(product_id))} color='primary' size={1} padding={4} paddingY={1} fontWeight='medium'>
            <Typography fontSize={2} >В корзине</Typography>
            <CartIcon width={16} height={16} />
        </Button>
}
