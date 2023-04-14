import Button from "@/shared/ui/Button"
import CartButton from "@/shared/ui/CartButton"
import Stars from "@/shared/ui/Stars"
import Image from "next/image"
import React, { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

type Props = {
    photo: string
    images: string[]
    title: string
    price: number
    available: number
    children?: React.ReactElement | React.ReactElement[]
}

export const ProductPreview: FC<Props> = ({ children, photo, images, title, price, available }) => {

    return (
        <div className="product__preview">
            <div className="preview__row">
                <div className="preview__gallery">
                    <div className="preview__main">
                        <Image src={photo} width={100} height={100} alt="" />
                    </div>
                    <div className="preview__etc">
                        <Swiper slidesPerView={6} spaceBetween={2}>
                            {images.map(image => (
                                <SwiperSlide>
                                    <Image src={image} width={100} height={100} alt="" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="preview__content">
                    <div className="preview__row">
                        <div className="preview__column">
                            <div className="preview__title">
                                {title}
                            </div>
                        </div>
                        <div className="preview__column actions">
                            <CartButton />
                            <CartButton />
                        </div>
                    </div>
                    <div className="preview__row">
                        <div className="preview__price">
                            {price.toLocaleString()} ₽
                        </div>
                    </div>
                    <div className="preview__row">
                        <div className="preview__available">
                            В наличии: <span>в {available.toLocaleString()} магазинах</span>
                        </div>
                    </div>
                    <div className="preview__row">
                        <Stars filledCount={5} className="preview__stars" />
                    </div>
                    <div className="preview__row">
                        <Button>Аксессуары</Button>
                        <Button>Похожие товары</Button>
                    </div>
                </div>
            </div>
            <div className="preview__row">
                {children}
            </div>
        </div>
    )
}

