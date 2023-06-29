import { fetchCategoryProperties } from "@/hooks/use-category-properties";
import { fetchProductById, fetchProducts } from "@/hooks/use-products";
import { Slider } from "@/shared/Slider/Slider";
import Image from "next/image";
import Link from "next/link";

interface Props {
    params: {
        id: number
    }
}

export default async function Product({ params }: Props) {

    const product = await fetchProductById(params?.id, {
        params: {
            extend: "file,product_photos.file,shop_products,product_properties.property_value,product_properties.category_property.property",
        }
    })

    const products = await fetchProducts({
        params: {
            limit: 3,
            "filter[category_id]": product.data.category_id,
            extend: "file"
        }
    })

    const availableCount = product?.data?.shop_products?.filter(item => !item.is_sold && item.is_active).length

    return (
        <div className="product-preview">

            <div className="product-preview__preview preview">
                <div className="preview__upside">
                    <div className="upside__left">
                        <div className="preview__image">
                            <img width={25} height={25} src={product.data.file?.link} alt="" />
                        </div>
                        <div className="preview__images">
                            {product?.data?.product_photos?.map(item => {
                                return (
                                    <img width={25} height={25} src={item.file?.link} alt="" />
                                )
                            })}
                        </div>
                    </div>
                    <div className="upside__right">
                        <div className="preview__info">
                            <div className="preview__title">
                                {product?.data?.name}
                            </div>
                            <div className="preview__price">
                                {product?.data?.price.toLocaleString()} ₽
                            </div>
                            <div className="preview__available">
                                {availableCount ?
                                    <>
                                        В наличии: <span>в {availableCount} магазинах</span>
                                    </> :
                                    <>
                                        Нет в наличии
                                    </>
                                }
                            </div>
                            <div className="preview__stars">
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                            </div>
                            <div className="preview__buttons">
                                <button className="preview__button">Аксесуары</button>
                                <button className="preview__button">Похожие товары</button>
                            </div>
                        </div>
                        <div className="preview__actions">
                            <a href="#" className="preview__cart preview__action">
                                <Image width={25} height={25} src="/img/icons/white-cart.svg" alt="" />
                            </a>
                            <a href="#" className="preview__favourite preview__action">
                                <Image width={25} height={25} src="/img/icons/white-heart.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="preview__bottomside">
                    <Slider className="bottomside__products" slidesPerView={2} >
                        {products.data?.map(item => {
                            return (
                                <Link href={`/product/${item.product_id}`} className="products__item item">
                                    <div className="item__img">
                                        <img width={25} height={25} src={item?.file?.link} alt="" />
                                    </div>
                                    <div className="item__info">
                                        <div className="info__name">
                                            {item.name}
                                        </div>
                                        <div className="info__row">
                                            <div className="info__price">{item.price.toLocaleString()} ₽</div>
                                            <div className="info__stars">
                                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="item__actions">
                                        <div className="preview__cart preview__action">
                                            <Image width={25} height={25} src="/img/icons/cart.svg" alt="" />
                                        </div>
                                        <div className="preview__favourite preview__action">
                                            <Image width={25} height={25} src="/img/icons/heart.svg" alt="" />
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </Slider>
                </div>
            </div>

            <div className="product-preview__description">
                <div className="description__title">Описание</div>
                <div className="description__text">
                    {product?.data?.descr}
                </div>
            </div>

            <div className="product-preview__property">
                <div className="property__title">
                    Характеристики - {product?.data.name}
                </div>
                <div className="property__list">
                    <div className="property__item">
                        <div className="property__innertitle">Заводские характеристики</div>
                        <div className="property__table">
                            {product?.data.product_property_values?.map(item => {
                                return (
                                    <div className="property__row">
                                        <div className="property__name">
                                            {item.category_property?.name || item.category_property?.property?.name}
                                        </div>
                                        <div className="property__value">{item.property_value?.name}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="property__item" style={{ padding: 50 }}>
                        <img height={300} src={product?.data?.file?.link} alt="" />
                    </div>
                </div>
            </div>

            {/* <div className="product-preview__comments">
                <div className="comments__title">
                    Отзывы
                </div>
                <div className="comments__list">
                    <div className="comments__comment">
                        <div className="comment__photo">
                            <Image width={25} height={25} src="/img/icons/user.svg" alt="" />
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
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                            </div>
                            <div className="comment__text">
                                Мне понравился этот компьютер, но были изъяны, мне привезли телефон вместо компьютера у которого не была турбинного ускорителя и ещё были тупые моменты, когда я не мог просто пользоваться с ним адекватно
                            </div>
                        </div>
                    </div>
                    <div className="comments__comment">
                        <div className="comment__photo">
                            <Image width={25} height={25} src="/img/icons/user.svg" alt="" />
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
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                            </div>
                            <div className="comment__text">
                                Мне понравился этот компьютер, но были изъяны, мне привезли телефон вместо компьютера у которого не была турбинного ускорителя и ещё были тупые моменты, когда я не мог просто пользоваться с ним адекватно
                            </div>
                        </div>
                    </div>
                    <div className="comments__comment">
                        <div className="comment__photo">
                            <Image width={25} height={25} src="/img/icons/user.svg" alt="" />
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
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                            </div>
                            <div className="comment__text">
                                Мне понравился этот компьютер, но были изъяны, мне привезли телефон вместо компьютера у которого не была турбинного ускорителя и ещё были тупые моменты, когда я не мог просто пользоваться с ним адекватно
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
