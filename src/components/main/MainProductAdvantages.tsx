import Image from 'next/image'
import React from 'react'

export const MainProductAdvantages = () => {
    return (
        <div className="advantages">
            <div className="title">Наши преимущества перед другими магазинами</div>
            <div className="advantages__list list">
                <div className="list__item">
                    <div className="item__img">
                        <Image width={100} height={100} src="/img/product.png" alt="" />
                    </div>
                    <div className="item__column">
                        <div className="item__title">Доступность</div>
                        <div className="item__text">Более 250 точек открыто к сегодняшнему дню и ещё 13 планируется в этом месяце</div>
                    </div>
                </div>
                <div className="list__item">
                    <div className="item__img">
                        <Image width={100} height={100} src="/img/product.png" alt="" />
                    </div>
                    <div className="item__column">
                        <div className="item__title">Доступность</div>
                        <div className="item__text">Более 250 точек открыто к сегодняшнему дню и ещё 13 планируется в этом месяце</div>
                    </div>
                </div>
                <div className="list__item">
                    <div className="item__img">
                        <Image width={100} height={100} src="/img/product.png" alt="" />
                    </div>
                    <div className="item__column">
                        <div className="item__title">Доступность</div>
                        <div className="item__text">Более 250 точек открыто к сегодняшнему дню и ещё 13 планируется в этом месяце</div>
                    </div>
                </div>
                <div className="list__item">
                    <div className="item__img">
                        <Image width={100} height={100} src="/img/product.png" alt="" />
                    </div>
                    <div className="item__column">
                        <div className="item__title">Доступность</div>
                        <div className="item__text">Более 250 точек открыто к сегодняшнему дню и ещё 13 планируется в этом месяце</div>
                    </div>
                </div>
                <div className="list__item">
                    <div className="item__img">
                        <Image width={100} height={100} src="/img/product.png" alt="" />
                    </div>
                    <div className="item__column">
                        <div className="item__title">Доступность</div>
                        <div className="item__text">Более 250 точек открыто к сегодняшнему дню и ещё 13 планируется в этом месяце</div>
                    </div>
                </div>
                <div className="list__item">
                    <div className="item__img">
                        <Image width={100} height={100} src="/img/product.png" alt="" />
                    </div>
                    <div className="item__column">
                        <div className="item__title">Доступность</div>
                        <div className="item__text">Более 250 точек открыто к сегодняшнему дню и ещё 13 планируется в этом месяце</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
