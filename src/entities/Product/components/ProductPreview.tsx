import Button from "@/shared/ui/Button"
import CartButton from "@/shared/ui/CartButton"
import Stars from "@/shared/ui/Stars"
import Image from "next/image"
import React, { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

type Props = {
    children?: React.ReactElement | React.ReactElement[]
}

export const ProductPreview: FC<Props> = ({ children }) => {

    return (
        <div className="product__preview">
            <div className="preview__row">
                <div className="preview__gallery">
                    <div className="preview__main">
                        <Image src="/images/product.png" width={100} height={100} alt="" />
                    </div>
                    <div className="preview__etc">
                        <Image src="/images/product.png" width={100} height={100} alt="" />
                        <Image src="/images/product.png" width={100} height={100} alt="" />
                        <Image src="/images/product.png" width={100} height={100} alt="" />
                        <Image src="/images/product.png" width={100} height={100} alt="" />
                        <Image src="/images/product.png" width={100} height={100} alt="" />
                        <Image src="/images/product.png" width={100} height={100} alt="" />
                    </div>
                </div>
                <div className="preview__content">
                    <div className="preview__row">
                        <div className="preview__column">
                            <div className="preview__title">
                                Электрическая варочная поверхность DEXP 4M2C      TYL/B [независимая, конфорок -       2 шт, панель - стеклокерамика, 3.2 кВт]
                            </div>
                        </div>
                        <div className="preview__column actions">
                            <CartButton />
                            <CartButton />
                        </div>
                    </div>
                    <div className="preview__row">
                        <div className="preview__price">
                            25 000 ₽
                        </div>
                    </div>
                    <div className="preview__row">
                        <div className="preview__available">
                            В наличии: <span>в 3 магазинах</span>
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

