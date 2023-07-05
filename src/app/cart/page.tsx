'use client'
import { fetchReceiveMethods } from '@/shared/hooks/use-get-method'
import { addOrderProduct, createOrder } from '@/shared/hooks/use-order'
import { fetchPaymentMethods } from '@/shared/hooks/use-payment-method'
import { fetchProducts } from '@/shared/hooks/use-products'
import { Button, Card, Checkbox, Container, Field, Grid, Select, Stack, Typography } from '@/shared/ui'
import { GetMethod, IProduct, PaymentMethod, ResponseData } from '@/shared/types/models'
import React, { useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/shared/redux/hooks'
import { clearCart, clearCartItems, deleteItemFromCart } from '@/shared/redux/slices/cartSlice'
import { ProductCheckboxRow } from '@/entities/Product/ui/ProductCheckboxRow'
import { ProductRowBuyButton, ProductRowLikeButton } from '@/features/Product'

interface IProductWithSelection extends IProduct {
    isSelected?: boolean
}

const CartPage = () => {

    const dispatch = useAppDispatch()
    const [selectAll, setSelectAll] = useState(false)
    const [orderByAsc, setOrderByAsc] = useState(true)

    const { cartItems } = useAppSelector(state => state.cart)

    const [products, setProducts] = useState<ResponseData<IProductWithSelection[]> | null>({
        count: 0,
        data: [],
        message: ""
    })

    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const [receiveMethods, setReceiveMethods] = useState<GetMethod[]>()
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>()

    const [activeReceiveMethod, setActiveReceiveMethod] = useState<GetMethod>()
    const [activePaymentMethod, setActivePaymentMethod] = useState<PaymentMethod>()

    const { user_id } = useAppSelector(state => state.auth)


    useEffect(() => {
        (async () => {

            let _receiveMethods = await fetchReceiveMethods({})
            let _paymentMethods = await fetchPaymentMethods({})

            let prods = await fetchProducts({
                params: {
                    extend: "file",
                    "filter[product_id]": cartItems?.map(item => item.id)
                }
            })
            setReceiveMethods(_receiveMethods.data)
            setPaymentMethods(_paymentMethods.data)
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
                    dispatch(deleteItemFromCart(product.product_id))
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

    const handleOrderCreate = async () => {

        if (!user_id) return

        let selectedProducts = products?.data.filter(item => item.isSelected)
        
        if (!selectedProducts?.length) {
            return
        }

        const order = await createOrder({
            address: "123",
            email: "123",
            get_method_id: activeReceiveMethod?.get_method_id || 0,
            payment_method_id: activePaymentMethod?.payment_method_id || 0,
            phone,
            status_id: 1,
            user_id: user_id
        })


        for (let i = 0; i < selectedProducts.length; i++) {
            await addOrderProduct({
                amount: 1,
                order_id: order.data.order_id,
                product_id: selectedProducts[i].product_id,
            })

        }

        dispatch(clearCartItems(selectedProducts.map(i => i.product_id)))

        // setProducts({
        //     count: products?.count || 0,
        //     message: products?.message || "",
        //     data: products?.data.filter(item => !item.isSelected) || []
        // })

    }

    return (
        <Container>
            <Stack flexDirection='column' gap={1}>
                <Stack alignItems='center' gap={2}>
                    <Typography color='primary' fontSize={8} fontWeight='bold'>Корзина</Typography>
                    <Typography fontSize={2} fontWeight='bold'>{cartItems?.length} товаров</Typography>
                </Stack>
                {cartItems?.length ? <Grid columns='2-3' gap={1} >
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
                            {orderedProducts?.map(product =>
                                <ProductCheckboxRow key={product.product_id} toggleSelected={toggleSelected} product={product} >
                                    <ProductRowBuyButton product_id={product.product_id} />
                                    <ProductRowLikeButton product_id={product.product_id} />
                                </ProductCheckboxRow>
                            )}
                        </Stack>
                    </Stack>
                    <Stack flexDirection='column' gap={2}>
                        <Card noPadding>
                            <Stack padding={5} paddingX={3} flexDirection='column' gap={3}>
                                <Typography fontSize={7} fontWeight='bold'>Условия заказа</Typography>

                                <Checkbox label='Получить со склада' />

                                {orderedProducts?.filter(item => item.isSelected).length
                                    ?
                                    <Stack flexDirection='column' gap={3}>
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
                                        </Stack>
                                        <Typography fontSize={7} fontWeight='bold'>Оформление заказа</Typography>
                                        <Stack gap={4} flexDirection='column'>
                                            <Stack flexDirection='column' gap={2}>
                                                <Typography fontSize={4}>Номер телефона*</Typography>
                                                <Field value={phone} onChange={(e) => setPhone(e.target.value)} />
                                            </Stack>
                                            <Stack flexDirection='column' gap={2}>
                                                <Typography fontSize={4}>E-mail</Typography>
                                                <Field />
                                            </Stack>
                                            <Stack gap={3} flexDirection='column'>
                                                <Stack flexDirection='column' gap={2}>
                                                    <Typography fontSize={4}>Выберите способ получения*</Typography>
                                                    <Stack gap={3} flex='same-all'>
                                                        {receiveMethods?.map(method => {
                                                            return <Button
                                                                onClick={() => setActiveReceiveMethod(method)}
                                                                active={method.get_method_id === activeReceiveMethod?.get_method_id} color='light-standard'>
                                                                {method.name}
                                                            </Button>
                                                        })}
                                                    </Stack>
                                                </Stack>
                                                <Stack flexDirection='column' gap={2}>
                                                    <Typography fontSize={4}>Выберите способ оплаты*</Typography>
                                                    <Stack gap={3} flex='same-all'>
                                                        {paymentMethods?.map(method => {
                                                            return <Button
                                                                onClick={() => setActivePaymentMethod(method)}
                                                                active={method.payment_method_id === activePaymentMethod?.payment_method_id} color='light-standard'>
                                                                {method.name}
                                                            </Button>
                                                        })}
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                        {!!activePaymentMethod && !!activeReceiveMethod && !!phone && <Stack>
                                            <Button onClick={handleOrderCreate} size={2} fontWeight='medium' color='standard'>Оформить заказ</Button>
                                        </Stack>}
                                    </Stack>
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