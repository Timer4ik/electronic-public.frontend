import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ProductCard = () => {
    return (
        <div className="product-card">
            <Link href={"/product"} className="card">
                <div className="card-photo"><Image width={100} height={100} src="/img/product.png" alt="" /></div>
                <div className="card-name">
                    Электрическая варочная поверхность DEXP 4M2CTYL/B [независимая, конфорок - 2 шт, панель - стеклокерамика, 3.2 кВт]
                </div>
                <div className="card-row">
                    <div className="card-price">25 000 Р</div>
                    <div className="card-actions">
                        <div className="card-cart"></div>
                        <div className="card-favourite"></div>
                    </div>
                </div>
                <div className="card-row">
                    <div className="card-stars">
                        <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                        <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                        <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                        <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                        <Image width={100} height={100} src="/img/icons/empty-star.svg" alt="" />
                    </div>
                    <div className="card-comments">
                        Отзывов: 12к.
                    </div>
                </div>
                <div className="card-row">
                    <div className="card-available">
                        В наличии: <span>в 4 магазинах</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
