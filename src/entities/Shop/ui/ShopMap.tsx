"use client"
import { fetchShops } from '@/shared/hooks/use-shops'
import { Card, Field, Grid, Stack, Typography,Slider } from '@/shared/ui'
import { IShop, ResponseData } from '@/shared/types/models'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'


type MyMapType = {
    destroy: () => void
    getCenter: () => [number, number]
    geoObjects: {
        add: (placemark: PlacemarkType) => void
    }
    balloon: any
    events: {
        add: any
    },
    setCenter: (coords: any[], zoom: number, options: {
        duration: number
    }) => void
    zoom: number
} | null

type MapType = new (id: string, options: {
    center: [number, number],
    zoom: number
    behaviors: any[]
    controls: any[]
}) => MyMapType

interface PlacemarkType {
    geometry: {
        setCoordinates: any
    }
    events: {
        add: any
    },
}

type newPlacemarkType = new (coords: any[], options1: {
    hintContent?: string
    balloonContent?: string
}, options2: {
    iconLayout?: string
    iconImageHref?: string
    iconImageSize?: [number, number]
    iconImageOffset?: [number, number]
}) => PlacemarkType

interface ymapsType {
    Map: MapType
    Placemark: newPlacemarkType
    ready: (callback: any) => void
}

declare let ymaps: ymapsType;

interface ElementWithSwiper extends Element {
    swiper: any
}

export const ShopMap = () => {

    const mapRef = useRef<MyMapType>(null)

    const [shops, setShops] = useState<ResponseData<IShop[]>>()

    useEffect(() => {

        (async () => {
            const shops = await fetchShops({
                params: {
                    extend: "file"
                }
            })
            setShops(shops)

            ymaps.ready(() => {

                mapRef.current = new ymaps.Map("map", {
                    center: [55.79649522684434, 49.105883509847985],
                    zoom: 12,
                    controls: ["zoomControl"],
                    behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]
                })

                let swiperElement = document.querySelector("#my-swiper") as ElementWithSwiper

                shops.data.forEach((shop, idx) => {
                    const placeMark = new ymaps.Placemark(shop.cords.split(","), {
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: '/img/icons/placemark.svg',
                        iconImageSize: [50, 50],
                        iconImageOffset: [-25, -25]
                    })
                    placeMark.events.add("click", function (e: any) {
                        let coords: [number, number] = e.get('coords');

                        swiperElement.swiper.slideTo(idx)

                    });

                    mapRef.current?.geoObjects.add(placeMark)
                })



            })
        })()

        return () => {
            mapRef.current?.destroy()
        }
    }, [])

    return (
        <Stack flexDirection='column' gap={3}>
            <Typography fontSize={6} fontWeight='bold'>Местоположение наших магазинов</Typography>

            <Stack flexDirection='column' gap={2} style={{ height: "850px", position: "relative" }}>
                <div id="map" style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    position: "absolute"
                }}></div>
                <Grid style={{ height: '100%', width: '100%', marginTop: "47%" }} >
                    <Slider
                        style={{ width: '100%', padding: "40px 20px" }}
                        // scrollbarHide
                        slidesPerView={3.8}
                        id="my-swiper"
                    >
                        {shops?.data.map(shop => {
                            return (
                                <Card onClick={() => {
                                    mapRef.current?.setCenter(shop.cords.split(","), mapRef.current.zoom,
                                        {
                                            duration: 200
                                        }
                                    )
                                }} key={shop.shop_id} >

                                    <Stack gap={2}>
                                        <img src={shop.file?.link} style={{ width: "100px", height: "100px", objectFit: "cover" }} alt="" />
                                        <Stack flexDirection='column' justifyContent='space-around'>
                                            <Typography fontSize={4} fontWeight='medium'>
                                                {shop.address}
                                            </Typography>
                                            <Typography fontSize={3}>
                                                Открыто с {shop.openFrom} по {shop.openTo}
                                            </Typography>
                                        </Stack>
                                    </Stack>

                                </Card>
                            )
                        })}

                    </Slider>
                </Grid>

            </Stack>
        </Stack >
    )
}
