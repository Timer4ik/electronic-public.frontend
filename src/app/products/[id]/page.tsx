"use client"
import { ProductRow } from '@/components/ProductRow/ProductRow'
import { fetchCategoryBreadCrumps } from '@/hooks/use-categories'
import { fetchCategoryProperties } from '@/hooks/use-category-properties'
import { fetchProducts } from '@/hooks/use-products'
import { Card, Checkbox, Field, Stack, Typography } from '@/shared'
import { ICategory, ICategoryProperty, IProduct, ReponseData } from '@/types/models'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface Props {
  params: {
    id: number
  }
}
export default function Products({ params }: Props) {

  const [breadCrumps, setBreadCrumps] = useState<ICategory[]>([])
  const [currentCategory, setCurrentCategory] = useState<ICategory>()

  const [categoryProperties, setCategotyProperties] = useState<ReponseData<ICategoryProperty[]>>()

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

  const [products, setProducts] = useState<ReponseData<IProduct[]>>()
  const [selectedPropertyValues, setSelectedPropertyValues] = useState<number[]>([])

  const addPropValue = (property_value_id: number) => {

    if (selectedPropertyValues.find(item => item === property_value_id)) {
      setSelectedPropertyValues(prev => prev.filter(item => item !== property_value_id))
      return
    }

    setSelectedPropertyValues((prev) => [...prev, property_value_id])
  }

  const refetchProducts = async () => {

    let prods = await fetchProducts({
      params: {
        "filter[is_active]": true,
        "filter[category_id]": params?.id,
        extend: "file,shop_products",
        property_value_id: selectedPropertyValues
      }
    })

    setProducts(prods)
  }


  useEffect(() => {
    refetchProducts()
  }, [selectedPropertyValues])

  return (
    <Stack flexDirection='column' gap={3}>
      {breadCrumps && <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <pre>
            <Typography fontSize={3}><Link href={`/categories`}>Каталог</Link></Typography>
            {breadCrumps.map((item) => {
              return (
                <Typography fontSize={3}><Link href={`/categories/${item.category_id}`}>{" > " + item.name}</Link></Typography>
              )
            })}
            <Typography fontWeight="bold" fontSize={5}>
              <Link href={`/products/${currentCategory?.category_id}`}>{" > " + currentCategory?.name}</Link>
            </Typography>
          </pre>
        </div>
      </div>}
      <div className="product__title big-title">Игровые компьютеры ({products?.count} товаров)</div>
      <Stack style={{ display: "grid", gridTemplateColumns: "3fr 9fr", gap: 20 }}>
        <Card padding={2} >
          <Stack flexDirection='column' gap={3}>
            <Stack flexDirection='column' gap={2}>
              <Typography fontSize={3} fontWeight='medium'>Поиск по названию товара</Typography>
              <Field placeholder='Поиск по названию' />
            </Stack>
            {(categoryProperties?.data)?.map(item => {
              return (
                <Stack flexDirection='column' gap={2}>
                  <div>
                    <Typography fontSize={3} fontWeight='medium'>{item.name || item?.property?.name}</Typography>
                  </div>
                  <Stack flexDirection='column' gap={2}>
                    {item.property?.property_values?.map(item => {
                      return (
                        <label>
                          <Checkbox label={item.name} type='checkbox' onClick={() => addPropValue(item.property_value_id)} />
                          {/* <Typography style={{ padding: 0, margin: 0 }}>{item.name}</Typography> */}
                        </label>
                      )
                    })}
                  </Stack>
                </Stack>
              )
            })}
          </Stack>
        </Card>

        <Stack flexDirection='column' className="products__list" gap={1}>
          {products?.data.map(product => {
            return (
              <ProductRow product={product} />
            )
          })}
        </Stack>
      </Stack>
    </Stack>
  )
}
