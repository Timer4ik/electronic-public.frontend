import { Card, Stack, Typography } from '@/shared'
import { IProduct } from '@/types/models'
import React, { FC } from 'react'

interface Props {
    product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {
    return (
        <Card padding={3} style={{ height: 450 }}>
            <Stack flexDirection="column" gap={2} style={{ height: "100%" }}>
                <Stack justifyContent="center">
                    <img height={135} src={product.file?.link} alt="" />
                </Stack>
                <Typography fontSize={4} style={{ flex: "1 1 auto" }}>
                    {product.name}
                </Typography>
                <Typography fontWeight="bold">
                    {product.price.toLocaleString()} ₽
                </Typography>

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
        </Card>
    )
}
