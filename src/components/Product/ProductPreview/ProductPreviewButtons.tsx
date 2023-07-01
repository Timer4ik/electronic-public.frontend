'use client'
import { CartIcon } from '@/components/Icons/CartIcon'
import { HeartIcon } from '@/components/Icons/HeartIcon'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addItemToCart, deleteItemFromCart } from '@/redux/slices/cartSlice'
import { addItemToFavourite, deleteItemFromFavourite } from '@/redux/slices/favouriteSlice'
import { Button, Stack } from '@/shared'
import React, { FC } from 'react'

interface Props {
    id: number
}

export const ProductPreviewButtons: FC<Props> = ({ id }) => {

    const dispatch = useAppDispatch()
    const { cartItems } = useAppSelector(state => state.cart)
    const { favouriteItems } = useAppSelector(state => state.favourite)

    return (
        <Stack gap={1} flex="stretch-all">
            {!cartItems.find(item => item.id == id) ?
                <Button onClick={() => dispatch(addItemToCart(id))} paddingX={1} paddingY={4} size={3}>
                    <div>Купить</div>
                    <CartIcon />
                </Button> :
                <Button onClick={() => dispatch(deleteItemFromCart(id))} color='primary' paddingX={1} paddingY={4} size={3}>
                    <div>В корзине</div>
                    <CartIcon />
                </Button>
            }
            {!favouriteItems.find(item => item.id == id) ?
                <Button onClick={() => dispatch(addItemToFavourite(id))} paddingX={1} paddingY={4} size={3}>
                    <div>Добавить в избранное</div>
                    <HeartIcon />
                </Button> :
                <Button onClick={() => dispatch(deleteItemFromFavourite(id))} color='primary' paddingX={1} paddingY={4} size={3}>
                    <div>В избранном</div>
                    <HeartIcon />
                </Button>
            }
        </Stack>
    )
}
