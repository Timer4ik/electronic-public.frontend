import React from 'react'
import { CategoryCard } from '@/ui'

export const CategoriesProductCategories = () => {
    return (
        <div className="product__categories categories">
            <div className="big-title">Категории</div>
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
