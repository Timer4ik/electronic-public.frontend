"use client"
import { fetchCategoryBreadCrumps } from '@/shared/hooks/use-categories'
import { fetchCategoryProperties } from '@/shared/hooks/use-category-properties'
import { fetchProducts } from '@/shared/hooks/use-products'
import { Card, Checkbox, Field, Grid, Stack, Typography } from '@/shared/ui'
import { ICategory, ICategoryProperty, IProduct, ResponseData } from '@/shared/types/models'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useDebouncedValue from '@/shared/ui/hooks/useDebounce'
import { ProductRow } from '@/entities/Product'

interface Props {
  params: {
    id: number
  }
}
export default function Products({ params }: Props) {

  const [searchValue, setSearchValue] = useState("")

  const [breadCrumps, setBreadCrumps] = useState<ICategory[]>([])
  const [currentCategory, setCurrentCategory] = useState<ICategory>()

  const [categoryProperties, setCategotyProperties] = useState<ResponseData<ICategoryProperty[]>>()

  useEffect(() => {
    (async () => {
      let _categoryProperties = await fetchCategoryProperties({
        params: {
          "filter[category_id]": params?.id,
          "filter[is_filter]": false,
          extend: "property.property_values"
        }
      })

      setCategotyProperties({
        count: _categoryProperties.count || 0,
        message: _categoryProperties.message || "",
        data: _categoryProperties.data.map(item => ({
          ...item,
        }))
      })

      const _breadCrumps = await fetchCategoryBreadCrumps(params.id)

      setBreadCrumps(_breadCrumps.data)
      setCurrentCategory(_breadCrumps.lastCategory)
    })()
  }, [])

  const [products, setProducts] = useState<ResponseData<IProduct[]>>()
  const [selectedPropertyValues, setSelectedPropertyValues] = useState<number[]>([])

  const addPropValue = (property_value_id: number) => {

    if (selectedPropertyValues.find(item => item === property_value_id)) {
      setSelectedPropertyValues(prev => prev.filter(item => item !== property_value_id))
      return
    }

    setSelectedPropertyValues((prev) => [...prev, property_value_id])
  }

  const debouncedValue = useDebouncedValue(searchValue, 1000)
  const debouncedSelectedProperty = useDebouncedValue(selectedPropertyValues, 1000)

  const refetchProducts = async () => {

    let prods = await fetchProducts({
      params: {
        "filter[is_active]": true,
        "filter[category_id]": params?.id,
        "like": debouncedValue,
        extend: "file,shop_products,product_reviews",
        property_value_id: selectedPropertyValues
      }
    })

    setProducts(prods)
  }

  useEffect(() => {
    refetchProducts()
  }, [debouncedSelectedProperty, debouncedValue])

  return (
    <Stack flexDirection='column' gap={3}>
      {breadCrumps && <Stack>
        <pre>
          <Typography fontSize={3}>
            <Link href={`/categories`}>
              Каталог
            </Link>
          </Typography>
          {breadCrumps.map((item) => {
            return (
              <Typography key={item.category_id} fontSize={3}>
                <Link href={`/categories/${item.category_id}`}>
                  {" > " + item.name}
                </Link>
              </Typography>
            )
          })}
          <Typography fontWeight="bold" fontSize={5}>
            <Link href={`/products/${currentCategory?.category_id}`}>{" > " + currentCategory?.name}</Link>
          </Typography>
        </pre>
      </Stack>}
      <Typography fontSize={7} fontWeight='bold'>{currentCategory?.name} {products?.count} товаров</Typography>
      <Grid gap={1} columns='1-5'>
        <Stack flexDirection='column' gap={1}>
          <Stack flexDirection='column' gap={1}>
            <Typography fontSize={3} fontWeight='medium'>Поиск по названию товара</Typography>
            <Field value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Поиск по названию' />
          </Stack>
          <Card padding={2} >
            <Stack flexDirection='column' gap={3}>
              {(categoryProperties?.data)?.map(item => {
                return (
                  <Stack key={item.category_property_id} flexDirection='column' gap={1}>
                    <Typography fontSize={2} fontWeight='medium'>{item.name || item?.property?.name}</Typography>
                    <Stack flexDirection='column' gap={1}>
                      {item.property?.property_values?.map(item => {
                        return (
                          <Checkbox key={item.property_value_id} label={item.name} type='checkbox' onClick={() => addPropValue(item.property_value_id)} />
                        )
                      })}
                    </Stack>
                  </Stack>
                )
              })}
            </Stack>
          </Card>
        </Stack>

        <Stack flexDirection='column' className="products__list" gap={1}>
          {products?.data.map(product => {
            return (
              <ProductRow key={product.product_id} product={product} />
            )
          })}
        </Stack>
      </Grid>
    </Stack >
  )
}
