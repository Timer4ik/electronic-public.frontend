import { IProduct } from '@/types/models'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

type Props = {
    product: IProduct
}

export const ProductRow: FC<Props> = ({ product }) => {

    const availableCount = product?.shop_products?.filter(item => !item.is_sold && item.is_active).length

    return (
        <div className="product-row">
            <div className="row">
                <div className="row-img">
                    <img src={product?.file?.link} alt="" />
                </div>
                <div className="row-info">
                    <div className="row-left">
                        <Link href={`/product/${product.product_id}`} className="row-name">{product.name}</Link>
                        <div className="row-block">
                            <div className="row-price">{product.price.toLocaleString()} р</div>
                            <div className="row-stars">
                                <Image width={20} height={20} src="/img/icons/full-star.svg" alt="" />
                                <Image width={20} height={20} src="/img/icons/full-star.svg" alt="" />
                                <Image width={20} height={20} src="/img/icons/full-star.svg" alt="" />
                                <Image width={20} height={20} src="/img/icons/full-star.svg" alt="" />
                                <Image width={20} height={20} src="/img/icons/full-star.svg" alt="" />
                            </div>
                        </div>
                        <div className="row-comments">Отзывов: 12 к.</div>
                    </div>
                    <div className="row-right">
                        <div className="row-actions">
                            <a href="#" className="row-cart row-action">
                                <Image width={15} height={15} src="/img/icons/cart.svg" alt="" />
                            </a>
                            <a href="#" className="row-favourite row-action">
                                <Image width={15} height={15} src="/img/icons/heart.svg" alt="" />
                            </a>
                        </div>
                        <div className="row-available">
                            {availableCount ?
                                <>
                                    В наличии: <span>в {availableCount} магазинах</span>
                                </> :
                                <>
                                   Нет в наличии
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
