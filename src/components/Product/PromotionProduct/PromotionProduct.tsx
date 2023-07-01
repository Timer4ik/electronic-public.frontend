'use client'

import { Button, Card, Stack, Typography } from '@/shared'
import Link from 'next/link'
import React, { FC } from 'react'
import { HeartIcon } from '../../Icons/HeartIcon'
import { CartIcon } from '../../Icons/CartIcon'
import { IProduct } from '@/types/models'
import { useCart } from '@/hooks/use-cart'
import { useFavourite } from '@/hooks/use-favourite'

interface Props {
    product: IProduct
}

export const PromotionProduct: FC<Props> = ({ product }) => {

    const { cartItems, addItemToCart, deleteItemFromCart } = useCart()
    const { favouriteItems, addItemToFavourite, deleteItemFromFavourite } = useFavourite()
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
                                <img width={15} height={15} src="/img/icons/full-star.svg" alt="" />
                                <img width={15} height={15} src="/img/icons/full-star.svg" alt="" />
                                <img width={15} height={15} src="/img/icons/full-star.svg" alt="" />
                                <img width={15} height={15} src="/img/icons/full-star.svg" alt="" />
                                <img width={15} height={15} src="/img/icons/full-star.svg" alt="" />
                            </Stack>
                            {!cartItems.find(item => item.id == product.product_id) ?
                                <Button onClick={() => addItemToCart(product.product_id)} color="light-standard" padding={1} size={1}>
                                    <CartIcon width={16} height={16} />
                                </Button> :
                                <Button onClick={() => deleteItemFromCart(product.product_id)} color="primary" padding={1} size={1}>
                                    <CartIcon width={16} height={16} />
                                </Button>
                            }
                            {!favouriteItems.find(item => item.id == product.product_id) ?
                                <Button onClick={() => addItemToFavourite(product.product_id)} color="light-standard" padding={1} size={1}>
                                    <HeartIcon width={16} height={16} />
                                </Button> :
                                <Button onClick={() => deleteItemFromFavourite(product.product_id)} color="primary" padding={1} size={1}>
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
