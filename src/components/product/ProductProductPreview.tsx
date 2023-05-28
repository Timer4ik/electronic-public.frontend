import Image from 'next/image'
import React from 'react'

export const ProductProductPreview = () => {
    return (
        <div className="product-preview">

            <div className="product-preview__preview preview">
                <div className="preview__upside">
                    <div className="upside__left">
                        <div className="preview__image">
                            <Image width={100} height={100} src="/img/rect.png" alt="" />
                        </div>
                        <div className="preview__images">
                            <Image width={100} height={100} src="/img/rect.png" alt="" />
                            <Image width={100} height={100} src="/img/rect.png" alt="" />
                            <Image width={100} height={100} src="/img/rect.png" alt="" />
                            <Image width={100} height={100} src="/img/rect.png" alt="" />
                            <Image width={100} height={100} src="/img/rect.png" alt="" />
                            <Image width={100} height={100} src="/img/rect.png" alt="" />
                        </div>
                    </div>
                    <div className="upside__right">
                        <div className="preview__info">
                            <div className="preview__title">
                                Электрическая варочная поверхность DEXP 4M2C TYL/B [независимая, конфорок - 2 шт, панель - стеклокерамика, 3.2 кВт]
                            </div>
                            <div className="preview__price">
                                25 000 р
                            </div>
                            <div className="preview__available">
                                В наличии: <span>в 3 магазинах</span>
                            </div>
                            <div className="preview__stars">
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                            </div>
                            <div className="preview__buttons">
                                <button className="preview__button">Аксесуары</button>
                                <button className="preview__button">Похожие товары</button>
                            </div>
                        </div>
                        <div className="preview__actions">
                            <a href="#" className="preview__cart preview__action">
                                <Image width={100} height={100} src="/img/icons/white-cart.svg" alt="" />
                            </a>
                            <a href="#" className="preview__favourite preview__action">
                                <Image width={100} height={100} src="/img/icons/white-heart.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="preview__bottomside">
                    <div className="bottomside__products">
                        <div className="products__item item">
                            <div className="item__img">
                                <Image width={100} height={100} src="/img/product.png" alt="" />
                            </div>
                            <div className="item__info">
                                <div className="info__name">
                                    Электрическая варочная поверхность DEXP 4M2CTYL/B
                                </div>
                                <div className="info__row">
                                    <div className="info__price">25 000 Р</div>
                                    <div className="info__stars">
                                        <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                        <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                        <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                        <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                        <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                    </div>
                                </div>
                                <div className="info__row">
                                    <div className="info__available">В наличии: <span>в 3 магазинах</span></div>
                                    <div className="info__comments">
                                        Отзывов: 12 к.
                                    </div>
                                </div>
                            </div>
                            <div className="item__actions">
                                <a href="#" className="preview__cart preview__action">
                                    <Image width={100} height={100} src="/img/icons/cart.svg" alt="" />
                                </a>
                                <a href="#" className="preview__favourite preview__action">
                                    <Image width={100} height={100} src="/img/icons/heart.svg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="products__item item">
                            <div className="item__img">
                                <Image width={100} height={100} src="/img/product.png" alt="" />
                            </div>
                            <div className="item__info">
                                <div className="info__name">
                                    Электрическая варочная поверхность DEXP 4M2CTYL/B
                                </div>
                                <div className="info__row">
                                    <div className="info__price">25 000 Р</div>
                                    <div className="info__stars">
                                        <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                        <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                        <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                        <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                        <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                    </div>
                                </div>
                                <div className="info__row">
                                    <div className="info__available">В наличии: <span>в 3 магазинах</span></div>
                                    <div className="info__comments">
                                        Отзывов: 12 к.
                                    </div>
                                </div>
                            </div>
                            <div className="item__actions">
                                <a href="#" className="preview__cart preview__action">
                                    <Image width={100} height={100} src="/img/icons/cart.svg" alt="" />
                                </a>
                                <a href="#" className="preview__favourite preview__action">
                                    <Image width={100} height={100} src="/img/icons/heart.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-preview__description">
                <div className="description__title">Описание</div>
                <div className="description__text">&nbsp; С другой стороны, существующая теория обеспечивает широкому кругу (специалистов) участие в формировании как самодостаточных, так и внешне зависимых концептуальных решений. А ещё ключевые особенности структуры проекта лишь добавляют фракционных
                    разногласий и описаны максимально подробно.
                </div>
            </div>

            <div className="product-preview__property">
                <div className="property__title">
                    Характеристики 2 ядра 2 гига игровая видеокарта
                </div>
                <div className="property__list">
                    <div className="property__item">
                        <div className="property__innertitle">Заводские характеристики</div>
                        <div className="property__table">
                            <div className="property__row">
                                <div className="property__name">Процессор:</div>
                                <div className="property__value">Intel Adel 2g</div>
                            </div>
                            <div className="property__row">
                                <div className="property__name">Количество ядер:</div>
                                <div className="property__value">2 ядра</div>
                            </div>
                            <div className="property__row">
                                <div className="property__name">Количество гигабайт:</div>
                                <div className="property__value">2 гб</div>
                            </div>
                            <div className="property__row">
                                <div className="property__name">Количество нейронно-квантовых импульсных ускорителей:</div>
                                <div className="property__value">25 тысяч ВАТТ</div>
                            </div>
                        </div>
                    </div>
                    <div className="property__item">
                        <div className="property__innertitle">Заводские характеристики</div>
                        <div className="property__table">
                            <div className="property__row">
                                <div className="property__name">Процессор:</div>
                                <div className="property__value">Intel Adel 2g</div>
                            </div>
                            <div className="property__row">
                                <div className="property__name">Количество ядер:</div>
                                <div className="property__value">2 ядра</div>
                            </div>
                            <div className="property__row">
                                <div className="property__name">Количество гигабайт:</div>
                                <div className="property__value">2 гб</div>
                            </div>
                            <div className="property__row">
                                <div className="property__name">Количество нейронно-квантовых импульсных ускорителей:</div>
                                <div className="property__value">25 тысяч ВАТТ</div>
                            </div>
                        </div>
                    </div>
                    <div className="property__item">
                        <div className="property__innertitle">Заводские характеристики</div>
                        <div className="property__table">
                            <div className="property__row">
                                <div className="property__name">Процессор:</div>
                                <div className="property__value">Intel Adel 2g</div>
                            </div>
                            <div className="property__row">
                                <div className="property__name">Количество ядер:</div>
                                <div className="property__value">2 ядра</div>
                            </div>
                            <div className="property__row">
                                <div className="property__name">Количество гигабайт:</div>
                                <div className="property__value">2 гб</div>
                            </div>
                            <div className="property__row">
                                <div className="property__name">Количество нейронно-квантовых импульсных ускорителей:</div>
                                <div className="property__value">25 тысяч ВАТТ</div>
                            </div>
                        </div>
                    </div>
                    <div className="property__item">
                        <div className="property__innertitle">Заводские характеристики</div>
                        <div className="property__table">
                            <div className="property__row">
                                <div className="property__name">Процессор:</div>
                                <div className="property__value">Intel Adel 2g</div>
                            </div>
                            <div className="property__row">
                                <div className="property__name">Количество ядер:</div>
                                <div className="property__value">2 ядра</div>
                            </div>
                            <div className="property__row">
                                <div className="property__name">Количество гигабайт:</div>
                                <div className="property__value">2 гб</div>
                            </div>
                            <div className="property__row">
                                <div className="property__name">Количество нейронно-квантовых импульсных ускорителей:</div>
                                <div className="property__value">25 тысяч ВАТТ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-preview__comments">
                <div className="comments__title">
                    Отзывы
                </div>
                <div className="comments__list">
                    <div className="comments__comment">
                        <div className="comment__photo">
                            <Image width={100} height={100} src="/img/icons/user.svg" alt="" />
                        </div>
                        <div className="comment__inner">
                            <div className="comment__row">
                                <div className="comment__user">
                                    Любовник Аделя
                                </div>
                                <div className="comment__date">
                                    18 марта 2022
                                </div>
                            </div>
                            <div className="comment__stars">
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                            </div>
                            <div className="comment__text">
                                Мне понравился этот компьютер, но были изъяны, мне привезли телефон вместо компьютера у которого не была турбинного ускорителя и ещё были тупые моменты, когда я не мог просто пользоваться с ним адекватно
                            </div>
                        </div>
                    </div>
                    <div className="comments__comment">
                        <div className="comment__photo">
                            <Image width={100} height={100} src="/img/icons/user.svg" alt="" />
                        </div>
                        <div className="comment__inner">
                            <div className="comment__row">
                                <div className="comment__user">
                                    Любовник Аделя
                                </div>
                                <div className="comment__date">
                                    18 марта 2022
                                </div>
                            </div>
                            <div className="comment__stars">
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                            </div>
                            <div className="comment__text">
                                Мне понравился этот компьютер, но были изъяны, мне привезли телефон вместо компьютера у которого не была турбинного ускорителя и ещё были тупые моменты, когда я не мог просто пользоваться с ним адекватно
                            </div>
                        </div>
                    </div>
                    <div className="comments__comment">
                        <div className="comment__photo">
                            <Image width={100} height={100} src="/img/icons/user.svg" alt="" />
                        </div>
                        <div className="comment__inner">
                            <div className="comment__row">
                                <div className="comment__user">
                                    Любовник Аделя
                                </div>
                                <div className="comment__date">
                                    18 марта 2022
                                </div>
                            </div>
                            <div className="comment__stars">
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                                <Image width={100} height={100} src="/img/icons/full-star.svg" alt="" />
                            </div>
                            <div className="comment__text">
                                Мне понравился этот компьютер, но были изъяны, мне привезли телефон вместо компьютера у которого не была турбинного ускорителя и ещё были тупые моменты, когда я не мог просто пользоваться с ним адекватно
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
