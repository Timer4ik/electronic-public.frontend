import { fetchProducts } from '@/hooks/use-products'
import { ProductCard, ProductsSlider } from '@/ui'
import React from 'react'


export const MainPopularProducts = async () => {

    const products = await fetchProducts({
        params: {
            limit: 10,
            extend:"file",
            "filter[is_active]":true
        }
    })

    return (
        <ProductsSlider title='Самые популярные продукты'>
            {products?.data?.map(product => {
                return <ProductCard product={product}/>
            })}
        </ProductsSlider>
    )
}
