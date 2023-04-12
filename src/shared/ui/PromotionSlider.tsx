import Image from "next/image";
import React, { FC, useCallback, useRef } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation, Scrollbar } from 'swiper';


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useRouter } from "next/router";


type PromotionItem = {
    imageSource: string
    title?: string
    desc?: string
    buttonLink?: any
}

type PromotionSliderProps = {
    promotions: PromotionItem[]
    children?: React.ReactElement | React.ReactElement[]
}

export const PromotionSlider: FC<PromotionSliderProps> = ({ children, promotions }) => {

    const swiperRef = useRef<SwiperType>();
    const router = useRouter()

    return (
        <div className="promotion-slider">
            <Swiper
                scrollbar={{
                    hide: false,
                }}
                modules={[Scrollbar, Navigation]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {promotions.map(promotion => {
                    return (
                        <SwiperSlide>
                            <Image className="promotion-image" src={promotion.imageSource} width="1280" height="720" alt="" />
                            <div className="promotion-content">
                                <div className="promotion__left">
                                    {promotion.title ? <h5 className="promotion__title">{promotion.title}</h5> : null}
                                    {promotion.desc ? <div className="promotion__desc">{promotion.desc}</div> : null}
                                </div>
                                {promotion.buttonLink ? <button className="promotion__button" type="button" onClick={() => router.push(promotion.buttonLink)}>
                                    Перейти
                                </button> : null}
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className="promotion-nav">
                <div className="promotion-left" onClick={() => swiperRef.current?.slidePrev()}>
                    <Image src="/images/left-nav.svg" width="50" height="50" alt="" />
                </div>
                <div className="promotion-right" onClick={() => swiperRef.current?.slideNext()}>
                    <Image src="/images/right-nav.svg" width="50" height="50" alt="" />
                </div>
            </div>
        </div>
    )
}



