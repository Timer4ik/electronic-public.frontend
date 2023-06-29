import { fetchCategoryProperties } from "@/hooks/use-category-properties";
import { fetchProductById, fetchProducts } from "@/hooks/use-products";
import { Card, Stack, Typography } from "@/shared";
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
        <Stack flexDirection="column" gap={2}>
            <Card noPadding>
                <Stack flex="same-all">
                    <Stack padding={5} gap={2}>
                        <Stack flexDirection="column" gap={3}>
                            {product?.data?.product_photos?.map(item => {
                                return (
                                    <img style={{ minWidth: 40, minHeight: 40, width: 40, height: 40, objectFit: "contain" }}
                                        src={item.file?.link} alt="" />
                                )
                            })}
                            {product?.data?.product_photos?.map(item => {
                                return (
                                    <img style={{ minWidth: 40, minHeight: 40, width: 40, height: 40, objectFit: "contain" }}
                                        src={item.file?.link} alt="" />
                                )
                            })}
                        </Stack>
                        <Stack style={{
                        }}>
                            <img style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain"
                            }} src={product.data.file?.link} alt="" />
                        </Stack>
                    </Stack>
                    <Stack padding={5} gap={1} flexDirection="column" >
                        <Stack flexDirection="column" gap={3}>
                            <Typography fontSize={8}>
                                {product?.data?.name}
                            </Typography>
                            <Stack gap={3}>
                                <Typography fontSize={8} fontWeight="bold">
                                    {product?.data?.price.toLocaleString()} ₽
                                </Typography>
                                <Stack gap={1} alignItems="center">
                                    <Image width={38} height={35} src="/img/icons/full-star.svg" alt="" />
                                    <Image width={38} height={35} src="/img/icons/full-star.svg" alt="" />
                                    <Image width={38} height={35} src="/img/icons/full-star.svg" alt="" />
                                    <Image width={38} height={35} src="/img/icons/full-star.svg" alt="" />
                                    <Image width={38} height={35} src="/img/icons/full-star.svg" alt="" />
                                    <Typography fontSize={6} >122К.</Typography>
                                </Stack>
                            </Stack>
                            <Typography fontSize={5}>
                                {availableCount ?
                                    <>
                                        В наличии: <Typography fontSize={5} color='blue'>в {availableCount} магазинах</Typography>
                                    </> :
                                    <>
                                        Товара нет в наличии
                                    </>
                                }
                            </Typography>

                            <Stack gap={1} flex="stretch-all">
                                <Stack alignItems='center'
                                    justifyContent='center' gap={1} backgroundColor='standard'
                                    paddingY={1} paddingX={3} style={{
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        border: "1px solid rgb(19 54 116 / 55%)",
                                        color: "#133674",
                                        padding: "20px 14px"
                                    }}>
                                    <Typography fontSize={5} fontWeight="bold" >Купить</Typography>
                                    <img width={20} height={20} src="/img/icons/cart.svg" alt="" />
                                </Stack>
                                <Stack alignItems='center'
                                    justifyContent='center' gap={1} backgroundColor='standard'
                                    style={{
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        border: "1px solid rgb(19 54 116 / 55%)",
                                        color: "#133674",
                                        padding: "20px 14px"
                                    }}>
                                    <Typography fontSize={5} fontWeight="bold">Добавить в избранное</Typography>
                                    <img width={20} height={20} src="/img/icons/heart.svg" alt="" />
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack marginTop={3}>
                            <Typography fontSize={6} fontWeight="medium">Похожие товары</Typography>
                        </Stack>
                        <Slider style={{ height: "100%" }} className="bottomside__products" slidesPerView={1} >
                            {products.data?.map(item => {
                                return (
                                    <Card padding={2}>
                                        <Link style={{ height: "100%" }} href={`/product/${item.product_id}`} className="products__item item">
                                            <Stack alignItems="center" style={{ height: "100%" }} gap={2}>
                                                <div className="item__img">
                                                    <img style={{
                                                        height: 150,
                                                        width: 150,
                                                        objectFit: "contain"
                                                    }} src={item?.file?.link} alt="" />
                                                </div>
                                                <Stack flexDirection="column" gap={2}>
                                                    <Typography fontSize={5}>
                                                        {item.name}
                                                    </Typography>
                                                    <Stack gap={1}>
                                                        <Typography fontSize={5}>{item.price.toLocaleString()} ₽</Typography>
                                                        <Stack gap={1} className="info__stars">
                                                            <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                                            <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                                            <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                                            <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                                            <Image width={25} height={25} src="/img/icons/full-star.svg" alt="" />
                                                        </Stack>
                                                    </Stack>
                                                </Stack>
                                                <Stack gap={1} flexDirection="column">
                                                    <Stack
                                                        padding={1}
                                                        backgroundColor="primary"
                                                        style={{
                                                            borderRadius: 7
                                                        }}>
                                                        <img style={{ width: 15, height: 15, minWidth: 15, minHeight: 15 }} src="/img/icons/white-cart.svg" alt="" />
                                                    </Stack>
                                                    <Stack
                                                        padding={1}
                                                        backgroundColor="primary"
                                                        style={{
                                                            borderRadius: 7
                                                        }}>
                                                        <img style={{ width: 15, height: 15, minWidth: 15, minHeight: 15 }} src="/img/icons/white-heart.svg" alt="" />
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        </Link>
                                    </Card>
                                )
                            })}
                        </Slider>
                    </Stack>

                </Stack>

            </Card>

            <Stack gap={2}>
                <Stack flexDirection="column" gap={2}
                    style={{ flex:"0 0 25%" }}
                >
                    <Card >
                        <Stack flexDirection="column" gap={4}>
                            <Typography>Товар</Typography>
                            <Typography>Характеристики</Typography>
                            <Typography>Отзывы</Typography>
                            <Typography>Похожие товары</Typography>
                        </Stack>
                    </Card>
                    <Card >
                        <Stack flexDirection="column" gap={4}>
                            <Typography>Товар</Typography>
                            <Typography>Характеристики</Typography>
                            <Typography>Отзывы</Typography>
                            <Typography>Похожие товары</Typography>
                        </Stack>
                    </Card>
                    <Card >
                        <Stack flexDirection="column" gap={4}>
                            <Typography>Товар</Typography>
                            <Typography>Характеристики</Typography>
                            <Typography>Отзывы</Typography>
                            <Typography>Похожие товары</Typography>
                        </Stack>
                    </Card>
                </Stack>
                <Stack flexDirection="column" gap={2}>
                    <Card>
                        <Stack gap={1} flexDirection="column">
                            <Typography fontSize={7} fontWeight="bold">Описание</Typography>
                            <Typography style={{ lineHeight: 2.5 }}>
                                {product?.data?.descr}
                            </Typography>
                        </Stack>
                    </Card>
                    <Card>
                        <Stack flexDirection="column" gap={4}>

                            <Typography fontSize={7} fontWeight="bold">Характеристики - {product?.data.name}</Typography>

                            <Stack flex="same-all">
                                <Stack gap={1} flexDirection="column">
                                    <Typography fontSize={5} fontWeight="bold">Заводские характеристики</Typography>
                                    <Stack flexDirection="column" gap={1}>
                                        {product?.data.product_property_values?.map(item => {
                                            return (
                                                <Stack justifyContent="space-between" paddingY={2} style={{
                                                    borderBottom: "2px dotted #80808036",
                                                    width: "100%",
                                                }}>
                                                    <Typography fontWeight="medium">
                                                        {item.category_property?.name || item.category_property?.property?.name}
                                                    </Typography>
                                                    <Typography fontWeight="medium" >{item.property_value?.name}</Typography>
                                                </Stack>
                                            )
                                        })}
                                    </Stack>
                                </Stack>

                            </Stack>

                        </Stack>
                    </Card>
                    <Card>
                        <Stack gap={5} flexDirection="column">
                            <Typography fontSize={7} fontWeight="bold">Отзывы покупателей</Typography>
                            <Stack flexDirection="column" gap={5}>
                                <Stack gap={2}>
                                    <img style={{
                                        height: 60,
                                        width: 60,
                                        objectFit: "contain"
                                    }} src="/img/icons/user.svg" alt="" />
                                    <Stack flexDirection="column" gap={3}>
                                        <Stack gap={4} alignItems="center">
                                            <Typography fontSize={5} fontWeight="medium">
                                                Любовник Аделя
                                            </Typography>
                                            <Typography fontSize={3}>
                                                18 марта 2022
                                            </Typography>
                                        </Stack>
                                        <Stack gap={1}>
                                            <Image width={25} height={22} src="/img/icons/full-star.svg" alt="" />
                                            <Image width={25} height={22} src="/img/icons/full-star.svg" alt="" />
                                            <Image width={25} height={22} src="/img/icons/full-star.svg" alt="" />
                                            <Image width={25} height={22} src="/img/icons/full-star.svg" alt="" />
                                            <Image width={25} height={22} src="/img/icons/full-star.svg" alt="" />
                                        </Stack>
                                        <Typography>
                                            Мне понравился этот компьютер, но были изъяны, мне привезли телефон вместо компьютера у которого не была турбинного ускорителя и ещё были тупые моменты, когда я не мог просто пользоваться с ним адекватно
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack gap={2}>
                                    <img style={{
                                        height: 60,
                                        width: 60,
                                        objectFit: "contain"
                                    }} src="/img/icons/user.svg" alt="" />
                                    <Stack flexDirection="column" gap={3}>
                                        <Stack gap={4} alignItems="center">
                                            <Typography fontSize={5} fontWeight="medium">
                                                Любовник Аделя
                                            </Typography>
                                            <Typography fontSize={3}>
                                                18 марта 2022
                                            </Typography>
                                        </Stack>
                                        <Stack gap={1}>
                                            <Image width={25} height={22} src="/img/icons/full-star.svg" alt="" />
                                            <Image width={25} height={22} src="/img/icons/full-star.svg" alt="" />
                                            <Image width={25} height={22} src="/img/icons/full-star.svg" alt="" />
                                            <Image width={25} height={22} src="/img/icons/full-star.svg" alt="" />
                                            <Image width={25} height={22} src="/img/icons/full-star.svg" alt="" />
                                        </Stack>
                                        <Typography>
                                            Мне понравился этот компьютер, но были изъяны, мне привезли телефон вместо компьютера у которого не была турбинного ускорителя и ещё были тупые моменты, когда я не мог просто пользоваться с ним адекватно
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack gap={2}>
                                    <img style={{
                                        height: 60,
                                        width: 60,
                                        objectFit: "contain"
                                    }} src="/img/icons/user.svg" alt="" />
                                    <Stack flexDirection="column" gap={3}>
                                        <Stack gap={4} alignItems="center">
                                            <Typography fontSize={5} fontWeight="medium">
                                                Любовник Аделя
                                            </Typography>
                                            <Typography fontSize={3}>
                                                18 марта 2022
                                            </Typography>
                                        </Stack>
                                        <Stack gap={1}>
                                            <Image width={25} height={22} src="/img/icons/full-star.svg" alt="" />
                                            <Image width={25} height={22} src="/img/icons/full-star.svg" alt="" />
                                            <Image width={25} height={22} src="/img/icons/full-star.svg" alt="" />
                                            <Image width={25} height={22} src="/img/icons/full-star.svg" alt="" />
                                            <Image width={25} height={22} src="/img/icons/full-star.svg" alt="" />
                                        </Stack>
                                        <Typography>
                                            Мне понравился этот компьютер, но были изъяны, мне привезли телефон вместо компьютера у которого не была турбинного ускорителя и ещё были тупые моменты, когда я не мог просто пользоваться с ним адекватно
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Card>
                </Stack>
            </Stack>




        </Stack >
    )
}
