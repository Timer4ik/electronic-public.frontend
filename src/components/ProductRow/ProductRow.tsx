import { Button, Card, Checkbox, Stack, Typography } from '@/shared'
import { IProduct } from '@/types/models'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { CartIcon } from '../Icons/CartIcon'
import { HeartIcon } from '../Icons/HeartIcon'

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
                        <Button color='light-standard' fontWeight='medium'>
                            <Typography fontSize={4} >Купить</Typography>
                            <CartIcon/>
                        </Button>
                        <Button color='light-standard' fontWeight='medium' padding={2} paddingY={2}>
                            <HeartIcon/>
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Card>
    )
}
