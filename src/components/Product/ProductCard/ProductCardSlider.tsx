import { Slider } from '@/shared/Slider/Slider'
import React, { FC } from 'react'
import { ProductCard } from './ProductCard'
import { IProduct } from '@/types/models'

interface Props {
    products:IProduct[]
}

export const ProductCardSlider:FC<Props> = ({products}) => {
    return (
        <Slider slidesPerView={5} >
            {products?.map(product => {
                return (
                    <ProductCard product={product} />
                )
            })}
        </Slider>
    )
}
