'use client'
import { Card, Grid, Stack, Typography } from '@/shared/ui'
import { IProduct } from '@/shared/types/models'
import Link from 'next/link'
import React, { FC, ReactNode } from 'react'
import { StarInput } from '@/features/Product'

interface Props {
    product: IProduct
    children?: ReactNode
}

export const ProductCard: FC<Props> = ({ product, children }) => {

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
                        {children}
                    </Grid>
                    <Stack justifyContent="space-between" alignItems="center">
                        <Stack>
                            <StarInput padding={0} height={20} width={20} disabled value={product?.product_reviews?.length ? Math.round(product?.product_reviews?.reduce((_acc, item) => {
                                return _acc + item.stars
                            }, 0) / product?.product_reviews?.length) : 0} />
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
