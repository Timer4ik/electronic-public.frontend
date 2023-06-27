'use client'

import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Grid } from "swiper";

export const ShopInfoStaff = () => {
    return (
        <div className="staff">
            <div className="staff__info info">
                <div className="title gray-text">О наших сотрудниках</div>
                <div className="info__text">С другой стороны, существующая теория обеспечивает широкому кругу (специалистов) участие в формировании как.
                    <br /><br /> Самодостаточных, так и внешне зависимых концептуальных решений.
                    <br /><br /> А ещё ключевые особенности структуры проекта лишь добавляют фракционных разногласий и описаны максимально подробно.</div>
            </div>
            <Swiper
             slidesPerView={3}
                grid={{
                    rows: 2,
                }}
                modules={[Grid]}
                spaceBetween={30}
                className="staff__slider ">
                <SwiperSlide className="slider__item">
                    <div className="slider__img">
                        <Image width={100} height={100} src="/img/shop.png" alt="" />
                    </div>
                    <div className="slider__info">
                        <div className="info__title">Тимергалиев А.И.</div>
                        <div className="info__text">Специалист по уводу вашего препода</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider__item">
                    <div className="slider__img">
                        <Image width={100} height={100} src="/img/shop.png" alt="" />
                    </div>
                    <div className="slider__info">
                        <div className="info__title">Тимергалиев А.И.</div>
                        <div className="info__text">Специалист по уводу вашего препода</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider__item">
                    <div className="slider__img">
                        <Image width={100} height={100} src="/img/shop.png" alt="" />
                    </div>
                    <div className="slider__info">
                        <div className="info__title">Тимергалиев А.И.</div>
                        <div className="info__text">Специалист по уводу вашего препода</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider__item">
                    <div className="slider__img">
                        <Image width={100} height={100} src="/img/shop.png" alt="" />
                    </div>
                    <div className="slider__info">
                        <div className="info__title">Тимергалиев А.И.</div>
                        <div className="info__text">Специалист по уводу вашего препода</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider__item">
                    <div className="slider__img">
                        <Image width={100} height={100} src="/img/shop.png" alt="" />
                    </div>
                    <div className="slider__info">
                        <div className="info__title">Тимергалиев А.И.</div>
                        <div className="info__text">Специалист по уводу вашего препода</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider__item">
                    <div className="slider__img">
                        <Image width={100} height={100} src="/img/shop.png" alt="" />
                    </div>
                    <div className="slider__info">
                        <div className="info__title">Тимергалиев А.И.</div>
                        <div className="info__text">Специалист по уводу вашего препода</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider__item">
                    <div className="slider__img">
                        <Image width={100} height={100} src="/img/shop.png" alt="" />
                    </div>
                    <div className="slider__info">
                        <div className="info__title">Тимергалиев А.И.</div>
                        <div className="info__text">Специалист по уводу вашего препода</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider__item">
                    <div className="slider__img">
                        <Image width={100} height={100} src="/img/shop.png" alt="" />
                    </div>
                    <div className="slider__info">
                        <div className="info__title">Тимергалиев А.И.</div>
                        <div className="info__text">Специалист по уводу вашего препода</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider__item">
                    <div className="slider__img">
                        <Image width={100} height={100} src="/img/shop.png" alt="" />
                    </div>
                    <div className="slider__info">
                        <div className="info__title">Тимергалиев А.И.</div>
                        <div className="info__text">Специалист по уводу вашего препода</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider__item">
                    <div className="slider__img">
                        <Image width={100} height={100} src="/img/shop.png" alt="" />
                    </div>
                    <div className="slider__info">
                        <div className="info__title">Тимергалиев А.И.</div>
                        <div className="info__text">Специалист по уводу вашего препода</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider__item">
                    <div className="slider__img">
                        <Image width={100} height={100} src="/img/shop.png" alt="" />
                    </div>
                    <div className="slider__info">
                        <div className="info__title">Тимергалиев А.И.</div>
                        <div className="info__text">Специалист по уводу вашего препода</div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div >
    )
}
