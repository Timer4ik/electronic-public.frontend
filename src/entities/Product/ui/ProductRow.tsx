'use client'
import { Button, Card, Checkbox, Grid, Stack, Typography } from '@/shared/ui'
import { IProduct } from '@/shared/types/models'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, ReactNode } from 'react'

interface Props {
    children?: ReactNode
    product: IProduct
}

export const ProductRow: FC<Props> = ({ product, children }) => {

    const availableCount = product?.shop_products?.filter(item => !item.is_sold && item.is_active).length

    return (
        <Card padding={3} style={{
            border: "1px solid rgb(19 54 116 / 10%)"
        }}>
            <Grid gap={2} columns='1-5'>
                <Stack>
                    <img style={{ objectFit: "contain", maxWidth: 180, maxHeight: 180, width: "100%", height: "100%" }} src={product?.file?.link} alt="" />
                </Stack>
                <Stack flexDirection='column' gap={1} flex='stretch-all'>
                    <Grid gap={1} columns='5-7'>
                        <Stack flexDirection='column' gap={2} justifyContent='space-between'>
                            <Typography >
                                <Link href={`/product/${product.product_id}`}>{product.name}</Link>
                            </Typography>
                        </Stack>
                        <Typography fontWeight='bold' fontSize={5} textAlign="right">
                            {product.price.toLocaleString()} ₽
                        </Typography>
                    </Grid>
                    <Stack
                        gap={1}
                        alignItems='center'
                    >
                        <Stack
                            // gap={1}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderRadius: "8px",
                                padding: "6px 12px",
                                border: "1px solid rgb(19 54 116 / 10%)",
                            }}
                        >
                            <Checkbox label='Сравнить' />
                        </Stack>
                        <Stack
                            // gap={1}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderRadius: "8px",
                                width: 180,
                                padding: "6px 12px",
                                border: "1px solid rgb(19 54 116 / 10%)",
                            }}
                        >
                            <Image width={18} height={16} src="/img/icons/full-star.svg" alt="" />
                            <Image width={18} height={16} src="/img/icons/full-star.svg" alt="" />
                            <Image width={18} height={16} src="/img/icons/full-star.svg" alt="" />
                            <Image width={18} height={16} src="/img/icons/full-star.svg" alt="" />
                            <Image width={18} height={16} src="/img/icons/full-star.svg" alt="" />
                            <Typography fontSize={4} >122к</Typography>
                        </Stack>
                    </Stack>
                    <Stack alignItems='flex-end' justifyContent='space-between' gap={2}>
                        <Typography fontSize={3}>
                            {availableCount ?
                                <>
                                    В наличии: <Typography fontSize={3} color='blue'>в {availableCount} магазинах</Typography>
                                </> :
                                <>
                                    Товара нет в наличии
                                </>
                            }
                        </Typography>
                        <Stack gap={1}>
                            {children}
                        </Stack>
                    </Stack>
                </Stack>

            </Grid>
        </Card>
    )
}
