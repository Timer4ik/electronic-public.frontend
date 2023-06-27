import { fetchCategories } from '@/hooks/use-categories'
import Link from 'next/link'
import React from 'react'

export const Aside = async () => {

    const categories = await fetchCategories({
        params:{
            "filter[parent_id]":0
        }
    })


    return (
        <aside className="sidebar">
            <nav className="sidebar__nav nav">
                <Link href={"/categories"} className="sidebar__title big-title">Каталог</Link>
                <ul className="nav__list list">
                    {categories?.data?.map(category => {
                        return (
                            <li className="list__item">
                                <Link href={"/categories/" + category.category_id}>
                                    {category.name}
                                </Link>
                            </li>
                        )
                    })}

                </ul>
            </nav>
        </aside>
    )
}
