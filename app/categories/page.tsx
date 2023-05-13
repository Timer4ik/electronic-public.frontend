import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div>
            <Link href="/categories/4/product">
                перейти к товару
            </Link>
            <div>Категории</div>
        </div>
    )
}
