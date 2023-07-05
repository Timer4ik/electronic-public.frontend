
import React, { FC } from 'react'
import { IProduct } from '@/shared/types/models'
import { Slider } from '@/shared/ui'
import { ProductCard } from '@/entities/Product'
import { ProductCardBuyButton, ProductCardLikeButton } from '@/features/Product'

interface Props {
    products: IProduct[]
}

export const ProductCardSlider: FC<Props> = ({ products }) => {
    return (
        <Slider slidesPerView={5} >
            {products?.map(product => {
                return (
                    <ProductCard key={product.product_id} product={product} >
                        <ProductCardBuyButton product_id={product.product_id} />
                        <ProductCardLikeButton product_id={product.product_id} />
                    </ProductCard>
                )
            })}
        </Slider>
    )
}
