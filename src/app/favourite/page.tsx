'use client'
import { fetchProducts } from '@/shared/hooks/use-products'
import { Button, Card, Checkbox, Container, Grid, Stack, Typography } from '@/shared/ui'
import { IProduct, ResponseData } from '@/shared/types/models'
import React, { useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/shared/redux/hooks'
import { deleteItemFromFavourite } from '@/shared/redux/slices/favouriteSlice'
import { ProductCheckboxRow } from '@/entities/Product'
import { ProductRowBuyButton, ProductRowLikeButton } from '@/features/Product'

interface IProductWithSelection extends IProduct {
    isSelected?: boolean
}

const FavouritePage = () => {

    const dispatch = useAppDispatch()
    const [orderByAsc, setOrderByAsc] = useState(true)
    const [selectAll, setSelectAll] = useState(false)

    const { favouriteItems } = useAppSelector(state => state.favourite)

    const [products, setProducts] = useState<ResponseData<IProductWithSelection[]>>()

    useEffect(() => {
        (async () => {
            let prods = await fetchProducts({
                params: {
                    extend: "file",
                    "filter[product_id]": favouriteItems?.map(item => item.id)
                }
            })
            setProducts(prods)
        })()
    }, [favouriteItems])

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


    return (
        <Container>
            <Stack flexDirection='column' gap={1}>
                <Stack alignItems='center' gap={2}>
                    <Typography color='primary' fontSize={8} fontWeight='bold'>Избранное</Typography>
                </Stack>
                {favouriteItems?.length ? <Grid gap={1} >
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
                                    <ProductRowBuyButton product_id={product.product_id}/>
                                    <ProductRowLikeButton product_id={product.product_id}/>
                                </ProductCheckboxRow>
                            )}
                        </Stack>
                    </Stack>
                </Grid> :
                    <Card>
                        <Typography fontSize={6} fontWeight='medium'>Избранных товаров нет</Typography>
                    </Card>
                }
            </Stack>
        </Container>
    )
}

export default FavouritePage