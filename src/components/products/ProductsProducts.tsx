import { ProductRow } from '@/ui'
import React from 'react'

export const ProductsProducts = () => {
    return (
        <div className="products">
            <div className="product__title big-title">Игровые компьютеры (50000 товаров)</div>
            <div className="products__list">
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
            </div>
        </div>
    )
}
