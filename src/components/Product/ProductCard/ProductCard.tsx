'use client'
import { Button, Card, Grid, Stack, Typography } from '@/shared'
import { IProduct } from '@/types/models'
import Link from 'next/link'
import React, { FC } from 'react'
import { HeartIcon } from '../../Icons/HeartIcon'
import { CartIcon } from '../../Icons/CartIcon'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addItemToCart, deleteItemFromCart } from '@/redux/slices/cartSlice'
import { addItemToFavourite, deleteItemFromFavourite } from '@/redux/slices/favouriteSlice'

interface Props {
    product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {

    const dispatch = useAppDispatch()
    const { cartItems } = useAppSelector(state => state.cart)
    const { favouriteItems } = useAppSelector(state => state.favourite)

    return (
        <Card padding={3} style={{ height: 500 }}>
            <Stack style={{ height: "100%" }}>
                <Stack flexDirection="column" gap={2} style={{ height: "100%" }}>
                    <Stack justifyContent="center">
                        <img height={135} src={product.file?.link} alt="" />
                    </Stack>
                    <Typography fontSize={4} style={{ flex: "1 1 100%" }}>
                        <Link href={`/product/${product.product_id}`}>
                            {product.name}
                        </Link>
                    </Typography>
                    <Typography fontWeight="bold">
                        {product.price.toLocaleString()} ₽
                    </Typography>
                    <Grid columns='4-5' gap={1}>
                        {!cartItems.find(item => item.id == product.product_id) ?
                            <Button
                                onClick={() => dispatch(addItemToCart(product.product_id))}
                                color='light-standard' paddingX={1} size={1}>
                                <div>Купить</div>
                                <CartIcon width={15} height={15} />
                            </Button> :
                            <Button
                                onClick={() => dispatch(deleteItemFromCart(product.product_id))}
                                color='primary' paddingX={1} size={1}>
                                <div>В корзине</div>
                                <CartIcon width={15} height={15} />
                            </Button>
                        }
                        {!favouriteItems.find(item => item.id == product.product_id) ?
                            <Button onClick={() => dispatch(addItemToFavourite(product.product_id))} color='light-standard' padding={2} size={1}><HeartIcon width={15} height={15} /></Button>
                            :
                            <Button onClick={() => dispatch(deleteItemFromFavourite(product.product_id))} color='primary' padding={2} size={1}><HeartIcon width={15} height={15} /></Button>
                        }
                    </Grid>
                    <Stack justifyContent="space-between" alignItems="center">
                        <Stack>
                            <img width={20} height={20} src="/img/icons/full-star.svg" alt="" />
                            <img width={20} height={20} src="/img/icons/full-star.svg" alt="" />
                            <img width={20} height={20} src="/img/icons/full-star.svg" alt="" />
                            <img width={20} height={20} src="/img/icons/full-star.svg" alt="" />
                            <img width={20} height={20} src="/img/icons/empty-star.svg" alt="" />
                        </Stack>
                        <Typography fontSize={1}>
                            Отзывов: 12к.
                        </Typography>
                    </Stack>
                    <Typography fontSize={3}>
                        В наличии: <Typography color="blue" fontSize={3}>в 4 магазинах</Typography>
                    </Typography>

                </Stack>
            </Stack>
        </Card>
    )
}
