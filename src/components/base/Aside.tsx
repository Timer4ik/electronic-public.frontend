import Link from 'next/link'
import React from 'react'

export const Aside = () => {
    return (
        <aside className="sidebar">
            <nav className="sidebar__nav nav">
                <div className="big-title">Каталог</div>
                <ul className="nav__list list">
                    <li className="list__item"><Link href={"/categories"}>Категория</Link></li>
                    <li className="list__item"><Link href={"/categories"}>Категория</Link></li>
                    <li className="list__item"><Link href={"/categories"}>Категория</Link></li>
                    <li className="list__item"><Link href={"/categories"}>Категория</Link></li>
                    <li className="list__item"><Link href={"/categories"}>Категория</Link></li>
                    <li className="list__item"><Link href={"/categories"}>Категория</Link></li>
                    <li className="list__item"><Link href={"/categories"}>Категория</Link></li>
                </ul>
            </nav>
        </aside>
    )
}
