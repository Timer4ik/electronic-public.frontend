'use client'

import { Button, Card, Stack, Typography } from '@/shared/ui'
import Link from 'next/link'
import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '@/shared/redux/hooks'
import { CartIcon } from '@/shared/ui/Icons/CartIcon'
import { addItemToCart, deleteItemFromCart } from '@/shared/redux/slices/cartSlice'
import { addItemToFavourite, deleteItemFromFavourite } from '@/shared/redux/slices/favouriteSlice'
import { HeartIcon } from '@/shared/ui/Icons/HeartIcon'
import { IProduct } from '@/shared/types/models'
import { StarInput } from '@/features/Product'

interface Props {
    product: IProduct
}

export const PromotionProduct: FC<Props> = ({ product }) => {

    const dispatch = useAppDispatch()
    const { cartItems } = useAppSelector(state => state.cart)
    const { favouriteItems } = useAppSelector(state => state.favourite)

    return (
        <Card padding={2} style={{
            height: "100%"
        }}>
            <Stack flexDirection="column" gap={2}>
                <Typography fontSize={5} fontWeight="bold">
                    Товары дня
                </Typography>


                <Stack alignItems="center" style={{ height: "100%" }} gap={3} >

                    <Stack flexDirection="column" gap={2}>
                        <Stack alignItems="center" gap={3} >
                            <img style={{
                                height: 100,
                                width: 100,
                                maxHeight: 100,
                                maxWidth: 100,
                                objectFit: "contain"
                            }} src={product?.file?.link} alt="" />

                            <Typography style={{ textAlign: "center" }} fontSize={4} >
                                <Link style={{ height: "100%" }} href={`/product/${product.product_id}`} >
                                    {product.name}
                                </Link>
                            </Typography>

                        </Stack>
                        <Stack gap={1} alignItems="center" justifyContent="space-between">
                            <Typography fontSize={4} fontWeight="bold">{product.price.toLocaleString()} ₽</Typography>
                            <Stack gap={1} className="info__stars">
                                <StarInput padding={2} height={20} width={20} disabled value={product?.product_reviews?.length ? Math.round(product?.product_reviews?.reduce((_acc, item) => {
                                    return _acc + item.stars
                                }, 0) / product?.product_reviews?.length) : 0} />
                            </Stack>
                            {!cartItems?.find(item => item.id == product.product_id) ?
                                <Button onClick={() => dispatch(addItemToCart(product.product_id))} active color="primary" padding={1} size={1}>
                                    <CartIcon width={16} height={16} />
                                </Button> :
                                <Button onClick={() => dispatch(deleteItemFromCart(product.product_id))} active padding={1} size={1}>
                                    <CartIcon width={16} height={16} />
                                </Button>
                            }
                            {!favouriteItems?.find(item => item.id == product.product_id) ?
                                <Button onClick={() => dispatch(addItemToFavourite(product.product_id))} active color="primary" padding={1} size={1}>
                                    <HeartIcon width={16} height={16} />
                                </Button> :
                                <Button onClick={() => dispatch(deleteItemFromFavourite(product.product_id))} active padding={1} size={1}>
                                    <HeartIcon width={16} height={16} />
                                </Button>
                            }

                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Card>
    )
}
