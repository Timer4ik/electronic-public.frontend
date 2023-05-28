import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const CategoryCard = () => {
    return (
        <div className="category-card">
            <div className="card">
                <Link href="/categories/123" className="card-link">
                    <div className="card-img">
                        <Image width={100} height={100} src="/img/product.png" alt="" />
                    </div>
                    <div className="card-title">Компьютеры</div>
                    <div className="card-row">
                        <div className="card-price">От 25 000 Р</div>
                        <div className="card-amount">1 275 товаров</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
