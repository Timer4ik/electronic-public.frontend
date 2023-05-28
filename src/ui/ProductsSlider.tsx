'use client'

import React, { FC } from 'react'

import { Swiper as SwiperType, Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

type ProductsSliderProps = {
    title?: string
    titleGray?: string
    children?: any[]
}

export const ProductsSlider: FC<ProductsSliderProps> = ({ children, title, titleGray }) => {
    return (
        <div className="products-slider-ui">
            <h2 className={titleGray ? 'product-title title gray-text' : 'product-title title'}>
                {titleGray ?? title}
            </h2>

            <Swiper
                className='products-slider'
                spaceBetween="15"
                scrollbar={{
                    hide: false,
                }}
                slidesPerView={4}

                modules={[Scrollbar, Navigation]}
            >
                {children?.map((item, idx) => {
                    return (
                        <SwiperSlide className='slider-item' key={idx}>
                            {item}
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>

    )
}
