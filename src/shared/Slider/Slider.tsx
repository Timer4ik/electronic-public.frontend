'use client';
import React, { FC, ReactNode, forwardRef, useEffect, useState } from 'react'
import { Navigation, Scrollbar } from 'swiper';

import { Swiper, SwiperRef, SwiperSlide, useSwiper, SwiperProps } from 'swiper/react';

interface Props extends SwiperProps {
    children?: ReactNode
    className?: string
    slidesPerView?: number | "auto"
    style?: React.CSSProperties
    spaceBetween?: number
    scrollbarHide?: boolean
}

export const Slider: FC<Props> = ({ children, scrollbarHide, className, slidesPerView, style, spaceBetween, ...props }) => {

    return (
        <Swiper
            className={"slider " + className}
            scrollbar={{
                hide: scrollbarHide || false,
            }}
            slidesPerView={slidesPerView || "auto"}
            spaceBetween={spaceBetween ?? 20}
            modules={[Scrollbar, Navigation]}
            style={style}
            {...props}
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

