import React, { FC } from 'react'
import { CategoryBlock } from './CategoryBlock'


interface Category {
    href: string
    title: string
    minPrice: number
    available: number
    photo: string
}

type Props = {
    title: string
    children?: any[]
}

export const CategoryList: FC<Props> = ({ children, title }) => {

    const categories: Category[] = [
        {
            available: 1544,
            photo: '/images/product.png',
            href: "",
            title: 'Название',
            minPrice: 2000
        },
        {
            available: 1544,
            photo: '/images/product.png',
            href: "",
            title: 'Название',
            minPrice: 2000
        },
        {
            available: 1544,
            photo: '/images/product.png',
            href: "",
            title: 'Название',
            minPrice: 2000
        },
        {
            available: 1544,
            photo: '/images/product.png',
            href: "",
            title: 'Название',
            minPrice: 2000
        },
    ]

    return (
        <div className="categories">
            <h2 className="title">{title}</h2>
            <div className="category__list">
                {categories.map((cat, idx) => {
                    return (
                        <CategoryBlock {...cat} />
                    )
                })}
            </div>
        </div>
    )
}
