"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'


export const ShopInfoLocation = () => {

    useEffect(() => {
        ymaps.ready(function () {
            const myMap = new ymaps.Map('map', {
                center: [55.751574, 37.573856],
                zoom: 9,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            })
        });
    })

    return (
        <div className="location">
            <div className="title gray-text">Местоположение наших магазинов</div>
            <div className="location__search">
                <input type="text" placeholder="Поиск по магазинам.." />
            </div>
            <div className="location__map">
                <div id="map" className="yandex-map"></div>
                {/* <Image width={100} height={100} src="/img/map.png" alt="" /> */}
                <Swiper
                    className='map__list'
                    direction='vertical'
                    slidesPerView={2}
                >
                    <SwiperSlide className="map__item item">
                        <div className="item__img">
                            <Image width={100} height={100} src="/img/shop.png" alt="" />
                        </div>
                        <div className="item__title">
                            Казань, пр-т Ямашева, д. 46/33, TРК «Парк Хаус» Яшьлек
                        </div>
                        <div className="item__time">
                            Открыто с 12:00 по 22:00
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="map__item item">
                        <div className="item__img">
                            <Image width={100} height={100} src="/img/shop.png" alt="" />
                        </div>
                        <div className="item__title">
                            Казань, пр-т Ямашева, д. 46/33, TРК «Парк Хаус» Яшьлек
                        </div>
                        <div className="item__time">
                            Открыто с 12:00 по 22:00
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="map__item item">
                        <div className="item__img">
                            <Image width={100} height={100} src="/img/shop.png" alt="" />
                        </div>
                        <div className="item__title">
                            Казань, пр-т Ямашева, д. 46/33, TРК «Парк Хаус» Яшьлек
                        </div>
                        <div className="item__time">
                            Открыто с 12:00 по 22:00
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="map__item item">
                        <div className="item__img">
                            <Image width={100} height={100} src="/img/shop.png" alt="" />
                        </div>
                        <div className="item__title">
                            Казань, пр-т Ямашева, д. 46/33, TРК «Парк Хаус» Яшьлек
                        </div>
                        <div className="item__time">
                            Открыто с 12:00 по 22:00
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="map__item item">
                        <div className="item__img">
                            <Image width={100} height={100} src="/img/shop.png" alt="" />
                        </div>
                        <div className="item__title">
                            Казань, пр-т Ямашева, д. 46/33, TРК «Парк Хаус» Яшьлек
                        </div>
                        <div className="item__time">
                            Открыто с 12:00 по 22:00
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}
