import Image from "next/image"
import React, { FC } from "react"

type Props = {
    children?: React.ReactElement | React.ReactElement[]
}

const Main: FC<Props> = ({ children }) => {
    return (
        <div className="wrapper">
            <header className="header">
                <div className="header__up-wrapper">
                    <div className="container">
                        <div className="header__up">
                            <div className="header__city">Казань</div>
                            <div className="header__upnav">
                                <a href="#" className="upnav__item">Акции</a>
                                <a href="#" className="upnav__item">Пункты выдачи</a>
                                <a href="#" className="upnav__item">Статус заказов</a>
                                <a href="#" className="upnav__item">Обратная связь</a>
                            </div>
                            <div className="header__contact">
                                <div className="header__phone">8 (800) 555-35-35</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="header__bottom">
                        <div className="header__logo">
                            <Image src="/images/logo.png" width="190" height="59" alt="" />
                        </div>
                        <div className="header__search">
                            <input type="text" className="search-field" placeholder="Введите название продукта" />
                        </div>
                        <div className="header__bottomnav">
                            <a href="#" className="bottomnav__item">Сравнение</a>
                            <a href="#" className="bottomnav__item">Избранное</a>
                            <a href="#" className="bottomnav__item">Корзина</a>
                            <a href="#" className="bottomnav__item">Вход</a>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                <main className="main">
                    <aside className="sidebar">
                        <div className="sidebar__title">
                            <div className="button">
                                Каталог
                            </div>
                        </div>
                        <div className="sidebar__list">
                            <a href="#" className="sidebar__item">Категория</a>
                            <a href="#" className="sidebar__item">Категория</a>
                            <a href="#" className="sidebar__item">Категория</a>
                            <a href="#" className="sidebar__item">Категория</a>
                            <a href="#" className="sidebar__item">Категория</a>
                            <a href="#" className="sidebar__item">Категория</a>
                        </div>
                    </aside>
                    <div className="content">
                        Главная
                    </div>
                </main>
            </div>
            <footer className="footer">
                Футер
            </footer>
        </div>
    )
}

export default Main
