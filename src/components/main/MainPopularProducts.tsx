import { ProductCard, ProductsSlider } from '@/ui'
import React from 'react'

export const MainPopularProducts = () => {
    return (
        <ProductsSlider title='Самые популярные продукты'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </ProductsSlider>
    )
}
