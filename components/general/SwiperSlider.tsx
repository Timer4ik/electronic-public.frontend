'use client'

import React, { FC } from 'react'

import { Swiper as SwiperType, Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

type SliderProps = {
    title: string
    children?: any[]
}

const SwiperSlider: FC<SliderProps> = ({ children, title }) => {
    return (
        <div className="swiper-slider">
            <h2 className='title'>{title}</h2>
            <Swiper
                spaceBetween="50"
                scrollbar={{
                    hide: false,
                }}
                slidesPerView={3}

                modules={[Scrollbar, Navigation]}
            >
                {children?.map((item, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                            {item}
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>

    )
}

export default SwiperSlider