import Image from 'next/image'
import React from 'react'

export const ProductRow = () => {
    return (
        <div className="product-row">
            <div className="row">
                <div className="row-img">
                    <Image width={100} height={100} src="/img/product.png" alt="" />
                </div>
                <div className="row-info">
                    <div className="row-left">
                        <a href="#" className="row-name">Электрическая варочная поверхность DEXP 4M2CTYL/B [независимая, конфорок - 2 шт, панель - стеклокерамика, 3.2 кВт]</a>
                        <div className="row-block">
                            <div className="row-price">25 000 р</div>
                            <div className="row-stars">
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                            </div>
                        </div>
                        <div className="row-comments">Отзывов: 12 к.</div>
                    </div>
                    <div className="row-right">
                        <div className="row-actions">
                            <a href="#" className="row-cart row-action">
                                <Image width={100} height={100} src="/img/icons/cart.svg" alt="" />
                            </a>
                            <a href="#" className="row-favourite row-action">
                                <Image width={100} height={100} src="/img/icons/heart.svg" alt="" />
                            </a>
                        </div>
                        <div className="row-available">
                            В наличии: <span>в 3 магазинах</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
