import { ProductPreview } from "@/entities/Product";
import { StarInput } from "@/features/Product";
import { fetchCategoryBreadCrumps } from "@/shared/hooks/use-categories";
import { fetchProductById } from "@/shared/hooks/use-products";
import { Card, Grid, Stack, Typography } from "@/shared/ui";
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
            extend: "product_reviews.user,file,product_photos.file,shop_products,product_properties.property_value,product_properties.category_property.property",
        }
    })

    const breadCrumps = await fetchCategoryBreadCrumps(product.data.category_id)

    return (
        <Stack flexDirection="column" gap={2}>
            <Stack>
                <pre>
                    <Typography fontSize={3}>
                        <Link href={`/categories`}>
                            Каталог
                        </Link>
                    </Typography>
                    {breadCrumps.data.map((item) => {
                        return (
                            <Typography fontSize={3} key={item.category_id}>
                                <Link href={`/categories/${item.category_id}`}>
                                    {" > " + item.name}
                                </Link>
                            </Typography>
                        )
                    })}
                    <Typography fontSize={3}>
                        <Link href={`/products/${breadCrumps.lastCategory?.category_id}`}>
                            {" > " + breadCrumps.lastCategory?.name}
                        </Link>
                    </Typography>
                    <Typography fontWeight="bold" fontSize={4}>
                        {" > " + product.data.name}
                    </Typography>
                </pre>
            </Stack>

            {/* @ts-expect-error Async Server Component */}
            <ProductPreview product={product.data} />

            <Grid  gap={2}>
                {/* <Stack flexDirection="column" gap={2}>
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
                </Stack> */}
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
                                                <Stack key={item.product_property_value_id} justifyContent="space-between" paddingY={2} style={{
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
                                {
                                    product.data.product_reviews?.map(review => {
                                        return (
                                            <Stack gap={2}>
                                                <img style={{
                                                    height: 60,
                                                    width: 60,
                                                    objectFit: "contain"
                                                }} src="/img/icons/user.svg" alt="" />
                                                <Stack flexDirection="column" gap={2}>
                                                    <Stack gap={3} alignItems="center">
                                                        <Typography fontSize={5} fontWeight="medium">
                                                            {review.user?.name}
                                                        </Typography>
                                                        <Typography fontSize={3}>
                                                            {!!review?.createdAt && new Date(review?.createdAt).toLocaleDateString()}
                                                        </Typography>
                                                    </Stack>
                                                    <StarInput width={16} height={20} disabled value={review.stars} />
                                                    <Typography>
                                                        {review.comment}
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                        )
                                    })
                                }



                            </Stack>
                        </Stack>
                    </Card>
                </Stack>
            </Grid>




        </Stack >
    )
}