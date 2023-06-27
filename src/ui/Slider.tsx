'use client';
import React, { FC, ReactNode } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
    children?: ReactNode
    className?: string
    slidesPerView?: number
}

export const Slider: FC<Props> = ({ children, className, slidesPerView }) => {

    return (
        <Swiper
            className={className || 'products-slider'}
            slidesPerView={slidesPerView || 2.1}
            spaceBetween={20}
        >
            {React.Children.map(children, (child, idx) => {
                return (
                    <SwiperSlide key={idx} className='slider-item'>
                        {child}
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

