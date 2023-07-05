import React, { FC } from 'react'
import { IProduct } from '@/shared/types/models'
import { Slider } from '@/shared/ui'
import { PromotionProduct } from '@/entities/Product'

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
