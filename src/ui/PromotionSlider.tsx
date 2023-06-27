'use client';
import React, { FC, ReactNode, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation, Scrollbar } from 'swiper';
import { ISlider } from '@/types/models';
import Link from 'next/link';

type Props = {
    sliders: ISlider[]
    children?: ReactNode
}

export const PromotionSlider: FC<Props> = ({ children, sliders }) => {

    const swiperRef = useRef<SwiperType>();

    return (
        <Swiper
            className="promotion-slider-ui"
            scrollbar={{
                hide: false,
            }}
            modules={[Scrollbar, Navigation]}
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
            }}
        >
            {sliders?.map((slider, idx) => {
                return (
                    <SwiperSlide key={idx} className="slider">
                        <div className="slider-image">
                            <img src={slider.file?.link} alt="" />
                        </div>

                        <div className="slider-content">
                            <div className="slider-title">{slider.title}</div>
                            <div className="slider-bottom">
                                <div className="slider-text">{slider.text}</div>
                                {
                                    !!slider.product_id &&
                                    <Link href={`/product/${slider.product_id}`} className="slider-button">
                                        Перейти к акции
                                    </Link>
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
            <div className="arrow left-arrow">
                <div className="arrows__left"></div>
            </div>

            <div className="arrow right-arrow">
                <div className="arrows__right"></div>
            </div>

        </Swiper>
    )
}

