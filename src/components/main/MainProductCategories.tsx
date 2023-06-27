import { fetchCategories } from '@/hooks/use-categories'
import { CategoryCard } from '@/ui'
import React from 'react'

export const MainProductCategories = async () => {

    const categories = await fetchCategories({
        params:{
            "filter[parent_id]":0,
            "filter[is_active]":true,
            extend:"file"
        }
    })

    return (
        <div className="product__categories categories">
            <div className="title">Категории товаров</div>
            <div className="categories__blocks blocks">
                {categories?.data.map(category => {
                    return (
                        <CategoryCard key={category.category_id} category={category} />
                    )
                })}
            </div>
        </div>
    )
}
