import { IProduct } from '@/types/models'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
interface Props {
    product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {
    return (
        <div className="product-card">
            <Link href={`/product/${product.product_id}`} className="card">
                <div className="card-photo">
                    {product.file && <img src={product.file.link} alt="" />}
                </div>
                <div className="card-name">
                    {product.name}
                </div>
                <div className="card-row">
                    <div className="card-price">{product.price.toLocaleString()} ₽</div>
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
