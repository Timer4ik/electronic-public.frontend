'use client'
import { CartIcon } from '@/shared/ui/Icons/CartIcon'
import { HeartIcon } from '@/shared/ui/Icons/HeartIcon'
import { Button, Stack } from '@/shared/ui'
import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '@/shared/redux/hooks'
import { addItemToCart, deleteItemFromCart } from '@/shared/redux/slices/cartSlice'
import { addItemToFavourite, deleteItemFromFavourite } from '@/shared/redux/slices/favouriteSlice'

interface Props {
    product_id: number
}

export const ProductPreviewButtons: FC<Props> = ({ product_id }) => {

    const dispatch = useAppDispatch()
    const { cartItems } = useAppSelector(state => state.cart)
    const { favouriteItems } = useAppSelector(state => state.favourite)

    return (
        <Stack gap={1} flex="stretch-all">
            {!cartItems?.find(item => item.id == product_id) ?
                <Button onClick={() => dispatch(addItemToCart(product_id))} color='primary' active paddingX={1} paddingY={4} size={3}>
                    <div>Купить</div>
                    <CartIcon />
                </Button> :
                <Button active onClick={() => dispatch(deleteItemFromCart(product_id))} paddingX={1} paddingY={4} size={3}>
                    <div>В корзине</div>
                    <CartIcon />
                </Button>
            }
            {!favouriteItems?.find(item => item.id == product_id) ?
                <Button onClick={() => dispatch(addItemToFavourite(product_id))} color='primary' active paddingX={1} paddingY={4} size={3}>
                    <div>Добавить в избранное</div>
                    <HeartIcon />
                </Button> :
                <Button active onClick={() => dispatch(deleteItemFromFavourite(product_id))} paddingX={1} paddingY={4} size={3}>
                    <div>В избранном</div>
                    <HeartIcon />
                </Button>
            }
        </Stack>
    )
}
