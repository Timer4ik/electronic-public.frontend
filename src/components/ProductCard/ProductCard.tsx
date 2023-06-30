import { Button, Card, Stack, Typography } from '@/shared'
import { IProduct } from '@/types/models'
import Link from 'next/link'
import React, { FC } from 'react'
import { HeartIcon } from '../Icons/HeartIcon'
import { CartIcon } from '../Icons/CartIcon'

interface Props {
    product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {
    return (
        <Card padding={3} style={{ height: 500 }}>
            <Link href={`/product/${product.product_id}`}>
                <Stack flexDirection="column" gap={2} style={{ height: "100%" }}>
                    <Stack justifyContent="center">
                        <img height={135} src={product.file?.link} alt="" />
                    </Stack>
                    <Typography fontSize={4} style={{ flex: "1 1 auto" }}>
                        {product.name}
                    </Typography>
                    <Typography fontWeight="bold">
                        <Stack justifyContent='space-between' alignItems='center'>
                            <div>
                                {product.price.toLocaleString()} ₽
                            </div>
                        </Stack>
                    </Typography>
                    <Stack gap={1} flex='stretch-all'>
                        <Button color='light-standard' paddingX={5} size={1}>
                            <div>Купить</div>
                            <CartIcon width={15} height={15} /></Button>
                        <Button color='light-standard' padding={2} size={1}><HeartIcon width={15} height={15} /></Button>
                    </Stack>
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
            </Link>
        </Card>
    )
}
