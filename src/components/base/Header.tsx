import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="header__city">Казань</div>
                    <nav className="header__nav nav">
                        <ul className="nav__list list">
                            <li className="list__item">
                                <Link href={"/shop-info"}> О нас</Link></li>
                            <li className="list__item">
                                <Link href={"/shop-info"}> Наши магазины</Link></li>
                            <li className="list__item">
                                <Link href={""}> Статус заказа</Link></li>
                            <li className="list__item">
                                <Link href={""}> Обратная связь</Link></li>
                        </ul>
                    </nav>
                    <a href="tel:+79520481728" className="header__phone">8 (800) 555-35-35</a>
                </div>
            </div>
            <div className="header__bottom bottom">
                <div className="container">
                    <div className="bottom__left">
                        <div className="header__logo">
                            <Link href={"/"}>
                                <img  src="/img/header/logo.svg" alt="" />
                            </Link>
                        </div>
                        <div className="header__search">
                            <input type="text" placeholder="Найти товар" />
                        </div>
                    </div>
                    <div className="bottom__right">
                        <nav className="header__auth auth">
                            <ul className="auth__list">
                                <li className="list__item"><a href="#">Сравнение</a></li>
                                <li className="list__item"><a href="#">Избранное</a></li>
                                <li className="list__item"><a href="#">Корзина</a></li>
                                <li className="list__item"><a href="#">Вход</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
