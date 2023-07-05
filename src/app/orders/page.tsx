'use client'
import { fetchOrders } from '@/shared/hooks/use-order'
import { fetchProducts } from '@/shared/hooks/use-products'
import { Button, Card, Checkbox, Container, Field, Grid, Stack, Textarea, Typography,Slider } from '@/shared/ui'
import { IOrder, IProduct, ResponseData } from '@/shared/types/models'
import React, { useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/shared/redux/hooks'
import { ProductRow } from '@/entities/Product'

interface IProductWithSelection extends IProduct {
    isSelected?: boolean
}

const FavouritePage = () => {

    const dispatch = useAppDispatch()
    const { token } = useAppSelector(state => state.auth)

    const [orders, setOrders] = useState<ResponseData<IOrder[]>>()

    useEffect(() => {
        if (!token) {
            return
        }
        (async () => {
            let prods = await fetchOrders({
                params: {
                    extend: "order_products.product.file,payment_method,get_method"
                },
                headers: {
                    Authorization: "Bearear " + token
                }
            })
            setOrders(prods)
        })()
    }, [token])

    return (
        <Container>
            <Stack flexDirection='column' gap={1}>
                <Stack alignItems='center' gap={2}>
                    <Typography color='primary' fontSize={8} fontWeight='bold'>Мои заказы</Typography>
                </Stack>
                {orders?.data?.length ? <Grid gap={1} >
                    <Stack flexDirection='column' gap={2}>
                        {orders.data?.map(order => {
                            return (
                                <Card>
                                    <Stack flexDirection='column' gap={3}>
                                        <Grid columns='1-5' gap={5}>
                                            <Stack flexDirection='column' gap={2} justifyContent='space-around'>
                                                <Stack gap={1} alignItems='center'>
                                                    <Typography fontWeight='bold' fontSize={4}> Заказ А-{order.order_id}</Typography> <Typography fontWeight='regular'>от {new Date(order?.createdAt || "").toLocaleDateString()}</Typography>
                                                </Stack>
                                                <Stack gap={1} alignItems='center'>
                                                    <Typography fontSize={4}>Итого:</Typography>
                                                    <Typography fontSize={5} fontWeight='bold'>{order.order_products?.reduce((_acc, item) => {
                                                        return _acc + (item?.product?.price || 0)
                                                    }, 0).toLocaleString()} ₽</Typography>
                                                </Stack>
                                                <Stack gap={1} alignItems='center'>
                                                    <Typography fontSize={3}>Товаров {order.order_products?.length} шт.</Typography>
                                                </Stack>
                                                <Stack gap={1}>
                                                    <Button size={1} active>{order.payment_method?.name}</Button>
                                                    <Button size={1} active>{order.get_method?.name}</Button>
                                                </Stack>
                                            </Stack>
                                            {!!order?.order_products?.length &&
                                                <Slider slidesPerView={1} style={{ padding: 0 }} direction='horizontal'>
                                                    {order.order_products?.map(item => {
                                                        return !!item.product && (
                                                            <ProductRow key={item.product_id} product={item.product} />
                                                        )
                                                    })}
                                                </Slider>}
                                        </Grid>
                                    </Stack>
                                </Card>
                            )
                        })}
                    </Stack>
                </Grid> :
                    <Card>
                        <Typography fontSize={6} fontWeight='medium'>Заказы отсутствуют</Typography>
                    </Card>
                }
            </Stack>
        </Container>
    )
}

export default FavouritePage