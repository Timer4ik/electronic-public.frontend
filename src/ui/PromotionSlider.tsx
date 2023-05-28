'use client';
import Image from 'next/image'
import React, { FC, ReactElement, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation, Scrollbar } from 'swiper';

type PromotionItem = {
    imageSource: string
    title?: string
    desc?: string
    link?: string
}

type PromotionSliderProps = {
    promotions: PromotionItem[]
    buttonSlot?: ReactElement | ReactElement[] | any
    children?: React.ReactElement | React.ReactElement[]
}

export const PromotionSlider: FC<PromotionSliderProps> = ({ children, promotions, buttonSlot }) => {

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
            {promotions.map((promotion, idx) => {
                return (
                    <SwiperSlide key={idx} className="slider">
                        <div className="slider-image">
                            <Image width={100} height={100} src="/img/promotion/slider.png" alt="" />
                        </div>



                        <div className="slider-content">
                            <div className="slider-title">Адель, купи 2 компьютера, по цене 4</div>
                            <div className="slider-bottom">
                                <div className="slider-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor</div>
                                <button className="slider-button">Перейти к акции</button>
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

