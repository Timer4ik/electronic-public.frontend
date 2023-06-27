import { ICategory } from '@/types/models'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

type Props = {
    category: ICategory
}

export const CategoryCard: FC<Props> = ({ category }) => {
    return (
        <div className="category-card">
            <div className="card">
                <Link href={!category.is_end ? `/categories/${category.category_id}` : `/products/${category.category_id}`} className="card-link">
                    <div className="card-img">
                        <img width={100} height={100} src={category.file?.link} alt="" />
                    </div>
                    <div className="card-title">{category.name}</div>
                </Link>
            </div>
        </div>
    )
}
