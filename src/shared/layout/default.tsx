import { FC } from "react"
import Header from "../ui/Header"
import Footer from "../ui/Footer"

type Props = {
    children?: React.ReactElement | React.ReactElement[]
}

export const DefaultLayout: FC<Props> = ({
    children,
}) => {

    return (
        <div className="wrapper">
            <Header />
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
                        {children}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}
