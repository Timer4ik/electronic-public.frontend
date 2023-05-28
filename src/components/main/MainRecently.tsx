import { ProductCard, ProductsSlider } from '@/ui'
import React from 'react'

export const MainRecently = () => {
    return (
        <ProductsSlider titleGray='Недавние просмотренные продукты'>
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
