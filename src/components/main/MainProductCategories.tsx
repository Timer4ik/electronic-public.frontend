import { CategoryCard } from '@/ui'
import React from 'react'

export const MainProductCategories = () => {
    return (
        <div className="product__categories categories">
            <div className="title">Категории товаров</div>
            <div className="categories__blocks blocks">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </div>
    )
}
