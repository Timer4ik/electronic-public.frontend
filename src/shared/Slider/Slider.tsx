'use client';
import React, { FC, ReactNode } from 'react'
import { Navigation, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
    children?: ReactNode
    className?: string
    slidesPerView?: number | "auto"
    style?: React.CSSProperties
    spaceBetween?:number
}

export const Slider: FC<Props> = ({ children, className, slidesPerView, style, spaceBetween }) => {

    return (
        <Swiper
            className={"slider " + className}
            scrollbar={{
                hide: false,
            }}
            slidesPerView={slidesPerView || "auto"}
            spaceBetween={spaceBetween ?? 20}
            modules={[Scrollbar, Navigation]}
            style={style}
        >
            {React.Children.map(children, (child, idx) => {
                return (
                    <SwiperSlide key={idx}>
                        {child}
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

