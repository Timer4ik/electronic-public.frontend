'use client';
import React, { FC } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { ProductPreview, ProductSmallCard } from '../general/Product';

type Props = {
    title: string
    price: number
    availableCount: number
    feedbackCount: number
    filledCount: number
    children?: React.ReactElement | React.ReactElement[]
    actionButtons: React.ReactElement[] | React.ReactElement
}

const HomeProductPreview: FC<{ data: Props }> = ({ data }) => {
    return (
        <ProductPreview
            photo="/images/product.png"
            images={[
                "/images/product.png",
                "/images/product.png",
                "/images/product.png",
                "/images/product.png",
                "/images/product.png",
                "/images/product.png",
                "/images/product.png",
            ]}
            available={4545}
            price={5400}
            title='Электрическая варочная поверхность DEXP 4M2C      TYL/B [независимая, конфорок -       2 шт, панель - стеклокерамика, 3.2 кВт]'
        >
            <Swiper slidesPerView={2} spaceBetween={16}>
                <SwiperSlide>
                    <ProductSmallCard {...data} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductSmallCard {...data} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductSmallCard {...data} />
                </SwiperSlide>
            </Swiper>
        </ProductPreview>
    )
}

HomeProductPreview.propTypes = {}

export default HomeProductPreview