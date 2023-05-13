import React from 'react'
import SwiperSlider from '../general/SwiperSlider'
import { ProductCard } from '../general/Product'
import { CartButton } from '@/ui'

type Props = {
    title: string
    price: number
    availableCount: number
    feedbackCount: number
    filledCount: number
    children?: React.ReactElement | React.ReactElement[]
    actionButtons: React.ReactElement[] | React.ReactElement
}

export const PopularProducts = () => {

    const data: Props = {
        title: "Здесь должно быть огромное название продукта с минимальным характеристиками",
        availableCount: 20,
        feedbackCount: 12000,
        price: 7200,
        filledCount: 3.5,
        actionButtons: <>
            <CartButton />
            <CartButton />
        </>
    }

    return (
        <SwiperSlider title="Самые популярные товары">
            <ProductCard {...data} />
            <ProductCard {...data} />
            <ProductCard {...data} />
            <ProductCard {...data} />
            <ProductCard {...data} />
            <ProductCard {...data} />
        </SwiperSlider>
    )
}
