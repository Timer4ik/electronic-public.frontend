import { Slider } from '@/shared/Slider/Slider'
import React, { FC } from 'react'
import { IProduct } from '@/types/models'
import { PromotionProduct } from './PromotionProduct'

interface Props {
    products:IProduct[]
}

export const PromotionProductSlider:FC<Props> = ({products}) => {
    return (
        <Slider className="bottomside__products" slidesPerView={1} >
            {products?.map(item => <PromotionProduct key={item.product_id} product={item} />)}
        </Slider>
    )
}
