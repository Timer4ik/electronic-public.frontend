'use client'
import { ProductCartRow } from '@/components/Product/ProductCartRow/ProductCartRow'
import { fetchProducts } from '@/hooks/use-products'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { Button, Card, Checkbox, Container, Grid, Stack, Typography } from '@/shared'
import { IProduct, ResponseData } from '@/types/models'
import React, { useEffect, useState } from 'react'


const CartPage = () => {

    const { cartItems } = useAppSelector(state => state.cart)

    const [products, setProducts] = useState<ResponseData<IProduct[]>>()

    useEffect(() => {
        (async () => {
            let prods = await fetchProducts({
                params: {
                    extend: "file",
                    "filter[product_id]": cartItems.map(item => item.id)
                }
            })
            setProducts(prods)
        })()
    }, [cartItems])

    return (
        <Container>
            <Stack flexDirection='column' gap={1}>
                <Stack alignItems='center' gap={2}>
                    <Typography color='primary' fontSize={8} fontWeight='bold'>Корзина</Typography>
                    <Typography fontSize={2} fontWeight='bold'>{cartItems.length} товаров</Typography>
                </Stack>
                {cartItems.length ? <Grid columns='5-7' gap={5} >
                    <Stack flexDirection='column' gap={2}>
                        <Card noPadding>
                            <Stack padding={2} flexDirection='column' gap={3}>
                                <Checkbox label='Выбрать все' />
                            </Stack>
                        </Card>
                        <Stack flexDirection='column' gap={2}>
                            {products?.data.map(product => <ProductCartRow product={product} />)}
                        </Stack>
                    </Stack>
                    <Stack flexDirection='column' gap={2}>
                        <Card noPadding>
                            <Stack padding={5} paddingX={3} flexDirection='column' gap={3}>
                                <Typography fontSize={6} fontWeight='bold'>Условия заказа</Typography>
                                <Checkbox label='Получить со склада' />
                                <Stack flexDirection='column'>
                                    <Typography color='gray' fontSize={2}>Итого:</Typography>
                                    <Stack justifyContent='space-between'>
                                        <Typography fontSize={5} fontWeight='bold'>5 товаров</Typography>
                                        <Typography fontSize={5} fontWeight='bold'>378 295 ₽</Typography>
                                    </Stack>
                                </Stack>
                                <Button color='light-standard' fontWeight='regular' size={2}>Перейти к оформлению</Button>
                            </Stack>
                        </Card>
                    </Stack>
                </Grid> :
                    <Card>
                        <Typography fontSize={7} fontWeight='medium'>Товаров в корзине нет</Typography>
                    </Card>
                }
            </Stack>
        </Container>
    )
}

export default CartPage