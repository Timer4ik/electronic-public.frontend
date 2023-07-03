'use client'
import { ProductCartRow } from '@/components/Product/ProductCartRow/ProductCartRow'
import { fetchProducts } from '@/hooks/use-products'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { deleteItemFromFavourite } from '@/redux/slices/favouriteSlice'
import { Button, Card, Checkbox, Container, Grid, Stack, Typography } from '@/shared'
import { IProduct, ResponseData } from '@/types/models'
import React, { useEffect, useMemo, useState } from 'react'

interface IProductWithSelection extends IProduct {
    isSelected?: boolean
}

const CartPage = () => {

    const dispatch = useAppDispatch()
    const [selectAll, setSelectAll] = useState(false)
    const [orderByAsc, setOrderByAsc] = useState(true)


    const { cartItems } = useAppSelector(state => state.cart)

    const [products, setProducts] = useState<ResponseData<IProductWithSelection[]>>()

    useEffect(() => {
        (async () => {
            let prods = await fetchProducts({
                params: {
                    extend: "file",
                    "filter[product_id]": cartItems?.map(item => item.id)
                }
            })
            setProducts(prods)
        })()
    }, [cartItems])

    const toggleSelectAll = (isSelected: boolean) => {
        setProducts(
            {
                count: products?.count || 0,
                message: products?.message || "",
                data: products?.data.map(product => {
                    product.isSelected = isSelected
                    return product
                }) || []
            }
        )
    }

    const toggleSelected = (id: number) => {
        setProducts(
            {
                count: products?.count || 0,
                message: products?.message || "",
                data: products?.data.map(product => {
                    if (product.product_id == id) {
                        product.isSelected = !product?.isSelected
                    }
                    return product
                }) || []
            }
        )
    }

    const deleteSelected = () => {


        setProducts(
            {
                count: products?.count || 0,
                message: products?.message || "",
                data: products?.data.filter(product => {
                    dispatch(deleteItemFromFavourite(product.product_id))
                    return !product.isSelected
                }) || []
            }
        )
    }

    const orderedProducts = useMemo(() => {

        if (!products?.data.length)
            return []

        if (orderByAsc) {
            return [...products?.data].sort((a, b) => b.price - a.price)
        }

        if (!orderByAsc) {
            return [...products?.data].sort((a, b) => a.price - b.price)
        }

    }, [orderByAsc, products, selectAll])

    return (
        <Container>
            <Stack flexDirection='column' gap={1}>
                <Stack alignItems='center' gap={2}>
                    <Typography color='primary' fontSize={8} fontWeight='bold'>Корзина</Typography>
                    <Typography fontSize={2} fontWeight='bold'>{cartItems?.length} товаров</Typography>
                </Stack>
                {cartItems?.length ? <Grid columns='5-7' gap={1} >
                    <Stack flexDirection='column' gap={2}>
                        <Card noPadding>
                            <Stack padding={2} flexDirection='column' gap={2}>
                                <Typography fontSize={6} fontWeight='bold'>{products?.data.length} товаров на сумму: {
                                    products?.data.reduce((acc, prod) => {
                                        return prod.price + acc
                                    }, 0).toLocaleString()
                                } ₽</Typography>
                                <Stack gap={2} alignItems='center'>
                                    <Button color='only-border'>
                                        <Checkbox onChange={(e) => toggleSelectAll(e.target.checked)} label='Выбрать все' />
                                    </Button>
                                    <Button color='only-border' onClick={() => setOrderByAsc(!orderByAsc)} >
                                        <Typography fontSize={3} fontWeight='medium'>Сортировка по цене</Typography>
                                        {orderByAsc ? <img src='/img/icons/arrowDown.svg' /> : <img src='/img/icons/arrowUp.svg' />}
                                    </Button>
                                    <Button color='only-border' onClick={deleteSelected}>
                                        <Typography fontSize={3} fontWeight='medium'> Удалить выбранные</Typography>
                                    </Button>
                                </Stack>
                            </Stack>
                        </Card>
                        <Stack flexDirection='column' gap={2}>
                            {orderedProducts?.map(product => <ProductCartRow key={product.product_id} toggleSelected={toggleSelected} product={product} />)}
                        </Stack>
                    </Stack>
                    <Stack flexDirection='column' gap={2}>
                        <Card noPadding>
                            <Stack padding={5} paddingX={3} flexDirection='column' gap={3}>
                                <Typography fontSize={6} fontWeight='bold'>Условия заказа</Typography>
                                <Checkbox label='Получить со склада' />
                                {!!products?.data.filter(item => item.isSelected).length &&
                                    <Stack flexDirection='column'>
                                        <Typography color='gray' fontSize={2}>Итого:</Typography>
                                        <Stack justifyContent='space-between'>
                                            <Typography fontSize={5} fontWeight='bold'>{products?.data.filter(item => item.isSelected).length} товаров</Typography>
                                            <Typography fontSize={5} fontWeight='bold'>{products?.data.reduce((acc, prod) => {
                                                if (prod.isSelected) {
                                                    return prod.price + acc
                                                }
                                                return acc
                                            }, 0).toLocaleString()} ₽</Typography>
                                        </Stack>
                                    </Stack>}
                                {products?.data.filter(item => item.isSelected).length
                                    ?
                                    <Button color='light-standard' fontWeight='regular' size={2}>Перейти к оформлению</Button>
                                    :
                                    <Typography fontSize={4} fontWeight='medium'>Выберите товары для покупки</Typography>
                                }
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