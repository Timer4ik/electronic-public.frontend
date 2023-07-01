import { CartIcon } from '@/components/Icons/CartIcon'
import { HeartIcon } from '@/components/Icons/HeartIcon'
import { fetchProducts } from '@/hooks/use-products'
import { Button, Card, Stack, Typography } from '@/shared'
import { Slider } from '@/shared/Slider/Slider'
import { IProduct } from '@/types/models'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { ProductPreviewButtons } from './ProductPreviewButtons'
import { ProductRow } from '../ProductRow/ProductRow'

interface Props {

    product: IProduct

}

export const ProductPreview = async ({ product }:Props) => {

    const products = await fetchProducts({
        params: {
            limit: 3,
            "filter[category_id]": product.category_id,
            extend: "file"
        }
    })

    const availableCount = product?.shop_products?.filter(item => !item.is_sold && item.is_active).length

    return (
        <Card noPadding>
            <Stack flex="same-all">
                <Stack padding={5} gap={2}>
                    <Stack flexDirection="column" gap={3}>
                        {product?.product_photos?.map(item => {
                            return (
                                <img style={{ minWidth: 40, minHeight: 40, width: 40, height: 40, objectFit: "contain" }}
                                    src={item.file?.link} alt="" />
                            )
                        })}
                        {product?.product_photos?.map(item => {
                            return (
                                <img style={{ minWidth: 40, minHeight: 40, width: 40, height: 40, objectFit: "contain" }}
                                    src={item.file?.link} alt="" />
                            )
                        })}
                    </Stack>
                    <Stack style={{
                    }}>
                        <img style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain"
                        }} src={product.file?.link} alt="" />
                    </Stack>
                </Stack>
                <Stack padding={5} gap={1} flexDirection="column" >
                    <Stack flexDirection="column" gap={3}>
                        <Typography fontSize={8}>
                            {product?.name}
                        </Typography>
                        <Stack gap={3}>
                            <Typography fontSize={8} fontWeight="bold">
                                {product?.price.toLocaleString()} ₽
                            </Typography>
                            <Stack gap={1} alignItems="center">
                                <Image width={38} height={35} src="/img/icons/full-star.svg" alt="" />
                                <Image width={38} height={35} src="/img/icons/full-star.svg" alt="" />
                                <Image width={38} height={35} src="/img/icons/full-star.svg" alt="" />
                                <Image width={38} height={35} src="/img/icons/full-star.svg" alt="" />
                                <Image width={38} height={35} src="/img/icons/full-star.svg" alt="" />
                                <Typography fontSize={6} >122К.</Typography>
                            </Stack>
                        </Stack>
                        <Typography fontSize={5}>
                            {availableCount ?
                                <>
                                    В наличии: <Typography fontSize={5} color='blue'>в {availableCount} магазинах</Typography>
                                </> :
                                <>
                                    Товара нет в наличии
                                </>
                            }
                        </Typography>

                        <ProductPreviewButtons id={product.product_id}/>
                    </Stack>
                    <Stack marginTop={3}>
                        <Typography fontSize={6} fontWeight="medium">Похожие товары</Typography>
                    </Stack>
                    <Slider className="bottomside__products" slidesPerView={1} >
                        {products.data?.map(item => {
                            return (
                                <ProductRow product={item}/>
                            )
                        })}
                    </Slider>
                </Stack>

            </Stack>

        </Card>
    )
}
