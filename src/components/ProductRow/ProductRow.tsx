import { Card, Checkbox, Stack, Typography } from '@/shared'
import { IProduct } from '@/types/models'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

type Props = {
    product: IProduct
}

export const ProductRow: FC<Props> = ({ product }) => {

    const availableCount = product?.shop_products?.filter(item => !item.is_sold && item.is_active).length

    return (
        <Card padding={3} style={{
            border: "1px solid rgb(19 54 116 / 10%)"
        }}>
            <Stack gap={3} style={{ width: "100%" }}>
                <img style={{
                    height: "160px",
                    width: "160px",
                    objectFit: "contain",
                    flex: "0 0 160px"
                }} src={product?.file?.link} alt="" />
                <Stack flexDirection='column' gap={2} style={{ flex: "1 1 auto" }} justifyContent='space-between'>
                    <Typography>
                        <Link href={`/product/${product.product_id}`}>{product.name}</Link>
                    </Typography>

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


                </Stack>
                <Stack style={{ flex: "1 0 200px" }} alignItems='flex-end' justifyContent='space-between' gap={2} flexDirection='column'>
                    <Typography fontWeight='bold' fontSize={5}>
                        {product.price.toLocaleString()} ₽
                    </Typography>
                    <Stack gap={1}>
                        <Stack alignItems='center'
                            justifyContent='center' gap={1} backgroundColor='standard'
                            paddingY={1} paddingX={3} style={{
                                borderRadius: "10px",
                                cursor: "pointer",
                                border: "1px solid rgb(19 54 116 / 10%)",
                                color: "#133674",
                                padding: "10px 14px"
                            }}>
                            <Typography fontSize={4} >Купить</Typography>
                            <img width={20} height={20} src="/img/icons/cart.svg" alt="" />
                        </Stack>
                        <Stack alignItems='center'
                            justifyContent='center' gap={1} backgroundColor='standard'
                            style={{
                                borderRadius: "10px",
                                cursor: "pointer",
                                border: "1px solid rgb(19 54 116 / 10%)",
                                color: "#133674",
                                padding: "10px 14px"
                            }}>
                            <img width={20} height={20} src="/img/icons/heart.svg" alt="" />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Card>
    )
}
